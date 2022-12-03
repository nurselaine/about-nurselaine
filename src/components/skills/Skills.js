import { Box } from '@mantine/core';
import data from '../../data/project_data.json';
import Background from '../../UI/Background';
import Row from './Row';

export default function Skills() {
  const skills = data.skills;
  return (
    <section id='skills'>
      <Background />
      <Box p="lg" sx={{position:'absolute', width: '70%', top:'50%', left: '50%', transform: 'translate(-50%, -50%)'}}>
        <h2 className='details'>Skills</h2>

        <div 
          className='skill' 
          style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            // flexWrap: 'wrap', 
            // justifyContent: 'space-evenly',
            zIndex: 4
          }}
        >
          {
            skills.map((skill, i) => (
              <Row 
                key={`skills-row-${i}`} 
                skills={skill}
              />
            ))
          }
        </div>
      </Box>
    </section>
  )
}