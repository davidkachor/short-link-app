import styled from 'styled-components'

export interface Size {
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
	overflow-x: hidden;
	overflow-y: visible;
`

export const Particle = styled.div<Size>`
	position: absolute;
	top: ${props => props.top}%;
	left: ${props => props.left}%;
	width: calc(100% - (100% - ${props => props.width}px));
	height: ${props => props.height}px;
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
