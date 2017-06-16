import React from 'react';
import Parent1 from './Parent1';
import Parent2 from './Parent2';
import { Route ,Link } from 'react-router-dom'


const Main = () =>{
	return(
		<div>

				<ul>
					<li><Link to="/">Home</Link></li>
					<li><Link to="/page1">About</Link></li>
					<li><Link to="/page2">Topics</Link></li>
				</ul>
				<Route exact path="/page1" component={Parent1}/>
				<Route  path="/page2" component={Parent2}/>
			</div>

	);
}
export default Main

