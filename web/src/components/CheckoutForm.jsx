import { useEffect, useState } from 'react'

function CheckoutForm({ cartItems}) {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [payment, setPayment] = useState("");
  const [data, setData] = useState({send: ""});

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Dados enviados:", { name, address, payment, cartItems });
    
    setData({send: "Compra finalizada com sucesso!"});

    setName("");
    setAddress("");
    setPayment("");

  };

  return (
    <div>
      <h2>Finalizar compra</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome: </label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label>Endereço: </label>
          <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
        </div>
        <div>
          <label>Pagamento: </label>
          <input type="text" value={payment} onChange={(e) => setPayment(e.target.value)} />
        </div>
        <button type="submit">Confirmar Pedido</button>
      </form>
      {data.send && <p>{data.send}</p>}
    </div>
  );
}

export default CheckoutForm;