import React from 'react';
import { useEffect } from 'react';
import { productData } from "../db-products";

export const Products = () => {
  return (
    <div className='container'>
      <div className='row breadcrumb'>
        <h1>Products</h1>
      </div>
      <div className='row stock-container'>
        {productData.map((data, key) => {
          return (
            <div className='col col-sm-3 stock-item' key={key}>
              <a href={'/product/'+ data.id}>
                <div>{data.images ? <img src={data.images.image1} alt="Brand image" /> : ''}</div>
                <div>Производител - {data.brand}</div>
                <div>Модел - {data.model}</div>
                <div>Размер - {data.sizewidth} {data.sizeheight} {data.sizediameter}</div>
                <div><strong>Цена</strong> - {data.price}лв</div>
              </a>
            </div>
          );
        })}
      </div>

    </div>
  )
}

export default Products;