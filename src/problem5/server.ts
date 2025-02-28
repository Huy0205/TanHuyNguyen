import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import router from './routes'
import { errorHandler } from './middlewares'

import { connectDB } from './configs/db'

const app = express()
const port = process.env.PORT

connectDB()

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors())
app.use(router)
app.use(errorHandler)

app.listen(port, () => {
    console.log('Server is running on port', port)
})