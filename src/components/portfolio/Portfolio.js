import React from "react";
import Navbar from "../navbar/Navbar";
import { Carousel } from '@mantine/carousel';
import { Box, Grid } from '@mantine/core';
import data from '../../data/project_data.json'
import './Portfolio.scss';

import Card from "./Card";

export default function Portfolio() {
  const project_data = data.project_data;

  return (
    <section id="portfolio">
      <h2 className="text_shadows">PROJECTS</h2>
      <Grid width="100%" sx={{justifyContent: 'center', padding: 100}}>
          {
            project_data.map((project, i) => (
              <Grid.Col md={12} lg={5} key={`project-col-${i}`}>
              <Card
                project={project}
                key={`project-${i}`}
              />
              </Grid.Col>
            ))
          }
        
      </Grid>
    </section>

  )
}
