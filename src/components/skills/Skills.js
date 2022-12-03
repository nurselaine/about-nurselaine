import { Image } from '@mantine/core';
import data from '../../data/project_data.json';
import Background from '../../UI/Background';

export default function Skills() {
  return (
    <section id='skills'>
      <Background />
      <h2 className='details'>Skills</h2>
      <div 
        className='skill' 
        style={{ 
          display: 'flex', 
          flexDirection: 'row', 
          flexWrap: 'wrap', 
          justifyContent: 'space-evenly',
          padding: '4rem',
          zIndex: 4
        }}
      >
        {
          data.skills.map((skill, i) => (
            <Image
              src={skill}
              height={60}
              width={60}
              alt="skill"
              key={`skill-${i}`}
              sx={{zIndex:4}}
            />
          ))
        }
      </div>
    </section>
  )
}