import express from "express";
import {showLinkItem,showLinkList,addLink} from '../controllers/link.controller'

const linkRouter = express.Router()

linkRouter.use(express.json())
linkRouter.get('/', showLinkList)
linkRouter.post('/', addLink)
linkRouter.get('/:hash', showLinkItem)

export default linkRouter