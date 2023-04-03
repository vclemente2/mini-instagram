import { Router } from 'express';
import UserController from '../controllers/UserController.js';
import UserMiddleware from '../middlewares/UserMiddlewar.js';

const { verifyIfUsernameIsAlredyRegistered, verifyRequiredFieldUsername, verifyRequiredFieldPassword } = new UserMiddleware();

export default class UserRouters extends UserController {
    userRoutes;

    constructor() {
        super();
        this.userRoutes = Router();

        this.userRoutes.post(
            '/',
            verifyRequiredFieldUsername,
            verifyRequiredFieldPassword,
            verifyIfUsernameIsAlredyRegistered,
            this.create
        );
        this.userRoutes.get('/:id', this.findOne);
        this.userRoutes.put('/', this.update);
    }

    getRoutes() {
        return this.userRoutes;
    }
}