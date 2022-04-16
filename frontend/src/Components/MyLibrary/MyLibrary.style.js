import styled from "styled-components";

export const MyLibraryWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  overflow: scroll;
  background: ${props => props.theme.color.lightblack};

  -ms-overflow-style: none;    /* IE, Edge */
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;  /* Chrome, Safari */
  }


  & h1 {
    color: ${props => props.theme.color.white};
    margin: 2rem;
  }
`

export const SavedTracksWrapper = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  align-items: center;
  margin-bottom: 4rem;
  gap: 4rem 0;
`