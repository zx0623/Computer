

export const ADD = 'ADD';
export const DECRICE = 'DECRICE';

export function add(value) {
	return{
		type: ADD,
		value
	}
}

export function decrice(value) {
	return{
		type: DECRICE,
		value
	}
}

