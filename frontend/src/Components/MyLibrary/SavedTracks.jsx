import React from 'react'
import { SavedTrackWrapper } from './SavedTracks.style'

const SavedTracks = ({ track }) => {

  const artists = track.track.artists.map(artist => {
    return artist
  });

  return (
    <SavedTrackWrapper>
      <img src={track.track.album.images[0].url} alt='track-cover'/>
      <h4>
        <a href={track.track.external_urls.spotify} target="_blank" rel="noopener noreferrer">
          {track.track.name.length > 20 ? track.track.name.substr(0, 20) + '...' : track.track.name}
        </a>
      </h4>
      <p>
      {artists.map((artist, index) => (
        <a key={artist.name} href={artist.external_urls.spotify} target="_blank" rel="noopener noreferrer">
          {artist.name} {artists.length > 1 && index !== artists.length - 1 ? ', ' : ''}
        </a>
      ))}
      </p>
    </SavedTrackWrapper>
  )
}

export default SavedTracks