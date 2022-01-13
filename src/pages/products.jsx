import React from 'react';
import { useState, useEffect } from 'react';
import { productData } from "../db-products";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const Products = () => {
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('');
  const [diameter, setDiameter] = useState('');

  const allUniqueWidths = [...new Set(productData.map((data) => data.sizewidth).sort())];
  const allUniqueHeights = [...new Set(productData.map((data) => data.sizeheight).sort())];
  const allUniqueDiameters = [...new Set(productData.map((data) => data.sizediameter).sort())];

  const handleChangeWidth = (event) => {
    setWidth(event.target.value);
  };
  const handleChangeHeight = (event) => {
    setHeight(event.target.value);
  };
  const handleChangeDiameter = (event) => {
    setDiameter(event.target.value);
  };

  // function sayHello() {
  //   alert('Hello!');
  // }
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
                onChange={handleChangeWidth}
              >
                {allUniqueWidths?.map(data => {
                  return (
                    <MenuItem key={data} value={data}>
                      {data}
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
                value={height}
                label="Височина"
                onChange={handleChangeHeight}
              >
                {allUniqueHeights?.map(data => {
                  return (
                    <MenuItem key={data} value={data}>
                      {data}
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
              <InputLabel id="demo-simple-select-label">Диаметър</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={diameter}
                label="Диаметър"
                onChange={handleChangeDiameter}
              >
                {allUniqueDiameters?.map(data => {
                  return (
                    <MenuItem key={data} value={data}>
                      {data}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </Box>
        </div>
        <div className='col col-sm-3 mb-5 stock-item'>
          <Button variant="contained" className='h-100'>Търси</Button>
          <Button variant="contained" className='ml-3 h-100'>Изчисти</Button>
          {/* <Button variant="contained" onClick={sayHello()} className='ml-3 h-100'>Изчисти</Button> */}
        </div>
      </div>
      <div className='row stock-container'>
        {width} {height} {diameter}
        {productData.map((data, key) => {
          return (
            <div className='col col-sm-3 stock-item' key={key}>
              <a href={'/product/' + data.id}>
                <div>{data.images ? <img src={data.images[0].original} alt="Brand image" /> : ''}</div>
                <div>Производител - {data.brand}</div>
                <div>Модел - {data.model}</div>
                <div>Размер - {data.sizewidth} {data.sizeheight} {data.sizediameter}</div>
                <div>Година - {data.DOT}</div>
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