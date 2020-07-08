import { Schema } from 'mongoose'
import { findByHouseName, findOneOrCreate } from './users.statics'
import { sameLastNameHouse, setNewHouse } from './users.methods'


const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String, 
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    house: {
        type: String,
        required: true
    },
})

UserSchema.statics.findOne = findOneOrCreate
UserSchema.statics.findByHouseName = findByHouseName

UserSchema.methods.sameLastNameHouse = sameLastNameHouse
UserSchema.methods.setNewHouse = setNewHouse

export default UserSchema