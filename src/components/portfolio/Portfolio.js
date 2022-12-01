import React from "react";
import Navbar from "../navbar/Navbar";
import { Carousel } from '@mantine/carousel';
import { Grid} from '@mantine/core';
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
      <div className="portfolio-parallax" onMouseMove={parallax}>
        <div id="header">
          <h2>My Work</h2>
        </div>
        <section id="portfolio">
          <article className="project">
            <Grid width="80%" sx={{margin: 'auto'}}>
              <Grid.Col md={3} lg={6}>
                <div>
                  <div className="project-desc">
                    <h4>WenJobs</h4>
                    <p>Targeted Job Search tool</p>
                    <button>more</button>
                  </div>
                </div>
              </Grid.Col>
              <Grid.Col md={9} lg={9}>
                <img 
                  src="./assets/img/wenjob-1.png"
                  alt="wenjob"
                  height="300px"
                  width="500px"
                />
              </Grid.Col>
            </Grid>
          </article>
          <article className="project">
            <img 
              src="./assets/img/hairbyloann-1.png"
              alt="wenjob"
              height="400px"
              width="700px"
            />
            <div>
              <h4>Hair By Loann</h4>
              <p>Cosmetologist Business Website</p>
              <button>more</button>
            </div>
          </article>
          <article className="project">
            <img 
              src="./assets/img/trello-board.png"
              alt="wenjob"
              height="400px"
              width="700px"
            />
            <div>
              <h4>Trello Re-Imagined</h4>
              <p>Kanban Board</p>
              <button>more</button>
            </div>
          </article>
          <article className="project">
            <img 
              src="./assets/img/calendar-1.png"
              alt="calendar"
              height="400px"
              width="700px"
            />
            <div>
              <h4>Calendar App</h4>
              <p>Schedule Events & Share With Friends</p>
              <button>more</button>
            </div>
          </article>
        </section>
      </div>
    </section>
  )
}