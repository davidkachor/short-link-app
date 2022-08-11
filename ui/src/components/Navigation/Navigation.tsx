import React from 'react'
import {
	NavigationStyled,
	LinkContainer,
	ValidateLink,
	DocsLink,
} from './Navigation.style'
import Logo from './Logo/Logo'

const Navigation = () => {
	return (
		<NavigationStyled>
			<Logo />
			<LinkContainer>
				<ValidateLink href="#">Validate link</ValidateLink>
				<DocsLink href="#">docs</DocsLink>
			</LinkContainer>
		</NavigationStyled>
	)
}

export default Navigation
