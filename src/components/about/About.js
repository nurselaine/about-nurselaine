import React from "react";
import { Box, Image, Modal, ScrollArea, Space, Text } from "@mantine/core";
import data from '../../data/project_data.json';
import './About.scss';

export default function About({ opened, handleCloseModal }) {

  return (
    <Modal
    opened={opened}
    onClose={() => handleCloseModal(false)}
    size="80%"
    p="md"
    title={`Hello! My name is ${data.aboutme.name} 👋`}
    className="modal-container"
    >
      <Box mah="80vh" sx={{ overflowY: "scroll", overflowX: 'hidden' }}>
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