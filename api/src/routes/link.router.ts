import express from 'express'
import {
	readLinkItem,
	readLinkList,
	createLink,
} from '../controllers/link.controller'

const linkRouter = express.Router()

linkRouter.use(express.json())
linkRouter.get('/', readLinkList)
linkRouter.post('/', createLink)
linkRouter.get('/:hash', readLinkItem)

export default linkRouter
