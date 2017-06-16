import React, {Component} from 'react';
import ProgressBar from '../components/parentPage02/progressBar'
import '../assets/css/page01.less'
import * as actionCreators from '../actions/pageAction02/test02'
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux'

 class Parent2 extends Component{
	constructor(props){
		super(props);
	}

	render(){
		const {status,action} =this.props;
		const {change} = action;
		return(
			<div>
				<ProgressBar status={status} change={change}/>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return{
		status:state.changeState.status
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
)(Parent2)
