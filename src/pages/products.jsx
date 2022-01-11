import React from 'react';
import { useState, useEffect } from 'react';
import { productData } from "../db-products";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export const Products = () => {
  const [width, setWidth] = useState('');
  const allWidth = productData.map((data) => data.sizewidth);
  console.log(allWidth);
  const handleChange = (event) => {
    setWidth(event.target.value);
  };
  return (
    <div className='container mt-5'>
      <div className='row breadcrumb'>
        <h1>Products</h1>
      </div>
      <div className='row'>
        <div className='col col-sm-3 mb-5 stock-item'>
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Ширина</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={width}
                label="Ширина"
                onChange={handleChange}
              >
                {productData?.map(data => {
                  return (
                    <MenuItem key={data.sizewidth} value={data.sizewidth}>
                      {data.sizewidth}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </Box>
        </div>
        <div className='col col-sm-3 mb-5 stock-item'>
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Височина</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={width}
                label="Височина"
                onChange={handleChange}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>
        <div className='col col-sm-3 mb-5 stock-item'>
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Диаметър</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={width}
                label="Диаметър"
                onChange={handleChange}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>
      </div>
      <div className='row stock-container'>
        {productData.map((data, key) => {
          return (
            <div className='col col-sm-3 stock-item' key={key}>
              <a href={'/product/' + data.id}>
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