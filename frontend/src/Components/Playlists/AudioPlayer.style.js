import styled from "styled-components";

export const AudioPlayerWrapper = styled.div`
  position: absolute;
  bottom: 0;
  z-index: 99;
  grid-template-rows: 2fr 1fr 1fr;
  align-items: center;
  height: 40vh;
  width: 100%;
  padding: 0.8rem;
  background: ${props => props.theme.color.lightblack};
  border-top: 1px solid ${props => props.theme.color.deepgrey};
  transition: all 0.3s ease;

  @media ${props => props.theme.device.laptop} {
    height: 6rem;
    grid-template-rows: 1fr;
    grid-template-columns: 3fr 4fr 3fr;
  }
`

export const AudioDetails = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.8rem;

  & img{
    width: 4rem;
  }

  & h5{
    color: ${props => props.theme.color.white};
    font-size: 1rem;
  }

  & p{
    color: ${props => props.theme.color.lightgrey};
    font-size: 0.8rem;
  }
`

export const AudioProgress = styled.div`
  width: 100%;
`

export const AudioMan = styled.div`
  display: flex;
  justify-content: center;
  
  & .back{
    width: 2.5rem;
    height: 2.5rem;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background: transparent;
    color: ${props => props.theme.color.lightgrey};
    cursor: pointer;

    &:hover{
      color: ${props => props.theme.color.white};
    }
  }

  & .play{
    width: 2.5rem;
    height: 2.5rem;
    font-size: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background: transparent;
    color: ${props => props.theme.color.white};
    cursor: pointer;

    &:hover{
      transform: scale(1.1);
      transition: all 0.2s ease;
    }
  }

  & .forward{
    width: 2.5rem;
    height: 2.5rem;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background: transparent;
    color: ${props => props.theme.color.lightgrey};
    cursor: pointer;

    &:hover{
      color: ${props => props.theme.color.white};
    }
  }
`

export const AudioBar = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;

  & p{
    font-size: 0.8rem;
    color: ${props => props.theme.color.lightgrey};
  }

  & input{
    width: 90%; 
  }

  & input[type=range] {
    height: 8px;
    -webkit-appearance: none;
    margin: 10px 0;
    width: 90%;
    background: transparent;
  }

  & input[type=range]:focus {
    outline: none;
  }

  & input[type=range]::-webkit-slider-runnable-track {
    width: 90%;
    height: 8px;
    cursor: pointer;
    animate: 0.2s;
    background: ${props => props.theme.color.lightgrey};
    border-radius: 5px;
  }

  & input[type=range]::-webkit-slider-thumb {
    height: 15px;
    width: 15px;
    border-radius: 50%;
    background: ${props => props.theme.color.white};
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -2.5px;
  }

  & input[type=range]:focus::-webkit-slider-runnable-track {
    background: ${props => props.theme.color.lightgrey};
  }

  & input[type=range]::-moz-range-track {
    width: 90%;
    height: 8px;
    cursor: pointer;
    animate: 0.2s;
    background: ${props => props.theme.color.lightgrey};
    border-radius: 5px;
  }

  & input[type=range]::-moz-range-thumb {
    height: 15px;
    width: 15px;
    border-radius: 50%;
    background: ${props => props.theme.color.white};
    cursor: pointer;
  }

  & input[type=range]::-ms-track {
    width: 90%;
    height: 8px;
    cursor: pointer;
    animate: 0.2s;
    background: ${props => props.theme.color.lightgrey};
    border-color: transparent;
    color: transparent;
  }

  & input[type=range]::-ms-fill-lower {
    background: ${props => props.theme.color.lightgrey};
    border-radius: 5px;
  }

  & input[type=range]::-ms-fill-upper {
    background: ${props => props.theme.color.lightgrey};
    border-radius: 5px;
  }

  & input[type=range]::-ms-thumb {
    margin-top: 1px;
    height: 15px;
    width: 15px;
    border-radius: 50%;
    background: ${props => props.theme.color.white};
    cursor: pointer;
  }

  & input[type=range]:focus::-ms-fill-lower {
    background: ${props => props.theme.color.lightgrey};
  }

  & input[type=range]:focus::-ms-fill-upper {
    background: ${props => props.theme.color.lightgrey};
  }
`

export const AudioFavButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;

  & button{
    background: transparent;
    border: none;
    color: ${props => props.theme.color.lightgrey};
    font-size: 1.5rem;
    cursor: pointer;

    &:hover{
      color: ${props => props.theme.color.white};
    }
  }
`

export const BigCoverImg = styled.div`
  position: absolute;
  bottom: 40vh;
  left: 0;

  @media ${props => props.theme.device.laptop} {
    bottom: 6rem;
  }

  & img{
    width: 10rem;

    @media ${props => props.theme.device.laptop} {
      width: 15rem;
    }
  }
`
