import styled from 'styled-components'
import { ButtonLink } from '../Button/Button.style'
import { NavLink } from 'react-router-dom'

export const NavigationStyled = styled.nav`
	display: flex;
	justify-content: space-between;
`

export const LinkContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 32px;

	@media (max-width: 768px) {
		gap: 10px;
	}
`

export const ValidateLink = styled(NavLink)`
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	line-height: 19px;
	color: #515151;
	text-align: center;

	&:hover {
		text-decoration: underline;
	}
	&.active {
		text-decoration: underline;
	}
`

export const DocsLink = styled(ButtonLink).attrs({
	'aria-label': 'documentation',
})`
	background: #f0b80d;
	border: 1px solid #ffd24b;
	box-shadow: 0 10px 34px #eac555;
	border-radius: 40px;
	color: #101010;

	&:hover {
		background: #fccf35;
	}

	@media (max-width: 768px) {
		padding: 15px;
	}
`
