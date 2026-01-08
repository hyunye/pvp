import fs from 'fs'

const config = JSON.parse(fs.readFileSync('./server/config.json', 'utf-8'))
config.debug = false
fs.writeFileSync('./server/config.json', JSON.stringify(config, null, '\t'), 'utf-8')

import('./server/index.js')