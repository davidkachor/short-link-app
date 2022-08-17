import express from 'express'
import Link from '@models/Link.model'

const redirectRouter = express.Router()

// eslint-disable-next-line @typescript-eslint/no-misused-promises
redirectRouter.get('/:hash', async (req, res) => {
	try {
		const { hash } = req.params
		const item = await Link.findOne({ where: { hash } })

		if (!item || !item.original) return res.status(301).redirect('/')
		res.status(301).redirect(item.original)
	} catch (error) {
		res.status(500).json({ error: String(error) })
	}
})

export default redirectRouter
