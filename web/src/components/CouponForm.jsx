import { useState } from "react";

function CouponForm() {

    const [couponCode, setCouponCode] = useState("");
    const [dataCoupon, setDataCoupon] = useState({feedback: ""})

    const validCoupons = {
        DESCONTO10: 0.10,
        BACKFRIDAY: 0.50,
        FRETEGRATIS: "frete"
    }

    const handleApply = () => {
        if (validCoupons[couponCode]) {
            if(validCoupons[couponCode] == "frete") {
                console.log("Cupom aplicado: frete gratis!");
                setDataCoupon({feedback: "Cupom aplicado: frete gratis!"})
            } else {
                const discount = validCoupons[couponCode];
                console.log("Cupom aplicado! Desconto de: ", discount*100, "%");
                setDataCoupon({feedback: "Cupom aplicado!"})
            } 
        } else {
            console.log("Cupom inválido!");
            setDataCoupon({feedback: "Cupom inválido!"})
     
        }
        
    }
    
    return(
        <div>
      <label>Cupom: </label>
      <input
        type="text"
        value={couponCode}
        onChange={(e) => setCouponCode(e.target.value)}
        className="coupon-from"
        data-testid="coupon-input"
        />
      <button onClick={handleApply} className="button-coupon" data-testid="apply-coupon">Aplicar</button>
      {dataCoupon.feedback && <p data-testid="coupon-status">{dataCoupon.feedback} </p>}
    </div>

    );
}

export default CouponForm;