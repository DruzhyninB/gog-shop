import * as React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

import Wrapper from './Wrapper';

import store from './store/store';
import history from './config/browserHistory';
import { routes } from './config/routes';
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.scss';


ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Wrapper routes={routes} />
        </Router>
    </Provider>
    , document.getElementById('root'));
