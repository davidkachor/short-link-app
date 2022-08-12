import React from 'react'
import { PageWrapper, HeaderStyled } from './ValidateLinkPage.style'
import LinkForm, {
	ShortFormSubmitHandler,
} from '../../components/LinkForm/LinkForm'
import CopyLinkButton from '../../components/CopyLinkButton/CopyLinkButton'

const ValidateLinkPage = () => {
	const submitHandler: ShortFormSubmitHandler = value => {
		console.log(value)
	}

	return (
		<PageWrapper>
			<HeaderStyled>
				Validate a <span>short</span> link to get the original one 💪
			</HeaderStyled>
			<LinkForm buttonTitle="Validate me!" onSubmit={submitHandler} />
			<CopyLinkButton text={'Example text'} />
		</PageWrapper>
	)
}

export default ValidateLinkPage
