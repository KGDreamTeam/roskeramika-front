import {combineReducers} from 'redux'

import products from './products'
import basket from './basket'
import kategori from './kategori'
import collections from './collections'

export default combineReducers({
	products,
	basket,
	kategori,
	collections
})
