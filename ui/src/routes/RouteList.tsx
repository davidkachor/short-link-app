import React from 'react'
import { Routes, Route } from 'react-router-dom'

const Home = React.lazy(() => import('../pages/Home/Home'))
const ValidateLinkPage = React.lazy(
	() => import('../pages/ValidateLink/ValidateLink')
)
const Docs = React.lazy(() => import('../pages/Docs/Docs'))
const Explorer = React.lazy(() => import('../pages/Explorer/Explorer'))
const NotFound404 = React.lazy(() => import('../pages/NotFound404/NotFound404'))

const RouteList = () => {
	return (
		<Routes>
			<Route
				path="/"
				element={
					<React.Suspense>
						<Home />
					</React.Suspense>
				}
			/>
			<Route
				path="/validate"
				element={
					<React.Suspense>
						<ValidateLinkPage />
					</React.Suspense>
				}
			/>
			<Route
				path="/docs/*"
				element={
					<React.Suspense>
						<Docs />
					</React.Suspense>
				}
			/>
			<Route
				path="/explorer"
				element={
					<React.Suspense>
						<Explorer />
					</React.Suspense>
				}
			/>
			<Route
				path="*"
				element={
					<React.Suspense>
						<NotFound404 />
					</React.Suspense>
				}
			/>
		</Routes>
	)
}

export default RouteList
