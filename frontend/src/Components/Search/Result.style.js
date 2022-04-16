import styled from "styled-components";

export const ResultWrapper = styled.li`
  width: 100%;
  height: 100%;
  display: grid;
  align-items: center;

  & h4{
    width: 100%;
    text-align: center;
  }

  & p{
    text-align: center;
    font-size: 1rem;
    color: ${props => props.theme.color.deepgrey};
  }

  & a{
    color: ${props => props.theme.color.white};
    font-size: 1rem;
    text-decoration: none;
    cursor: pointer;
  
    &:hover{
      text-decoration: underline;
      color: ${props => props.theme.color.white};
    }
  }
`

export const ArtistImageWrapper = styled.div`
  width: 8rem;
  height: 8rem;
  margin: 1rem auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  overflow: hidden;

  & img{
    width: 100%;
  }
`