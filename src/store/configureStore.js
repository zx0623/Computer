import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import  rootReducer from '../reducers/main'
import { routerMiddleware } from 'react-router-redux'


export default function configureStore(preloadedState,history) {
	const middleware = routerMiddleware(history);
	const store = createStore(
		rootReducer,
		preloadedState,
		applyMiddleware(thunkMiddleware,middleware)
	);
	return store;
}