import React from 'react'
import DocsText from '../../../components/DocsText/DocsText'

const Models = () => {
	return (
		<DocsText>
			<h1>Models</h1>
			<h2>Link model</h2>
			<code>
				<p>{'{'}</p>
				<span>
					<p>id: number </p>
					<p>hash: string</p>
					<p>original: string</p>
					<p>createdAt: string</p>
					<p>updatedAt: string</p>
				</span>
				<p>{'}'}</p>
			</code>
			<p>
				<b>ID</b>, <b>createdAt</b> and <b>updatedAt</b> are generated
				automatically by SQLite.
			</p>
			<p>
				<b>ORIGINAL</b> is an original link which being redirected to by passing
				the localstorage:5000/<b>HASH</b>.
			</p>
			<h2>Error model</h2>
			<p>You get it when some error occurs</p>
			<code>
				<p>{'{'}</p>
				<span>
					<p>status: number</p>
					<p>error: string</p>
				</span>
				<p>{'}'}</p>
			</code>

			<h2>List</h2>
			<p>Array(Model)</p>
			<p>
				<b>Example:</b>
			</p>
			<code>
				[
				<br />
				{'{'}
				<span>
					<p>id: 1,</p>
					<p>hash: &quot;iGfBXSEdU&quot;,</p>
					<p>original: &quot;https://www.google.com&quot;,</p>
					<p>createdAt: &quot;2022-08-18T11:24:35.152Z&quot;,</p>
					<p>updatedAt: &quot;2022-08-18T11:24:35.152Z&quot;</p>
				</span>
				{'}'}
				<br />
				{'{'}
				<span>
					<p>id: 2,</p>
					<p>hash: &quot;NEKMmUIcv&quot;,</p>
					<p>
						original: &quot;https://github.com/davidkachor/short-link-app&quot;,
					</p>
					<p>createdAt: &quot;2022-08-18T12:17:12.102Z&quot;,</p>
					<p>updatedAt: &quot;2022-08-18T13:36:12.121Z&quot;</p>
				</span>
				{'}'}
				<p>.</p>
				<p>.</p>
				<p>.</p>]
			</code>
		</DocsText>
	)
}

export default Models
