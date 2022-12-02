import React from "react";
import { Badge, Box, Button, createStyles, Image, Modal } from '@mantine/core';
import { When } from "react-if";

const useStyles = createStyles((theme) => ({
  text: {
    fontFamily: 'Arial',
    fontSize: '1rem',
    margin: theme.spacing.xs,
  },
  title: {
    fontWeight: 800,
    fontSize: '2rem',
    fontFamily: 'Arial',
    lineSpace: '10',
    color: '#ee6352',
    margin: theme.spacing.xs,
  },
  header: {
    fontFamily: 'Arial',
    fontSize: '1.5rem',
    fontWeight: 600,
    margin: theme.spacing.xs,
  },
  article: {
    margin: theme.spacing.xs,
  }
}));

export default function ProjectModal({ project, opened, handleCloseModal }) {
  console.log(project);
  const { classes } = useStyles();
  return (
    <>
      <Modal
        opened={opened}
        // title={`${project.project_name} — ${project.project_desc}`}
        withCloseButton={false}
        onClose={() => handleCloseModal(false)}
        size="80%"
      >
        <Box sx={{ height: '80vh', overflowY: "scroll", overflowX: 'hidden' }}>
          <div style={{display: 'flex', flexDirection: 'column'}}>
            <h2 className={classes.title}>{project.project_name}</h2>
            <p className={classes.text}>{project.project_desc}</p>
          </div>
          <h4 className={classes.header}>Tech</h4>
          {
            project.tech.map((tech, i) => (
              <Badge key={`badge-${i}`} m="xs" variant="gradient" gradient={{ from: '#ed6ea0', to: '#ec8c69', deg: 35 }} >{tech}</Badge>
            ))
          }
          <div id="slide" style={{ display: 'flex', width: 'auto', height:'auto', overflowX: 'scroll', overflowY: 'hidden', whiteSpace: 'nowrap'}}>
            {
              project.images.map((image, i) => (

                <Image
                  src={image}
                  alt={project.desc}
                  width={600}
                  height={300}
                  m="sm"
                />
              ))
            }
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', margin: '1rem' }}>
            <Button color="red" radius="lg" m='auto' w={100} sx={{ width: '5rem' }}>Visit Site</Button>
            <Button color="red" radius="lg" m='auto' w={100} sx={{ width: '5rem' }}>GitHub</Button>
          </div>
          <section>
            <article>
              <h4 className={classes.header}>More Info</h4>
              <p className={classes.text}>{project.info}</p>
            </article>
            <When condition={typeof project.challenges === 'string'}>
              <article>
                <h4 className={classes.header}>Challenges</h4>
                <p className={classes.text}>{project.challenges}</p>
              </article>
            </When>
            <article>
              <h4 className={classes.header}>Stretch Goals</h4>
              <ul style={{ margin:'1rem', fontFamily: 'Arial' }}>
                {
                  project.stretch.map((goal, i) => (<li style={{ listStyle:'inside'}} key={`stretch-${i}`}>{goal}</li>))
                }
              </ul>
            </article>
          </section>
        </Box>
      </Modal>
    </>
  )
}