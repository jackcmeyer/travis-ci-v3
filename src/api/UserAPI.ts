import {get} from '../util/HttpUtil';

export default class UserAPI {

    static async getUser(token: string) {
        return await get('/user', token);
    }

    static async getUserById(userId: number, token: string) {
        return await get(`/user/${userId}`, token);
    }
}