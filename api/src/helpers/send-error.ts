import e from 'express'
import StatusCodeError from './errors/StatusCodeError'

function sendError(req: e.Request, res: e.Response, error: any) {
	if (error instanceof StatusCodeError) {
		res
			.status(error.statusCode)
			.json({ status: error.statusCode, error: error.message })
	} else res.status(500).json({ status: 500, error: String(error) })
}

export default sendError
