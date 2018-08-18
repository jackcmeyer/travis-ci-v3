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
const got = require('got');
const travisUrl = "https://api.travis-ci.org";
function get(uri, token) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield buildGetRequest(uri, token);
        return JSON.parse(response.body);
    });
}
exports.get = get;
function buildGetRequest(uri, token) {
    const travis = got.extend({
        baseUrl: travisUrl,
        headers: {
            'Authorization': 'token ' + token,
            'Travis-API-Version': 3,
            'User-Agent': 'Travis CI Wrapper'
        }
    });
    return travis.get(uri);
}
//# sourceMappingURL=HttpUtil.js.map