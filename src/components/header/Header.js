import React, {useState,useEffect} from "react";
import "../../components/header/Header.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { ShoppingCart , AccountCircleSharp} from "@mui/icons-material";
import axios from "axios";
import mainLogo from "../images/mainLogo.png"

function Header() {
    const navigate = useNavigate();
    const navigateHome = () => {
      navigate('/');
    }
    const [email,password]= useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [User, setUser] = useState(null); 
    const[cartItems, setCartData] = useState([]);
    const [cartItemCount, setCartItemCount] = useState(0);
    const [shouldFetchCart, setShouldFetchCart] = useState(false);


    useEffect(() => {
      if (shouldFetchCart) {
        axios
          .get("https://myudemy-backend.vercel.app/cart/")
          .then((res) => {
            setCartData(res.data);
          })
          .catch((e) => {
            console.log("error", e);
          })
          .finally(() => {
            setShouldFetchCart(false); 
          });
      }
    }, [shouldFetchCart, cartItems]);

    useEffect(() => {
      if (isLoggedIn) {
        setShouldFetchCart(true);
      }
    }, [isLoggedIn]);

    useEffect(() => {
      let count = 0;
      try {
        for (let index = 0; index < cartItems.length; index++) {
          const element = cartItems[index];
          if (element.cust_name === User.displayName) {
            count += 1;
          }
        }
        setCartItemCount(count);
      } catch {
        console.log("error while cart counting");
      }
    }, [cartItems, User]);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
          setIsLoggedIn(!!user);
        });
        return () => unsubscribe();
      }, []);

    const HandleLogIn =  async (e) =>{
        try {
            navigate('/login')
            e.preventDefault();
            await auth.signInWithEmailAndPassword(email,password);
          } catch (error) {
            console.error('Error during login:', error);
          }
        };
    
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
    }, []);

    
  
  return (
    <div className="headerPrimary">
      <div className="left part">
        <div className="udemyLogo">
          <img src={mainLogo} className="logo" alt="logo"></img>
        </div>
        <div className="HomeDiv">
          <span className="Home" onClick={navigateHome}>Home</span>
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
              <ShoppingCart/>
            </div>
          </Link>
        </div>
        <div className="teachDiv">
          <Link className="teach" to='/admin'>Teach on MyUdemy</Link>
        </div>
        <div className="username">
          <div>{User?<AccountCircleSharp/>:<div/>}</div><div>{User ? `${User.displayName}` : ''}</div>
        </div>
        {isLoggedIn ?(<Link className="signup button" to='/' onClick={HandleLogOut} >Log Out</Link>) : 
                (<button className="signup button"  onClick={HandleLogIn} >Log In</button>)}
      </div>
    </div>
  );
}

export default Header;