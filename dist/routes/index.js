"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// https://medium.com/javascript-in-plain-english/creating-a-rest-api-with-jwt-authentication-and-role-based-authorization-using-typescript-fbfa3cab22a4
const express_1 = require("express");
const logRoutes_1 = __importDefault(require("./logRoutes"));
const techRoutes_1 = __importDefault(require("./techRoutes"));
const routes = express_1.Router();
routes.use('/logs', logRoutes_1.default);
routes.use('/techs', techRoutes_1.default);
exports.default = routes;
