import { FETCH_ENDPOINT } from '../actions';
import _ from 'lodash';

export default function(state = {}, action) {
    switch (action.type) {
        case FETCH_ENDPOINT:
            // const service = action.payload.data;
            // const newState = { ...state };
            // newState[service.id] = post;
            // return newState;
            // return { ...state, [action.payload.data.id]: action.payload.data };
            return action.payload.entity._embedded[Object.keys(action.payload.entity._embedded)[0]];
        default:
            return state;
    }
}