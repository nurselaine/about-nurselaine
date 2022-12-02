import React from "react";
import { Box, Grid, Image, Space, Text } from "@mantine/core";
import './About.scss';

export default function About() {

  return (
    <>
    <Grid id="about" ta='center' ml='auto' mr='auto' mt='md' w="60%" sx={(theme) => ({zIndex: 4, backgroundColor: 'rgba(255,255,255,0.5)', borderRadius: 5})}>
      <Grid.Col sm={4} md={6} lg={6} m='auto'>
        <Image
          src='./assets/img/profilepic.jpg'
          alt="profile picture"
          height='300'
          width='300'
          radius="md"
        />
      </Grid.Col>
      <Grid.Col sm={4} md={6} lg={6}>
        <Box width="60%" mah='300px' ml="sm">
          <Text ta="left" mah='300px' sx={{overflowY: 'scroll'}} fz="md">
            <Text
              fw={500}
              fz="xl"
            >
              Hello I'm Elaine.
            </Text>
            I'm a critical care nurse and aspiring software
            engineer! After graduating with my Bachelor of
            Science in Nursing from Seattle Pacific university,
            I decided to explore computer science. After taking
            software development classes at my local college, I
            knew I wanted to pursue engineering as a career, so
            I enrolled in Code Fellows Web Development focused
            bootcamp. Transitioning from the nursing feild has
            been full of exciting challenges, and I've been able
            to find an amazing community within Women Who Code's
            Seattle Chapter as a volunteer!
            <Space h="md" />
            Currently, I'm looking forward to gaining experience
            as a software engineer by continuing to learn new
            programming languages and technologies as I pursue my
            MSCS through Seattle University!
          </Text>
        </Box>
      </Grid.Col>
    </Grid>
    </>
  )
}