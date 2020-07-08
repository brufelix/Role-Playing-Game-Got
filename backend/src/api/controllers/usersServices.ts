import { UserModel } from '../../database/users/users.model'
import { IUser } from '../../database/users/users.types'

export async function createUser(user: IUser) {
    const newUser = new UserModel({
        ...user
    })
    newUser.save()
}

export async function verifyUser(user: IUser){
    let boolean = false
    UserModel.find({email: user.email}, (err, result) => {
        if (result[0].email && result[0].password === user.password){
            boolean = true
        }
    } )
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