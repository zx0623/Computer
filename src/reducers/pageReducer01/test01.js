import {ADD,DECRICE} from '../../actions/pageAction01/test01'

let initstate={
	value :0
};

export default function counter(state=initstate,action) {
	switch (action.type){
		case ADD:
			return Object.assign({},state,{value:state.value+1});
		case DECRICE:
			return Object.assign({},state,{value:state.value-1});
	    default:
			return state;
	}
}



