import styled from "styled-components";

export const SearchWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  overflow: scroll;
  background: ${props => props.theme.color.lightblack};

  @media ${props => props.theme.device.laptop} {
    width: 83%;
  }
`

export const SearchForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin: 2rem auto;

  & input{
    width: 50%;
    height: 2rem;
    border: none;
    padding: 0 0.5rem;
    outline: none;
  }
`

export const SearchButton = styled.button`
  background: white;
  border: none;
  font-size: 1.2rem;
  height: 2rem;
  width: 2rem;
  cursor: pointer;
  color: ${props => props.theme.color.black};

  &:hover{
    color: ${props => props.theme.color.lightgrey};
  }
`