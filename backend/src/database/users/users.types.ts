import { Document, Model } from 'mongoose'

export interface IUser {
    name: string
    email: string
    password: string
    house: string
}

export interface IUserDocument extends IUser, Document {
    setNewHouse: (this: IUserDocument) => Promise<void>
    verifyPassword: (this: IUserDocument) => Promise<void>
}

export interface IUserModel extends Model<IUserDocument> {
    findOneOrCreate: (this: IUserModel, { email }: { email: string }) => Promise<IUserDocument>
    findByHouseName: (this: IUserModel, { nameHouse }: { nameHouse: String }) => Promise<IUserDocument>
}