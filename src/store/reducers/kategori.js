import {PUSH_CATEGORY, PUSH_SUB_CATEGORY} from '../actionTypes'

const initialState = {
	subCategories: [],
	categories: [
		{
			id: 1, 
			name: 'Levita1',
			price: 300,
			manufacturer: 'Russia',
			size: '30x40',
			surface: 'Mat',
			style: 'Modern, Casual'
		}
	]
}
	

const reducer = (state = initialState, action) => {
	switch(action.type){
		case PUSH_CATEGORY:
			return{
				...state,
				categories: [
					...action.payload
				]
			}
		case PUSH_SUB_CATEGORY:
			return{
				...state,
				subCategories: [
					...action.payload
				]
			}
		default:
			return state
	}
}

export default reducer
