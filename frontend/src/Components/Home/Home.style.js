import styled from "styled-components";

export const HomeWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  background: ${props => props.theme.color.lightblack};
  overflow: scroll;

  @media ${props => props.theme.device.laptop} {
    width: 100%;
  }

  & h1 {
    color: ${props => props.theme.color.white};
    margin: 2rem;
  }
`

export const NewReleasesWrapper = styled.ul`
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 4rem 0;
  margin-bottom: 4rem;
` 