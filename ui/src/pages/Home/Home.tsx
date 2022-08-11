import React from 'react'
import { MainWrapper, Header } from './Home.style'
import ShortLinkForm from '../../components/ShortLinkForm/ShortLinkForm'
import CopyLinkButton from '../../components/CopyLinkButton/CopyLinkButton'

const Home = () => {
	return (
		<MainWrapper>
			<Header>
				Get the <span>short</span> link as you go 👋
			</Header>
			<ShortLinkForm />
			<CopyLinkButton text={'Example text'} />
		</MainWrapper>
	)
}

export default Home
