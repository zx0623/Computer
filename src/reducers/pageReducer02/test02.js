import {CHANGE} from '../../actions/pageAction02/test02'

const initState = {
	status:false
};
 export  default function changeState(state = initState,action) {
	switch (action.type){
		case CHANGE:
			return Object.assign({},state,{status:!state.status});
		default:
			return state;
	}
}