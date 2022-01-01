import React, { useEffect } from "react";
import { Axios } from "axios";
import { productData } from "../db-products";

const ProductPage = (props) => {
  const url = window.location.href;
  const lastSegment = url.substring(url.lastIndexOf("/") + 1);
  
  const productId = productData.find(({ id }) => id == lastSegment);
  const htmlString = productId.description;
  
  useEffect(() => {

    // Axios.get(`/api/product/products_by_id?id=${productData.id}&type=single`)

    // let variable = {

    // }
    // Axios.post('/api/product/getProduct', variable)
  }, [])

  return (
    <div className='row'>
      <div className='col col-sm-6 stock-item'>
        <div>{productId.image ? <img src={productId.image} alt="Brand image" /> : ''}</div>
        <div>Производител - {productId.brand}</div>
        <div>Модел - {productId.model}</div>
        <div>Размер - {productId.size}</div>
      </div>
      <div className='col col-sm-6'>
        <div dangerouslySetInnerHTML={{ __html: htmlString }} />
      </div>

    </div>
  );
};

export default ProductPage;