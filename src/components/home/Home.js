import React from 'react';
import Contact from '../contactForm/Contact';
import Navbar from '../navbar/Navbar'
import Portfolio from '../portfolio/Portfolio';
import data from '../../data/project_data.json';
import { Image } from '@mantine/core';
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
        <p className='details'>I'm a Full-Stack Engineer</p>
      </div>
      <section id='skills'>
        <h2 className='details'>Skills</h2>
        <div style={{ display: 'flex', flexDirection: 'row', flexwrap: 'wrap', justifyContent: 'space-around', width: '80%', margin: 'auto' }}>
          {
            data.skills.map((skill, i) => (
              <Image
                src={skill}
                height={60}
                width={60}
                alt="skill"
                key={`skill-${i}`}
              />
            ))
          }
        </div>
      </section>
      <Portfolio />
      <Contact />
    </section>
  )
}