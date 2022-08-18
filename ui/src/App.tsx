import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import RouteList from './routes/RouteList'
import Navigation from './components/Navigation/Navigation'
import styled from 'styled-components'

const Container = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
	margin: 0 auto;

	@media (max-width: 768px) {
		width: calc(100% - 20px);
	}
`

function App() {
	return (
		<Container>
			<Router>
				<Navigation />
				<RouteList />
			</Router>
		</Container>
	)
}

export default App
