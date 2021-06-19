import { applyMiddleware, createStore } from 'redux';

import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import { createLogger } from 'redux-logger';
import reducer from './redux/sample/reducer';

const logger = createLogger({ collapsed: true });
const store = createStore(reducer, applyMiddleware(logger));

render(<App idx={1} />, document.getElementById('root'));
