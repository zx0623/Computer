
export const CHANGE = 'CHANGE';

export  function change(status) {
	return{
		type:CHANGE,
		status
	};
}