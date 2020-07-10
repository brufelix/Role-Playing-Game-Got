import { Application } from 'express'
import { signup, signin } from '../controllers/usersServices'

export default (app : Application): void => {
    app.post("/signin", signin)
    
    app.post("/signup", signup)
    
}
