import styled from 'styled-components';

export const PlayListsWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  overflow: scroll;

  @media ${props => props.theme.device.laptop} {
    width: 100%;
  }
`

export const PlaylistsHeader = styled.div`
  width: 100%;
  height: 40vh;
  background: linear-gradient(to bottom, #DCDCDC, #696969);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 0 2rem;

  @media ${props => props.theme.device.laptop} {
    flex-direction: row;
  }
`

export const AlbumCoverImgs = styled.div`
  width: 10rem;
  height: 10rem;
  background: ${props => props.theme.color.lightgrey};
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  box-shadow: 0 0 3rem rgba(0, 0, 0, 0.5);

  & img{
    width: 100%;
    height: 100%;
  }

  @media ${props => props.theme.device.laptop} {
    width: 15rem;
    height: 15rem;
  }
`

export const AlbumCoverImg = styled.div`
  width: 10rem;
  height: 10rem;
  background: red;
  display: grid;
  box-shadow: 0 0 3rem rgba(0, 0, 0, 0.5);

& img{
  width: 100%;
  height: 100%;
  background: grey;
}

@media ${props => props.theme.device.laptop} {
  width: 15rem;
  height: 15rem;
}
`

export const HeaderTitleWrapper = styled.div`
  height: unset;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  color: ${props => props.theme.color.white};

  @media ${props => props.theme.device.laptop} {
    height: 15rem;
  }

  & h1{
    font-size: 1.5rem;

    @media ${props => props.theme.device.laptop} {
      font-size: 4rem;
    }
  }
  & p{
    font-size: 0.8rem;

    @media ${props => props.theme.device.laptop} {
      font-size: 1rem;
    }
  }
`

export const PlaylistsContents = styled.div`
  width: 100%;
  height: 100%;
  padding: 2rem;
  background: linear-gradient(to bottom, ${props => props.theme.color.deepgrey}, ${props => props.theme.color.lightblack});
  overflow: scroll;
`

export const PlayButton = styled.button`
  width: 3.5rem;
  height: 3.5rem;
  background: black;
  border-radius: 50%;
  border: none;
  font-size: 3.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: ${props => props.theme.color.green};

  &:hover {
    color: ${props => props.theme.color.lightgreen};
    transform: scale(1.1);
    transition: all 0.2s ease;
  }
`

export const PlaySonglists = styled.div`
  width: 300%;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;

  @media ${props => props.theme.device.laptop} {
    width: 100%;
  }
  
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
