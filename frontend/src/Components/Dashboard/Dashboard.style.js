import styled from "styled-components";

export const DashboardWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  overflow: scroll;

  @media ${props => props.theme.device.laptop} {
    width: 83%;
  }
`