import axios from 'axios';

export const HTTP = axios.create({
    timeout: 5000,
    headers: {
        post: {
            'Content-Type': 'application/json'
        }
    }
})
function handleParams (url, rawData, rawMethod) {
    const method = rawMethod.toUpperCase()
    let data = {};
    switch (method) {
        case 'GET':
            data = { params: rawData };
            break;
        case 'POST':
        case 'PUT':
        case 'PATCH':
            data = { data: rawData };
            break;
        default:
            data = { params: rawData };
            break;
    }

    return Promise.resolve({
        url: url,
        method,
        data
    });
}

export const fetch = (url, rawData = {}, method = 'GET') => {
    return handleParams(url, rawData, method)
                .then(options => {
                    return new Promise((resolve, reject) => {
                        HTTP({
                            url: options.url,
                            method: options.method,
                            ...options.data
                        })
                            .then(resp => {
                                resolve(resp.data)
                            }, error => {
                                reject(error)
                            })
                        });
                });
}

