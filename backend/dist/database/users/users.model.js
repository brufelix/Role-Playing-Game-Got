"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const mongoose_1 = require("mongoose");
const users_schema_1 = __importDefault(require("./users.schema"));
exports.UserModel = mongoose_1.model("users", users_schema_1.default);
