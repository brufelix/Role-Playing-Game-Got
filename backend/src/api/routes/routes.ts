import { Application } from 'express'
import { signup, signin, deleteUser, updateUser } from '../controllers/usersServices'

export default (app : Application): void => {
    app.post("/signin", signin)
    
    app.post("/signup", signup)
    
    app.delete("/:id", (req, res) => {
        deleteUser(req.params.id)
            .then(_ => res.status(200).send())
    })

    app.put("/", (req, res) => {
        updateUser(`${req.query.id}`,`${req.query.namehouse}`)
            .then(_ => res.status(200).send())
    })
}
