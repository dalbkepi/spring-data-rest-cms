import { FETCH_SERVICES, DELETE_SERVICE } from '../actions';
import _ from 'lodash';

export default function(state = {}, action) {
    switch (action.type) {
        case DELETE_SERVICE:
            return _.omit(state, action.payload);
        case FETCH_SERVICES:
            // return _.mapKeys(action.payload.data, 'id');
            var data = action.payload.data;
            var services = [];
            for(var key in data) {
                var isActive = false;
                if (key == Object.keys(data)[0]) {
                    isActive = true;
                }
                var service = {
                    route: key,
                    name: data[key],
                    isActive
                }
                services.push(service);
            }
            return services;
        default:
            return state;
    }
}