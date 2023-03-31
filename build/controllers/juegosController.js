"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class JuegosContoller {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const juegos = yield database_1.default.promise().query('SELECT * FROM productos');
            res.json(juegos[0]);
        });
    }
    getUno(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const juegos = yield database_1.default.promise().query('SELECT * FROM productos WHERE id = ?', [id]);
            if (juegos.length > 0) {
                return res.json(juegos[0]);
            }
            res.status(404).json({ Text: "El juego no existe" });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.promise().query('INSERT INTO productos SET ?', [req.body]);
            res.json({ message: 'Juego guardado' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const oldGame = req.body;
            yield database_1.default.promise().query('UPDATE productos set ? WHERE id = ?', [req.body, id]);
            res.json({ message: 'El juego fue actualizado' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            database_1.default.promise().query('DELETE FROM productos WHERE id = ?', [id]);
            res.json({ message: 'El juego fue eliminado' });
        });
    }
}
const juegosContoller = new JuegosContoller();
exports.default = juegosContoller;
