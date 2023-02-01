import React from "react";
import { Grid } from '@mantine/core';
import data from '../../data/project_data.json'
import './Portfolio.scss';
import Background from "../../UI/Background";
import Card from "./Card";

export default function Portfolio() {
  const project_data = data.project_data;

  return (
    <section id="portfolio">
      <Background />
      <h2 className="details">PROJECTS</h2>
      <Grid width="100%" p="lg" sx={{justifyContent: 'center', margin: '0'}}>
          {
            project_data.map((project, i) => (
              <Grid.Col xs={5} md={5} lg={5} key={`project-col-${i}`} sx={{zIndex: '4'}} p="md">
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
