import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'
import counter from './pageReducer01/test01';
import changeState from './pageReducer02/test02';

const rootReducer = combineReducers({
	counter,
	changeState,
	router:routerReducer
});

export default rootReducer;
