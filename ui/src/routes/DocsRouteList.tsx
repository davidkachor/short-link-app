import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'

const GetStarted = React.lazy(
	() => import('../pages/Docs/docs-pages/GetStarted')
)
const Models = React.lazy(() => import('../pages/Docs/docs-pages/Models'))
const LinkData = React.lazy(() => import('../pages/Docs/docs-pages/LinkData'))

const DocsRouteList = () => {
	return (
		<Routes>
			<Route path="/" element={<GetStarted />} />
			<Route path="/models" element={<Models />} />
			<Route path="/links" element={<LinkData />} />
			<Route path="/*" element={<Navigate to="/docs" />} />
		</Routes>
	)
}

export default DocsRouteList
