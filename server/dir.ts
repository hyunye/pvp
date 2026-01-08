import path, { ParsedPath } from 'path'
import config from './config.json' with {type: 'json'}

export const mainDir = path.resolve()
export const serverDir = path.join(mainDir, 'server')
export const assetDir = config.debug ? path.join(mainDir, 'asset') : path.join(mainDir, 'dist', 'asset')
export const srcDir = config.debug ? path.join(assetDir, 'src') : path.join(mainDir, 'dist', 'src')