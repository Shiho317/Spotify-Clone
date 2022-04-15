import React, { useContext, useState } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer';
import { DashboardWrapper } from './Dashboard.style';
import { AppContext } from '../../App';
import Home from '../Home/Home';
import Playlists from '../Playlists/Playlists';
import Search from '../Search/Search';
import Auth from '../Auth/Auth';

const Dashboard = () => {

  const [ isHome, setIsHome ] = useState(true);
  const [ isPlaylists, setIsPlaylists ] = useState(false);
  const [ isSearch, setIsSearch ] = useState(false);
  const [ isLiked, setIsLiked ] = useState(false);

  const { code } = useContext(AppContext);
  const accessToken = Auth(code);

  return (
    <React.Fragment>
      <Header 
        setIsHome={setIsHome} 
        setIsPlaylists={setIsPlaylists} 
        setIsSearch={setIsSearch}/>
      <DashboardWrapper>
        {isHome && <Home accessToken={accessToken}/>}
        {isPlaylists && <Playlists accessToken={accessToken}/>}
        {isSearch && <Search accessToken={accessToken}/>}
      </DashboardWrapper>
      <Footer/>
    </React.Fragment>
  )
}

export default Dashboard