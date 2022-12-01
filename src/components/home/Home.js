import React from 'react';
import Navbar from '../navbar/Navbar'
import Portfolio from '../portfolio/Portfolio';
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
        <div value="-5"><img src="./assets/img/scalene-triangle.png" alt="" /></div>
        <div value="5"><img src="./assets/img/star.png" alt="" /></div>
        <div value="5"><img src="./assets/img/octagon.png" alt="" /></div>
        <div value="-5"><img src="./assets/img/trapezoid.png" alt="" /></div>
        <div value="5"><img src="./assets/img/heptagon.png" alt="" /></div>
        <div value="-5"><img src="./assets/img/parallelogram.png" alt="" /></div>
        <div value="5"><img src="./assets/img/diamond.png" alt="" /></div>
        <div value="-5"><img src="./assets/img/line.png" alt="" /></div>
        <article id='home' className='content'>
          <h2 className='text_shadows'>I'm Elaine</h2>
        </article>
        <p>I'm a Full-Stack Engineer</p>
      </div>
        <Portfolio />
    </section>
  )
}