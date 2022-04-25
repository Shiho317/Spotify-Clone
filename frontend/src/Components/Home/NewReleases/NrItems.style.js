import styled from "styled-components";

export const ItemsWrapper = styled.li`
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

  & h4 a{
    color: ${props => props.theme.color.white};
    font-size: 1rem;
  }

  & p{
    height: 2rem;
  }

  & p a{
    color: ${props => props.theme.color.deepgrey};
    font-size: 0.8rem;
    
    @media ${props => props.theme.device.laptop} {
      font-size: 1rem;
    }
  }

  & a{
    text-decoration: none;
    
    &:hover{
      text-decoration: underline;
      color: ${props => props.theme.color.white};
    }
  }
`