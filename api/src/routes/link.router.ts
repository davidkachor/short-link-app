import express from 'express'
import {
	readLinkItem,
	readLinkList,
	createLinkItem,
	deleteLinkItem,
} from '../controllers/link.controller'

const linkRouter = express.Router()

linkRouter.use(express.json())
linkRouter.get('/', readLinkList)
linkRouter.post('/', createLinkItem)
linkRouter.get('/:hash', readLinkItem)
linkRouter.delete('/:hash', deleteLinkItem)

export default linkRouter
