import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      const response = await axios.get(
        '(link unavailable)'
      );
      setProducts(response.data);
      setLoading(false);
    };
    fetchProducts();
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {products.map((product) => (
            <li key={product.productName}>
              <h2>{product.productName}</h2>
              <p>Price: {product.price}</p>
              <p>Rating: {product.rating}</p>
              <p>Discount: {product.discount}%</p>
              <p>Availability: {product.availability}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Products;