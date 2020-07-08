import { Document } from 'mongoose'
import { IUserDocument } from './users.types'

export async function setNewHouse(this: IUserDocument, newHouse: string): Promise<void> {
    this.house = newHouse
}

export async function sameLastNameHouse(this: IUserDocument, nameHouse: string): Promise<Document[]> {
    const result = this.model("user").find({ house: { $eq: nameHouse } })

    if (result) {
        return result
    } else {
        return []
    }
}