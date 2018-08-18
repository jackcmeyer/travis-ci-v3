class User {

    private readonly _id: number;
    private readonly _login: string;
    private readonly _name: string;
    private readonly _githubId: number;
    private readonly _avatarUrl: string;
    private readonly _education: boolean;
    private readonly _is_syncing: true;
    private readonly _synced_at: string;

    constructor(id: number, login: string, name: string, githubId: number, avatarUrl: string, education: boolean, isSyncing: true, syncedAt: string) {
        this._id = id;
        this._login = login;
        this._name = name;
        this._githubId = githubId;
        this._avatarUrl = avatarUrl;
        this._education = education;
        this._is_syncing = isSyncing;
        this._synced_at = syncedAt;
    }


    get id(): number {
        return this._id;
    }

    get login(): string {
        return this._login;
    }

    get name(): string {
        return this._name;
    }

    get githubId(): number {
        return this._githubId;
    }

    get avatarUrl(): string {
        return this._avatarUrl;
    }

    get isEduction(): boolean {
        return this._education;
    }

    get isSyncing(): true {
        return this._is_syncing;
    }

    get syncedAt(): string {
        return this._synced_at;
    }

    sync(): void {

    }
}