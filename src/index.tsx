
import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import { applyMiddleware, createStore } from 'redux';
import reducer from './redux/sample/reducer';

const logger = createLogger({ collapsed: true });
const store = createStore(reducer, applyMiddleware(logger));

render(
    <Provider store={store}>
    <App idx={1} />
    </Provider>,
     document.getElementById('root')
);
