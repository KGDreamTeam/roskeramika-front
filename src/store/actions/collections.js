import axios from '../../axios/axios'
import {PUSH_COLLECTIONS} from '../actionTypes'

export const handleGetAllCollectionsActionCreator = () => dispatch => {
	axios.get('/collection')
		.then(res => {
			console.log(res)
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

