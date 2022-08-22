import React from 'react'
import {
	BlueParticle,
	YellowParticle,
	RedParticle,
	Wrapper,
} from './Background.style'
import randomNum from '../../helpers/random-num'

const Background = () => {
	return (
		<Wrapper>
			<BlueParticle
				moving={[randomNum(), randomNum()]}
				top={randomNum()}
				width={354.5}
				left={randomNum()}
				height={194}
			/>
			<YellowParticle
				moving={[randomNum(), randomNum()]}
				top={randomNum()}
				width={354.5}
				left={randomNum()}
				height={194}
			/>
			<YellowParticle
				moving={[randomNum(), randomNum()]}
				top={randomNum()}
				width={354.5}
				left={randomNum()}
				height={194}
			/>

			<BlueParticle
				moving={[randomNum(), randomNum()]}
				top={randomNum()}
				width={354.5}
				left={randomNum()}
				height={194}
			/>
			<RedParticle
				moving={[randomNum(), randomNum()]}
				top={randomNum()}
				width={354.5}
				left={randomNum()}
				height={194}
			/>
			<BlueParticle
				moving={[randomNum(), randomNum()]}
				top={randomNum()}
				width={354.5}
				left={randomNum()}
				height={194}
			/>
			<YellowParticle
				moving={[randomNum(), randomNum()]}
				top={randomNum()}
				width={354.5}
				left={randomNum()}
				height={194}
			/>
			<YellowParticle
				moving={[randomNum(), randomNum()]}
				top={randomNum()}
				width={354.5}
				left={randomNum()}
				height={194}
			/>

			<BlueParticle
				moving={[randomNum(), randomNum()]}
				top={randomNum()}
				width={354.5}
				left={randomNum()}
				height={194}
			/>
			<RedParticle
				moving={[randomNum(), randomNum()]}
				top={randomNum()}
				width={354.5}
				left={randomNum()}
				height={194}
			/>
		</Wrapper>
	)
}

export default Background
