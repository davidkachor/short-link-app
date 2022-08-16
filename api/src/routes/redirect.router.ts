import express from "express";
import linkModel from "@models/link.model";

const redirectRouter = express.Router()

redirectRouter.get('/:hash', (req, res) => {
    const {hash} = req.params
    const item = linkModel.find(e => e.hash === hash)

    if (item) {
        res.redirect(item.original)
    } else {
        res.redirect('/')
    }

})

export default redirectRouter