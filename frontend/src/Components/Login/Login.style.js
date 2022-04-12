import styled from "styled-components";

export const LoginWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${props => props.theme.color.black};
  gap: 5rem;
`

export const LoginImage = styled.div`
  width: 20rem;

  & img{
    width: 100%;
  }
`

export const LoginButton = styled.button`
  width: 15rem;
  height: 3rem;
  border: none;
  background: ${props => props.theme.color.green};
  border-radius: 1.5rem;
  cursor: pointer;
  font-size: 1.1rem;
  color: white;

  &:hover {
    background: ${props => props.theme.color.lightgreen};
  }
`