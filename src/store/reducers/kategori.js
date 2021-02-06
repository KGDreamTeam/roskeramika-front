import {PUSH_KATEGORI} from '../actionTypes'

const initialState = [
	{id: 1, name: 'Levita'},
	{id: 1, name: 'Levita'},
	{id: 1, name: 'Levita'}
]

const reducer = (state = initialState, action) => {
	switch(action.type){
		case PUSH_KATEGORI:
			return{
				...state,
				...action.payload
			}
		default:
			return state
	}
}

export default reducer
