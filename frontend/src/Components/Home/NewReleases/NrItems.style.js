import styled from "styled-components";

export const ItemsWrapper = styled.li`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  & img{
    width: 60%;
  }

  & h4 a{
    color: ${props => props.theme.color.white};
    font-size: 1rem;
  }

  & p a{
    color: ${props => props.theme.color.deepgrey};
    font-size: 1rem;
  }

  & a{
    text-decoration: none;
    
    &:hover{
      text-decoration: underline;
      color: ${props => props.theme.color.white};
    }
  }
`