import React from 'react';
import { useEffect } from 'react';
import { productData } from "../db-products";

export const Products = () => {
  return (
    <>
      <div className='row breadcrumb'>
        <h1>Products</h1>
      </div>
      <div className="row stock-container">
        {productData.map((data, key) => {
          return (
            <div className='col col-sm-3' key={key}>
              <div>{data.image ? <img src={data.image} alt="Brand image" /> : ''}</div>
              <div>{data.brand}</div>
              <div>{data.model}</div>
            </div>
          );
        })}
      </div>

    </>
  )
}

export default Products;