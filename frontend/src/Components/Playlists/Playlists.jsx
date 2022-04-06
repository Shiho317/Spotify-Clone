import React, { useContext } from 'react';
import { AppContext } from '../../App';
import { PlayListsWrapper } from './Playlists.style';

const Playlists = () => {

  const { data } = useContext(AppContext);
  
  return (
    <PlayListsWrapper>
    Playlists
    </PlayListsWrapper>
  )
}

export default Playlists