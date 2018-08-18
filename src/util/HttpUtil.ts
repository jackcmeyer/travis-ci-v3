const got = require('got');
const travisUrl = "https://api.travis-ci.org";



export async function get(uri: string, token: string) {
    try {
        const response = await buildGetRequest(uri, token);
        return JSON.parse(response.body);
    } catch (error) {
        throw new Error(error.response.body.error_message);
    }
}

function buildGetRequest(uri: string, token: string) {
    const api = got.extend({
        baseUrl: travisUrl,

        headers: {
            'Authorization': 'token ' + token,
            'Travis-API-Version': 3,
            'User-Agent': 'Travis CI Wrapper'
        }
    });

    return api.get(uri);
}