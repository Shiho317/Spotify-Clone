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
`