import React, { createContext, useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Playlists from './Components/Playlists/Playlists';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import { GlobalStyle } from './styles/GlobalStyle';

export const AppContext = createContext();

function App() {

  const [ datas, setDatas ] = useState({
    collaborative: false,
    description: "",
    external_urls: {
      spotify: "",
    },
    followers: {
      href: null,
      total: 0,
    },
    href: "",
    id: "",
    images: [{
      height: 0,
      url: "",
      width: 0,
    }],
    name: "",
    owner: {
      display_name: "",
      external_urls: {
        spotify: ""
      },
      href: "",
      id: "",
      type: "",
      uri: "",
    },
    primary_color: "",
    public: false,
    snapshot_id: "",
    tracks: {
      href: "",
      items: [{
        added_at: "",
        added_by: {
          external_urls: {
            spotify: "",
          },
          href: "",
          id: "",
          type: "",
          uri: "",
        },
        is_local: false,
        primary_color: null,
        track: {
          album: {
            album_type: "",
            artists: [{
              external_urls: {
                spotify: "",
              },
              href: "",
              id: "",
              name: "",
              type: "",
              uri: "",
            }],
            available_markets: [],
            external_urls: {
              spotify: "",
            },
            href: "",
            id: "",
            images: [{
              height: 0,
              url: "",
              width: 0,
            }],
            name: "",
            release_date: "",
            release_date_precision: "",
            total_tracks: null,
            type: "",
            uri: "",
          },
          artists: [{
            external_urls: {
              spotify: "",
            },
            href: "",
            id: "",
            name: "",
            type: "",
            uri: "",
          }],
          available_markets: [],
          disc_number: null,
          duration_ms: null,
          episode: false,
          explicit: false,
          external_ids: {
            isrc: "",
          },
          external_urls: {
            spotify: "",
          },
          href: "",
          id: "",
          is_local: false,
          name: "",
          popularity: null,
          preview_url: "",
          track: true,
          track_number: null,
          type: "",
          uri: "",
        },
        video_thumbnail: {
          url: null,
        }
      }]
    }
  });

  const getPlaylist = () => {
    axios.get(`https://api.spotify.com/v1/users/${process.env.REACT_APP_USER_ID}/playlists/${process.env.REACT_APP_PLAYLIST_ID}`, {
      headers: {
              "Authorization": `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`,
            },
    })
    .then((res) => {
      setDatas(res.data)
      console.log(res.data)
    })
    .catch((error) => {
      console.log(error)
    })
  }

  useEffect(() => {
    getPlaylist();
  },[])

  return (
    <React.Fragment>
      <GlobalStyle/>
        <AppContext.Provider value={datas}>
          <Router>
          <Header/>
          <Routes>
            <Route path='/' element={<Playlists/>}/>
          </Routes>
          <Footer/>
        </Router>
        </AppContext.Provider>
    </React.Fragment>
  );
}

export default App;
