import e from "express";
import shortid from 'shortid'

import linkModel, {LinkItem} from "@models/link.model";

export interface TypedRequestBody<T> extends e.Request {
    body: T
}

export function addLink(req: TypedRequestBody<{url?: string}>, res: e.Response) {
    console.log(req.body)
    if (req.body.url) {
        if (linkModel.find(e => e.original === req.body.url)) {
            return res.status(200).json(linkModel.find(e => e.original === req.body.url))
        }

        let hash = shortid.generate()
        while (linkModel.find(e => e.hash === hash)) {
            hash = shortid.generate()
        }
        const protocol = req.protocol
        const origin = req.get('host')

        if (origin) {
            const link = `${protocol}://${origin}/${hash}`
            const item: LinkItem = {hash, original: req.body.url, short: link}
            linkModel.push(item)
            res.status(200).json(item)
        } else {
            res.status(500).json({error: 'Something went wrong'})
        }
    } else {
        res.status(400).json({error: 'Invalid request. Write valid body with key \'url\''})
    }
}

export function showLinkList(req: e.Request, res: e.Response) {
    res.status(200).json(linkModel)
}

export function showLinkItem(req: e.Request, res: e.Response) {
    const { hash } = req.params
    const item = linkModel.find(e => e.hash === hash)

    if (item) {
        res.status(200).json(item)
    } else res.status(404).json({error: 'This link doesn\'t exist'})
}

