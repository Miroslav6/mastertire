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

  const [products, setProducts] = useState(productData);
  const [width, setWidth] = useState('Ширина');
  const [height, setHeight] = useState('Височина');
  const [diameter, setDiameter] = useState('Диаметър');

  const clearState = () => {
    setWidth('Ширина');
    setHeight('Височина');
    setDiameter('Диаметър');
  };

  useEffect(() => {
    let filteredProducts = productData;
    if(width !== 'Ширина') {
      filteredProducts = filteredProducts.filter(product => product.sizewidth === width)
    }

    if(height !== 'Височина') {
      filteredProducts = filteredProducts.filter(product => product.sizeheight === height)
    }

    if(diameter !== 'Диаметър') {
      filteredProducts = filteredProducts.filter(product => product.sizediameter === diameter)
    }

    setProducts(filteredProducts);

  },[width, height, diameter]);

  let allUniqueWidths = [...new Set(productData.map((data) => data.sizewidth).sort()), 'Ширина'];
  let allUniqueHeights = [...new Set(productData.map((data) => data.sizeheight).sort()), 'Височина'];
  let allUniqueDiameters = [...new Set(productData.map((data) => data.sizediameter).sort()), 'Диаметър'];

const handleFilterChange = (e, filterType) => {
switch (filterType) {
    case "width":
      setWidth(e.target.value)
      break;

    case "height":
      setHeight(e.target.value)
      break;

    case "diameter":
      setDiameter(e.target.value)
      break;
  }

};

  const handleChangeWidth = (event) => {
    handleFilterChange(event, 'width')
  };
  const handleChangeHeight = (event) => {
    handleFilterChange(event, 'height')
  };
  const handleChangeDiameter = (event) => {
    handleFilterChange(event, 'diameter')
  };


  return (
    <div className='container mt-5'>
      <div className='row breadcrumb'>
        <h1>Мото гуми</h1>
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
          <Button variant="contained" onClick={clearState} className='ml-3 h-100'>Изчисти</Button>
        </div>
      </div>
      <div className='row stock-container'>

        {products.map((data, key) => {
          return (
            <div className='col col-sm-3 mb-5 text-center' key={key}>
              <a href={'/product/' + data.id} className='products-item h-100 p-3'>
                <div>{data.images ? <img lazy src={data.images[0].original} alt="Brand image" /> : ''}</div>
                <h3>{data.position} {data.brand} {data.model} {data.sizewidth} {data.sizeheight} {data.sizediameter}</h3>
                <div className='products-price'><strong>{data.price}лв</strong></div>
              </a>

            </div>
          );
        })}
      </div>

    </div>
  )
}

export default Products;