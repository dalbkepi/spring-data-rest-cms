import { CREATE_ENTRY } from '../actions';
import _ from 'lodash';

export default function(state = {}, action) {
    switch (action.type) {
        case CREATE_ENTRY:
            return action.payload.entity;
        default:
            return state;
    }
}