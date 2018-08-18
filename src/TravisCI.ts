import UserAPI from './api/UserAPI';

export default class TravisCI {

    private token: string;
    private userAPI: UserAPI;

    /**
     * Create a new TravisCI API v3 Object.
     */
    constructor() {
        this.token = "";
        this.userAPI = new UserAPI();
    }

    /**
     * Authenticate with the TravisCI API v3 by passing in a Travis CI token
     * @param token the authentication for the TravisCI API v3
     */
    authenticate(token: string) {
        this.setToken(token);
    }

    /**
     * GET /user. Gets Travis CI User information. The userId field is optional. If the userId is
     * provided, then it will get user information for the user with the given userId. If the userId
     * is not given, then it will get user information for the authenticated user.
     * @param userId optional userId
     */
    async user(userId?: number) : Promise<User> {
        if (userId) {
            return await UserAPI.getUserById(userId, this.getToken()) as User;
        } else {
            return await UserAPI.getUser(this.getToken()) as User;
        }
    }

    private getToken() {
        return this.token;
    }

    private setToken(token: string) {
        this.token = token;
    }
}