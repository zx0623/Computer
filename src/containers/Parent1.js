import React, {Component} from 'react';
import '../assets/css/page01.less'
import Test01 from '../components/parentPage01/test01'
import * as actionCreators from '../actions/pageAction01/test01'
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';

 class Parent1 extends Component{
	constructor(props){
		super(props);
	}

	render(){
		const {value,action} = this.props;
		const {add,decrice} = action;
		return(
			<div>
				<Test01 value={value} add={add} decrice={decrice}/>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return{
		value:state.counter.value

	}
}

function mapDispatchToProps(dispatch) {
	return{
		action:bindActionCreators(actionCreators,dispatch)
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Parent1)