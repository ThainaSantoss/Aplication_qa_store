import { useState } from "react";

function CouponForm() {

    const [couponCode, setCouponCode] = useState("");

    const validCoupons = {
        DESCONTO10: 0.10,
        BACKFRIDAY: 0.50,
        FRETEGRATIS: "frete"
    }

    const handleApply = () => {
        if (validCoupons[couponCode]) {
            if(validCoupons[couponCode] == "frete") {
                console.log("Cupom aplicado: frete gratis!");
            } else {
                const discount = validCoupons[couponCode];
                console.log("Cupom aplicado! Desconto de: ", discount*100, "%");
            } 
        } else {
            console.log("Cupom inválido!");
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
      <button onClick={handleApplyCoupon}>Aplicar</button>
    </div>

    );
}

export default CouponForm;