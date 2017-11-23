import { combineReducers } from 'redux';
import ServicesReducer from './reducer_services';
import EndpointsReducer from './reducer_endpoints';
import EndpointReducer from './reducer_endpoint';
import EndpointMetaReducer from './reducer_endpoint_meta';
import { reducer as formReducer } from 'redux-form';


const rootReducer = combineReducers({
    services: ServicesReducer,
    endpoints: EndpointsReducer,
    endpoint: EndpointReducer,
    endpoint_meta: EndpointMetaReducer,
    form: formReducer
});

export default rootReducer;
