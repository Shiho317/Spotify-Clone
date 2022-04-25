import React from 'react'
import { CurrentPlaylistWrapper, PlaylistCover } from './CurrentPlaylist.style'
import { FiMusic } from 'react-icons/fi'

const CurrentPlaylist = ({ 
  playlist, 
  setIsLibrary, 
  setIsPlaylists 
}) => {

  const toPlayList = () => {
    setIsPlaylists(true);
    setIsLibrary(false);
  }

  return (
    <React.Fragment>
    <CurrentPlaylistWrapper onClick={toPlayList}>
      <PlaylistCover>
        <FiMusic/>
      </PlaylistCover>
      <h4>
        {playlist.name}
      </h4>
      <p>
        Created by: {playlist.owner.display_name}
      </p>
    </CurrentPlaylistWrapper>
    </React.Fragment>
  )
}

export default CurrentPlaylist