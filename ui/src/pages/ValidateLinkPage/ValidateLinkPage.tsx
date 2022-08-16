import React, { useState } from 'react'
import { PageWrapper, HeaderStyled } from './ValidateLinkPage.style'
import LinkForm, {
	ShortFormSubmitHandler,
} from '../../components/LinkForm/LinkForm'
import CopyLinkButton from '../../components/CopyLinkButton/CopyLinkButton'
import apiGetOriginal from '../../api/api-get-original'
import getHash from '../../helpers/get-hash'
import trimUrl from '../../helpers/trim-url'
import useNotification from '../../hooks/useNotification'
import Notification from '../../components/Notification/Notification'

const ValidateLinkPage = () => {
	const [url, setUrl] = useState('')
	const [error, setError] = useState('')
	const [isSubmitted, setIsSubmitted] = useState(false)
	const { notificationIsShow, showNotification, isGoingToClose } =
		useNotification(400)

	const submitHandler: ShortFormSubmitHandler = async value => {
		const data = await apiGetOriginal(getHash(value))
		console.log('handler')

		if ('error' in data) {
			console.log('has error')
			setError(data.error)
			showNotification()
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
			{notificationIsShow && (
				<Notification
					text={error}
					type={'negative'}
					isGoingToClose={isGoingToClose}
				/>
			)}
		</PageWrapper>
	)
}

export default ValidateLinkPage
