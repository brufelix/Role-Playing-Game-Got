"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sameLastNameHouse = exports.setNewHouse = void 0;
async function setNewHouse(newHouse) {
    this.house = newHouse;
}
exports.setNewHouse = setNewHouse;
async function sameLastNameHouse(nameHouse) {
    const result = this.model("user").find({ house: { $eq: nameHouse } });
    if (result) {
        return result;
    }
    else {
        return [];
    }
}
exports.sameLastNameHouse = sameLastNameHouse;
