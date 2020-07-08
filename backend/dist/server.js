"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./api/routes/routes"));
const middleware_1 = __importDefault(require("./config/middleware"));
const app = express_1.default();
routes_1.default(app);
middleware_1.default(app);
app.listen(8000, () => {
    console.log('Server lintening on port 8000...');
});
exports.default = app;
