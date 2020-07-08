"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllUsers = exports.createUser = void 0;
const users_model_1 = require("../../database/users/users.model");
async function createUser(user) {
    const newUser = new users_model_1.UserModel({
        ...user
    });
    newUser.save();
}
exports.createUser = createUser;
async function getAllUsers() {
    let users = null;
    await users_model_1.UserModel.find((err, result) => {
        users = result;
    });
    return users;
}
exports.getAllUsers = getAllUsers;
