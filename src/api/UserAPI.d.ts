export default class UserAPI {
    constructor();
    getUser(token: string): Promise<User>;
    getUserById(userId: number, token: string): Promise<User>;
}
