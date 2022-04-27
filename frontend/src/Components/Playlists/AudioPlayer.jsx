import React, { useEffect, useState, useRef, useCallback } from 'react'
import axios from 'axios';
import { 
  AudioBar, 
  AudioDetails, 
  AudioFavButton, 
  AudioMan, 
  AudioPlayerWrapper, 
  AudioProgress, 
  BigCoverImg} from './AudioPlayer.style';
import { IoIosSkipForward, IoIosSkipBackward } from 'react-icons/io';
import { BsPlayCircleFill, BsPauseCircleFill } from 'react-icons/bs';
import { FaRegHeart, FaHeart } from 'react-icons/fa';
import { GoScreenFull } from 'react-icons/go';

const AudioPlayer = ({ 
  accessToken,
  isPlaying, 
  setIsPlaying,
  clickedSong,
  musicOn,
}) => {

  const [ duration, setDuration ] = useState(0);
  const [ currentTime, setCurrentTime ] = useState(0);

  const audioRef = useRef();
  const progressRef = useRef();
  const animationRef = useRef();

  const onLoadedMeta = () => {
    const seconds = Math.floor(audioRef.current.duration);
		setDuration(seconds);
    progressRef.current.max = seconds;
  };

  useEffect(() => {
    onLoadedMeta();
  }, [audioRef?.current?.loadedmetadata, audioRef?.current?.readyState]);

  const calcTime = (secs) => {
    const minutes = Math.floor(secs / 60);
		const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
		const seconds = Math.floor(secs % 60);
		const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
		return `${returnedMinutes}:${returnedSeconds}`;
  }

  const togglePause = () => {
		setIsPlaying(prev => !prev);
		if (!isPlaying) {
			audioRef.current.play();
			animationRef.current = requestAnimationFrame(onPlaying);
		} else {
			audioRef.current.pause();
			cancelAnimationFrame(animationRef.current);
		}
  };

  const changeCurrentTime = () => {
		setCurrentTime(progressRef.current.value);
	};

  const onPlaying = () => {
		progressRef.current.value = audioRef.current.currentTime;
		changeCurrentTime();
		animationRef.current = requestAnimationFrame(onPlaying);
	};

  const changeRange = () => {
		audioRef.current.currentTime = progressRef.current.value;
		changeCurrentTime();
	};

  const backTen = () => {
		progressRef.current.value = Number(progressRef.current.value) - 10;
		changeRange();
	};

  const forwardTen = () => {
		progressRef.current.value = Number(progressRef.current.value) + 10;
		changeRange();
	};

  const [ isFav, setIsFav ] = useState(false);
  const [ isFavSong, setIsFavSong ] = useState([]);

  const onClickFav = useCallback((id) => {
    axios.put(`https://api.spotify.com/v1/me/tracks?ids=${id}`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`
      },
    })
    .then(res => {
      setIsFav(prev => !prev);
      setIsFavSong([
        ...isFavSong,
        id
      ]);
      console.log(res.data.track.id)
    })
    .catch(err => {
      console.log(err)
      console.log('error')
    })
  },[isFavSong, accessToken]);

  const onClickNotFav = useCallback((id) => {
    setIsFav(prev => !prev);
    const removedArr = isFavSong.filter(song => song.id !== id);
    setIsFavSong(removedArr);
  },[isFavSong])

  
  const artistName = clickedSong.track.album.artists.map(artist => {
    return artist
  });

  const [ showBgImg, setShowBgImg ] = useState(false);

  const showImage = () => {
    setShowBgImg(prev => !prev);
  };

  return (
    <React.Fragment>
    {Object.keys(clickedSong).length > 0 && (
    <AudioPlayerWrapper style={{display: musicOn ? 'grid' : 'none'}}>
      <AudioDetails>
        <img src={clickedSong.track.album.images[0].url} alt='audio-cover' />
        <div>
          <h5>{clickedSong.track.name}</h5>
          {artistName.map((artist, index) => (
            <p key={artist.name}>
              {artist.name} {artist.length > 1 && index !== artist.length - 1 ? ', ' : ''}
            </p>
          ))}
        </div>
      </AudioDetails>
      <AudioProgress>
        <audio 
          ref={audioRef}
          src={clickedSong.track.preview_url}
          preload='metadata'
          onLoadedMetadata={onLoadedMeta}/>
        <AudioMan>
          <button className='back' onClick={backTen}>
            <IoIosSkipBackward/>
          </button>
          <button className='play' onClick={togglePause}>
            {isPlaying ? 
              <BsPauseCircleFill/>
              : 
              <BsPlayCircleFill/>
            }
          </button>
          <button className='forward' onClick={forwardTen}>
            <IoIosSkipForward/>
          </button>
        </AudioMan>
        <AudioBar>
          <p>{calcTime(currentTime)}</p>
          <input
            type='range'
            className='progress-bar'
            defaultValue='0'
            ref={progressRef}
            onChange={changeRange}/>
          <p>{duration && !isNaN(duration) ? calcTime(duration) : '0:00'}</p>
        </AudioBar>
      </AudioProgress>
      <AudioFavButton>
        <button>
          {isFav && isFavSong.includes(clickedSong.track.id) ? 
            <FaHeart onClick={() => onClickNotFav(clickedSong.track.id)}/>
            : 
            <FaRegHeart onClick={() => onClickFav(clickedSong.track.id)}/>
          }
        </button>
        <button onClick={showImage}>
          <GoScreenFull/>
        </button>
      </AudioFavButton>
      {showBgImg && (
        <BigCoverImg>
          <img src={clickedSong.track.album.images[0].url} alt='big-img'/>
        </BigCoverImg>
      )}
    </AudioPlayerWrapper>
    )}
    </React.Fragment>
  )
}

export default AudioPlayer