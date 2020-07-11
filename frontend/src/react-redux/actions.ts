import { NAME_CHANGED, EMAIL_CHANGED, PASSWORD_CHANGED, HOUSE_CHANGED, CLEAR, VALUESCHANGED } from '../react-redux/actionsTypes'
import { IValues } from '../interfaces/interfaces'

export const nameChanged = (e: any) => ({ 
    type: NAME_CHANGED,
    payload: e.target.value
})

export const emailChanged = (e: any) => ({
    type: EMAIL_CHANGED,
    payload: e.target.value
})

export const passwordChanged = (e: any) => ({
    type: PASSWORD_CHANGED,
    payload: e.target.value
})

export const houseChanged = (name: string) => ({
    type: HOUSE_CHANGED,
    payload: name 
})

export const clear = () => ({
    type: CLEAR
})

export const valuesChanged = (values: IValues) => ({
    type: VALUESCHANGED,
    payload: values
}) 