import React, { useContext, useEffect , useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../user/cart.css";
import { ShoppingCartCheckout } from '@mui/icons-material';
import axios from 'axios';
import UserContext from '../../services/UserContext';



function Cart () {
  
  const navigate = useNavigate();
  const [CartItems , setCartItems] = useState([]);
  const {User, cart, setCart} = useContext(UserContext);


  useEffect(() => {
    axios.get("https://myudemy-backend.vercel.app/cart/show/", {
    params :{
      uid : User?.uid,
    }
    })
    .then((res)=> {
      setCartItems(res.data);
    }).catch((e)=>{console.log("error while fetching",e);})
  },[User,cart])


    const HandleTotal=(setCart)=>[
      setCart.reduce((total, item) => total + item.price * item.quantity , 0).toFixed(2),
    ];
    const handleCheckout=()=>{
      navigate("/payment");
    }

    const handleRemove=(item_no)=>{
      axios.delete(`https://myudemy-backend.vercel.app/cart/delete/?item_no=${item_no}`)
      .then((res)=>{
        alert(res.data.message);
        setCart(!cart);
      }).catch((e)=>{console.log("error while deleting",e);})
    };
    

    
    return (
      <div className="cart-container">
      <h2><ShoppingCartCheckout/>Your Cart</h2>
      {CartItems.length === 0 ? (
        <p className="cart-empty">Your cart is empty.</p>
        ) : (
          <div>
          {CartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <p className="cart-item-title">{item.course_name}</p>
              <p className="cart-item-author">By : {item.author_name}</p>
              <p className="cart-item-price">Price: Rs.{item.price}</p>
              <p className="cart-item-quantity">Quantity: {item.quantity}</p>
              <button className="remove-btn" onClick={()=>handleRemove(item.id)}>Remove</button>
            </div>
          ))}
          <div>
            <p className="cart-total">Total:  Rs.{HandleTotal(CartItems)}</p>
            <button className="cart-checkout-btn" onClick={handleCheckout}>
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Cart ;