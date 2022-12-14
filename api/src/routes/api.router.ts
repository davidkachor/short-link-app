import express from 'express'
import linkRouter from '@routes/link.router'

const apiRouter = express.Router()

apiRouter.get('/', (req, res) => {
	const { protocol } = req
	const origin = req.get('host')
	if (!origin)
		return res.status(500).json({ status: 500, error: 'Something went wrong' })
	res.status(200).json({ links: `${protocol}://${origin}/api/links` })
})
apiRouter.use('/links', linkRouter)
apiRouter.get('/*', (req, res) => {
	res.status(400).json({ status: 400, error: 'This model does not exist' })
})

export default apiRouter
