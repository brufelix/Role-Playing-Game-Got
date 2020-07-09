import { Application } from 'express'
import { createUser, verifyPassword, deleteUser, updateUser } from '../controllers/usersServices'

export default (app : Application): void => {
    app.post("/signin", verifyPassword)
    
    app.post("/signup", createUser)
    
    app.delete("/:id", (req, res) => {
        deleteUser(req.params.id)
            .then(_ => res.status(200).send())
    })

    app.put("/", (req, res) => {
        updateUser(`${req.query.id}`,`${req.query.namehouse}`)
            .then(_ => res.status(200).send())
    })
}
