import { FETCH_ENDPOINT_META } from '../actions';
import _ from 'lodash';

export default function(state = {}, action) {
    switch (action.type) {
        case FETCH_ENDPOINT_META:
            return _.map(action.payload.data.alps.descriptors[0].descriptors, 'name');
        default:
            return state;
    }
}