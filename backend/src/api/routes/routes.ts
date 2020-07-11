import { Application } from 'express'
import { signup, signin, getHouse } from '../controllers/usersServices'
import { insertValues, getValuesOfGame } from '../controllers/gameServices'

export default (app : Application): void => {
    app.post("/signin", signin)
    app.post("/signup", signup)
    app.post("/houses", getHouse)
    app.post("/game/values", insertValues)
    app.post("/game", getValuesOfGame)
}
