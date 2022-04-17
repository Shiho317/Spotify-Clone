import styled from "styled-components";

export const SearchWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  overflow: scroll;
  background: ${props => props.theme.color.lightblack};
  -ms-overflow-style: none;    /* IE, Edge 対応 */
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  @media ${props => props.theme.device.laptop} {
    width: 100%;
  }
`

export const SearchForm = styled.form`
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

export const ResultsWrapper = styled.ul`
  width: 100%;
  display: flex;
  gap: 2rem;
  padding: 1rem;
  margin: 4rem 0;
  overflow: scroll;
  background: ${props => props.theme.color.lightblack};
  -ms-overflow-style: none;    /* IE, Edge 対応 */
  scrollbar-width: none;

  @media ${props => props.theme.device.laptop} {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    align-items: center;
    gap: 0;
    padding: 0;
  }

  &::-webkit-scrollbar {
    display: none;
  }
`