import styled from "styled-components";

export const SongDetailsWrapper = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 1rem;

  & ul{
    display: grid;
    grid-template-columns: 4fr 3fr 2fr 1fr;
  }

  & li{
    display: flex;
    color: ${props => props.theme.color.lightgrey};
    font-size: 0.8rem;
    gap: 1rem;
  }

  & img{
    width: 50px;
  }
`