import React, { useState } from 'react'
import { MainWrapper, Header } from './Home.style'
import LinkForm, {
	ShortFormSubmitHandler,
} from '../../components/LinkForm/LinkForm'
import CopyLinkButton from '../../components/CopyLinkButton/CopyLinkButton'
import apiPostLink from '../../api/api-post-link'
import useNotification from '../../hooks/useNotification'

const Home = () => {
	const [isSubmitted, setIsSubmitted] = useState(false)
	const [url, setUrl] = useState('')
	const { Notification, showNotification } = useNotification(4000, 'negative')

	const submitHandler: ShortFormSubmitHandler = async value => {
		const data = await apiPostLink(value)
		if ('error' in data) {
			showNotification(data.error)
		} else {
			if ('hash' in data) setUrl(`localhost:5000/${data.hash}`)
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
			<Notification />
		</MainWrapper>
	)
}

export default Home
