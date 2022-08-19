import e from 'express'
import shortid from 'shortid'

import Link from '@models/Link.model'
import isUrlValid from '../helpers/is-url-valid'
import StatusCodeError from '../helpers/errors/StatusCodeError'
import sendError from '../helpers/send-error'

export interface TypedRequestBody<T> extends e.Request {
	body: T
}

Link.sync().then(() => console.log('Database successfully connected'))

export async function createLinkItem(
	req: TypedRequestBody<{ url?: string }>,
	res: e.Response
) {
	try {
		const { url } = req.body
		// if request body invalid return error
		if (!url)
			throw new StatusCodeError(
				400,
				"Invalid request. Write valid body with key 'url'"
			)
		// if link invalid return error
		if (!isUrlValid(url)) throw new StatusCodeError(400, 'Your url is invalid')
		// if this link already shortened, return its item
		const linkItem = await Link.findOne({ where: { original: url } })
		if (linkItem) return res.status(200).json(linkItem)

		// create link and add it to database
		const hash = shortid.generate()
		const origin = req.get('host')

		if (!origin) throw new StatusCodeError(500, 'Something went wrong')

		const newItem = { hash, original: url }
		await Link.create(newItem)
		//return added item
		const addedItem = await Link.findOne({ where: { hash } })
		res.status(201).json(addedItem)
	} catch (error) {
		sendError(req, res, error)
	}
}

export async function readLinkList(req: e.Request, res: e.Response) {
	try {
		const items = await Link.findAll({})
		res.status(200).json(items)
	} catch (error) {
		sendError(req, res, error)
	}
}

export async function readLinkItem(req: e.Request, res: e.Response) {
	try {
		const { hash } = req.params
		const item = await Link.findOne({ where: { hash } })

		if (!item) throw new StatusCodeError(404, "This link doesn't exist")

		res.status(200).json(item)
	} catch (error) {
		sendError(req, res, error)
	}
}

export async function deleteLinkItem(req: e.Request, res: e.Response) {
	try {
		const { hash } = req.params
		const item = await Link.findOne({ where: { hash } })
		if (!item) throw new StatusCodeError(404, "This link doesn't exist")
		const answer = await Link.destroy({ where: { hash } })
		res.status(200).json(answer)
	} catch (error) {
		sendError(req, res, error)
	}
}
