declare class User {
    private readonly _id;
    private readonly _login;
    private readonly _name;
    private readonly _githubId;
    private readonly _avatarUrl;
    private readonly _education;
    private readonly _is_syncing;
    private readonly _synced_at;
    constructor(id: number, login: string, name: string, githubId: number, avatarUrl: string, education: boolean, isSyncing: true, syncedAt: string);
    readonly id: number;
    readonly login: string;
    readonly name: string;
    readonly githubId: number;
    readonly avatarUrl: string;
    readonly isEduction: boolean;
    readonly isSyncing: true;
    readonly syncedAt: string;
    sync(): void;
}
