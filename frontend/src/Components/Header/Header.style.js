import styled from "styled-components";

export const HeaderWrapper = styled.div`
  background: var(--black-color);
  width: 17%;
  height: 100vh;
  padding: 1.5rem;
`

export const LogoWrapper = styled.div`
  width: 100%;

  & img{
    width: 70%;
  }
`

export const NavigationsWrapper = styled.nav`
  background: pink;

  & ul{
    display: flex;
    flex-direction: column;
  }

  & li{
    list-style: none;
  }
`