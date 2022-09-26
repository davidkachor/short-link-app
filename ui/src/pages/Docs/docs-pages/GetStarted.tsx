import React from 'react'
import DocsText from '../../../components/DocsText/DocsText'
import BASE_URL from "../../../api/base-url";

const GetStarted = () => {
	return (
		<DocsText>
			<h1>Get started</h1>
			<h2>Base URL</h2>
			<p>{BASE_URL}/api/</p>
		</DocsText>
	)
}

export default GetStarted
