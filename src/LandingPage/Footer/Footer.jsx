import React from "react";
import Form from "./Form";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footerLeft">
        <img className="footerImg" src="/footerlogo.png" alt=""/>
        <div >
            <div className="touch">Get in Touch</div>
            <div className="footerInfo">SVANTERO LTD</div>
            <div className="footerInfo">info@svantero.com</div>
            <div className="footerInfo">71-75 Shelton Street, Covent Garden </div>
            <div className="footerInfo">London,United Kingdom <br/> WC2H 9JQ</div>
            
        </div>
      </div>
      <div className="line"></div>
      <Form />
    </div>
  );
};

export default Footer;
