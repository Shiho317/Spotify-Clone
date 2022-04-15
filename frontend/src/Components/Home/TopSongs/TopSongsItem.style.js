import styled from "styled-components";

export const TopSongsItemWrapper = styled.li`
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

  & h4{
    width: 60%;
    
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