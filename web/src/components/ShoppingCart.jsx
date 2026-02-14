function ShoppingCart({ cartItems, onCheckout }) {
  return (
    <div className="add-to-cart" data-testid="add-to-cart">
      <h2 className="text-cart">Carrinho de Compras</h2>
      {cartItems.length === 0 ? (
        <p className="paragraph-cart" data-testid="empty-cart">Seu carrinho está vazio</p>
      ) : (
        <ul className="list-cart" data-testid="cart-item">
          {cartItems.map((item, index) => (
            <li key={index}>
              {item.title} - ${item.price}
            </li>
          ))}
        </ul>
      )}
      <button className="button-cart" data-testid="checkout-button" onClick={onCheckout}>Finalizar compra</button>
    </div>
  );
}

export default ShoppingCart;