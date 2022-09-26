import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

import sequelize from './config/sequelize'
import redirectRouter from '@routes/redirect.router'
import apiRouter from '@routes/api.router'

dotenv.config()

sequelize
	.authenticate()
	.catch(err => console.error('Unable to connect to the database:', err))

const PORT = process.env.PORT || 5000
const server = express()

server.use(cors())
server.use('/api', apiRouter)
server.use('/', redirectRouter)

server.listen(PORT, () => console.log(`Server works on port ${PORT}`))
