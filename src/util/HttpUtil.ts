const got = require('got');
const travisUrl = "https://api.travis-ci.org";



export async function get(uri: string, token: string) {
    const response = await buildGetRequest(uri, token);
    return JSON.parse(response.body);
}

function buildGetRequest(uri: string, token: string) {
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