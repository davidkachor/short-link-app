import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home/Home'
import ValidateLinkPage from '../pages/ValidateLinkPage/ValidateLinkPage'
import NotFound404 from '../pages/NotFound404/NotFound404'

const RouteList = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/validate" element={<ValidateLinkPage />} />
			<Route path="*" element={<NotFound404 />} />
		</Routes>
	)
}

export default RouteList
