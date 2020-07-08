"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.disconnect = exports.connect = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
mongoose_1.default.Promise = global.Promise;
let database;
exports.connect = () => {
    const uri = "mongodb://localhost/got";
    mongoose_1.default.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });
    if (database) {
        return;
    }
    database = mongoose_1.default.connection;
    database.once("open", async () => { console.log("Connected to database..."); });
    database.on("error", () => { console.log("Error connection with database"); });
};
exports.disconnect = () => {
    if (!database) {
        return;
    }
    mongoose_1.default.disconnect();
};
exports.default = exports.connect;
