import React, { useEffect, useState } from 'react'
import { MyLibraryWrapper, SavedTracksWrapper } from './MyLibrary.style'
import axios from 'axios'
import SavedTracks from './SavedTracks'
import Footer from '../Footer/Footer'

const MyLibrary = ({ accessToken }) => {

  const [ savedTracks, setSavedTracks ] = useState([
    {
      added_at: "",
      track: {
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
            },
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
          total_tracks: 1,
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
          },
        ],
        disc_number: 1,
        duration_ms: 228482,
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
        track_number: 1,
        type: "",
        uri: ""
      }
    }
  ])

  useEffect(() => {
    axios.get('https://api.spotify.com/v1/me/tracks?market=CA&limit=10&offset=0', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`
      }
    })
    .then(res => {
      setSavedTracks(res.data.items)
    })
    .catch(err => {
      console.log(err)
    })
  },[accessToken])

  return (
    <MyLibraryWrapper>
      <h1>My Library</h1>
      {savedTracks.length > 0 ? (
        <SavedTracksWrapper>
        {savedTracks.map((track, index) => (
          <SavedTracks key={index} track={track} />
        ))}
      </SavedTracksWrapper>
      ) : (
        <h4>No tracks in your library.</h4>
      )}
      <Footer/>
    </MyLibraryWrapper>
  )
}

export default MyLibrary