import React, { useContext, useState } from 'react'
import Header from '../Header/Header'
import { DashboardWrapper } from './Dashboard.style';
import { AppContext } from '../../App';
import Home from '../Home/Home';
import Playlists from '../Playlists/Playlists';
import Search from '../Search/Search';
import Auth from '../Auth/Auth';
import MyLibrary from '../MyLibrary/MyLibrary';
import MyFavourite from '../MyFavourite/MyFavourite';

const Dashboard = () => {

  const [ isHome, setIsHome ] = useState(true);
  const [ isPlaylists, setIsPlaylists ] = useState(false);
  const [ isSearch, setIsSearch ] = useState(false);
  const [ isLibrary, setIsLibrary ] = useState(false);
  const [ isFavourite, setIsFavourite ] = useState(false);

  const { code } = useContext(AppContext);
  const accessToken = Auth(code);

  return (
    <React.Fragment>
      <Header 
        setIsHome={setIsHome} 
        setIsPlaylists={setIsPlaylists} 
        setIsSearch={setIsSearch}
        setIsLibrary={setIsLibrary}
        setIsFavourite={setIsFavourite}/>
      <DashboardWrapper>
        {isHome && 
          <Home accessToken={accessToken}/>
        }
        {isPlaylists && 
          <Playlists accessToken={accessToken}/>
        }
        {isSearch && 
          <Search accessToken={accessToken}/>
        }
        {isLibrary && 
          <MyLibrary accessToken={accessToken} setIsLibrary={setIsLibrary} setIsPlaylists={setIsPlaylists} setIsFavourite={setIsFavourite}/>
        }
        {isFavourite && 
          <MyFavourite accessToken={accessToken}/>
        }
      </DashboardWrapper>
    </React.Fragment>
  )
}

export default Dashboard