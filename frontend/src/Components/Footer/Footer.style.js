import styled from 'styled-components';

export const FooterWrapper = styled.div`
  width: 100%;
  height: 6rem;
  background: ${props => props.theme.color.lightblack};
  border-top: 1px solid ${props => props.theme.color.deepgrey};
  display: flex;
  align-items: center;
  justify-content: center;
  & p{
    font-size: 0.8rem;
    color: ${props => props.theme.color.lightgrey};
  }
`