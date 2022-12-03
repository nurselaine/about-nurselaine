import data from '../../data/project_data.json';
import { Box, Image } from "@mantine/core"

export default function Social(){
  return (
    <section id='contact'>
    <Box style={{ display: 'flex', flexDirection: 'row', flexwrap: 'wrap', justifyContent: 'space-evenly', width: '50%', margin: 'auto' }}>
      {
        data.contact.map((social, i) => (
          <a href={social[1]} target="_blank" rel='noreferrer' style={{padding: '1rem'}}>
            <Image
              src={social[0]}
              height={40}
              width={40}
              alt="social"
              key={`social-${i}`}
            />
          </a>
        ))
      }
    </Box>
  </section>
  )
}