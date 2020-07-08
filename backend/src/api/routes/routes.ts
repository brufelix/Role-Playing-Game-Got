import { Application } from 'express'
import { createUser, verifyPassword, getAllUsers, deleteUser, updateUser } from '../controllers/usersServices'

export default (app : Application): void => {
    app.post("/signin", (req, res) => {
        if (verifyPassword(req.body)) {
            res.status(200).send("ok")
        } else {
            res.status(302).redirect("/signin")
        }
    })
    
    app.get("/users", (req, res) => {
        getAllUsers().then(users => res.status(200).send(users))
    })

    app.post("/signup", (req, res) => {
        createUser(req.body).then(_ => res.status(200).send())
    })

    app.delete("/:id", (req, res) => {
        deleteUser(req.params.id)
            .then(_ => res.status(200).send())
    })

    app.put("/", (req, res) => {
        updateUser(`${req.query.id}`,`${req.query.namehouse}`)
            .then(_ => res.status(200).send())
    })
}
