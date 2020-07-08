"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findByHouseName = exports.findOneOrCreate = void 0;
async function findOneOrCreate(user) {
    const record = await this.findOne({ email: user.email });
    if (record) {
        return record;
    }
    else {
        return this.create(user);
    }
}
exports.findOneOrCreate = findOneOrCreate;
async function findByHouseName(nameHouse) {
    const result = await this.find({ house: { $eq: nameHouse } });
    if (result) {
        return result;
    }
    else {
        return [];
    }
}
exports.findByHouseName = findByHouseName;
