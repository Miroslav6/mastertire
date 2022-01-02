import React, { useEffect } from "react";
import { Axios } from "axios";
import { productData } from "../db-products";

const ProductPage = (props) => {
  const url = window.location.href;
  const lastSegment = url.substring(url.lastIndexOf("/") + 1);

  const productId = productData.find(({ id }) => id == lastSegment);

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

      </div>
      <div className='col col-sm-6'>
        <h1 className='product-title'>{productId.shortdescription} {productId.brand} {productId.model} {productId.size}</h1>
        <p className='price-amount'><bdi>{productId.price} <span className='price-currency-symbol'>лв</span></bdi></p>
        <ul>
          <li><strong>Марка</strong> - {productId.brand}</li>
          <li><strong>Размер</strong> - {productId.size}</li>
          <li><strong>DOT</strong> - {productId.DOT}</li>
          <li><strong>Тип</strong> - {productId.type}</li>
        </ul>
      </div>
      <div className='col col-sm-12'>
        <h2>Описание за продукта</h2>
        <div dangerouslySetInnerHTML={{ __html: productId.description }} />
      </div>
    </div>
  );
};

export default ProductPage;