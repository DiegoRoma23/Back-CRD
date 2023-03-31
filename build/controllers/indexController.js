"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexContoller = void 0;
class IndexContoller {
    index(req, res) {
        res.json({ text: 'API is /api/juegos' });
    }
}
exports.indexContoller = new IndexContoller();
