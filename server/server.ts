import express from 'express'
import path from 'path'
import { pageDir, srcDir } from './dir.js'
import config from './config.json' with {type: 'json'}

const app = express()
app.use('/src', express.static(srcDir))

app.get('/', (req, res) => {
    res.sendFile(path.join(pageDir, 'index.html'))
})

app.listen(config.port, () => {
    console.log(`${config.port} 포트로 연결중 [ http://localhost:${config.port} ]`)
})