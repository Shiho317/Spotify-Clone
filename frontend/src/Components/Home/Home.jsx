import React from 'react';
import { HomeWrapper } from './Home.style';
import NewReleases from './NewReleases/NewReleases';
import Footer from '../Footer/Footer';
import TopSongs from './TopSongs/TopSongs';

const Home = ({ accessToken }) => {

  return (
    <React.Fragment>
      <HomeWrapper>
        <TopSongs accessToken={accessToken}/>
        <NewReleases accessToken={accessToken}/>
        <Footer/>
      </HomeWrapper>
    </React.Fragment>
    
  )
}

export default Home