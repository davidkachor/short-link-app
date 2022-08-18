import React from 'react'
import DocsText from '../../../components/DocsText/DocsText'

const LinkData = () => {
	return (
		<DocsText>
			<h1>Link Data</h1>
			<h2>Get list of link items</h2>
			<p>Get list of links sorted by date of creation.</p>
			<p>
				<b>GET</b> http://localhost:5000/api/links
			</p>
			<p>
				As response you will get <b>Array(Link model)</b>.
			</p>

			<h2>Get a particular link item by HASH</h2>
			<p>Get a particular link model using hash.</p>
			<p>
				<b>GET</b> http://localhost:5000/api/links/:hash
			</p>
			<p>
				As response you will get <b>Link model</b>. If it does not exist you
				will get an error.
			</p>

			<h2>Create a new link item</h2>
			<p>
				Creates a new <b>Link model</b>, requires a body with property{' '}
				<b>URL</b>, converted to JSON. Do not forget about{' '}
				<b>Content-Type: application/json</b> header!
			</p>
			<p>
				<b>POST</b> http://localhost:5000/api/links
			</p>
			<p>Body example:</p>
			<code>
				<p>{'{'}</p>
				<span>
					<p>url: &quot;https://www.facebook.com&quot;</p>
				</span>
				<p>{'}'}</p>
			</code>
			<p>
				As response you get an already created <b>Link model</b>. If model with{' '}
				<b>URL</b> of request body already exists you will get it as response.
				If your url does not pass serverside validation, you will get an error.
			</p>
			<h2>Delete link item</h2>
			<p>
				Deletes item by <b>HASH</b>.
			</p>
			<p>
				<b>DELETE</b> http://localhost:5000/api/links/:hash
			</p>
			<p>As response you will get 1 (success) or 0.</p>
		</DocsText>
	)
}

export default LinkData
