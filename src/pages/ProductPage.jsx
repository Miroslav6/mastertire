import React, { useEffect } from "react";
import { Axios } from "axios";
import { productData } from "../db-products";
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import ImageGallery from 'react-image-gallery';

const ProductPage = (props) => {
  const url = window.location.href;
  const lastSegment = url.substring(url.lastIndexOf("/") + 1);

  const productId = productData.find(({ id }) => id == lastSegment);

  const images = productId.images;
  const images2 = [
    {
      original: 'https://picsum.photos/id/1018/1000/600/',
      thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1015/1000/600/',
      thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1019/1000/600/',
      thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
  ];

  // console.log(images1);
  console.log(images);

  useEffect(() => {
    

    // Axios.get(`/api/product/products_by_id?id=${productData.id}&type=single`)

    // let variable = {

    // }
    // Axios.post('/api/product/getProduct', variable)
  }, [])

  return (
    <div className="container mt-5">
      <div role="presentation">
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            Начало
          </Link>
          <Link
            underline="hover"
            color="inherit"
            href="/products"
          >
            Продукти
          </Link>
          <Typography color="text.primary">Breadcrumbs</Typography>
        </Breadcrumbs>
      </div>
      <div className='row'>
        <div className='col col-sm-6 stock-item'>
          <ImageGallery items={images} />
        </div>
        <div className='col col-sm-6'>
          <h1 className='product-title'>{productId.shortdescription} {productId.brand} {productId.model} {productId.size}</h1>
          <p className='price-amount'><bdi>{productId.price} <span className='price-currency-symbol'>лв</span></bdi></p>
          <ul>
            <li><strong>Марка</strong> - {productId.brand}</li>
            <li><strong>Размер</strong> - {productId.sizewidth} {productId.sizeheight} {productId.sizediameter}</li>
            <li><strong>DOT</strong> - {productId.DOT}</li>
            <li><strong>Тип</strong> - {productId.type}</li>
          </ul>
          <p>За поръчки и консултация се свържете с наш консултант</p>
          <a href='tel:+359883378679' className='h3 hd-phone'><i className="bi bi-telephone"></i> +359 883378679</a>
        </div>
        <div className='col col-sm-12'>
          <h2>Описание за продукта</h2>
          <div dangerouslySetInnerHTML={{ __html: productId.description }} />
        </div>
      </div>
    </div>
  );
};

export default ProductPage;