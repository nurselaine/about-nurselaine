import React from "react";
import { Grid } from '@mantine/core';
import data from '../../data/project_data.json'
import './Portfolio.scss';

import Card from "./Card";

export default function Portfolio() {
  const project_data = data.project_data;

  return (
    <section id="portfolio">
      <h2 className="details">PROJECTS</h2>
      <Grid width="100%" p="lg" sx={{justifyContent: 'center'}}>
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
