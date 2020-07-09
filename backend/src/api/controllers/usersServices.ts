import { Request, Response } from 'express'
import jwt from 'jwt-simple'
import bcrypt from 'bcrypt'
import { UserModel } from '../../database/users/users.model'
import { IUser } from '../../database/users/users.types'

const authSecret = "fa#*sfaj12$5%%fas"

export async function signup(request: Request, response: Response) {
    let user: IUser = request.body 
    const saltRounds = 10
    
    bcrypt.genSalt(saltRounds)
        .then(salt => { return bcrypt.hash(user.password, salt) })
        .then(hash => {
            user.password = hash             
            const newUser = new UserModel({ ...user })
            newUser.save()
            return newUser._id
        })
        .then(_id => {
            const payload = {id: _id}
            response.status(200).json({
                auth: true,
                token: jwt.encode(payload, authSecret)
            }) 
        })
}

export async function signin(request: Request, response: Response){
    let user: IUser = request.body

    UserModel.findOne({ email: user.email }, (err, result) => {
        if (result) {
            bcrypt.compare(user.password, result.password)
            .then(res => {
                const payload = {id: result._id}
                if (res) {
                    response.status(200).json({
                        auth: true,
                        token: jwt.encode(payload, authSecret)
                    })
                } else {
                    response.status(401).send("Erro na senha do Usuário.")
                }
            })
        } else {
            response.status(400).send("E-mail não encontrado.")
        }
    })
}

export async function deleteUser(id: string) {
    await UserModel.deleteOne({_id: id})
}

export async function updateUser(id: string, nameHouse: string) {
    await UserModel.updateOne({ _id: id }, {$set: { house: nameHouse }})
}