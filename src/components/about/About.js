import React from "react";
import './About.scss';

export default function About(){
  const parallax = (e) => {
    document.querySelectorAll(".about-parallax span").forEach((shift) => {
      const position = shift.getAttribute("value");
      const x = (window.innerWidth - e.pageX * position) / 90;
      const y = (window.innerHeight - e.pageY * position) / 90;
  
      shift.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
  }
  
  
    return (
  <div className="about-parallax" onMouseMove={parallax}>
    {/* <div value="-15"><img src="../../../public/img/octagon.png" alt=""/></div> */}
    <span value='-5'></span>
    <span value="5"></span>
    <span value="-5"></span>
    <span value="1"></span>
    <span value="10"></span>
    <span value="1" ></span>
    <span value="-5" ></span>
    <span value='1'></span>
    <span value="-15"></span>
    <span value="1"></span>
    <span value="20"></span>
    <span value="-15"></span>
    <span value="2" ></span>
    <span value="10" ></span>
    {/* <span value='12' style={{background: 'pink'}}></span> */}
    <h2>About Me</h2>
  </div>
    )
}