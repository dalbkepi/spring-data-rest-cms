import { combineReducers } from 'redux';
import ServicesReducer from './reducer_services';
import EndpointsReducer from './reducer_endpoints';
import { reducer as formReducer } from 'redux-form';


const rootReducer = combineReducers({
    services: ServicesReducer,
    endpoints: EndpointsReducer,
    form: formReducer
});

export default rootReducer;
