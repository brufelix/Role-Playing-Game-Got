import { Application } from 'express'
import { createUser, getAllUsers, deleteUser, updateUser } from '../controllers/usersServices'

export default (server : Application): void => {
    server.get("/users", (req, res) => {
        getAllUsers().then(users => res.status(200).send(users))
    })

    server.post("/signup", (req, res) => {
        createUser(req.body).then(_ => res.status(200).send())
    })

    server.delete("/:id", (req, res) => {
        deleteUser(req.params.id)
            .then(_ => res.status(200).send())
    })

    server.put("/", (req, res) => {
        updateUser(`${req.query.id}`,`${req.query.namehouse}`)
            .then(_ => res.status(200).send())
    })
}
