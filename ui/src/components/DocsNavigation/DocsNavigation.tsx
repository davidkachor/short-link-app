import React from 'react'
import { DocsNav, DocsNavList, DocsNavLink, DocsLink } from './DocsNavigation.style'

const DocsNavigation = () => {
	return <DocsNav>
        <DocsNavList>
            <DocsLink to='/docs'>Getting started</DocsLink>
            <DocsNavLink to='/docs/models'>Models</DocsNavLink>
            <DocsNavLink to='/docs/links'>Links Data</DocsNavLink>
        </DocsNavList>
    </DocsNav>
}

export default DocsNavigation
