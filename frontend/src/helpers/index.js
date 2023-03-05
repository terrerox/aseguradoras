export const BASE_URL = 'https://localhost:44319/api'

export const FETCH_OPTIONS = {
    GET: () => {
        return {
            method: 'GET',
            headers: {
            'Authorization': '1234'
            },
        }
    },
    POST: (body) => {
        return {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json;charset=utf-8',
            'Authorization': '1234'
            },
            body: JSON.stringify(body)
        }
    },
    PUT: (body) => {
        return {
            method: 'PUT',
            headers: {
            'Content-Type': 'application/json;charset=utf-8',
            'Authorization': '1234'
            },
            body: JSON.stringify(body)
        }
    },
    DELETE: () => {
        return {
            method: 'DELETE',
            headers: {
            'Content-Type': 'application/json;charset=utf-8',
            'Authorization': '1234'
            }
        }
    }
}

export const httpClient = (endpoint, options) => {
    const url = BASE_URL + endpoint
    return fetch(url, options)
}