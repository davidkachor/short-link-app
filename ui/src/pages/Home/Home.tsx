import React, { useState } from 'react'
import { MainWrapper, Header } from './Home.style'
import LinkForm, {
	ShortFormSubmitHandler,
} from '../../components/LinkForm/LinkForm'
import CopyLinkButton from '../../components/CopyLinkButton/CopyLinkButton'
import apiPostLink from '../../api/api-post-link'
import trimUrl from '../../helpers/trim-url'
import useNotification from '../../hooks/useNotification'
import Notification from '../../components/Notification/Notification'

const Home = () => {
	const [isSubmitted, setIsSubmitted] = useState(false)
	const [url, setUrl] = useState('')
	const [error, setError] = useState('')
	const { notificationIsShow, isGoingToClose, showNotification } =
		useNotification(400)

	const submitHandler: ShortFormSubmitHandler = async value => {
		const data = await apiPostLink(value)
		if ('error' in data) {
			setError(data.error)
			showNotification()
		} else {
			if ('short' in data) setUrl(trimUrl(data.short))
			setIsSubmitted(true)
		}
	}

	return (
		<MainWrapper>
			<Header>
				Get the <span>short</span> link as you go 👋
			</Header>
			<LinkForm buttonTitle="Short me!" onSubmit={submitHandler} />
			{isSubmitted && <CopyLinkButton text={url} />}
			{notificationIsShow && (
				<Notification
					text={error}
					type={'negative'}
					isGoingToClose={isGoingToClose}
				/>
			)}
		</MainWrapper>
	)
}

export default Home
