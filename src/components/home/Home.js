import React from 'react';
import Navbar from '../navbar/Navbar'
import './Home.scss';

export default function Home() {

  const parallax = (e) => {
    document.querySelectorAll(".parallax-wrap div").forEach((shift) => {
      const position = shift.getAttribute("value");
      const x = (window.innerWidth - e.pageX * position) / 90;
      const y = (window.innerHeight - e.pageY * position) / 90;

      shift.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
  }


  return (
    <section>
      <Navbar />
      <div className="parallax-wrap" onMouseMove={parallax}>
        <div value="-5"><img src="./assets/img/nurse.png" alt="" /></div>
        <div value="5"><img src="./assets/img/computer.png" alt="" /></div>
        <div value="5"><img src="./assets/img/pill.png" alt="" /></div>
        <div value="-5"><img src="./assets/img/code2.png" alt="" /></div>
        <div value="5"><img src="./assets/img/pill.png" alt="" /></div>
        <div value="-5"><img src="./assets/img/desktop.png" alt="" /></div>
        <div value="5"><img src="./assets/img/syringe.png" alt="" /></div>
        <div value="-5"><img src="./assets/img/needle.png" alt="" /></div>
        <article>
          <h2>I'm Elaine</h2>
          <p>I'm a Full-Stack Engineer</p>
          <button>About Me</button>
        </article>
      </div>
    </section>
  )
}