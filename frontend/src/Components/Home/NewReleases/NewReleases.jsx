import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { NewReleasesWrapper, NrItemsWrapper } from './NewReleases.style'
import NrItems from './NrItems'

const NewReleases = ({ accessToken }) => {

  console.log(accessToken)

  const [ items, setItems ] = useState([
    {
      album_type: '',
      artists: [
        {
          external_urls: {
            spotify: '',
          },
          href: '',
          id: '',
          name: '',
          type: '',
          uri: ''
        }
      ],
      available_markets: [],
      external_urls: {
        spotify: '',
      },
      href: '',
      id: '',
      images: [
        {
          height: 640,
          url: '',
          width: 640,
        }
      ],
      name: '',
      release_date: '',
      release_date_precision: '',
      total_tracks: 1,
      type: '',
      uri: ''
    }
  ]);

  useEffect(() => {
    axios.get('https://api.spotify.com/v1/browse/new-releases?country=CA&limit=10&offset=0', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`
      }
    })
    .then(res => {
      setItems(res.data.albums.items)
    })
    .catch(err => {
      console.log(err)
    })
  }, [accessToken])

  return (
    <NewReleasesWrapper>
      <h1>New Releases</h1>
        <NrItemsWrapper>
          {items.map((item, index) => (
            <NrItems item={item} key={index} />
          ))}
        </NrItemsWrapper>
    </NewReleasesWrapper>
  )
}

export default NewReleases