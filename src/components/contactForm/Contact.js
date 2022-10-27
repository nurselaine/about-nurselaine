import React from "react";
import './Contact.scss';

export default function Contact(){

  const parallax = (e) => {
    document.querySelectorAll(".contact-parallax span").forEach((shift) => {
      const position = shift.getAttribute("value");
      const x = (window.innerWidth - e.pageX * position) / 90;
      const y = (window.innerHeight - e.pageY * position) / 90;
  
      shift.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
  }
  
  
    return (
  <div class="contact-parallax" onMouseMove={parallax}>
    {/* <div value="-15"><img src="../../../public/img/octagon.png" alt=""/></div> */}
    <span value='10'></span>
    <span value="5"></span>
    <span value="5"></span>
    <span value="-5"></span>
    <span value="5"></span>
    <h2>Contact Me</h2>
  </div>
    )
}