import { houseTyrell, houseTully, houseTargaryen, houseStark, houseMartell,
    houseLannister, houseGreyjoy, houseBaratheon, houseArryn } from '../components/imgsRequires'

export const selectImage = (nameImg: string) => {
    const imgs = { houseTyrell, houseTully, houseTargaryen, houseStark, houseMartell,
        houseLannister, houseGreyjoy, houseBaratheon, houseArryn }
    return imgs[nameImg]
}