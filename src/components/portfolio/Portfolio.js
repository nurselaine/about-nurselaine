import React from "react";
import Navbar from "../navbar/Navbar";
import './Portfolio.scss';

export default function Portfolio() {
  const parallax = (e) => {
    document.querySelectorAll(".portfolio-parallax span").forEach((shift) => {
      const position = shift.getAttribute("value");
      const x = (window.innerWidth - e.pageX * position) / 90;
      const y = (window.innerHeight - e.pageY * position) / 90;

      shift.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
  }


  return (
    <section>
      <Navbar />
      <div className="portfolio-parallax" onMouseMove={parallax}>
        {/* <div value="-15"><img src="../../../public/img/octagon.png" alt=""/></div> */}
        <span value='-5'></span>
        <span value="5"></span>
        <span value="-5"></span>
        <span value="5"></span>
        <span value="10"></span>
        <span value="5" ></span>
        <span value="-5" ></span>
        {/* <span value='12' style={{background: 'pink'}}></span> */}
        <h2>Portfolio</h2>
      </div>
    </section>
  )
}