import React , { useContext} from "react";
import { useNavigate } from "react-router-dom";
import "./videpCard.css";
import Star from "@mui/icons-material/Star";
import StarHalf from "@mui/icons-material/StarHalf";
import axios from "axios";
import UserContext from "../../../services/UserContext";


function VideoCard(props) {


  const navigate = useNavigate();
  const {User, cart, setCart, isLoggedIn} = useContext(UserContext);


  const handleAddCart=()=>[
    axios.post("https://myudemy-backend.vercel.app/cart/increment_quantity/",{
      uid : User.uid,
      cust_name: User.displayName,
      course_name: props.courseTitle,
      author_name : props.instructor,
      price: props.price
    }).then((res)=>{
      alert("Course has been added to cart");
      setCart(!cart);
    }).catch((e)=>{
      console.error("error while adding:",e);})
  ]

  const navigateCourse=()=>[
    navigate("/course")
  ]

  const handleNonUser = () => {
    navigate("/login")
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
      { isLoggedIn ? <button className="cart" onClick={handleAddCart}>Add to cart</button> :
      <button className="cart" onClick={handleNonUser}>Add to cart</button>}
    </div>
    </div>
        </>
  );
}

export default VideoCard;