import {
	DELETE_ITEM_BASKET, 
	PLUS_ITEMS_PRICE, 
	PUSH_ITEMS_BASKET, 
	PUSH_ITEMS_TO_SALE,
	SET_TOTAL_PRICE
} from '../actionTypes'

const initialState = {
	items: [],
	itemsToSale: [],
	itemsPrices: [],
	totalPriceToBuy: 0
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
		case SET_TOTAL_PRICE:
			return {
				...state,
				totalPriceToBuy: action.payload
			}
		case PUSH_ITEMS_TO_SALE:
			return{
				...state,
				itemsToSale: [...action.payload]
			}
		case PLUS_ITEMS_PRICE:
			let index = state.itemsPrices.findIndex(el => el.id === action.payload.id)
			if(index === -1){
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
