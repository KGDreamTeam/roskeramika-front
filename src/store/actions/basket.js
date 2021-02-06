import axios from '../../axios/axios'
import {PUSH_ITEMS_BASKET} from "../actionTypes"

export const pushItemToBasket = (payload) => {
	return {
		type: PUSH_ITEMS_BASKET,
		payload
	}
}

export const handleMakeOrder = (infoPerson, product) => dispatch => {
	axios.post('/order/', {
		...infoPerson,
		...product,
	})
		.then(res => {
			console.log(res)
		})
		.catch(err => {
			console.log(err)
		})
}
