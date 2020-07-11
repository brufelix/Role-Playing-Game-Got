import { houseTyrell, houseTully, houseTargaryen, houseStark, houseMartell,
    houseLannister, houseGreyjoy, houseBaratheon, houseArryn } from '../components/imgsRequires'

export const items = ["1 Enforcamento(s) programado", "2 Aldeões em treinamento de magia", " 5 Aldeões coletanto recursos "]

export const selectImage = (nameImg: string) => {
    const imgs = { houseTyrell, houseTully, houseTargaryen, houseStark, houseMartell,
        houseLannister, houseGreyjoy, houseBaratheon, houseArryn }
    return imgs[nameImg] 
}