import React from "react";
import "./Footer.css";
import insta from "../images/contact/insta.png";
import fb from "../images/contact/faceBook.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="box">
        <div className="left">
          <h3>Logo</h3>
          <div className="contact">
            <p>Contact</p>
            <span>+374 010 111 111</span>
          </div>
        </div>
        <div className="center">
          <div>
            <p>Home</p>
            <p>About us</p>
          </div>
          <div>
            <p>Products</p>
            <p>Sets</p>
          </div>
        </div>
        <div className="right">
          <div className="social">
            <img src={insta} alt="" />
            <p>@whisperingglow</p>
          </div>
          <div className="social">
            <img src={fb} alt="" />
            <p>@whisperingglow</p>
          </div>
        </div>
      </div>
      <div className="bottom">
        <p>© All rights reserved</p>
        <p>Designed by Tatevik</p>
      </div>
    </footer>
  );
}