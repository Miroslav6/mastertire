import React from 'react';



function Products() {

    const backendData = [
      { title: "Grocery List", description: "Milk, Soup, Bread", createdat: "01-18-2021" },
      { title: "Math Homework", description: "Remember to finish question 8-10 before monday", createdat: "12-01-2020" },
      { title: "Call James", description: "Ask him about the company party.", createdat: "12-30-2020" }
    ];
  console.log(backendData);
  return (
    <div className="header">
      <h1>Products</h1>
    </div>
  )
}

export default Products;