import React, { useState } from 'react'
import { PageWrapper, HeaderStyled } from './ValidateLink.style'
import LinkForm, {
	ShortFormSubmitHandler,
} from '../../components/LinkForm/LinkForm'
import CopyLinkButton from '../../components/CopyLinkButton/CopyLinkButton'
import apiGetOriginal from '../../api/api-get-original'
import getHash from '../../helpers/get-hash'
import trimUrl from '../../helpers/trim-url'
import useNotification from '../../hooks/useNotification'

const ValidateLink = () => {
	const [url, setUrl] = useState('')
	const [isSubmitted, setIsSubmitted] = useState(false)
	const { Notification, showNotification } = useNotification(4000, 'negative')

	const submitHandler: ShortFormSubmitHandler = async value => {
		const data = await apiGetOriginal(getHash(value))
		if ('error' in data) {
			showNotification(data.error)
		} else {
			if ('original' in data) setUrl(trimUrl(data.original))
			setIsSubmitted(true)
		}
	}

	return (
		<PageWrapper>
			<HeaderStyled>
				Validate a <span>short</span> link to get the original one 💪
			</HeaderStyled>
			<LinkForm buttonTitle="Validate me!" onSubmit={submitHandler} />
			{isSubmitted && <CopyLinkButton text={url} />}
			<Notification />
		</PageWrapper>
	)
}

export default ValidateLink
