import styled from 'styled-components'
import { Link, NavLink } from 'react-router-dom'

export const DocsNav = styled.nav`
	display: flex;
	flex-direction: column;
	position: sticky;
	padding: 10px;
	border-radius: 8px;
`

export const DocsNavList = styled.ul`
	list-style: none;
	display: flex;
	flex-direction: column;
	gap: 10px;
`

export const DocsLink = styled(Link)`
	color: black;
	padding: 10px;
	border-radius: 10px;
	font-size: 20px;
	transition: all 0.2s;

	&:hover {
		text-decoration: underline;
	}
`

export const DocsNavLink = styled(NavLink)`
	color: black;
	padding: 10px;
	border-radius: 10px;
	font-size: 20px;
	transition: all 0.2s;

	&:hover {
		text-decoration: underline;
	}

	&.active {
		background-color: #dcdcdc;
	}
`
