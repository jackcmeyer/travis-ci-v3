"use strict";
class User {
    constructor(id, login, name, githubId, avatarUrl, education, isSyncing, syncedAt) {
        this._id = id;
        this._login = login;
        this._name = name;
        this._githubId = githubId;
        this._avatarUrl = avatarUrl;
        this._education = education;
        this._is_syncing = isSyncing;
        this._synced_at = syncedAt;
    }
    get id() {
        return this._id;
    }
    get login() {
        return this._login;
    }
    get name() {
        return this._name;
    }
    get githubId() {
        return this._githubId;
    }
    get avatarUrl() {
        return this._avatarUrl;
    }
    get isEduction() {
        return this._education;
    }
    get isSyncing() {
        return this._is_syncing;
    }
    get syncedAt() {
        return this._synced_at;
    }
    sync() {
    }
}
//# sourceMappingURL=User.js.map