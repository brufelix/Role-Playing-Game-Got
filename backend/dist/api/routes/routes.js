"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const register_1 = require("../controllers/register");
exports.default = (server) => {
    server.get('/users', (req, res) => {
        register_1.getAllUsers().then(_ => res.status(200).send());
    });
    server.post('/register', (req, res) => {
        register_1.createUser(req.body).then(_ => res.status(200).send());
    });
};
