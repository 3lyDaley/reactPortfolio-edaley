import { useState } from 'react';
import { Link } from 'react-router-dom';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss'

const Home = () => {
const [letterClass] = useState('text-animate')
const nameArray = ['e', 'l', 'y', ' ', 'd', 'a', 'l', 'e', 'y']

  return (
    <div className="home-page">
      <div className="text-zone">
        <h1> 
          <span className='name'>
            <AnimatedLetters letterClass={letterClass}
            strArray={nameArray}
            idx ={15} />
          </span>
        </h1>
        <span className='scroll'>
          <h2> 
            Full-Stack developer * Design * Visual Artist
          </h2>
          <span className='scrollText' display="none">
            <h2> &nbsp; &nbsp; &nbsp; Full-Stack developer * Design * Visual Artist </h2>
          </span>
        </span>
        <Link to="/contact" className='button flat-button'>CONTACT ME </Link>
      </div>
    </div>
  )
}

export default Home;