import {PUSH_ITEMS_BASKET} from '../actionTypes'

const initialState = {
	items: []
}

const reducer = (state = initialState, action) => {
	switch(action.type){
		case PUSH_ITEMS_BASKET:
			return {
				...state,
				items: [
					...state.items,
					payload
				]
			}

		default:
			return state
			
	}
}
