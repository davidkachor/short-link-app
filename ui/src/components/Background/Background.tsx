import React from 'react'
import {
	BlueParticle,
	YellowParticle,
	RedParticle,
	Wrapper,
} from './Background.style'
import randomNum from '../../helpers/random-num'

const Background = () => {
	const position = randomNum.bind(null, -10, 100)
	return (
		<Wrapper>
			<BlueParticle
				top={position()}
				width={354.5}
				left={position()}
				height={194}
			/>
			<YellowParticle
				top={position()}
				width={354.5}
				left={position()}
				height={194}
			/>
			<YellowParticle
				top={position()}
				width={354.5}
				left={position()}
				height={194}
			/>

			<BlueParticle
				top={position()}
				width={354.5}
				left={position()}
				height={194}
			/>
			<RedParticle
				top={position()}
				width={354.5}
				left={position()}
				height={194}
			/>
			<BlueParticle
				top={position()}
				width={354.5}
				left={position()}
				height={194}
			/>
			<YellowParticle
				top={position()}
				width={354.5}
				left={position()}
				height={194}
			/>
			<YellowParticle
				top={position()}
				width={354.5}
				left={position()}
				height={194}
			/>

			<BlueParticle
				top={position()}
				width={354.5}
				left={position()}
				height={194}
			/>
			<RedParticle
				top={position()}
				width={354.5}
				left={position()}
				height={194}
			/>
		</Wrapper>
	)
}

export default Background
