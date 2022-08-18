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
			<Route
				path="/"
				element={
					<React.Suspense>
						<GetStarted />
					</React.Suspense>
				}
			/>
			<Route
				path="/models"
				element={
					<React.Suspense>
						<Models />
					</React.Suspense>
				}
			/>
			<Route
				path="/links"
				element={
					<React.Suspense>
						<LinkData originURL={'http://localhost:5000'}/>
					</React.Suspense>
				}
			/>
			<Route
				path="/*"
				element={
					<React.Suspense>
						<Navigate to="/docs" />
					</React.Suspense>
				}
			/>
		</Routes>
	)
}

export default DocsRouteList
