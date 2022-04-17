import styled from "styled-components";

export const RecommendedWrapper = styled.div`
  width: 100%;
  overflow: scroll;

  & h1 {
    color: ${props => props.theme.color.white};
    margin: 2rem;
  }
`

export const RecommendedSongsItem = styled.ul`
  width: 200%;
  display: flex;
  

  @media ${props => props.theme.device.laptop} {
    width: 150%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    align-items: center;
  }
`