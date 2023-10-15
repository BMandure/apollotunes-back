"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = require("../services/routes");
const routes = express_1.default.Router();
routes.get("/", (_, res) => {
    res.send((0, routes_1.getSongs)());
});
routes.post("/", (_, res) => {
    res.send("Prueba post /");
});
exports.default = routes;
