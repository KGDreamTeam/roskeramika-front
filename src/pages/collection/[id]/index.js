import React, {useEffect} from "react"
import Head from "next/head";
import {useDispatch, useSelector} from "react-redux"

import CollectionInfo from "../../../components/templates/CollectionInfo"
import CollectionProducts from "../../../components/templates/CollectionProducts"
import BannerHeader from "../../../components/templates/BannerHeader"

import {handleGetOneCollectionActionCreator} from "../../../store/actions/collections"
import {useRouter} from "next/router";

const Collection = () => {
  const dispatch = useDispatch()
  const collection = useSelector((state) => state.collections.oneCollection)

  const router = useRouter()

  const {id} = router.query

  useEffect(() => {
    dispatch(handleGetOneCollectionActionCreator(id))
  }, [id])

  return (
    <div className='collection'>
      <Head>
        <title>Детали коллекции</title>
        <meta
          name="description"
          content="керамогранит
керамогранит бишкек
Керамогранит для фасада Бишкек
Керамогранит для пола
керамогранит для пола в бишкеке
керамическая плитка
керамическая плитка на пол
керамическая плитка бишкек
керамическая плитка цена в бишкеке
купить керамическую плитку
купить керамическую плитку бишкек
плитка для кухни
плитка для кухни бишкек
плитка для ванной бишкек
плитка для пола
плитка для пола бишкек
Кафель цены бишкек
Плитка 60 60 на пол цена
Распродажа кафеля в бишкеке
Керамогранит цена бишкек
Мир кафеля Бишкек адрес
Настенный кафель
Кафель квадратный метр цена бишкеке
напольная плитка бишкек
плитка для фасада дома
керамическая плитка для фасада дома
Плитка для фасада дома цена
плитка для фасада в бишкеке
Фасадная плитка в Бишкеке
Керамогранит для фасада Бишкек
керамогранит 120 на 60
купить керамогранит в бишкеке
керамогранит - купить в городе Бишкек
керамогранит
керамогранит 15*60
керамогранит 1500х600
Крупноформатный керамогранит
Широкоформатный керамогранит под мрамор
Крупноформатная плитка
Керамогранит 1200х600
Крупноформатный керамогранит под камень
Керамогранит 1200х600 на стену
Широкоформатная плитка Керама Марацци
плитка аркадия грация керамика
керамогранит 15*90
керамогранит 15*90 бишкек
керамогранит 20*120
керамогранит под дерево 20*120
Керамогранит под дерево в ванной
керамогранит 20 на 60
керамогранит 20*60
керамогранит 20 на 90
керамогранит 22.5x90
керамогранит 30*30
керамогранит 300х300
Керамогранит 300х300х12 цена
Плитка керамогранит 300х300 цена
керамогранит 30 на 60
плитка 30 на 60 цена
плитка 30 на 60 цена бишкек
Кафель производство Кыргызстан
Таатан Бишкек кафель
Кафель для ванны цена
Белорусский кафель в Бишкеке
керамогранит 40*40
плитка для пола размером 40 на 40
керамогранит 40*40 бишкек
керамогранит 45 на 45
купить керамогранит 45 на 45
керамогранит 45*90
керамогранит 450х900
керамогранит 47х47
керамогранит 600х600
керамогранит 600х600 цена
Керамогранит 600х600 на стену
Керамогранит на стену в ванной"/>
      </Head>
      <BannerHeader/>
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
