import React from 'react';
import { useEffect } from 'react';
import {productData} from "../db-products";


export const Products = () => {

  const backendData = [
    { title: "Grocery List", description: "Milk, Soup, Bread", createdat: "01-18-2021" },
    { title: "Math Homework", description: "Remember to finish question 8-10 before monday", createdat: "12-01-2020" },
    { title: "Call James", description: "Ask him about the company party.", createdat: "12-30-2020" }
  ];
  return (
    <>
      <div>
        <h1>Products</h1>

        <div className="row stock-container">
          {productData.map((data, key) => {
            return (
              <div className='col col-sm-3' key={key}>
                <div><img src={data.image} alt="Logo" /></div>
                <div>{data.brand}</div>
                <div>{data.model}</div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  )
}

export default Products;