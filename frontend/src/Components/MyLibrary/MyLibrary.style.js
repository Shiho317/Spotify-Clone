import styled from "styled-components";

export const MyLibraryWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: unset;
  overflow: scroll;
  background: ${props => props.theme.color.lightblack};
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  -ms-overflow-style: none;    /* IE, Edge */
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;  /* Chrome, Safari */
  }

  @media ${props => props.theme.device.laptop} {
    height: 100%;
    display: unset;
  }


  & h1 {
    color: ${props => props.theme.color.white};
    margin-bottom: 2rem;
    text-align: center;

    @media ${props => props.theme.device.laptop} {
      text-align: start;
    }
  }
`

export const CurrentPlaylistsWrapper = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 4rem;
  padding-left: 1.5rem;
  gap: 2rem;
  overflow: scroll;
  -ms-overflow-style: none;    /* IE, Edge */
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;  /* Chrome, Safari */
  }

  @media ${props => props.theme.device.laptop} {
    padding-left: 2rem;
    overflow: visible;
  }
`

export const MyFavouriteList = styled.div`
  width: 15rem;
  height: 15rem;
  background: linear-gradient(to bottom right, #422cea, #8888df);
  cursor: pointer;
  display: flex;
  align-items: end;
  padding: 1rem;
  margin-bottom: 2rem;
  border-radius: 5px;

  @media ${props => props.theme.device.laptop} {
    width: 25rem;
    height: 18rem;
    margin-left: 3rem;
  }

  & h2{
    color: white;
    font-size: 1.8rem;
  }
`