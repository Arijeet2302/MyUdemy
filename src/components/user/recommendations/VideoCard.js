import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./videpCard.css";
import Star from "@mui/icons-material/Star";
import StarHalf from "@mui/icons-material/StarHalf";
import axios from "axios";
import UserContext from "../../../services/UserContext";


function VideoCard(props) {


  const navigate = useNavigate();
  const { User, cart, setCart, isLoggedIn } = useContext(UserContext);
  const [showAddCart, setShowAddCart] = useState(true);


  useEffect(()=>{
    const checkCart = async () => {
      const res = await axios.get("https://myudemy-backend.vercel.app/user/course/show/", {
        params :{
          uid : User?.uid,
        }
        });
        const CartItems = res.data;
        if(CartItems.length > 0){
          const isItemPresent = CartItems.find((item) => item.course_name === props.courseTitle);
          if(isItemPresent){
            setShowAddCart(false);
          }else{
            setShowAddCart(true);
          }
        }
    }
    checkCart();
  },[ isLoggedIn, props.courseTitle, User])


  const handleAddCart = () => {
    if (isLoggedIn) {
      axios.post("https://myudemy-backend.vercel.app/cart/increment_quantity/", {
        uid: User.uid,
        course_id: props.courseId,
        cust_name: User.displayName,
        course_name: props.courseTitle,
        author_name: props.instructor,
        price: props.price,
        image: props.imgSrc,
      }).then((res) => {
        alert("Course has been added to cart");
        setCart(!cart);
      }).catch((e) => {
        console.error("error while adding:", e);
      })
    } else {
      alert("Please login to continue");
      navigate("/login");
    }
  }

  const navigateCourse = () => {
    if (isLoggedIn) {
      if(!showAddCart){
      navigate("/course");
      }else{
        alert("Add to cart or purchase course");
      }
    }
    else {
      alert("Please login to continue");
      navigate("/login");
    }
  }

  return (
    <>
      <div className="container">
        <div className="videoCard">
          <img className="courseImg" src={props.imgSrc} alt="courseImg" onClick={navigateCourse}></img>
          <h3>{props.courseTitle}</h3>
          <p>{props.instructor}</p>
          <div className="ratingDiv">
            <span className="rating">{props.rating}</span>
            <span className="stars">
              <Star />
              <Star />
              <Star />
              <Star />
              <StarHalf />
            </span>
            <span className="noOfStudents">{props.noOfStudents}</span>
          </div>
          <h3 className="price">₹{props.price}</h3>
          <div className="bestsellerBadge">Bestseller</div>
          {showAddCart ? <button className="cart" onClick={handleAddCart}>Add to cart</button> : null }
        </div>
      </div>
    </>
  );
}

export default VideoCard;