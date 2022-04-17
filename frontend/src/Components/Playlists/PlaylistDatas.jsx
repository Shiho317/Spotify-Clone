import React, { useCallback, useState } from 'react';
import { SongDetails, SongDetailsWrapper } from './PlaylistDatas.style';
import { MdMusicNote, MdMusicOff } from 'react-icons/md';

const PlaylistDatas = ({ 
  item, 
  index, 
  setClickedSong, 
  clickedSong,
  musicOn, 
  setIsMusicOn 
}) => {

  const artists = item.track.album.artists.map(artist => {
      return artist
  });

  const durationTime = item.track.duration_ms;

  const min = Math.floor(durationTime / 60000);
  const sec = ((durationTime % 60000) / 1000).toFixed(0);

  const newDate = new Date();
  const year = newDate.getFullYear();
  const month = newDate.getMonth() + 1;
  const day = newDate.getDate();
  
  const splitDate = item.added_at.split('T');
  const devidedDate = splitDate[0].split('-');
  const addedYear = Number(devidedDate[0]);
  const addedMonth = Number(devidedDate[1]);
  const addedDay = Number(devidedDate[2]);

  const oneDay = 24 * 60 * 60 * 1000;
  const addedDate = new Date(`${addedMonth}/${addedDay}/${addedYear}`);
  const today = new Date(`${month}/${day}/${year}`);

  const diffInTime = today.getTime() - addedDate.getTime();

  const diffDays = Math.round(diffInTime / oneDay);

  const [ isOnHover, setIsOnHover ] = useState(false);

  const isHoverOn = useCallback(() => {
    setIsOnHover(prev => !prev)
  },[setIsOnHover]);

  const musicToggle = useCallback(() => {
    setIsMusicOn(prev => !prev)
    setClickedSong(item)
  }, [item, setClickedSong, setIsMusicOn])

  return (
    <SongDetailsWrapper onMouseOver={isHoverOn} onMouseOut={isHoverOn}>
      <li>
        {isOnHover ? (
          <p className='index-play'>
            {clickedSong.track.id === item.track.id && musicOn ? 
              <MdMusicOff onClick={() => musicToggle()}/>
              : <MdMusicNote onClick={() => musicToggle()}/>}
          </p>
        ) : (
          <p className='index-play'>
            {index + 1}
          </p>
        )}
        <img src={item.track.album.images[0].url} alt='track-img'/>
        <SongDetails>
          <h4>
            <a href={item.track.external_urls.spotify} target="_blank" rel="noopener noreferrer">
              {item.track.name}
            </a>
          </h4>
          <p>
            {artists.map((artist, index) => (
              <a key={artist.name} href={artist.external_urls.spotify} target="_blank" rel="noopener noreferrer">
                {artist.name} {artists.length > 1 && index !== artists.length - 1 ? ', ' : ''}
              </a>
            ))}
          </p>
        </SongDetails>
      </li>
      <li>
        <a href={item.track.external_urls.spotify} target="_blank" rel="noopener noreferrer">
          {item.track.album.name}
        </a>
      </li>
      <li>
        {diffDays === -1 ? (
          <p>today</p>
        ) : (
          <p>{diffDays} {diffDays === 1 ? 'day' : 'days'} ago</p>
        )}
      </li>
      <li>
        <p>
          {min}:{sec < 10 ? "0" : ""}{sec}
        </p>
      </li>
    </SongDetailsWrapper>
  )
}

export default PlaylistDatas