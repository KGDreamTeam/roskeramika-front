import {PUSH_ITEMS_BASKET} from "../actionTypes"

export const pushItemToBasket = (payload) => {
	return {
		type: PUSH_ITEMS_BASKET,
		payload
	}
}

