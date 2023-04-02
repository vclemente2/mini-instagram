import { Router } from 'express';

export default class UserRouters {
    userRoutes;

    constructor() {
        this.userRoutes = Router();
    }

    create = () => this.userRoutes.post('/')
    findOnde = () => this.userRoutes.get('/:id')
    update = () => this.userRoutes.put('/')
}