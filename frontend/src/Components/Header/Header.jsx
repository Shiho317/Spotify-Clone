import React from 'react';
import { HeaderWrapper, LogoWrapper, NavigationsWrapper } from './Header.style';
import SpotifyLogo from '../../assets/images/Spotify_Logo_RGB_White.png';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <HeaderWrapper>
        <LogoWrapper>
          <img src={SpotifyLogo} alt='logo'/>
        </LogoWrapper>
        <div>
          <NavigationsWrapper>
            <ul>
              <li>
                <Link to='/'>
                  Home
                </Link>
              </li>
              <li>
                <Link to='/'>
                  Search
                </Link>
              </li>
              <li>
                <Link to='/'>
                  My library
                </Link>
              </li>
            </ul>
            <ul>
              <li>
                Create Playlists
              </li>
              <li>
                Your favorite
              </li>
            </ul>
          </NavigationsWrapper>
          <div>
            <ul>
              <li></li>
            </ul>
          </div>
        </div>
    </HeaderWrapper>
  )
}

export default Header