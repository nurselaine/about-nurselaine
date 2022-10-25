import React from "react";
import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse";
import Tilt from 'react-parallax-tilt';
import './Home.scss';

export default function Home() {
  return (
    <div className="home-page">
      <Tilt>
      <h1 style={{color: 'white', position: 'absolute', top: '45vh', left: '35vw', 'font-weight': '900', fontSize: '3rem'}}>Hello, I'm Elaine. <br/> <span style={{fontSize: '1.5rem'}}>I'm a Full-Stack Software Engineer</span></h1>
        <div>
          <img className="square" src="../../assets/img/3d-abstract-wave-pattern-background.jpg" alt="square" style={{height: '100vh', width: '100vw'}}/>
        </div>
      </Tilt>
      {/* <Tilt>
        <div style={{ position: 'absolute', right: '200px', top: '100px' }}>
          <img className="square" src="../../assets/img/square.png" alt="square" />
        </div>
      </Tilt>
      <Tilt>
        <div style={{ position: 'absolute', left: '600px', top: '150px', width: '50%', height: '50%' }}>
          <img className="square" src="../../assets/img/square.png" alt="square" />
        </div>
      </Tilt> */}
      {/* <MouseParallaxContainer>
        <MouseParallaxChild factorX={0.03} factorY={0.05} >
          <img className="octagon" src="../../assets/img/square.png" alt="octogon" />
          add linear gradient #ecbbd2 #9d66f0
        </MouseParallaxChild>
      </MouseParallaxContainer> */}
    </div>
  )
}