import styled, { keyframes } from 'styled-components'
import randomNum from '../../helpers/random-num'

export interface Size {
	moving: [number, number]
	width: number
	height: number
	left: number
	top: number
}

export const Wrapper = styled.div`
	position: absolute;
	width: 100%;
	top: 0;
	height: 100vh;
	z-index: -1;
	overflow: hidden;
`

export const particleAppear = keyframes`
	0% {
		opacity: 0;
		transform: translate(
			${randomNum(1) ? randomNum() : -randomNum()}%, ${
	randomNum(1) ? randomNum() : -randomNum()
}%
		);
	}
	25% { 
		opacity: .8;
	}
	50% {
		opacity: 1;
	}
	75% {
		opacity: .8;
	}
	100% {
		opacity: 0;
		transform: none;
	}
`

export const Particle = styled.div<Size>`
	position: absolute;
	top: ${props => props.top}%;
	left: ${props => props.left}%;
	width: calc(100% - (100% - ${props => props.width}px));
	height: ${props => props.height}px;
	animation: ${particleAppear} linear 8s infinite;
`

export const YellowParticle = styled(Particle)`
	background: radial-gradient(
		50% 50% at 50% 50%,
		#ffdf7c 0%,
		rgba(246, 251, 248, 0) 100%
	);
`

export const BlueParticle = styled(Particle)`
	background: radial-gradient(
		50% 50% at 50% 50%,
		#b9ceea 0%,
		rgba(246, 251, 248, 0) 100%
	);
`

export const RedParticle = styled(Particle)`
	background: radial-gradient(
		50% 50% at 50% 50%,
		#fab7b8 0%,
		rgba(246, 251, 248, 0) 100%
	);
`
