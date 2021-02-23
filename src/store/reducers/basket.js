import {DELETE_ITEM_BASKET, PUSH_ITEMS_BASKET} from '../actionTypes'

const initialState = {
	items: [],
	customerInfo: {},
	itemsToSale: []
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
		case DELETE_ITEM_BASKET:
			const newArr = deleteItem(state.items, action.payload)
			return {
				...state,
				items: [
					...newArr
				]
			}
		default:
			return state
	}
}

const deleteItem = (arr, el) => {
	const index = arr.indexOf(el)
	if(index > -1){
		arr.splice(index, 1)
	}
	return arr
}

export default reducer
