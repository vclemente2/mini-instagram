import { connection } from '../connection/database.js';
import BaseRepository from './BaseRepository.js';

export default class UserRepository extends BaseRepository {
    constructor() {
        super('users');
    }
    async findByUsername(username) {
        return await connection('users').where({ username: username }).first();
    }
}
