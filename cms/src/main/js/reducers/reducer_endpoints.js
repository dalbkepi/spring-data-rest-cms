import { FETCH_ENDPOINTS } from '../actions';
import _ from 'lodash';

export default function(state = {}, action) {
    switch (action.type) {
        case FETCH_ENDPOINTS:
            // const service = action.payload.data;
            // const newState = { ...state };
            // newState[service.id] = post;
            // return newState;
            // return { ...state, [action.payload.data.id]: action.payload.data };
            return _.omit(action.payload.data._links, 'self');
        default:
            return state;
    }
}