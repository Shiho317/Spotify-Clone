import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { HomeWrapper, NewReleasesWrapper } from './Home.style';
import NewReleases from './NewReleases';
import Footer from '../Footer/Footer';

const Home = ({ accessToken }) => {

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
    axios.get('https://api.spotify.com/v1/browse/new-releases?country=CA&limit=9&offset=5', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`
      }
    })
    .then(res => {
      console.log(res.data.albums.items)
      setItems(res.data.albums.items)
    })
    .catch(err => {
      console.log(err)
    })
  }, [accessToken])

  return (
    <React.Fragment>
      <HomeWrapper>
        <h1>New Release</h1>
        <NewReleasesWrapper>
          {items.map((item, index) => (
            <NewReleases item={item} key={index} />
          ))}
        </NewReleasesWrapper>
        <Footer/>
      </HomeWrapper>
    </React.Fragment>
    
  )
}

export default Home