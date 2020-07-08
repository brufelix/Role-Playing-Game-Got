import { Application } from 'express'
import {  } from 'express-session'
import bodyParser from 'body-parser'
import cors from 'cors'

export default (server: Application): void => {
    server.use(cors({
      origin: '*'  
    }))
    server.use(bodyParser.urlencoded({ extended: true }))
    server.use(bodyParser.json())
}