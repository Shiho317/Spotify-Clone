import styled from "styled-components";

export const SongDetailsWrapper = styled.ul`
  padding: 0.5rem;
  display: grid;
  grid-template-columns: 4fr 3fr 2fr 1fr;
  align-items: center;
  border-radius: 5px;
  overflow: scroll;
  -ms-overflow-style: none;    /* IE, Edge 対応 */
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  &:hover{
      background: rgba(255, 255, 255, 0.2);
    }
  
  &:hover li,
  &:hover a{
    color: white;
  }

  & li{
    display: flex;
    align-items: center;
    color: ${props => props.theme.color.lightgrey};
    font-size: 0.8rem;
    gap: 1rem;
    cursor: pointer;

    & .index-play{
      width: 1rem;
      font-size: 1rem;
    }
  }

  & img{
    width: 50px;
  }

  & a{
    text-decoration: none;
    color: ${props => props.theme.color.lightgrey};
    cursor: pointer;

    &:hover{
      text-decoration: underline;
    }
  }
`

export const SongDetails = styled.div`

  & a{
    text-decoration: none;
    color: ${props => props.theme.color.lightgrey};
    cursor: pointer;

    &:hover{
      text-decoration: underline;
    }
  }
`