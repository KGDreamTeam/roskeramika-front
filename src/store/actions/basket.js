import axios from '../../axios/axios'
import {PUSH_ITEMS_BASKET, DELETE_ITEM_BASKET, PLUS_ITEMS_PRICE} from "../actionTypes"

export const pushItemToBasket = (payload) => {
	return {
		type: PUSH_ITEMS_BASKET,
		payload
	}
}

export const deleteItemBasket = (payload) => {
	return {
		type: DELETE_ITEM_BASKET,
		payload
	}
}

export const handleMakeOrder = (infoPerson, products) => dispatch => {
	axios.post('/order/', {
		...infoPerson,
		products: [
			...products
		],
	})
		.then(res => {
			console.log(res)
		})
		.catch(err => {
			console.log(err)
		})
}

export const priceForItem = (payload) => {
	return {
		type: PLUS_ITEMS_PRICE,
		payload
	}
}
