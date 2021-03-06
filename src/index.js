import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import './index.css';
import App from './container/App';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';
import { searchRobots, getRobots } from './redux/reducer';

const logger = createLogger();
const reducers = combineReducers({searchRobots, getRobots});
const store = createStore(reducers, applyMiddleware(thunkMiddleware, logger));

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>, document.getElementById('root'));
registerServiceWorker();
