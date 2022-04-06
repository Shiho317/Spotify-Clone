import React, { useContext } from 'react';
import { AppContext } from '../../App';
import { AlbumCoverImg, HeaderTitleWrapper, PlayButton, PlaylistsContents, PlaylistsHeader, PlayListsWrapper, PlaySonglists } from './Playlists.style';
import { AiOutlineClockCircle } from 'react-icons/ai';
import sample from '../../assets/images/sample.jpeg';
import { GrPlayFill } from 'react-icons/gr';

const Playlists = () => {

  const { data } = useContext(AppContext);
  
  return (
    <PlayListsWrapper>
      <div>
        <PlaylistsHeader>
          <AlbumCoverImg>
            <img src={sample} alt='' />
            <img src={sample} alt='' />
            <img src={sample} alt='' />
            <img src={sample} alt='' />
          </AlbumCoverImg>
          <HeaderTitleWrapper>
            <p>aaaaaa</p>
            <h1>BBBBBBB</h1>
            <p>user name : 8 songs, 28 min 35 sec</p>
          </HeaderTitleWrapper>
        </PlaylistsHeader>
        <PlaylistsContents>
          <PlayButton>
            <GrPlayFill/>
          </PlayButton>
          <PlaySonglists>
            <ul>
              <li>
                <p>#</p>
                <p>Title</p>
              </li>
              <li>
                <p>Album</p>
              </li>
              <li>
                <p>Added</p>
              </li>
              <li>
                <p>
                  <AiOutlineClockCircle/>
                </p>
              </li>
            </ul>
          </PlaySonglists>
        </PlaylistsContents>
      </div>
    </PlayListsWrapper>
  )
}

export default Playlists