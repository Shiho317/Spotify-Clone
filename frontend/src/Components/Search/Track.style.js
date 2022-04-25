import styled from "styled-components";

export const TrackWrapper = styled.li`
  width: 30%;
  height: 30%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;

  @media ${props => props.theme.device.laptop} {
    width: 100%;
    height: 100%;
    justify-content: center;
  }

  & img{
    width: 60%;
  }

  & h4{
    width: 60%;
    font-size: 1.2rem;
    height: 1.5rem;
  }

  & a{
    color: ${props => props.theme.color.white};
    font-size: 1rem;
    text-decoration: none;
    
    &:hover{
      text-decoration: underline;
      color: ${props => props.theme.color.white};
    }
  }
`