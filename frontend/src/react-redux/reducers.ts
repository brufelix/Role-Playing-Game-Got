import { NAME_CHANGED, EMAIL_CHANGED, PASSWORD_CHANGED, HOUSE_CHANGED, CLEAR, VALUESCHANGED} from './actionsTypes'
import { IUser, IAction } from '../interfaces/interfaces'

const INITIAL_STATE: IUser = { name: "", email: "", password: "", house: "", 
    values: { commerce: 0, magic: 0, suddios: 0, tear: 0, wisdom: 0, currency: 0 }}

export default ( state = INITIAL_STATE, action: IAction ) => {
    switch(action.type) {
        case NAME_CHANGED:
            return { ...state, name: action.payload}
        case EMAIL_CHANGED:
            return { ...state, email: action.payload}
        case PASSWORD_CHANGED:
            return {...state, password: action.payload}
        case HOUSE_CHANGED:
            return {...state, house: action.payload}
        case CLEAR:
            return { ...state, name: "", email: "", password: "", house: "" }
        case VALUESCHANGED:
            return { ...state, values: {...action.payload.data} }
        default:
            return state
    }
}