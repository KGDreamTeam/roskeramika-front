import React from "react";

import CollectionProduct from "./CollectionProduct";

const CollectionProducts = props => {
  return (
    <div className="collection-products-wrapper">
      <h2>Товары коллекции {props.collection}</h2>
      <div className="collection-products">
        {props.items.length !== 0 ? (
          props.items.map(item => (
            <CollectionProduct
              img={item.image1}
              material={item.material}
              name={item.name}
              surface={item.surface}
              width={item.width}
              length={item.length}
              price={item.price}
              key={item.id}
              id={item.id}
              artikul={item.artikul}
              subcategory={item.subcategorie.name}
              manufacturer={item.manufacturer.company_name}
            />
          ))
        ) : (
          <div className="no-products">Нет товаров</div>
        )}
      </div>
    </div>
  );
};

export default CollectionProducts;
