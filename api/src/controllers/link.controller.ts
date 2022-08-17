import e from 'express'
import shortid from 'shortid'

import Link from '@models/link.model'

export interface TypedRequestBody<T> extends e.Request {
	body: T
}

Link.sync().then(() => console.log('Database successfully connected'))

export async function createLink(
	req: TypedRequestBody<{ url?: string }>,
	res: e.Response
) {
	try {
		const { url } = req.body
		if (!url)
			return res
				.status(400)
				.json({ error: "Invalid request. Write valid body with key 'url'" })

		const linkItem = await Link.findOne({ where: { original: url } })

		if (linkItem) return res.status(200).json(linkItem)

		const hash = shortid.generate()
		const origin = req.get('host')

		if (!origin) return res.status(500).json({ error: 'Something went wrong' })

		const link = `${origin}/${hash}`
		const newItem = { hash, original: url, short: link }
		await Link.create(newItem)
		const fullItem = await Link.findOne({ where: { hash } })
		res.status(201).json(fullItem)
	} catch (error) {
		res.status(500).json({ error: String(error) })
	}
}

export async function readLinkList(req: e.Request, res: e.Response) {
	try {
		const items = await Link.findAll({})
		res.status(200).json(items)
	} catch (error) {
		res.status(500).json({ error: String(error) })
	}
}

export async function readLinkItem(req: e.Request, res: e.Response) {
	try {
		const { hash } = req.params
		const item = await Link.findOne({ where: { hash } })

		if (!item) return res.status(404).json({ error: "This link doesn't exist" })

		res.status(200).json(item)
	} catch (error) {
		res.status(500).json({ error: String(error) })
	}
}
