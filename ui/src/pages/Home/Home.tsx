import React, { useState } from 'react'
import { MainWrapper, Header } from './Home.style'
import LinkForm, {
	ShortFormSubmitHandler,
} from '../../components/LinkForm/LinkForm'
import CopyLinkButton from '../../components/CopyLinkButton/CopyLinkButton'
import apiPostLink from '../../api/api-post-link'
import useNotification from '../../hooks/useNotification'
import Background from "../../components/Background/Background";
import BASE_URL from "../../api/base-url";

const Home = () => {
	const [buttonShow, setButtonShow] = useState(false)
	const [url, setUrl] = useState('')
	const [pending, setPending] = useState(true)
	const { Notification, showNotification } = useNotification(4000, 'negative')

	const submitHandler: ShortFormSubmitHandler = async value => {
		setButtonShow(true)
		const data = await apiPostLink(value)
		if ('error' in data) {
			showNotification(data.error)
			setButtonShow(false)
		} else {
			if ('hash' in data) setUrl(`${BASE_URL}/${data.hash}`)
			setPending(false)
		}
	}

	return (
		<MainWrapper>
			<Header>
				Get the <span>short</span> link as you go 👋
			</Header>
			<LinkForm buttonTitle="Short me!" onSubmit={submitHandler} />
			{buttonShow && <CopyLinkButton text={url} pending={pending}/>}
			<Background/>
			<Notification />
		</MainWrapper>
	)
}

export default Home
