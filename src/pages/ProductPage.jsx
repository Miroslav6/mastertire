import React, { useEffect } from "react";
import { Axios } from "axios";
import { productData } from "../db-products";

const ProductPage = (props) => {
  const url = window.location.href;
  const lastSegment = url.substring(url.lastIndexOf("/") + 1);
  console.log(lastSegment);
  console.log(productData);
  const productId = productData.find( ({ id }) => id == lastSegment );
  console.log(productId);
  useEffect(() => {

    // Axios.get(`/api/product/products_by_id?id=${productData.id}&type=single`)

    // let variable = {

    // }
    // Axios.post('/api/product/getProduct', variable)
  }, [])

  return (
    <div>
      <div className='col col-sm-3 stock-item'>
        <div>{productId.image ? <img src={productId.image} alt="Brand image" /> : ''}</div>
        <div>Производител - {productId.brand}</div>
        <div>Модел - {productId.model}</div>
        <div>Размер - {productId.size}</div>
      </div>


    </div>
  );
};

export default ProductPage;