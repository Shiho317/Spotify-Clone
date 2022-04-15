import React from 'react'
import { ItemsWrapper } from './NewRelease.style';

const NewReleases = ({item}) => {

  const artists = item.artists.map(artist => {
    return artist
  });

  return (
    <ItemsWrapper>
      <img src={item.images[0].url} alt='newrelease-img' />
      <h4>
        <a href={item.external_urls.spotify} target="_blank" rel="noopener noreferrer">
          {item.name}
        </a>
      </h4>
      <p>
        {artists.map((artist, index) => (
          <a key={artist.name} href={artist.external_urls.spotify} target="_blank" rel="noopener noreferrer">
            {artist.name} {artists.length > 1 && index !== artists.length - 1 ? ', ' : ''}
          </a>
        ))}
      </p>
    </ItemsWrapper>
  )
}

export default NewReleases