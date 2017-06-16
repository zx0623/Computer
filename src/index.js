import 'babel-polyfill';
import 'isomorphic-fetch';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router} from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
import configureStore from './store/configureStore';
import Main from './containers/Main'


const history = createHistory();
const store = configureStore();
const Root = () =>{
	return(
		<Provider store={store}>
			<Router history={history}>
			  <Main/>
			</Router>
		</Provider>
	)
};


render(
    <Root/>,
	document.getElementById('root')
)