import { Request, Response } from 'express'
import { UserModel } from '../../database/users/users.model'
import { IUser } from '../../database/users/users.types'
import bcrypt from 'bcrypt'

export async function createUser(request: Request, response: Response) {
    let user: IUser = request.body 
    const saltRounds = 10
    
    bcrypt.genSalt(saltRounds)
        .then(salt => { return bcrypt.hash(user.password, salt) })
        .then(hash => {
            user.password = hash             
            const newUser = new UserModel({ ...user })
            newUser.save() 
        })
        .then(_ => response.status(200).send())
}

export async function verifyPassword(request: Request, response: Response){
    let user: IUser = request.body

    UserModel.findOne({ email: user.email }, (err, result) => {
        if (result) {
            bcrypt.compare(user.password, result.password)
            .then(res => {
                if (res) {
                    response.status(200).send("valid")
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