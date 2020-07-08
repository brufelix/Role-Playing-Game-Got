import { UserModel } from '../../database/users/users.model'
import { IUser } from '../../database/users/users.types'
import bcrypt from 'bcrypt'

export async function createUser(user: IUser) {
    const salt = bcrypt.genSaltSync()
    user.password = bcrypt.hashSync(user.password, salt)
    
    const newUser = new UserModel({
        ...user
    })
    newUser.save()
}

export async function verifyPassword(user: IUser){
    let boolean = null
    UserModel.findOne({email: user.email}, (err, result) => {
        if (result) {
            boolean = bcrypt.compareSync(user.password, result.password) ? true : false 
        } else {
            boolean = false
        }
    })
    return boolean
}

export async function getAllUsers() {
    let users = null
    await UserModel.find((err, result) => {
        users = result
    })
    return users
}

export async function deleteUser(id: string) {
    await UserModel.deleteOne({_id: id})
}

export async function updateUser(id: string, nameHouse: string) {
    await UserModel.updateOne({ _id: id }, {$set: { house: nameHouse }})
}