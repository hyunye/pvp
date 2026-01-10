import express from 'express'
import http from 'http'
import path from 'path'
import { assetDir, srcDir } from './dir.js'
import config from './config.json' with {type: 'json'}

export const app = express()
export const server = http.createServer(app)
app.use('/src', express.static(srcDir))

app.get('/', (req, res) => {
    res.sendFile(path.join(assetDir, 'index.html'))
})

server.listen(config.port, () => {
    console.log(`${config.port} 포트로 연결중 [ http://localhost:${config.port} ]`)
})