import React from 'react'
import {
	BlueParticle,
	YellowParticle,
	RedParticle,
	Wrapper,
} from './Background.style'

const Background = () => {
	return (
		<Wrapper>
			<BlueParticle top={0} width={354.5} left={30} height={194} />
			<YellowParticle top={20} width={354.5} left={15} height={194} />
			<YellowParticle top={50} width={354.5} left={40} height={194} />
			<RedParticle top={15} width={354.5} left={50} height={194} />
			<BlueParticle top={50} width={354.5} left={60} height={194} />
            <RedParticle top={60} width={354.5} left={10} height={194} />
        </Wrapper>
	)
}

export default Background
