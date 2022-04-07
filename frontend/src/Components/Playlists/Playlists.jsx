import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../App';
import { AlbumCoverImg, AlbumCoverImgs, HeaderTitleWrapper, PlayButton, PlaylistsContents, PlaylistsHeader, PlayListsWrapper, PlaySonglists } from './Playlists.style';
import { AiOutlineClockCircle } from 'react-icons/ai';
import sample from '../../assets/images/sample.jpeg';
import { GrPlayFill } from 'react-icons/gr';
import PlaylistDatas from './PlaylistDatas';

const Playlists = () => {

  const { datas } = useContext(AppContext);

  const PlaylistItems = datas.tracks.items;
  console.log(PlaylistItems);

  const itemsDuration = PlaylistItems.map(item => {
    return item.track.duration_ms
  })

  const [ durationTotal, setDurationTotal ] = useState('0');

  const durationToMin = () => {
    const total = itemsDuration.reduce((sum, num) => {
      return sum + num;
    }, 0);
    const min = Math.floor(total / 60000);
    const sec = ((total % 60000) / 1000).toFixed(0);
    setDurationTotal(min + ' min ' + (sec < 10 ? "0" : "") + sec + " sec");
  }

  useEffect(() => {
    durationToMin()
  }, [datas])

  return (
    <PlayListsWrapper>
      <div>
        <PlaylistsHeader>
          {PlaylistItems.length >= 4 ? (
            <AlbumCoverImgs>
              <img src={PlaylistItems[2].track.album.images[0].url} alt='header-cover1'/>
              <img src={PlaylistItems[0].track.album.images[0].url} alt='header-cover1'/>
              <img src={PlaylistItems[1].track.album.images[0].url} alt='header-cover1'/>
              <img src={PlaylistItems[3].track.album.images[0].url} alt='header-cover1'/>
            </AlbumCoverImgs>
          ): (
            <AlbumCoverImg>
              <img src={PlaylistItems[0].track.album.images[0].url} alt='header-cover1'/>
            </AlbumCoverImg>
          )}
          
          <HeaderTitleWrapper>
            <p>playlist</p>
            <h1>{datas.name}</h1>
            <p>{datas.owner.display_name} : {datas.tracks.total} songs, {durationTotal}</p>
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
            {PlaylistItems.map((item, index) => (
              <PlaylistDatas key={index} item={item} index={index}/>
            ))}
          </PlaySonglists>
        </PlaylistsContents>
      </div>
    </PlayListsWrapper>
  )
}

export default Playlists