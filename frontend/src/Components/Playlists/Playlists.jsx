import React, { useEffect, useState } from 'react';
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
import axios from 'axios';
import Footer from '../Footer/Footer';

const Playlists = ({accessToken}) => {

  const [ datas, setDatas ] = useState({});

  const playlistId = process.env.REACT_APP_PLAYLIST_ID;

  useEffect(() => {
    axios.get(`https://api.spotify.com/v1/playlists/${playlistId}`, {
      headers: {
        'ACCEPT': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`
      }
    })
    .then(res => {
      setDatas(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  },[accessToken, playlistId])

  const [ itemsDuration, setItemsDuration ] = useState([]);
  
  const [ durationTotal, setDurationTotal ] = useState('0');

  const durationToMin = () => {
    if(Object.keys(datas).length > 0){
    const duration = datas.tracks.items.map(item => {
      return item.track.duration_ms
    })
    setItemsDuration(duration)
    }
    const total = itemsDuration.reduce((sum, num) => {
      return sum + num;
    }, 0);
    const min = Math.floor(total / 60000);
    const sec = ((total % 60000) / 1000).toFixed(0);
    setDurationTotal(min + ' min ' + (sec < 10 ? "0" : "") + sec + " sec");
  }

  useEffect(() => {
    durationToMin()
  }, [datas]);

  const [ musicOn, setIsMusicOn ] = useState(false)
  const [ isPlaying, setIsPlaying ] = useState(false);

  const playButtonClick = () => {
    setIsPlaying(prev => !prev)
  }

  const [ clickedSong, setClickedSong ] = useState(
    {
      added_at: "",
      track: {
        album: {
          album_type: "",
          artists: [
            {
              external_urls: {
                spotify: ""
              },
              href: "",
              id: "",
              name: "",
              type: "",
              uri: ""
            },
            {
              external_urls: {
                spotify: ""
              },
              href: "",
              id: "",
              name: "",
              type: "",
              uri: ""
            }
          ],
          external_urls: {
            spotify: ""
          },
          href: "",
          id: "",
          images: [
            {
              height: 640,
              url: "",
              width: 640
            },
          ],
          name: "",
          release_date: "",
          release_date_precision: "",
          total_tracks: 1,
          type: "",
          uri: ""
        },
        artists: [
          {
            external_urls: {
              spotify: ""
            },
            href: "",
            id: "",
            name: "",
            type: "",
            uri: ""
          },
        ],
        disc_number: 1,
        duration_ms: 0,
        explicit: false,
        external_ids: {
          isrc: ""
        },
        external_urls: {
          spotify: ""
        },
        href: "",
        id: "",
        is_local: false,
        is_playable: true,
        name: "",
        popularity: 0,
        preview_url: null,
        track_number: 1,
        type: "",
        uri: ""
      }
    }
  )

  return (
    <React.Fragment>
    {Object.keys(datas).length > 0 && (
    <div>
    <PlayListsWrapper>
      <div>
        <PlaylistsHeader>
          {datas.tracks.items.length >= 4 ? (
            <AlbumCoverImgs>
              <img src={datas.tracks.items[2].track.album.images[0].url} alt='header-cover1'/>
              <img src={datas.tracks.items[0].track.album.images[0].url} alt='header-cover1'/>
              <img src={datas.tracks.items[1].track.album.images[0].url} alt='header-cover1'/>
              <img src={datas.tracks.items[3].track.album.images[0].url} alt='header-cover1'/>
            </AlbumCoverImgs>
          ): (
            <AlbumCoverImg>
              <img src={datas.tracks.items[0].track.album.images[0].url} alt='header-cover1'/>
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
            {datas.tracks.items.length > 0 && datas.tracks.items.map((item, index) => (
              <PlaylistDatas 
                key={index} 
                item={item} 
                index={index} 
                setClickedSong={setClickedSong}
                clickedSong={Object.keys(clickedSong).length > 0 && clickedSong} 
                musicOn={musicOn} 
                setIsMusicOn={setIsMusicOn}/>
            ))}
          </PlaySonglists>
        </PlaylistsContents>
      </div>
      <Footer/>
    </PlayListsWrapper>
    <AudioPlayer 
        accessToken={accessToken}
        isPlaying={isPlaying} 
        setIsPlaying={setIsPlaying} 
        clickedSong={Object.keys(clickedSong).length > 0 && clickedSong}
        musicOn={musicOn} 
    />
    </div>
    )}
    </React.Fragment>
  )
}

export default Playlists