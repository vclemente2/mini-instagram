import { config } from 'dotenv';
import express from 'express';
import cors from 'cors';
import UserRouter from './routes/UserRouter.js';
import UserMiddleware from './middlewares/UserMiddlewar.js';
config();

export default class App {
    constructor() {
        this.app = express();

        this.app.use(express.json());
        this.app.use(cors());
        this.app.use('/user', new UserRouter().getRoutes());
    }

    getApp() {
        return this.app;
    }
}