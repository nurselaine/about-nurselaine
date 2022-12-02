import React, { useState } from 'react';
import { Box, Button, createStyles, Flex, Modal, Grid } from '@mantine/core';
import './Portfolio.scss';
import ProjectModal from './ProjectModal';
import data from '../../data/project_data.json';
import { When } from 'react-if';

const useStyles = createStyles((theme, _params) => ({
  box: {
    backgroundColor: theme.colors.gray[1],
    borderRadius: theme.radius.lg,
    boxShadow: theme.shadows.md,

    margin: 'auto',
    padding: theme.spacing.md,
  },
  text_Con: {
    width: 400,
  },
  text: {
    fontFamily: 'Arial',
    fontWeight: 600,
  },
  desc: {
    fontFamily: 'Arial',
    fontWeight: 200,
  },
  button: {
    marginLeft: 'auto',
  }
}))



export default function Card({ project }) {
  const { classes } = useStyles();
  const [opened, setOpened] = useState(false);

  const handleCloseModal = (open) =>{
    setOpened(open);
  }

  return (
    <>
      <Box className={classes.box}>
        <Grid width="100%">
          <Grid.Col xs={2} sm={2} md={2} lg={3}>
            <img
              src={project.project_src}
              alt={project.name}
              height="75px"
              width="75px"
            />
          </Grid.Col>
          <Grid.Col className="project-desc" xs={6} sm={10} md={10} lg={9} >
            <article className={classes.text_Con} >
              <h4 className={classes.text}>{project.project_name}</h4>
              <p className={classes.desc}>{project.project_desc}</p>
            </article>
            <Box className={classes.button}>
              <Button color="red" radius="lg" sx={{width: '5rem'}} onClick={() => setOpened(true)}>view</Button>
            </Box>
          </Grid.Col>
          {/* <When condition={opened === true}> */}
            <ProjectModal 
              project={project}
              opened={opened}
              handleCloseModal={handleCloseModal}
            />
          {/* </When> */}
        </Grid>
      </Box>
    </>

  )
}