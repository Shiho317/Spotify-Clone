import styled from "styled-components";

export const CurrentPlaylistWrapper = styled.li`
  width: 12rem;
  height: 18rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0);
  border-radius: 5px;
  cursor: pointer;

  &:hover{
    background: rgba(255, 255, 255, 0.1);
    transition: all 0.3s ease;
  }

  & h4{
    color: ${props => props.theme.color.white};
    font-size: 1.1rem;
  }

  & p{
    color: ${props => props.theme.color.deepgrey};
    font-size: 0.8rem;
  }
`

export const PlaylistCover = styled.div`
  width: 10rem;
  height: 15rem;
  background: ${props => props.theme.color.deepgrey};
  color: ${props => props.theme.color.lightgrey};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 5rem;
  border-radius: 3px;
`