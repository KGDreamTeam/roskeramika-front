import {PUSH_COLLECTIONS, PUSH_ONE_COLLECTION, PUSH_OTHER_COLLECTIONS, PUSH_HIT_COLLECTIONS, PUSH_NEWS_COLLECTIONS} from '../actionTypes'

const initialState = {
	newCollections: [],
	hitCollections: [],
	otherCollections: [],
	oneCollection: {}
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
				],
				oneCollection: {
					...state.oneCollection
				}
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
				],
				oneCollection: {
					...state.oneCollection
				}
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
				],
				oneCollection: {
					...state.oneCollection
				}
			}
		case PUSH_ONE_COLLECTION:
			return{
				...state,
				newCollections: [
					...state.newCollections
				],
				hitCollections: [
					...state.hitCollections
				],
				otherCollections: [
					...state.otherCollections
				],
				oneCollection: {
					...action.payload.collection,
					manufacturer: action.payload.collection.manufacturer.country,
					products: [
						...action.payload.products
					]
				}
			}
		default:
			return state
	}
}

export default reducer
