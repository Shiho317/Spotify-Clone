import React, { useState, useEffect } from 'react'
import AudioPlayer from '../Playlists/AudioPlayer'
import axios from 'axios';
import { 
  FavouriteSonglists, 
  FavouriteSongsContents, 
  FavouriteSongsHeader, 
  FavouriteSongsLogo, 
  HeaderTitleWrapper, 
  MyFavouriteWrapper, 
  PlayButton 
} from './MyFavourite.style'
import { FaHeart } from 'react-icons/fa';
import { BsPauseCircleFill, BsFillPlayCircleFill } from 'react-icons/bs';
import { AiOutlineClockCircle } from 'react-icons/ai';
import Footer from '../Footer/Footer';
import FavouriteSong from './FavouriteSong';

const MyFavourite = ({ accessToken }) => {

  const [ isLikedTracks, setLikedTracks ] = useState([
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
  ])

  useEffect(() => {
    axios.get('https://api.spotify.com/v1/me/tracks?market=CA&limit=10&offset=0', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`
      }
    })
    .then(res => {
      setLikedTracks(res.data.items)
    })
    .catch(err => {
      console.log(err)
    })
  },[accessToken])

  const itemsDuration = isLikedTracks.map(item => {
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
  }, [isLikedTracks]);

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
      <MyFavouriteWrapper>
        <div>
          <FavouriteSongsHeader>
            <FavouriteSongsLogo>
              <FaHeart />
            </FavouriteSongsLogo>
            <HeaderTitleWrapper>
              <p>playlist</p>
              <h1>My Favourite</h1>
              <p>Me : {isLikedTracks.length} songs, {durationTotal}</p>
            </HeaderTitleWrapper>
          </FavouriteSongsHeader>
          <FavouriteSongsContents>
            <PlayButton onClick={() => playButtonClick()}>
              {isPlaying ? 
                <BsPauseCircleFill/>
                :
                <BsFillPlayCircleFill/>
              }
            </PlayButton>
            <FavouriteSonglists>
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
                {isLikedTracks.map((item, index) => (
                  <FavouriteSong 
                    key={index} 
                    item={item} 
                    index={index} 
                    setClickedSong={setClickedSong} 
                    musicOn={musicOn} 
                    setIsMusicOn={setIsMusicOn}/>
                ))}
            </FavouriteSonglists>
          </FavouriteSongsContents>
        </div>
        <Footer/>
      </MyFavouriteWrapper>
      <AudioPlayer 
        isPlaying={isPlaying} 
        setIsPlaying={setIsPlaying} 
        clickedSong={clickedSong}
        musicOn={musicOn} 
      />
    </React.Fragment>
  )
}

export default MyFavourite