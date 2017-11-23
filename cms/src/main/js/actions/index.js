import axios from 'axios';
import client from '../client';

export const FETCH_SERVICES = 'fetch_services';
export const CREATE_SERVICE = 'create_service';
export const FETCH_ENDPOINTS = 'fetch_endpoints';
export const DELETE_SERVICE = 'delete_service';
export const FETCH_ENDPOINT = 'fetch_endpoint';
export const FETCH_ENDPOINT_META = 'fetch_endpoint_meta';

const ROOT_URL = 'http://localhost:8081';
const API_KEY = '?key=lalalalala1234';

export function fetchServices() {
    const request = axios.get(`${ROOT_URL}/routes`)
    return {
        type: FETCH_SERVICES,
        payload: request
    }

    // client({method: 'GET', path: 'http://localhost:8081/routes'}).done(response => {
    //     return {
    //         type: FETCH_SERVICES,
    //         payload: response
    //     };
    // });

}

export function createService(values, callback) {
    const request = axios.post(`${ROOT_URL}/services${API_KEY}`, values)
        .then(() => callback());

    return {
        type: CREATE_SERVICE,
        payload: request
    };
}

export function fetchEndpoints(id) {
    const request = axios.get(`${ROOT_URL}/${id}/api/profile`);

    return {
        type: FETCH_ENDPOINTS,
        payload: request
    }
}

export function fetchEndpoint(url) {
    const request = axios.get(url);

    return {
        type: FETCH_ENDPOINT,
        payload: request
    }
}

export function fetchEndpointMeta(url) {
    const request = axios.get(url);

    return {
        type: FETCH_ENDPOINT_META,
        payload: request
    }

    // client({method: 'GET', path: url}).then(response => {
    //     return {
    //         type: FETCH_ENDPOINT_META,
    //         payload: response
    //     };
    // });
}

export function deleteService(id, callback) {
    const request = axios.delete(`${ROOT_URL}/services/${id}${API_KEY}`)
        .then(() => callback())

    return {
        type: DELETE_SERVICE,
        payload: id
    }
}