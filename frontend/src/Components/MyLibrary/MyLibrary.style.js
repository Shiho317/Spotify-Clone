import styled from "styled-components";

export const MyLibraryWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  overflow: scroll;
  background: ${props => props.theme.color.lightblack};
  padding: 2rem;

  -ms-overflow-style: none;    /* IE, Edge */
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;  /* Chrome, Safari */
  }


  & h1 {
    color: ${props => props.theme.color.white};
    margin-bottom: 2rem;
  }
`

export const CurrentPlaylistsWrapper = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 4rem;
  gap: 2rem
`

export const MyFavouriteList = styled.div`
  width: 25rem;
  height: 18rem;
  background: linear-gradient(to bottom right, #422cea, #8888df);
  cursor: pointer;
  display: flex;
  align-items: end;
  padding: 1rem;
  margin-bottom: 2rem;
  border-radius: 5px;

  & h2{
    color: white;
    font-size: 1.8rem;
  }
`