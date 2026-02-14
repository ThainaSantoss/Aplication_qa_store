import { useState } from "react";

function CouponForm() {

    const [couponCode, setCouponCode] = useState("");
    const [dataCoupon, setDataCoupon] = useState({finData: ""})

    const validCoupons = {
        DESCONTO10: 0.10,
        BACKFRIDAY: 0.50,
        FRETEGRATIS: "frete"
    }

    const handleApply = () => {
        if (validCoupons[couponCode]) {
            if(validCoupons[couponCode] == "frete") {
                console.log("Cupom aplicado: frete gratis!");
                setDataCoupon({finData: "Cupom aplicado: frete gratis!"})
            } else {
                const discount = validCoupons[couponCode];
                console.log("Cupom aplicado! Desconto de: ", discount*100, "%");
                setDataCoupon({finData: "Cupom aplicado!"})
            } 
        } else {
            console.log("Cupom inválido!");
            setDataCoupon({finData: "Cupom inválido!"})
     
        }
        
    }
    
    return(
        <div>
      <label>Cupom: </label>
      <input
        type="text"
        value={couponCode}
        onChange={(e) => setCouponCode(e.target.value)}
        />
      <button onClick={handleApply}>Aplicar</button>
      {dataCoupon.finData && <p>{dataCoupon.finData}</p>}
    </div>

    );
}

export default CouponForm;