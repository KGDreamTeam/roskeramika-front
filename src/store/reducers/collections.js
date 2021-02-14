import {PUSH_COLLECTIONS} from '../actionTypes'

const initialState = [
	{
		id: 1,
		name: 'hello'
	}
]

const reducer = (state = initialState, action) => {
	switch(action.type){
		case PUSH_COLLECTIONS:
			return[
				...action.payload
			]
			
		default:
			return state
	}
}

export default reducer
