"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const HttpUtil_1 = require("../util/HttpUtil");
class UserAPI {
    constructor() {
    }
    getUser(token) {
        return __awaiter(this, void 0, void 0, function* () {
            const json = yield HttpUtil_1.get('/user', token);
            return json;
        });
    }
    getUserById(userId, token) {
        return __awaiter(this, void 0, void 0, function* () {
            const json = yield HttpUtil_1.get(`/user/${userId}`, token);
            return json;
        });
    }
}
exports.default = UserAPI;
//# sourceMappingURL=UserAPI.js.map