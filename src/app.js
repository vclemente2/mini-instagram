import { config } from 'dotenv';
import express from 'express';
import cors from 'cors';
config();

class App {
    constructor() {
        this.app = express();

        this.app.use(express.json());
        this.app.use(cors());
    }

    getApp = () => {
        return this.app;
    }
}

export default App;