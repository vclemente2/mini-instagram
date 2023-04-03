import bcrypt from 'bcrypt';

import UserRepository from '../repositories/UserRepository.js';

export default class UserController {
    async create(req, res) {
        const { username, password: pass } = req.body;

        try {
            const encryptedPassword = await bcrypt.hash(pass, 10);
            const user = await new UserRepository().create({ username, password: encryptedPassword });
            const { password: _, ...userData } = user[0];
            return res.status(201).json(userData);
        } catch (err) {
            return res.status(500).json({ message: err.message });
        }
    }
    findOne(req, res) {

    }
    update(req, res) {

    }
    delete(req, res) {

    }
}