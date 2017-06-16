import React, {Component} from 'react';

export default class test01 extends Component{
	constructor(props){
		super(props);
	}

	render(){
		const {value,add,decrice} = this.props;
		return(
			<div className="test01-wrap">
				<span>当前的数字：{value}</span>
				<button onClick={add}>增加</button>
				<button onClick={decrice}>减少</button>
			</div>
		);
	}
}