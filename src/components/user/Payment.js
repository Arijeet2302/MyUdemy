import React, { useState, useContext, useEffect } from 'react';
import '../user/payment.css';
import UserContext from '../../services/UserContext';
import axios from 'axios';

const PaymentPage = () => {

  const [cartItems, setCartItems] = useState([]);
  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCVV] = useState('');
  const [error, setError] = useState('');
  const { cartAmount, User } = useContext(UserContext);

  useEffect(() => {
    axios.get("https://myudemy-backend.vercel.app/cart/show/", {
      params: {
        uid: User?.uid,
      }
    })
      .then((res) => {
        setCartItems(res.data);
      }).catch((e) => { console.log("error while fetching", e); })
  }, [User])

  const handlePayment = () => {
    if (cardName === '' || cardNumber === '' || expiryDate === '' || cvv === '') {
      setError('Please fill in all fields.');
    } else if (/^[0-9]{16}$/.test(cardNumber) && cvv.length >= 3) {
      setError('');
      axios.post("https://myudemy-backend.vercel.app/user/course/add_UserCourse/", {
        uid: User?.uid,
        cust_name: User?.displayName,
        course_id: cartItems.map((item) => parseInt(item.course_id.slice(-2)))
      }).then((res) => {
        alert("Payment Successfull");
        return;
      }).catch((e) => { console.log("error while adding", e); })
    } else {
      setError("Invalid Input");
    }
    setTimeout(() => {
      setError('');
    }, 3000);
  };

  return (
    <>
      <div className='payment-header'>
        <h2>Checkout</h2>
      </div>
      <div className="payment-container">
        <div className="payment-form">
          <div className="form-group">
            <label htmlFor="cardNumber">Card Number</label>
            <input
              type='text'
              placeholder='1234 5678 9012 3456'
              id="cardNumber"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="cardName">Cardholder Name</label>
            <input
              type="text"
              id="cardName"
              placeholder='Name on card'
              value={cardName}
              onChange={(e) => setCardName(e.target.value)}
            />
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="expiryDate">Expiry Date</label>
              <input
                type="text"
                id="expiryDate"
                placeholder='MM/YY'
                value={expiryDate}
                onChange={(e) => setExpiryDate(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="cvv">CVV</label>
              <input
                type="password"
                id="cvv"
                placeholder='CVV'
                value={cvv}
                onChange={(e) => setCVV(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className='payment-div'>
          <div>
            <h2>Summary</h2>
            <div className='price-div'>
              <div id='price-label'>Original Price:</div>
              <div>Rs.{cartAmount}</div>
            </div>
            <div className='price-div'>
              <div id='price-label'>Discount:</div>
              <div>-Rs.0</div>
            </div>
            <div className='line'></div>
            <div className='price-div-total'>
              <div id='price-label'>Total:</div>
              <div>Rs.{cartAmount}</div>
            </div>
          </div>
          <div className='error-msg'>{error}</div>
          <button className="payment-btn" onClick={handlePayment}>Pay Now</button>
        </div>
      </div>
    </>
  );
};

export default PaymentPage;
