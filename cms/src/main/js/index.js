import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';

import reducers from './reducers';
import ServicesIndex from './components/services_index';
import ServicesShow from './components/services_show';
import EndpointShow from './components/endpoint_show';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
<Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
    <div>
        <Switch>
            <Route path="/services/:id/:endpoint" component={EndpointShow} />
            <Route path="/services/:id" component={ServicesShow} />
            <Route path="/" component={ServicesIndex} />
        </Switch>
    </div>
</BrowserRouter>
</Provider>
    , document.querySelector('#app'));
