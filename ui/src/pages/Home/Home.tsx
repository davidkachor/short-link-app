import React from 'react'
import { MainWrapper, Header } from './Home.style'
import LinkForm, {
	ShortFormSubmitHandler,
} from '../../components/LinkForm/LinkForm'
import CopyLinkButton from '../../components/CopyLinkButton/CopyLinkButton'

const Home = () => {
	const submitHandler: ShortFormSubmitHandler = value => {
		console.log(value)
	}

	return (
		<MainWrapper>
			<Header>
				Get the <span>short</span> link as you go 👋
			</Header>
			<LinkForm buttonTitle="Short me!" onSubmit={submitHandler} />
			<CopyLinkButton text={'Example text'} />
		</MainWrapper>
	)
}

export default Home
