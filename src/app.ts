// src/app.ts

import express from 'express'
import config from '../config/default'
import routes from './routes' // 路由
import commonRes from '../utils/commonRes'
// import logger from '../utils/logger'
// console.log(logger)
const app = express()

app.use(express.json())

const PORT = config.port

// 启动
app.listen(PORT, async () => {
  // logger.log(`App is running at http://localhost:${PORT}`)
  routes(app)
})

app.get('/', (req, res) => {   
    commonRes(res, { word: 'Hello Shinp!!!'})
})
