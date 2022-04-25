import React from 'react'
import { TopSongsItemWrapper } from './TopSongsItem.style'

const TopSongsItem = ({ item }) => {
  return (
    <TopSongsItemWrapper>
      <img src={item.images[0].url} alt='top-img' />
      <h4>
        <a href={item.external_urls.spotify} target="_blank" rel="noopener noreferrer">
          {item.name}
        </a>
      </h4>
    </TopSongsItemWrapper>
  )
}

export default TopSongsItem