import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { HeaderWrapper, LogoWrapper, NavigationsWrapper } from './Header.style';
import SpotifyLogo from '../../assets/images/Spotify_Logo_RGB_White.png';
import { Link } from 'react-router-dom';
import { RiSearchLine, RiAddBoxFill, RiHome4Line } from 'react-icons/ri';
import { VscLibrary } from 'react-icons/vsc';
import { BiHeartSquare } from 'react-icons/bi';
import HamburgerMenu from './Hamburger';

const Header = () => {

  const [isOpen, setOpen] = useState(false)

  const isDeskTop = useMediaQuery({
    query: '(min-width: 1024px)'
  });

  const menuToggle = () => {
    setOpen(prev => !prev)
  };

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
              <li>
                <Link to='/'>
                  <RiHome4Line/>
                  <p>Home</p>
                </Link>
              </li>
              <li>
                <Link to='/search'>
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
    </HeaderWrapper>
  )
}

export default Header