import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { 
  HeaderWrapper, 
  LogoWrapper, 
  NavigationsWrapper
} from './Header.style';
import SpotifyLogo from '../../assets/images/Spotify_Logo_RGB_White.png';
import { 
  RiSearchLine, 
  RiAddBoxFill, 
  RiHome4Line 
} from 'react-icons/ri';
import { VscLibrary } from 'react-icons/vsc';
import { BiHeartSquare } from 'react-icons/bi';
import HamburgerMenu from './Hamburger';

const Header = ({ 
  setIsHome, 
  setIsPlaylists, 
  setIsSearch, 
  setIsLibrary 
}) => {

  const [isOpen, setOpen] = useState(false)

  const isDeskTop = useMediaQuery({
    query: '(min-width: 1024px)'
  });

  const menuToggle = () => {
    setOpen(prev => !prev)
  };

  const isHome = () => {
    setIsHome(true);
    setIsPlaylists(false);
    setIsSearch(false);
    setIsLibrary(false)
  }

  const isPlaylists = () => {
    setIsHome(false);
    setIsPlaylists(true);
    setIsSearch(false);
    setIsLibrary(false)
  }

  const isSearch = () => {
    setIsHome(false);
    setIsPlaylists(false);
    setIsSearch(true);
    setIsLibrary(false)
  }

  const isLibrary = () => {
    setIsHome(false);
    setIsPlaylists(false)
    setIsSearch(false)
    setIsLibrary(true)
  }

  return (
    <HeaderWrapper style={!isDeskTop ? {left: isOpen ? '0' : '-70%'} : {left: '0'}}>
        <LogoWrapper>
          <img src={SpotifyLogo} alt='logo'/>
        </LogoWrapper>
        {!isDeskTop && (
          <div className='close-button' style={!isDeskTop ? {right: isOpen ? '1rem' : '-4rem'} : {right: '1rem'}}>
            <HamburgerMenu isOpen={isOpen} setOpen={setOpen} menuToggle={menuToggle}/>
          </div>
        )}
          <NavigationsWrapper>
            <ul>
              <li onClick={isHome}>
                <RiHome4Line/>
                <p>Home</p>
              </li>
              <li onClick={isSearch}>
                <RiSearchLine/>
                <p>Search</p>
              </li>
              <li onClick={isLibrary}>
                <VscLibrary/>
                <p>My Library</p>
              </li>
            </ul>
            <ul>
              <li onClick={isPlaylists}>
                <RiAddBoxFill/>
                <p>My Playlists</p>
              </li>
              <li>
                <BiHeartSquare/>
                <p>My Favourite</p>
              </li>
            </ul>
          </NavigationsWrapper>
    </HeaderWrapper>
  )
}

export default Header