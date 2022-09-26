import styled from 'styled-components'

export const Wrapper = styled.div`
  position: relative;
  width: 60px;
  height: 60px;
  margin: auto;
  //background: #74a6f2;

  div {
    width: 6%;
    height: 16%;
    background: #696969;
    position: absolute;
    left: 49%;
    top: 43%;
    opacity: 0;
    border-radius: 50px;
    -webkit-box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
    animation: fade 1s linear infinite;
    transform: translate(0, -130%);
  }

  @keyframes fade {
    from {
      opacity: 1;
    }
    to {
      opacity: 0.25;
    }
  }
`

export const Bar1 = styled.div`
  rotate: 0deg;
  animation-delay: 0s !important;
`

export const Bar2 = styled.div`
  rotate: 30deg;
 animation-delay: -0.9167s !important;
`

export const Bar3 = styled.div`
  rotate: 60deg;
  animation-delay: -0.833s !important;
`

export const Bar4 = styled.div`
  rotate: 90deg;
  animation-delay: -0.7497s !important;
`

export const Bar5 = styled.div`
  rotate: 120deg;
  animation-delay: -0.667s !important;
`

export const Bar6 = styled.div`
  rotate: 150deg;
  animation-delay: -0.5837s !important;
`

export const Bar7 = styled.div`
  rotate: 180deg;
  animation-delay: -0.5s !important;
`

export const Bar8 = styled.div`
  rotate: 210deg;
  animation-delay: -0.4167s !important;
`

export const Bar9 = styled.div`
  rotate: 240deg;
  animation-delay: -0.333s !important;
`

export const Bar10 = styled.div`
  rotate: 270deg;
  animation-delay: -0.2497s !important;
`

export const Bar11 = styled.div`
  rotate: 300deg;
  animation-delay: -0.167s !important;
`

export const Bar12 = styled.div`
  rotate: 330deg;
  animation-delay: -0.0833s !important;
`