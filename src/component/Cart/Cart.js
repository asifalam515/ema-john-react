import React from 'react';
import './Cart.css'
const Cart = (props) => {
 const{cart}=props;
 let total=0;
 for(const product of cart){
   total=total+product.price;
 }
const shipping= total >0 ?15:0;
const tax=(total+shipping)* 0.10
 const grandTotal=total+shipping+tax;
  return (
    <div>
         <h3>Order Summary</h3>
<h5>Item Ordered:{props.cart.length}</h5>
<br />
<p>total:{total}</p>
<p>tax:{tax}</p>
<p>Grand Total:{grandTotal}</p>
    </div>
  );
};

export default Cart;