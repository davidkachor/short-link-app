import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

import sequelize from './config/sequelize'
import linkRouter from '@routes/link.router'
import redirectRouter from '@routes/redirect.router'

dotenv.config()

sequelize
	.authenticate()
	.then(() => console.log('Connection has been established successfully.'))
	.catch(err => console.error('Unable to connect to the database:', err))

const PORT = process.env.PORT || 5000
const server = express()

server.use(cors())
server.use('/links', linkRouter)
server.use('/', redirectRouter)

server.listen(PORT, () => console.log(`Server works on port ${PORT}`))
