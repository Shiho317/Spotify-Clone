import styled from "styled-components";

export const NewReleasesWrapper = styled.div`
  width: 100%;
  overflow: scroll;
  -ms-overflow-style: none;    /* IE, Edge */
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;  /* Chrome, Safari */
  }

  & h1 {
    color: ${props => props.theme.color.white};
    margin: 2rem;
  }
`

export const NrItemsWrapper = styled.ul`
  width: 200%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 4rem;
  gap: 4rem 0;

  @media ${props => props.theme.device.laptop} {
    width: 150%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    align-items: center;
  }
` 