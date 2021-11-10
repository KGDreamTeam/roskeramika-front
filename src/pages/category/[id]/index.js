import React, {useState, useEffect} from 'react'
import {useSelector} from "react-redux";
import {useRouter} from "next/router"

import axios from '../../../axios/axios'

import Collection from "../../../components/templates/Collection";

const Category = () => {
  const [collections, setCollections] = useState([])

  const router = useRouter()

  const {id} = router.query

  const categories = useSelector(state => state.kategori.categories);

  useEffect(() => {
    const i = id
    axios.get(`/apiv1/collection/?categories=${i}`)
      .then(res => {
        const data = res.data
        setCollections([...data])
      })
      .catch(err => {
        console.log(err)
      })

  }, [id])

  useEffect(() => {
    setTitle();
  }, [categories, id])

  const setTitle = () => {
    const	name = categories.find(i => i.id === Number(id));
    document.title = name?.name
  }

  return(
    <div className='category-page'>
      <div className='category-page-container'>
        {
          collections && collections.map(item => (
            <Collection
              img={item.image1}
              name={item.name}
              key={item.id}
              id={item.id}
              sales={item.discount}
              products={item.products}
            />
          ))
        }
      </div>
    </div>
  )
}

export default Category
