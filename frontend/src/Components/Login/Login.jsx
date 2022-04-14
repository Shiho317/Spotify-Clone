import React from 'react'
import { LoginButton, LoginImage, LoginWrapper } from './Login.style';
import loginLogo from '../../assets/images/Spotify_Logo_RGB_White.png';

const Login = () => {

  const authURL = `https://accounts.spotify.com/authorize?client_id=${process.env.REACT_APP_CLIENT_ID}&response_type=code&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state%20playlist-read-private`

  return (
    <LoginWrapper>
      <LoginImage>
        <img src={loginLogo} alt='logo'/>
      </LoginImage>
      <a href={authURL} >
        <LoginButton>Login</LoginButton>
      </a>
    </LoginWrapper>
  )
}

export default Login