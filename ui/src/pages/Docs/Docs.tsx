import React from 'react'
import { DocsWrapper } from './Docs.style'
import DocsNavigation from '../../components/DocsNavigation/DocsNavigation'
import DocsRouteList from "../../routes/DocsRouteList";

const Docs = () => {
	return (
		<DocsWrapper>
			<DocsNavigation />
			<DocsRouteList/>
		</DocsWrapper>
	)
}

export default Docs
