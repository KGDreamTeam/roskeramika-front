import {DELETE_ITEM_BASKET, PLUS_ITEMS_PRICE, PUSH_ITEMS_BASKET} from '../actionTypes'

const initialState = {
	items: [],
	customerInfo: {},
	itemsToSale: [],
	itemsPrices: []
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
		case PLUS_ITEMS_PRICE:
			let index = state.itemsPrices.findIndex(el => el.id == action.payload.id)

    if(index == -1){
			return {
				...state,
				itemsPrices:[
					...state.itemsPrices,
					{...action.payload}
				]
			}
		} else {
			let items = [...state.itemsPrices]
			items[index].price = action.payload.price
			return{
				...state,
				itemsPrices: [...items]
			}
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
