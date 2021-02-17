import {PUSH_COLLECTIONS, PUSH_OTHER_COLLECTIONS, PUSH_HIT_COLLECTIONS, PUSH_NEWS_COLLECTIONS} from '../actionTypes'

const initialState = {
	newCollections: [],
	hitCollections: [],
	otherCollections: []
}

const reducer = (state = initialState, action) => {
	switch(action.type){
		case PUSH_COLLECTIONS:
			return[
				...action.payload
			]
		case PUSH_HIT_COLLECTIONS:
			return{
				...state,
				newCollections: [
					...state.newCollections
				],
				hitCollections: [
					...action.payload
				],
				otherCollections: [
					...state.otherCollections
				]
			}
		case PUSH_OTHER_COLLECTIONS:
			return{
				...state,
				newCollections: [
					...state.newCollections
				],
				hitCollections: [
					...state.hitCollections
				],
				otherCollections: [
					...action.payload
				]
			}
		case PUSH_NEWS_COLLECTIONS:
			return{
				...state,
				newCollections: [
					...action.payload
				],
				hitCollections: [
					...state.hitCollections
				],
				otherCollections: [
					...state.otherCollections
				]
			}
		default:
			return state
	}
}

export default reducer
