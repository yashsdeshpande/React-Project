import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './productlist.css'

const ProductList = () => {
  // State to hold the fetched product data
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch products from Fake Store API
  useEffect(() => {
    axios.get('https://cdn.rawgit.com/abbassiddiqi/airbnb-api/bbd1300a/flats.json')
      .then(response => {
        setProducts(response.data);  // Set the products data to state
        setLoading(false);  // Set loading to false after data is fetched
      })
      .catch(error => {
        console.error("There was an error fetching the products!", error);
      });
  }, []);

  // Render the product list
  return (
    <>
    <div className="product-list">
      
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="product-grid">
          {products.map(product => (
            <div key={product.id} className="product-card">
              <img src={product.imageUrl} alt={product.name} className="product-image" />
              <div className="product-title" >
              <p>{product.name}</p>
              </div>
              <div className="product-price" >
              <p>${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
    </>
  );
};

export default ProductList;
