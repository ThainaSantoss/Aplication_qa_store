import React, { useEffect, useState } from "react";


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
            <ul className="product-list" data-testid="product-list">
                {products.map((p) => (
                    <li key={p.id} data-testid="product-item">
                        <strong>{p.title}</strong> - ${p.price}
                        <button data-testid="add-to-cart" onClick={() => addToCart(p)}>Adicionar ao carrinho</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ProductList;