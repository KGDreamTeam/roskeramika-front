import {PUSH_ITEMS_SLIDER_COLLECTIONS} from "../actionTypes"


const initialState = {
	newsSliderArray: [],
	hitsSliderArray: [],
	salesSliderArray: []
}

const reducer = (state = initialState, action) => {
	switch(action.type){
		case PUSH_ITEMS_SLIDER_COLLECTIONS:
			return {
				newsSliderArray: [...action.payload.newsArr],
				hitsSliderArray: [...action.payload.hitsArr],
				salesSliderArray: [...action.payload.salesArr]
			}
		default:
			return state
	}
}

export default reducer
