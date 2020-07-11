import { RouteComponentProps } from "react-router-dom"

export interface IUser {
    name?: string,
    email: string,
    password: string,
    house?: string,
    values: IValues
}

export interface IValues {
    suddios: number,
    tear: number,
    wisdom: number,
    commerce: number,
    magic: number,
    currency: number
}

export interface IState {
    name: string,
    email: string,
    password: string,
    house: string,
    values: IValues
}

export interface IAction {
    type: string,
    payload: any
}

export interface postSignin {
    auth: boolean,
    token: string
}

export interface IGame {
    user: string,
    suddios: number,
    tear: number,
    wisdom: number,
    commerce: number,
    magic: number,
    currency: number
}

export interface postHouse {
    house: string
}

export interface IGot {
    got: IState
}

export interface IProps extends RouteComponentProps {}

