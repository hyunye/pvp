import path from 'path';
import config from './config.json' with { type: 'json' };
export const mainDir = path.resolve();
export const serverDir = path.join(mainDir, 'server');
export const distDir = config.debug ? mainDir : path.join(mainDir, 'dist');
export const pageDir = path.join(distDir, 'page');
export const srcDir = path.join(distDir, 'src');
