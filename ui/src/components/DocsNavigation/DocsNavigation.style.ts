import styled from 'styled-components'
import { Link, NavLink } from 'react-router-dom'
import { ButtonLink } from '../Button/Button.style'

export const DocsNav = styled.nav`
	display: flex;
	flex-direction: column;
	padding: 10px 30px 10px 10px;
	border-right: grey 1px solid;

	@media (max-width: 500px) {
		border: none;
		padding: 0;
		margin-bottom: 20px;
	}
`

export const DocsNavList = styled.ul`
	position: sticky;
	top: 80px;
	list-style: none;
	display: flex;
	flex-direction: column;
	gap: 10px;

	@media (max-width: 500px) {
		position: relative;
		top: 0;
	}
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
	@media (max-width: 500px) {
		text-align: center;
	}
`

export const DocsNavLink = styled(NavLink)`
	color: black;
	padding: 10px;
	border-radius: 10px;
	font-size: 20px;
	transition: all 0.2s;
	top: 80px;

	&:hover {
		text-decoration: underline;
	}

	&.active {
		background-color: #dcdcdc;
	}
	@media (max-width: 500px) {
		text-align: center;
	}
`

export const ExplorerLink = styled(ButtonLink)`
	background: #f0b80d;
	border: 1px solid #ffd24b;
	box-shadow: 0 10px 34px #eac555;
	border-radius: 40px;
	color: #101010;
	margin-top: 20px;
	padding: 20px 10px;
	text-align: center;

	@media (max-width: 800px) {
		border-radius: 10px;
	}

	&:hover {
		background: #fccf35;
	}
`
