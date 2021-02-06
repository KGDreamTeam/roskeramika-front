import axios from "../../axios/axios"

export const handleGetAllKategori = () => dispatch => {
	axios.get('/')
		.then(res => {
			console.log(res)
		})
		.catch(err => {
			console.log(err)
		})
}
