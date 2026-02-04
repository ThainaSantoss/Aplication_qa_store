import React, { useEffect, useState } from "react";
import CheckoutForm from "./CheckoutForm";

function ProductList({addToCart}) {
    const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

    return(
        <div>
            <h2>Lista de produtos</h2>
            <ul>
                {products.map((p) => (
                    <li key={p.id}>
                        <strong>{p.title}</strong> - ${p.price}
                        <button onClick={() => addToCart(p)}>Adicionar ao carrinho</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ProductList;