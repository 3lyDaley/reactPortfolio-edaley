import AnimatedLetters from '../AnimatedLetters';
import { useState } from 'react';

const About = () => {
  const [letterClass] = useState('text-animate')


  return (
    <div className='about-page'>
        
      <div className='text-zone'>
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['A', "B", 'O', 'U', 'T', ' ', 'M', 'E']}
            idx = {10}
          />
        </h1>
        <p>
          I have an ambitious curiousity that has driven me to learn as much as possible about my many interests in life. My interest in web development began with exploring c++ in undergrad, despite my degree being a BA in studio art.
        </p>
        <p>
          I studied science, mathematics, and minored in chemistry, while also developing skills in audio/visual engineering, painting, digital video, and sculpture. After graduating from Mills college in 2021, I grew interested in web development and attended a full-stack wed development bootcamp at UC Berkeley extension.
        </p>
        <p>
          My skills are in design with html/css and React, and in backend I have become familiar with MySQL, GraphQL, node.js, Apollo, MongoDB, and many other tools. I enjoy the process of navigating data and creating structural systems to ensure a fluid and efficient data route and storage. Designing backend simplicity and fluidity is a challege I have come to enjoy in my foray into coding, and it is a skill I hope to continue to develop in.
        </p>
   

      </div>
       
    </div>
  )
}

export default About;