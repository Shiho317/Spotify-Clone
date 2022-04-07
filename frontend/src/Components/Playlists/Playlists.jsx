import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../App';
import { 
  AlbumCoverImg, 
  AlbumCoverImgs, 
  HeaderTitleWrapper, 
  PlayButton, 
  PlaylistsContents, 
  PlaylistsHeader, 
  PlayListsWrapper, 
  PlaySonglists } from './Playlists.style';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { BsFillPlayCircleFill, BsPauseCircleFill } from 'react-icons/bs';
import PlaylistDatas from './PlaylistDatas';
import AudioPlayer from './AudioPlayer';

const Playlists = () => {

  const { datas } = useContext(AppContext);

  const PlaylistItems = datas.tracks.items;

  const itemsDuration = PlaylistItems.map(item => {
    return item.track.duration_ms
  })

  const [ durationTotal, setDurationTotal ] = useState('0');

  const durationToMin = () => {
    const total = itemsDuration.reduce((sum, num) => {
      return sum + num;
    }, 0);
    const min = Math.floor(total / 60000);
    const sec = ((total % 60000) / 1000).toFixed(0);
    setDurationTotal(min + ' min ' + (sec < 10 ? "0" : "") + sec + " sec");
  }

  useEffect(() => {
    durationToMin()
  }, [datas])

  const [ musicOn, setIsMusicOn ] = useState(false)
  const [ isPlaying, setIsPlaying ] = useState(false);

  const playButtonClick = () => {
    setIsPlaying(prev => !prev)
  }

  const [ clickedSong, setClickedSong ] = useState({
    added_at: "",
    added_by: {
      external_urls: {
        spotify: "",
      },
      href: "",
      id: "",
      type: "",
      uri: "",
    },
    is_local: false,
    primary_color: null,
    track: {
      album: {
        album_type: "",
        artists: [{
          external_urls: {
            spotify: "",
          },
          href: "",
          id: "",
          name: "",
          type: "",
          uri: "",
        }],
        available_markets: [],
        external_urls: {
          spotify: "",
        },
        href: "",
        id: "",
        images: [{
          height: 0,
          url: "",
          width: 0,
        }],
        name: "",
        release_date: "",
        release_date_precision: "",
        total_tracks: null,
        type: "",
        uri: "",
      },
      artists: [{
        external_urls: {
          spotify: "",
        },
        href: "",
        id: "",
        name: "",
        type: "",
        uri: "",
      }],
      available_markets: [],
      disc_number: null,
      duration_ms: null,
      episode: false,
      explicit: false,
      external_ids: {
        isrc: "",
      },
      external_urls: {
        spotify: "",
      },
      href: "",
      id: "",
      is_local: false,
      name: "",
      popularity: null,
      preview_url: "",
      track: true,
      track_number: null,
      type: "",
      uri: "",
    },
    video_thumbnail: {
      url: null,
    }
  })

  return (
    <React.Fragment>
    <PlayListsWrapper>
      <div>
        <PlaylistsHeader>
          {PlaylistItems.length >= 4 ? (
            <AlbumCoverImgs>
              <img src={PlaylistItems[2].track.album.images[0].url} alt='header-cover1'/>
              <img src={PlaylistItems[0].track.album.images[0].url} alt='header-cover1'/>
              <img src={PlaylistItems[1].track.album.images[0].url} alt='header-cover1'/>
              <img src={PlaylistItems[3].track.album.images[0].url} alt='header-cover1'/>
            </AlbumCoverImgs>
          ): (
            <AlbumCoverImg>
              <img src={PlaylistItems[0].track.album.images[0].url} alt='header-cover1'/>
            </AlbumCoverImg>
          )}
          
          <HeaderTitleWrapper>
            <p>playlist</p>
            <h1>{datas.name}</h1>
            <p>{datas.owner.display_name} : {datas.tracks.total} songs, {durationTotal}</p>
          </HeaderTitleWrapper>
        </PlaylistsHeader>
        <PlaylistsContents>
          <PlayButton onClick={() => playButtonClick()}>
            {isPlaying ? 
              <BsPauseCircleFill/>
              :
              <BsFillPlayCircleFill/>
            }
          </PlayButton>
          <PlaySonglists>
            <ul>
              <li>
                <p>#</p>
                <p>Title</p>
              </li>
              <li>
                <p>Album</p>
              </li>
              <li>
                <p>Added</p>
              </li>
              <li>
                <p>
                  <AiOutlineClockCircle/>
                </p>
              </li>
            </ul>
            {PlaylistItems.map((item, index) => (
              <PlaylistDatas 
                key={index} 
                item={item} 
                index={index} 
                setClickedSong={setClickedSong} 
                musicOn={musicOn} 
                setIsMusicOn={setIsMusicOn}/>
            ))}
          </PlaySonglists>
        </PlaylistsContents>
      </div>
    </PlayListsWrapper>
    <AudioPlayer 
        isPlaying={isPlaying} 
        setIsPlaying={setIsPlaying} 
        clickedSong={clickedSong}
        musicOn={musicOn} 
    />
    </React.Fragment>
  )
}

export default Playlists