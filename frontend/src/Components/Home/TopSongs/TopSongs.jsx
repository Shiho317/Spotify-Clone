import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { TopSongsItemsWrapper, TopSongsWrapper } from './TopSongs.style'
import TopSongsItem from './TopSongsItem';

const TopSongs = ({ accessToken }) => {

  const [ items, setItems ] = useState([]);

  useEffect(() => {
    axios.get('https://api.spotify.com/v1/browse/categories/toplists/playlists?country=CA&limit=5&offset=0', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`
      }
    })
    .then(res => {
      console.log(res.data.playlists.items)
      setItems(res.data.playlists.items)
    })
    .catch(err => {
      console.log(err)
    })
  }, [accessToken])

  return (
    <TopSongsWrapper>
      <h1>Top Songs</h1>
      <TopSongsItemsWrapper>
        {items.length > 0 && items.map((item, index) => (
          <TopSongsItem key={index} item={item} />
        ))}
      </TopSongsItemsWrapper>
    </TopSongsWrapper>
  )
}

export default TopSongs