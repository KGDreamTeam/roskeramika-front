import {PUSH_KATEGORI} from '../actionTypes'

const initialState = [
	{
		id: 1, 
		name: 'Levita1',
		price: 300,
		manufacturer: 'Russia',
		size: '30x40',
		surface: 'Mat',
		style: 'Modern, Casual'
	},
	{
		id: 2, 
		name: 'Levita2',
		price: 300,
		manufacturer: 'Russia',
		size: '40x40',
		surface: 'BAt',
		style: 'Saske, Casual'
	},
	{
		id: 3, 
		name: 'Levita3',
		price: 500,
		manufacturer: 'Kosmos',
		size: '30x50',
		surface: 'Mart',
		style: 'Modern, saa'
	}
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
