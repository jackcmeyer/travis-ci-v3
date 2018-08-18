import {get} from '../util/HttpUtil';

export default class UserAPI {

    constructor() {

    }

    async getUser(token: string): Promise<User> {
        const json = await get('/user', token);
        return json as User
    }

    async getUserById(userId: number, token: string) : Promise<User> {
        const json = await get(`/user/${userId}`, token);
        return json as User
    }
}