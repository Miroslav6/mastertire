import React from 'react';
import { useEffect } from 'react';
import { productData } from "../db-products";

export const Products = () => {
  return (
    <div className='container mt-5'>
      <div className='row breadcrumb'>
        <h1>Products</h1>
      </div>
      <div className='row stock-container'>
        {productData.map((data, key) => {
          return (
            <div className='col col-sm-3 stock-item' key={key}>
              <a href={'/product/'+ data.id}>
                <div>{data.images ? <img src={data.images[0].original} alt="Brand image" /> : ''}</div>
                <div>Производител - {data.brand}</div>
                <div>Модел - {data.model}</div>
                <div>Размер - {data.sizewidth} {data.sizeheight} {data.sizediameter}</div>
                <div>Цена - <strong>{data.price}лв</strong></div>
              </a>
            </div>
          );
        })}
      </div>

    </div>
  )
}

export default Products;