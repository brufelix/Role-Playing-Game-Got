import { Request, Response } from 'express'
import { GameModel } from '../../database/game/game.model'
import { IGame } from '../../database/game/game.types'

export async function insertValues(request: Request, response: Response) {
    const data: IGame = request.body
    const DataGame = new GameModel({
        ...data
    })
    DataGame.save().then(_ => {
        response.status(200).send()
    })
}

export async function getValuesOfGame(request: Request, response: Response) {
    GameModel.findOne({ user: request.body.email })
        .then(res => {
            const values = {
                suddios: res.suddios,
                tear: res.tear,
                wisdom: res.wisdom,
                commerce: res.commerce,
                magic: res.magic,
                currency: res.currency
            }
            response.status(200).json({data: values})
        })
}