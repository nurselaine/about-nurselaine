import React from 'react';
import Contact from '../contactForm/Contact';
import Navbar from '../navbar/Navbar'
import Portfolio from '../portfolio/Portfolio';
import Background from '../../UI/Background';
import './Home.scss';
import Skills from '../skills/Skills';

export default function Home() {

  return (
    <section id='body' style={{width: '100vw', height: '100vh'}}>
      <Background/>
        <article id='home' className='content'>
          <h2 className='text_shadows'>I'm Elaine</h2>
          <p className='details'>I'm a Full-Stack Engineer</p>
          <div id='navbar-div'>
            <Navbar />
          </div>
        </article>
      <Skills />
      <Portfolio />
      <Contact />
    </section>
  )
}