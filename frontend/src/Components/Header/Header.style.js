import styled from "styled-components";

export const HeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  background: ${props => props.theme.color.black};
  width: 70%;
  height: 100vh;
  padding: 1.5rem;
  z-index: 99;

  .close-button {
    position: absolute;
    top: 1rem;
    transition: all 0.5s ease;
  }

  @media ${props => props.theme.device.laptop} {
    width: 17%;
    height: 100vh;
  }
`

export const LogoWrapper = styled.div`
  width: 100%;
  & img{
    width: 70%;
  }
`

export const NavigationsWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 1rem 0;
  border-bottom: 1px solid ${props => props.theme.color.lightgrey};

  & ul{
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
  }
  & a{
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 1rem;
    color: ${props => props.theme.color.lightgrey};
    font-size: 1.5rem;
    &:hover {
      color: ${props => props.theme.color.white};
      transition: all 0.3s ease;
    }
  }
  & li{
    list-style: none;
    display: flex;
    align-items: center;
    gap: 1rem;
    color: ${props => props.theme.color.lightgrey};
    font-size: 1.5rem;
    cursor: pointer;
    &:hover {
      color: ${props => props.theme.color.white};
      transition: all 0.3s ease;
    }
  }
  & p{
    font-size: 1rem;
  }
`