import React, { useState, useEffect, useContext } from "react";
import "../../components/header/Header.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { ShoppingCart, AccountCircleSharp } from "@mui/icons-material";
import axios from "axios";
import mainLogo from "../images/mainLogo.png"
import UserContext from "../../services/UserContext";

function Header() {
  const navigate = useNavigate();
  const { User, setUser, cart, isLoggedIn, setIsLoggedIn } = useContext(UserContext);
  const [cartItemCount, setCartItemCount] = useState(0);


  useEffect(() => {
    axios.get("https://myudemy-backend.vercel.app/cart/show/", {
      params: {
        uid: User?.uid,
      }
    })
      .then((res) => {
        const response = res.data;
        setCartItemCount(response.length);
      })
      .catch((e) => {
        console.log("error", e);
      })
  }, [User, cart]);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setIsLoggedIn(!!user);
    });
    return () => unsubscribe();
  }, [setIsLoggedIn]);

  const HandleLogOut = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(authUser => {
      if (authUser) {
        // User is signed in.
        setUser(authUser);
      } else {
        // User is signed out.
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, [setUser]);



  return (
    <div className="headerPrimary">
      <div className="left part">
        <div className="udemyLogo">
          <img src={mainLogo} className="logo" alt="logo"></img>
        </div>
        <div className="HomeDiv">
          <span className="Home" onClick={() => navigate("/")}>Home</span>
        </div>
      </div>
      <div className="mid part">
        <input className="searchBar" placeholder="Search for anything"></input>
      </div>
      <div className="right part">
        <div className="businessDiv">
          <Link to="/cart">
            <span className="number">{cartItemCount}</span>
            <div className="icon">
              <ShoppingCart />
            </div>
          </Link>
        </div>
        <div className="teachDiv">
          <Link className="teach" to='/admin'>Teach on MyUdemy</Link>
        </div>
        <div className="username">
          {isLoggedIn ? (
            <>
              <h2 className="usernameicon"><AccountCircleSharp id="abc"/>{User.displayName}</h2>
              <Link className="signup button" to='/' onClick={HandleLogOut} >Log Out</Link>
            </>) : (
            <button className="signup button" onClick={() => navigate("/login")} >Log In</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;