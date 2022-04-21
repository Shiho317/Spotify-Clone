import React, { useEffect, useState } from 'react'
import { ArtistsTopWrapper, ArtistTracksWrapper } from './ArtistsTop.style'
import axios from 'axios'
import Track from './Track'

const ArtistsTop = ({ accessToken, clickedArtist }) => {

  const [ artistTracks, setArtistTracks ] = useState([]);

  useEffect(() => {
    axios.get(`https://api.spotify.com/v1/artists/${clickedArtist.id}/top-tracks?market=CA`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`
      }
    })
    .then(res => {
      setArtistTracks(res.data.tracks)
    })
    .catch(err => {
      console.log(err)
    })
  },[accessToken, clickedArtist.id])

  return (
    <ArtistsTopWrapper>
      <h1>{clickedArtist.name}'s Top Songs</h1>
      <ArtistTracksWrapper>
        {artistTracks.length > 0 && artistTracks.map((track, index) => (
          <Track key={index} track={track}/>
        ))}
      </ArtistTracksWrapper>
    </ArtistsTopWrapper>
  )
}

export default ArtistsTop