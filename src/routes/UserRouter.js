import { Router } from 'express';
import UserController from '../controllers/UserController.js';

export default class UserRouters extends UserController {
    userRoutes;

    constructor() {
        super();
        this.userRoutes = Router();

        this.userRoutes.post('/', this.create);
        this.userRoutes.get('/:id', this.findOne);
        this.userRoutes.put('/', this.update);
    }

    getRoutes() {
        return this.userRoutes;
    }
}