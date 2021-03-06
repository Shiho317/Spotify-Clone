import React, { useEffect, useState } from 'react'
import { CurrentPlaylistsWrapper, MyFavouriteList, MyLibraryWrapper } from './MyLibrary.style'
import axios from 'axios'
import CurrentPlaylist from './CurrentPlaylist'
import Footer from '../Footer/Footer'

const MyLibrary = ({ 
  accessToken, 
  setIsLibrary, 
  setIsPlaylists, 
  setIsFavourite 
}) => {

  const [ currentPlaylists, setCurrentPlaylists ] = useState([])

  useEffect(() => {
    axios.get('https://api.spotify.com/v1/me/playlists?limit=10&offset=0', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`
      }
    })
    .then(res => {
      setCurrentPlaylists(res.data.items)
    })
    .catch(err => {
      console.log(err)
    })
  },[accessToken])

  const toFavouriteList = () => {
    setIsFavourite(true);
    setIsLibrary(false);
  }

  return (
    <MyLibraryWrapper>
      <h1>My Library</h1>
        <MyFavouriteList onClick={toFavouriteList}>
          <h2>My Favourite Songs</h2>
        </MyFavouriteList>
        <CurrentPlaylistsWrapper>
        {currentPlaylists.length > 0 && currentPlaylists.map((playlist, index) => (
          <CurrentPlaylist 
            key={index} 
            playlist={playlist}
            setIsPlaylists={setIsPlaylists}
            setIsLibrary={setIsLibrary}/>
        ))}
        </CurrentPlaylistsWrapper>
      <Footer/>
    </MyLibraryWrapper>
  )
}

export default MyLibrary