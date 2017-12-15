import client from '../client';
import _ from 'lodash';

export const FETCH_SERVICES = 'fetch_services';
export const CREATE_SERVICE = 'create_service';
export const FETCH_ENDPOINTS = 'fetch_endpoints';
export const DELETE_SERVICE = 'delete_service';
export const FETCH_ENDPOINT = 'fetch_endpoint';
export const FETCH_ENDPOINT_META = 'fetch_endpoint_meta';
export const CREATE_ENTRY = 'create_entry';
export const UPDATE_ENTRY = 'update_entry';

const ROOT_URL = 'http://localhost:8081';

export function fetchServices() {
    var request = client({method: 'GET', path: `${ROOT_URL}/routes`}).then(response => {
        return response;
    });

    return { type: FETCH_SERVICES, payload: request};

}

export function createService(values, callback) {
    // const request = axios.post(`${ROOT_URL}/services${API_KEY}`, values)
    //     .then(() => callback());
    //
    // return {
    //     type: CREATE_SERVICE,
    //     payload: request
    // };
}

export function fetchEndpoints(id) {
    var request = client({method: 'GET', path: `${ROOT_URL}/${id}/api/profile`}).then(response => {
        return response;
    });

    return { type: FETCH_ENDPOINTS, payload: request};
}

export function fetchEndpoint(url, pageSize) {
    if (pageSize != null) {
        url += '?size=' + pageSize;
    }
    var request = client({method: 'GET', path: url}).then(response => {
        return response;
    });

    return { type: FETCH_ENDPOINT, payload: request };
}

export function fetchEndpointMeta(url) {
    var request = client({method: 'GET', path: url}).then(response => {
        return response;
    });

    return { type: FETCH_ENDPOINT_META, payload: request };
}

export function createEntry(url, newEntry, callback) {
    var request = client({
        method: 'POST',
        path: url,
        entity: newEntry,
        headers: {'Content-Type': 'application/json'}
    }).then(response => {
        if (response.status.code == 201) {
            if (callback != null) {
                callback(response);
            }
            return response;
        }
    })

    return { type: CREATE_ENTRY, payload: request }
}

export function updateEntry(url, entry, callback) {
    var request = client({
        method: 'PUT',
        path: url,
        entity: entry,
        headers: {'Content-Type': 'application/json'}
    }).then(response => {
        if (response.status.code == 200) {
            callback(response);
            return response;
        }
    })

    return { type: UPDATE_ENTRY, payload: request }
}

export function deleteService(id, callback) {
    // const request = axios.delete(`${ROOT_URL}/services/${id}${API_KEY}`)
    //     .then(() => callback())
    //
    // return {
    //     type: DELETE_SERVICE,
    //     payload: id
    // }
}