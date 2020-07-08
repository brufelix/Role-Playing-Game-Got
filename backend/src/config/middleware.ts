import { Application } from 'express'
import session from 'express-session'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import cors from 'cors'

export default (app: Application): void => {
    app.use(cors({
      origin: '*'  
    }))
    app.use(bodyParser.urlencoded({ extended: true }))
    app.use(bodyParser.json())
    app.use(cookieParser())
    app.use(session({
      secret: "sheldon",
      resave: false,
      saveUninitialized: false,
      cookie: {
        expires: new Date((new Date()).getTime() + 24*60*60*1000)
      }
    }))
}