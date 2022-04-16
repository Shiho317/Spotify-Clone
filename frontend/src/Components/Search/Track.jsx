import React from 'react'
import { TrackWrapper } from './Track.style'

const Track = ({ track }) => {
  return (
    <TrackWrapper>
      <img src={track.album.images[0].url} alt='track-cover'/>
      <h4>
        <a href={track.album.external_urls.spotify} target="_blank" rel="noopener noreferrer">
          {track.name.length > 20 ? track.name.substr(0, 20) + '...' : track.name}
        </a>
      </h4>
    </TrackWrapper>
  )
}

export default Track