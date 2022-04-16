import React from 'react'
import { ArtistImageWrapper, ResultWrapper } from './Result.style'
import undefinedImg from '../../assets/images/artist-undefined.jpeg';

const Result = ({ result }) => {

  return (
    <ResultWrapper>
      <ArtistImageWrapper>
        <img src={result.images.length > 0 ? result.images[0].url : undefinedImg} alt='artist' />
      </ArtistImageWrapper>
      <h4>
        <a href={result.external_urls.spotify} target="_blank" rel="noopener noreferrer">
          {result.name.length > 20 ? result.name.substr(0, 20) + '...' : result.name}
        </a>
      </h4>
      <p>{result.type}</p>
    </ResultWrapper>
  )
}

export default Result