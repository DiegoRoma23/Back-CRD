import {Request, Response} from 'express';

import db from '../database';

class JuegosContoller {

    public async list (req: Request, res: Response) {
       const juegos = await db.promise().query('SELECT * FROM productos');
        res.json(juegos[0]);
    }

    public async getUno(req: Request, res:Response): Promise <any> {
        const {id} = req.params;
        const juegos =await db.promise().query('SELECT * FROM productos WHERE id = ?', [id]);
        if (juegos.length > 0){
            return res.json(juegos[0]);
        }
        res.status(404).json({Text: "El juego no existe"});
    }

    public async create (req: Request, res: Response): Promise<void> {
        await db.promise().query('INSERT INTO productos SET ?', [req.body]);
        res.json({message: 'Juego guardado'});
    }

    public async update (req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const oldGame = req.body;
        await db.promise().query('UPDATE productos set ? WHERE id = ?', [req.body, id]);
        res.json({message:'El juego fue actualizado'});
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        db.promise().query('DELETE FROM productos WHERE id = ?', [id]);
        res.json({message: 'El juego fue eliminado'});
    }

}

const juegosContoller = new JuegosContoller();
export default juegosContoller;