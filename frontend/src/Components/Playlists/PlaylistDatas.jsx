import React from 'react';
import { SongDetailsWrapper } from './PlaylistDatas.style';

const PlaylistDatas = ({ item, index }) => {

  const artists = item.track.album.artists.map(artist => {
      return artist.name
  });

  const durationTime = item.track.duration_ms;

  const min = Math.floor(durationTime / 60000);
  const sec = ((durationTime % 60000) / 1000).toFixed(0);

  return (
    <SongDetailsWrapper>
      <li>
        <p>{index + 1}</p>
        <img src={item.track.album.images[0].url} alt='track-img'/>
        <p>{item.track.name}</p>
        <p>{artists.length > 1 ? artists.join(', ') : artists}</p>
      </li>
      <li>
        <p>{item.track.album.name}</p>
      </li>
      <li>
        <p>{item.added_at}</p>
      </li>
      <li>
        <p>
          <p>{min}:{sec < 10 ? "0" : ""}{sec}</p>
        </p>
      </li>
    </SongDetailsWrapper>
  )
}

export default PlaylistDatas