import React, { useState, useEffect } from "react";
import Products from "./modules/Products";

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    Products.index().then((data) => {
      setProducts(data);
    });
  }, []);

  const addToOrder = (id) => {
    debugger;
  };

  const productsList = products.map((product) => {
    return (
      <div key={product.id}>
        {product.name} - {`${product.price} kr`}{" "}
        <button onClick={() => addToOrder(product.id)}>Add to Order</button>
      </div>
    );
  });

  return (
    <>
      <h1>Slowfood</h1>
      <div data-cy="products-list">{productsList}</div>
    </>
  );
};

export default App;
