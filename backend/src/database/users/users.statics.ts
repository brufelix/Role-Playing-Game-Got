import { IUserDocument, IUserModel, IUser } from './users.types'

export async function findOneOrCreate(this: IUserModel, user: IUser ): Promise<IUserDocument> {
    const record = await this.findOne({ email: user.email })
    if (record) {
        return record
    } else {
        return this.create(user)
    }
}

export async function findByHouseName(this: IUserModel, nameHouse: string ): Promise<IUserDocument[]> {
    const result = await this.find({ house: { $eq: nameHouse } })
    if (result) {
        return result
    } else {
        return []
    }
} 