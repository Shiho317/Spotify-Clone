import styled from "styled-components";

export const TopSongsWrapper = styled.div`
  width: 100%;
  overflow: scroll;
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

export const TopSongsItemsWrapper = styled.ul`
  width: 200%;
  display: flex;

  @media ${props => props.theme.device.laptop} {
    width: 150%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    align-items: center;
  }
`