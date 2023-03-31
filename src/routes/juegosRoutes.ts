import  { Router } from 'express';

import  juegosContoller  from '../controllers/juegosController';

class JuegosRoutes {

    router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void {
        this.router.get('/', juegosContoller.list);
        this.router.get('/:id', juegosContoller.getUno);
        this.router.post('/', juegosContoller.create);
        this.router.delete('/:id',juegosContoller.delete);
        this.router.put('/:id',juegosContoller.update);
    }

}

const juegosRoutes = new JuegosRoutes();
export default juegosRoutes.router;