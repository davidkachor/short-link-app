import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home/Home'
import ValidateLink from "../pages/ValidateLink/ValidateLink";

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
						<ValidateLink />
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
