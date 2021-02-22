import {PUSH_ITEMS_BASKET} from '../actionTypes'

const initialState = {
	items: [],
	customerInfo: {}
}

const reducer = (state = initialState, action) => {
	switch(action.type){
		case PUSH_ITEMS_BASKET:
			return {
				...state,
				items: [
					...state.items,
					...action.payload
				]
			}
		default:
			return state
	}
}

export default reducer
