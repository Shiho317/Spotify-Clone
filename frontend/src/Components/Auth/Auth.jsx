import { useEffect, useState } from 'react';
import axios from 'axios';

const Auth = ( code ) => {

  const [ accessToken, setAccessToken ] = useState();
  const [ refreshToken, setRefreshToken ] = useState();
  const [ expiresIn, setExpiresIn ] = useState();

  useEffect(() => {
    axios.post('http://localhost:8888/login', {
      code,
    })
    .then(res => {
      setAccessToken(res.data.accessToken);
      setRefreshToken(res.data.refreshToken);
      setExpiresIn(res.data.expiresIn)
      window.history.pushState({}, null, "/")
    })
    .catch((err) => {
      console.log(err)
      window.location = '/'
    })
  },[code])

  useEffect(() => {
    if(!refreshToken || !expiresIn) return
        axios.post('http://localhost:8888/refresh', {
          refreshToken,
        })
        .then(res => {
          setAccessToken(res.data.accessToken);
          setExpiresIn(res.data.expiresIn);
        })
        .catch((err) => {
          console.log(err)
          window.location = '/'
        })
      
  },[refreshToken, expiresIn])

  return (
    accessToken
  )
}

export default Auth