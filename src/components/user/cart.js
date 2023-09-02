import React, { useEffect , useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../user/cart.css";
import { ShoppingCartCheckout } from '@mui/icons-material';
import axios from 'axios';
import { auth } from '../../firebase';



function Cart () {
  

  const [cartItems , setCourseData] = useState([]);
  // const [setCart , setCartdata] = useState([]);
  const [User, setUser] = useState(null);


  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
        if (user) {
            setUser(user); 
        } else {
            setUser(null);
        }
    });
    return () => {
        unsubscribe();
    };
}, []);

  useEffect(() => {
    axios.get("https://myudemy-backend.vercel.app/cart/")
    .then((res)=> {
      setCourseData(res.data);
    }).catch((e)=>{console.log("error while fetching",e);})
  },[])


  // const setCart((data) =>{
  //   const temp={};
  // })

  const setCart =[]
  try{
    for (let index = 0; index < cartItems.length; index++) {
      const element = cartItems[index];
      if (element.cust_name === User.displayName){
        setCart.push(element);
      } 
    }}catch{
      console.log("error while categorizing");
    }
  
  const navigate = useNavigate();
  

    const HandleTotal=(setCart)=>[
      setCart.reduce((total, item) => total + item.price * item.quantity , 0).toFixed(2),
    ];
    const handleCheckout=()=>{
      navigate("/payment");
    }

    const handleRemove=(item_no)=>{
      axios.delete(`https://myudemy-backend.vercel.app/cart/${item_no}/`)
      .then((res)=>{
        alert("Cart Item has been removed");
        window.location.reload();
      }).catch((e)=>{console.log("error while deleting",e);})
    };
    

    
    return (
      <div className="cart-container">
      <h2><ShoppingCartCheckout/>Your Cart</h2>
      {setCart.length === 0 ? (
        <p className="cart-empty">Your cart is empty.</p>
        ) : (
          <div>
          {setCart.map((item) => (
            <div key={item.id} className="cart-item">
              <p className="cart-item-title">{item.course_name}</p>
              <p className="cart-item-author">By : {item.author_name}</p>
              <p className="cart-item-price">Price: Rs.{item.price}</p>
              <p className="cart-item-quantity">Quantity: {item.quantity}</p>
              <button className="remove-btn" onClick={()=>handleRemove(item.id)}>Remove</button>
            </div>
          ))}
          <div>
            <p className="cart-total">Total:  Rs.{HandleTotal(setCart)}</p>
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