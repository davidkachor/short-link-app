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
				<ValidateLink to="/validate">Validate link</ValidateLink>
				<DocsLink to="/docs">docs</DocsLink>
			</LinkContainer>
		</NavigationStyled>
	)
}

export default React.memo(Navigation)
