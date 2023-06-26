/* eslint-disable react/prop-types */
import Button from "./Button";
import "../styles/payment-form.styles.scss";
import { useContext, useState } from "react";
import { CartContext } from "../contexts/cartContext";
import FormInput from "./FormInput";




const PaymentForm = ({setModalOpen}) => {
 const [paymentResult, setPaymentResult] = useState({});
 const [buyerData, setBuyerData] = useState({
   buyerEmail: '',
 })
 

 const { buyerEmail } = buyerData

 const {totalPrice} = useContext(CartContext);

  const callPaystack = () => {
    fetch('https://api.paystack.co/transaction/initialize', {
     method: 'POST',
     headers: {
       'Authorization': `Bearer ${import.meta.env.VITE_PAYSTACK_SECRET_KEY}`,
       'Content-Type': 'application/json',
     },
     body: JSON.stringify({
       email: buyerEmail, 
       amount: totalPrice * 100,
       channels: ["card", "bank", "qr", "ussd"],
       metadata: {
         "cancel_action": "https://crown-storex.netlify.app",
       }
     }),
    }).then((res) => res.json())
    .then((data) => {
      location.href = data.data.authorization_url;
    })
  }

  const paymentHandler = async (e) => {
    e.preventDefault();
    await callPaystack();
  }

  return (
    <div className="payment-form-container">
      <div>
        <h3>Payment</h3>
        <div className="remove" onClick={()=>setModalOpen(false)}> &#10005;</div>
        <p>Please enter your email address to continue</p>
      </div>
      <form onSubmit={paymentHandler}>
        <FormInput
          label="Email"
          name="email"
          type="email"
          value={buyerEmail}
          onChange={(e) => setBuyerData({ ...buyerData, buyerEmail: e.target.value })}
          required
        />
        <Button  buttonType={buyerEmail ? "inverted" : "disabled"} >Pay Now With Paystack</Button>
      </form>
    </div>
  )
}

export default PaymentForm