import React, { useEffect} from "react"
import { useDispatch, useSelector } from "react-redux"

import CollectionInfo from "../../../components/templates/CollectionInfo"
import CollectionProducts from "../../../components/templates/CollectionProducts"
import BannerHeader from "../../../components/templates/BannerHeader"

import { handleGetOneCollectionActionCreator } from "../../../store/actions/collections"
import {useRouter} from "next/router";

const Collection = () => {
  const dispatch = useDispatch()
  const collection = useSelector((state) => state.collections.oneCollection)

  const router = useRouter()

  const {id} = router.query

  useEffect(() => {
    dispatch(handleGetOneCollectionActionCreator(id))
    document.title = "Детали коллекции"
  }, [id])

  return (
    <div className='collection'>
      <BannerHeader />
      {collection ? (
        <CollectionInfo
          id={id}
          img={[
            collection.image1,
            collection?.image2,
            collection?.image3,
            collection?.image4,
            collection?.image5,
            collection?.image6,
          ]}
          name={collection.name}
          products={collection.products}
          price={collection.price}
          size={collection.size}
          material={collection.material}
          manufacturer={collection.man}
          surface={collection.surface}
        />
      ) : null}
      {collection.products ? (
        <CollectionProducts
          items={collection.products}
          collection={collection.name}
        />
      ) : null}
    </div>
  )
}

export default Collection
