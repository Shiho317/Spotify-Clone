import React, { useEffect, useState } from 'react'
import { ArtistsTopWrapper, ArtistTracksWrapper } from './ArtistsTop.style'
import axios from 'axios'
import Track from './Track'

const ArtistsTop = ({ accessToken, clickedArtist }) => {

  const [ artistTracks, setArtistTracks ] = useState([
    {
      album: {
        album_type: "",
        artists: [
          {
            external_urls: {
              spotify: ""
            },
            href: "",
            id: "",
            name: "",
            type: "",
            uri: ""
          }
        ],
        external_urls: {
          spotify: ""
        },
        href: "",
        id: "",
        images: [
          {
            height: 640,
            url: "",
            width: 640
          },
        ],
        name: "",
        release_date: "",
        release_date_precision: "",
        total_tracks: 0,
        type: "",
        uri: ""
      },
      artists: [
        {
          external_urls: {
            spotify: ""
          },
          href: "",
          id: "",
          name: "",
          type: "",
          uri: ""
        }
      ],
      disc_number: 1,
      duration_ms: 0,
      explicit: false,
      external_ids: {
        isrc: ""
      },
      external_urls: {
        spotify: ""
      },
      href: "",
      id: "",
      is_local: false,
      is_playable: true,
      name: "",
      popularity: 0,
      preview_url: null,
      track_number: 0,
      type: "track",
      uri: ""
    },
  ])

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
        {artistTracks.map((track, index) => (
          <Track key={index} track={track}/>
        ))}
      </ArtistTracksWrapper>
    </ArtistsTopWrapper>
  )
}

export default ArtistsTop