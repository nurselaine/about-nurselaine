import { Image } from '@mantine/core';

export default function Row({skills}) {
  return (
    <section id='row'>
      <div 
        className='skill' 
        style={{ 
          display: 'flex', 
          flexDirection: 'row', 
          flexWrap: 'wrap', 
          justifyContent: 'space-evenly',
          zIndex: 4,
        }}
      >
        {
          skills.map((skill, i) => (
            <Image
              src={skill}
              height={60}
              width={60}
              alt="skill"
              key={`skill-${i}`}
              sx={{zIndex:4, padding: '1rem'}}
            />
          ))
        }
      </div>
    </section>
  )
}