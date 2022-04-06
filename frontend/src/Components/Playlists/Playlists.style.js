import styled from 'styled-components';

export const PlayListsWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 83%;
  height: 100vh;
  overflow: scroll;
`

export const PlaylistsHeader = styled.div`
  width: 100%;
  height: 40vh;
  background: linear-gradient(to bottom, #DCDCDC, #696969);
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0 2rem;
`

export const AlbumCoverImg = styled.div`
  width: 15rem;
  height: 15rem;
  background: red;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;

  & img{
    width: 100%;
    height: 100%;
  }
`

export const HeaderTitleWrapper = styled.div`
  height: 15rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  color: ${props => props.theme.color.white};

  & h1{
    font-size: 4rem;
  }

  & p{
    font-size: 1rem;
  }
`

export const PlaylistsContents = styled.div`
  width: 100%;
  height: 100%;
  padding: 2rem;
  background: linear-gradient(to bottom, ${props => props.theme.color.deepgrey}, ${props => props.theme.color.lightblack});
`

export const PlayButton = styled.button`
  width: 3.5rem;
  height: 3.5rem;
  background: ${props => props.theme.color.green};
  border-radius: 50%;
  border: none;
  font-size: 1.3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`

export const PlaySonglists = styled.div`
  width: 100%;
  margin-top: 2rem;
  
  & ul{
    display: grid;
    grid-template-columns: 4fr 3fr 2fr 1fr;
    

    &:first-child {
      border-bottom: 1px solid ${props => props.theme.color.deepgrey};
    }
  }

  & li{
    display: flex;
    color: ${props => props.theme.color.lightgrey};
    font-size: 0.8rem;
    gap: 1rem;
  }

`