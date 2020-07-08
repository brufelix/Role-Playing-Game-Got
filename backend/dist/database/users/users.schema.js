"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const users_statics_1 = require("./users.statics");
const users_methods_1 = require("./users.methods");
const UserSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    house: {
        type: String,
        required: true
    },
});
UserSchema.statics.findOne = users_statics_1.findOneOrCreate;
UserSchema.statics.findByHouseName = users_statics_1.findByHouseName;
UserSchema.methods.sameLastNameHouse = users_methods_1.sameLastNameHouse;
UserSchema.methods.setNewHouse = users_methods_1.setNewHouse;
exports.default = UserSchema;
