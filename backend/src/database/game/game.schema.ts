import { Schema } from 'mongoose'

const game = new Schema({
    user: { type: String, required: true },
    suddios: { type: Number, required: true },
    tear: { type: Number, required: true },
    wisdom: { type: Number, required: true },
    commerce: {type: Number, required: true },
    magic: { type: Number, required: true },
    currency: {type: Number, required: true}
})

export default game