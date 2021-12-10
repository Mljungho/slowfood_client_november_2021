import React, { useState, useEffect } from "react";
import Products from "./modules/Products";
import Orders from "./modules/Orders";

const App = () => {
  const [products, setProducts] = useState([]);
  const [message, setMessage] = useState();
  const [order, setOrder] = useState();

  useEffect(() => {
    Products.index().then((data) => {
      setProducts(data);
    });
  }, []);

  const addToOrder = (id) => {
    if (order) {
      Orders.update(id, order.id).then((response) => {
        setMessage(response.message);
        setOrder(response.order);
      });
    } else {
      Orders.create(id, 99).then((response) => {
        setMessage(response.message);
        setOrder(response.order);
      });
    }
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
      <h3 data-cy="message-box">{message}</h3>
      <div data-cy="product-list">{productsList}</div>
    </>
  );
};

export default App;
