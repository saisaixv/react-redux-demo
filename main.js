import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {createStore} from 'redux'
import {Provider} from 'react-redux'

import todoApp from './component/reducers'

let store = createStore(todoApp)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('app'));
