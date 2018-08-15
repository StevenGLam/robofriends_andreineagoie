import React from 'react';
import ReactDOM from 'react-dom';
import {Provider, connect} from 'react-redux';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import {createLogger} from 'redux-logger';
import './containers/index.css';
import App from './containers/App';

import thunkMiddleWare from 'redux-thunk';
import 'tachyons';
//import CardList from'../components/CardList'
//import Tramp from './Tramp';
import registerServiceWorker from './registerServiceWorker';
import { searchRobots, requestRobots } from './reducers';

//import {robots} from './robots';


let logger = createLogger();

const rootReducer = combineReducers({searchRobots, requestRobots})

let store = createStore(rootReducer, applyMiddleware(thunkMiddleWare,logger));

ReactDOM.render(
<Provider store={store}>
<App /> 
 </Provider>, document.getElementById('root'));


registerServiceWorker();
