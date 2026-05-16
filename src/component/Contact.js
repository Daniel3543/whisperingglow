import React from "react";
import "./Contact.css";
import img from "../images/contact/contact.png";

export default function Contact() {
  return (
    <div className="contact">
      <div className="box">
        <h3>CONTACT US</h3>
        <div className="content">
          <form>
            <input type="text" name="name" placeholder="Name" />
            <input type="email" name="email" placeholder="Email" /><br></br>
            <textarea name="message" placeholder="Message"></textarea>
            <button>Send</button>
          </form>
          <div className="image">
            <img src={img} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}