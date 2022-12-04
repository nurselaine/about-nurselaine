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
              height="calc(2rem + 5vw)"
              width="calc(2rem + 5vw)"
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