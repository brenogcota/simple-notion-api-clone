import express from 'express'
import { baseURL, PORT } from './config/constants'
import router from './routes'

const app = express()

app.use(express.json())
app.use(router)

app.listen(PORT, () => console.log('Notion api ready at: ' + baseURL))
