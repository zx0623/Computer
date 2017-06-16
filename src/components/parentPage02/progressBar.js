import React, {Component} from 'react';

export default class progressBar extends Component{

	constructor(props){
		super(props);
	}

	render(){
		const {status,change} = this.props;
		return(
			<div>
				<h2>进度条显示</h2>
				<div className="progress-wrap">
					<div className="progress-dot">
						<div className={status ? "dot" : "dotF"} onClick={change}> </div>
					</div>
					<div className="dash"> </div>
					<div className="progress-dot">
						<div className={status ? "dot" : "dotF"} onClick={change}> </div>
					</div>
					<div className="dash"> </div>
					<div className="progress-dot">
						<div className={status ? "dot" : "dotF"} onClick={change}> </div>
					</div>
				</div>
                <div className="span-wrap">
	                <span>待缴纳</span>
	                <span>缴纳中</span>
	                <span>缴纳完成</span>
                </div>
			</div>
		);
	}
}
