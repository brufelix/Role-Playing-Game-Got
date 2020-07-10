import { RouteComponentProps } from "react-router-dom"

export interface IUser {
    name?: string,
    email: string,
    password: string,
    house?: string
}

export interface IState {
    name: string,
    email: string,
    password: string,
    house: string,
}

export interface IAction {
    type: string,
    payload: string
}

export interface postSignin {
    auth: boolean,
    token: string
}

export interface postHouse {
    house: string
}

export interface IGot {
    got: IState
}

export interface IProps extends RouteComponentProps {}

