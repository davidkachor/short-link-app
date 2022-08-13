import React, { useState } from 'react'
import { PageWrapper, HeaderStyled } from './ValidateLinkPage.style'
import LinkForm, {
	ShortFormSubmitHandler,
} from '../../components/LinkForm/LinkForm'
import CopyLinkButton from '../../components/CopyLinkButton/CopyLinkButton'

const ValidateLinkPage = () => {
	const [isSubmitted, setIsSubmitted] = useState(false)

	const submitHandler: ShortFormSubmitHandler = value => {
		setIsSubmitted(true)
		console.log(value)
	}

	return (
		<PageWrapper>
			<HeaderStyled>
				Validate a <span>short</span> link to get the original one 💪
			</HeaderStyled>
			<LinkForm buttonTitle="Validate me!" onSubmit={submitHandler} />
			{isSubmitted && (
				<CopyLinkButton text={'https://www.youtube.com/watch?v=dQw4w9WgXcQ'} />
			)}
		</PageWrapper>
	)
}

export default ValidateLinkPage
