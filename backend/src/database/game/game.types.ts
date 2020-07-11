import { Document, Model } from 'mongoose'

export interface IGame {
    user: string,
    suddios: number,
    tear: number,
    wisdom: number,
    commerce: number,
    magic: number,
    currency: number
}

export interface IGameDocument extends IGame, Document {}

export interface IGameModel extends Model<IGameDocument> {}