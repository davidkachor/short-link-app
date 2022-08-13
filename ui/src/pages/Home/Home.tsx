import React, { useState } from 'react'
import { MainWrapper, Header } from './Home.style'
import LinkForm, {
	ShortFormSubmitHandler,
} from '../../components/LinkForm/LinkForm'
import CopyLinkButton from '../../components/CopyLinkButton/CopyLinkButton'

const Home = () => {
	const [isSubmitted, setIsSubmitted] = useState(false)
	const submitHandler: ShortFormSubmitHandler = value => {
		console.log(value)
		setIsSubmitted(true)
	}

	return (
		<MainWrapper>
			<Header>
				Get the <span>short</span> link as you go 👋
			</Header>
			<LinkForm buttonTitle="Short me!" onSubmit={submitHandler} />
			{isSubmitted && (
				<CopyLinkButton text={'https://www.youtube.com/watch?v=dQw4w9WgXcQ'} />
			)}
		</MainWrapper>
	)
}

export default Home
