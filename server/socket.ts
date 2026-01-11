import { Server } from 'socket.io'
import { server } from './server.js'

export const socket = new Server(server)