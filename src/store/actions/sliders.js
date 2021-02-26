import axios from '../../axios/axios'
import{PUSH_ITEMS_SLIDER_COLLECTIONS} from '../actionTypes'

export const handleGetAllCollections = () => dispatch => {
	
	const sortArray = (array) => {
		const newsArr = array.filter(item => item.labelnew)
		const hitsArr = array.filter(item => item.labelhit)
		const salesArr = array.filter(item => item.discount !== 0)
		return{
			newsArr,
			hitsArr,
			salesArr
		}
	}
	
	const getRandomFiveItems = (sortedArrays) => {
		let returningRandomedArrays = {
			newsArr: [],
			hitsArr: [],
			salesArr: []
		}
		const shuffledNews = sortedArrays.newsArr.sort(() => 0.5 - Math.random());
		returningRandomedArrays.newsArr = shuffledNews.slice(0, 5);
		const shuffledHits = sortedArrays.hitsArr.sort(() => 0.5 - Math.random());
		returningRandomedArrays.hitsArr = shuffledHits.slice(0, 5);
		const shuffledSales = sortedArrays.salesArr.sort(() => 0.5 - Math.random());
		returningRandomedArrays.salesArr = shuffledSales.slice(0, 5);
		return returningRandomedArrays
	}

	axios.get('/apiv1/collection/')
		.then(res => {
			let sorted = sortArray(res.data)
			let randomed = getRandomFiveItems(sorted)
			dispatch(pushItemsToSlider(randomed))
		})
		.catch(err => {
			console.log(err)
		})
}

export const pushItemsToSlider = (payload) => {
	return{
		type: PUSH_ITEMS_SLIDER_COLLECTIONS,
		payload
	}
}
