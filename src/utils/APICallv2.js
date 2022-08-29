import { serverURL } from "./constants";

const ApiCallV2 = async (_path, _method, _body) => {
    const response = await fetch(serverURL + _path, {
        method: _method,
        headers: {
            'x-access-token': localStorage.pantheon_token
        },
        body: _body
    })
    const apiData = await response.json();

    return apiData
}

export default ApiCallV2;