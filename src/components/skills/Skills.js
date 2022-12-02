import { Image } from '@mantine/core';
import data from '../../data/project_data.json';

export default function Skills() {
  return (
    <section id='skills'>
      <h2 className='details'>Skills</h2>
      <div 
        className='skill' 
        style={{ 
          display: 'flex', 
          flexDirection: 'row', 
          flexWrap: 'wrap', 
          justifyContent: 'center'
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
            />
          ))
        }
      </div>
    </section>
  )
}