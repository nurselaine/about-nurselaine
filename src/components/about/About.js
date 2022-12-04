import React from "react";
import { Box, Image, Modal, ScrollArea, Space, Text } from "@mantine/core";
import data from '../../data/project_data.json';
import './About.scss';

export default function About({ opened, handleCloseModal }) {

  return (
    <Modal
    opened={opened}
    withCloseButton={false}
    onClose={() => handleCloseModal(false)}
    size="lg"
    p="md"
    >
      <Box sx={{ height: '60vh', width: '80vw', overflowY: "scroll", overflowX: 'hidden' }}>
        <Text fw={500} fz="xl" >Hi! I'm {data.aboutme.name}👋</Text>
        <Space h="md" />
        <ScrollArea>
        <div id="slide" style={{ display: 'flex', width: 'auto', height: 'auto', overflowY: 'hidden', whiteSpace: 'nowrap' }}>
            {
              data.aboutme.picture.map((image, i) => (

                <Image
                  src={image}
                  alt="personal photo"
                  width={300}
                  height={200}
                  m="sm"
                />
              ))
            }
        </div>
        </ScrollArea>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Space h="xl" />
          <Text fw={500} fz="lg">About Me</Text>
          <Text>{data.aboutme.intro}</Text>
          <Space h="md" />
          <Text>{data.aboutme.description}</Text>
        </Box>
      </Box>
    </Modal>
  )
}