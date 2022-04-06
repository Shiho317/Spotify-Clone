import React from 'react';
import { HeaderWrapper, LogoWrapper, NavigationsWrapper } from './Header.style';
import SpotifyLogo from '../../assets/images/Spotify_Logo_RGB_White.png';
import { Link } from 'react-router-dom';
import { RiSearchLine, RiAddBoxFill, RiHome4Line } from 'react-icons/ri';
import { VscLibrary } from 'react-icons/vsc';
import { BiHeartSquare } from 'react-icons/bi';


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
                  <RiHome4Line/>
                  <p>Home</p>
                </Link>
              </li>
              <li>
                <Link to='/'>
                  <RiSearchLine/>
                  <p>Search</p>
                </Link>
              </li>
              <li>
                <Link to='/'>
                  <VscLibrary/>
                  <p>My library</p>
                </Link>
              </li>
            </ul>
            <ul>
              <li>
                <RiAddBoxFill/>
                <p>Create Playlists</p>
              </li>
              <li>
                <BiHeartSquare/>
                <p>Your favorite</p>
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