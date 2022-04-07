import React, { useEffect, useState, useRef } from 'react'
import { 
  AudioBar, 
  AudioDetails, 
  AudioFavButton, 
  AudioMan, 
  AudioPlayerWrapper, 
  AudioProgress } from './AudioPlayer.style';
import { IoIosSkipForward, IoIosSkipBackward } from 'react-icons/io';
import { BsPlayCircleFill, BsPauseCircleFill } from 'react-icons/bs';
import { FaRegHeart, FaHeart } from 'react-icons/fa';
import { GoScreenFull } from 'react-icons/go';

const AudioPlayer = ({ 
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

  const backThirty = () => {
		progressRef.current.value = Number(progressRef.current.value) - 30;
		changeRange();
	};

  const forwardThirty = () => {
		progressRef.current.value = Number(progressRef.current.value) + 30;
		changeRange();
	};

  const [ isFav, setIsFav ] = useState(false);

  const onClickFav = () => {
    setIsFav(prev => !prev);
  };

  const artistName = clickedSong.track.album.artists.map(artist => {
    return artist
  });

  return (
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
          <button className='back' onClick={backThirty}>
            <IoIosSkipBackward/>
          </button>
          <button className='play' onClick={togglePause}>
            {isPlaying ? 
              <BsPauseCircleFill/>
              : 
              <BsPlayCircleFill/>
            }
          </button>
          <button className='forward' onClick={forwardThirty}>
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
        <button onClick={onClickFav}>
          {isFav ? 
            <FaHeart/>
            : 
            <FaRegHeart/>
          }
        </button>
        <button>
          <GoScreenFull/>
        </button>
      </AudioFavButton>
    </AudioPlayerWrapper>
  )
}

export default AudioPlayer