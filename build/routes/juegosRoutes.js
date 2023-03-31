"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const juegosController_1 = __importDefault(require("../controllers/juegosController"));
class JuegosRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', juegosController_1.default.list);
        this.router.get('/:id', juegosController_1.default.getUno);
        this.router.post('/', juegosController_1.default.create);
        this.router.delete('/:id', juegosController_1.default.delete);
        this.router.put('/:id', juegosController_1.default.update);
    }
}
const juegosRoutes = new JuegosRoutes();
exports.default = juegosRoutes.router;
