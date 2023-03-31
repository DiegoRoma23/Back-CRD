import {Request, Response} from 'express';

class IndexContoller {

    public index (req: Request, res: Response) {
        res.json({text : 'API is /api/juegos'})
    }

}

export const indexContoller = new IndexContoller();