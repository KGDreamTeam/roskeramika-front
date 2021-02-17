import axios from '../../axios/axios'
import {PUSH_COLLECTIONS, PUSH_NEWS_COLLECTIONS, PUSH_HIT_COLLECTIONS, PUSH_OTHER_COLLECTIONS} from '../actionTypes'

export const handleGetAllCollectionsActionCreator = () => dispatch => {
	axios.get('/apiv1/collection/')
		.then(res => {
			console.log(res)
		})
		.catch(err => {
			console.log(err)
		})
}

export const handleGetSubCollectionsActionCreator = (subCategoryId) => dispatch => {
	const sort = (arrayOfResponse) => {
		const filteredNewCollection = arrayOfResponse.filter(item => item.labelnew === true)
		const filteredHitCollection = arrayOfResponse.filter(item => item.labelhit === true)
		const filteredOtherCollection = arrayOfResponse.filter(item => item.labelhit === false && item.labelnew === false)
		return {
			newCollections: [...filteredNewCollection],
			hitCollections: [...filteredHitCollection],
			otherCollections: [...filteredOtherCollection]
		}
	}

	axios.get(`/apiv1/collection/?categories=&subcategorieis=${subCategoryId}`)
		.then(res => {
			const filtered = sort(res.data)
			dispatch(pushNewsCollections(filtered.newCollections))
			dispatch(pushHitCollections(filtered.hitCollections))
			dispatch(pushOtherCollections(filtered.otherCollections))
		})
		.catch(err => {
			console.log(err)
		})
}

export const pushCollections = (payload) => {
	return{
		type: PUSH_COLLECTIONS,
		payload
	}
}

export const pushNewsCollections = (payload) => {
	return{
		type: PUSH_NEWS_COLLECTIONS,
		payload
	}
}

export const pushHitCollections = (payload) => {
	return{
		type: PUSH_HIT_COLLECTIONS,
		payload
	}
}

export const pushOtherCollections = (payload) => {
	return{
		type: PUSH_OTHER_COLLECTIONS,
		payload
	}
}
