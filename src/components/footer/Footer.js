import React from "react";
import "../../components/footer/Footer.css";
import { useNavigate } from "react-router-dom";
import { Facebook, Instagram, LinkedIn, Twitter } from "@mui/icons-material";
import mainLogo from "../images/mainLogo.png";

function Footer() {
  const navigate=useNavigate();
  const navigateAdmin=()=>[
    navigate("/admin"),
  ];
  return (
    <div className="footer">
      <div className="upperDiv">
        <div className="linksContainer">
          <div className="linksDiv linksDiv1">
            <p>MyUdemy for Business</p>
            <p onClick={navigateAdmin}>Teach on MyUdemy</p>
            <p>Get the app</p>
            <p>About us</p>
            <b>Follow Us On     
              <Facebook/> <Instagram/> <LinkedIn/> <Twitter/></b>
          </div>
          <div className="linksDiv linksDiv2">
            <p>Careers</p>
            <p>Blog</p>
            <p>Help and Support</p>
            <p>Affliate</p>
            <p> </p>
          </div>
          <div className="linksDiv linksDiv3">
            <p>Terms</p>
            <p>Privacy policy and cookie policy</p>
            <p>Sitemap</p>
            <p>Featured courses</p>
            <p> </p>
          </div>
        </div>
        <div className="linksDiv linksDiv4"></div>
      </div>
      <div className="lowerDiv">
        <img src={mainLogo} className="udemyLogo" alt="logo"></img>
        <div className="copyrightDiv">
          <p>© 2023 MyUdemy, Inc.</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;