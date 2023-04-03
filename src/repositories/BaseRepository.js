import { connection } from '../connection/database.js'

export default class BaseRepository {
    constructor(tableName) {
        this.tableName = tableName
    }
    async create(data) {
        return await connection(this.tableName).insert(data).returning('*');

    }
    async findOne(id) {
        return await connection(this.tableName).where({ id }).first();
    }
    async findAll() {
        return await connection(this.tableName);
    }
    async update(id, data) {
        return await connection(this.tableName).where({ id }).update(data).returning('*');
    }
    async delete(id) {
        return await connection(this.tableName).where({ id }).delete();
    }
}