import React from 'react'
import Navigation from './components/Navigation/Navigation'
import styled from 'styled-components'
import Home from './pages/Home/Home'

const Container = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
`

function App() {
	return (
		<Container>
			<Navigation />
			<Home />
		</Container>
	)
}

export default App
