import { model } from 'mongoose'
import { IGameDocument } from './game.types'
import gameSchema from './game.schema'

export const GameModel = model<IGameDocument>("game", gameSchema)