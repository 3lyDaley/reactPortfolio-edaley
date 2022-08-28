import { useState } from 'react';
import { Link } from 'react-router-dom';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss'

const Home = () => {
const [letterClass, setLetterClass] = useState('text-animate')
const nameArray = ['e', 'l', 'y', ' ', 'd', 'a', 'l', 'e', 'y']

  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1> 
          <span className='name'>
            <AnimatedLetters letterClass={letterClass}
            strArray={nameArray}
            idx ={15} />
          </span>
        </h1>
        <h2> Full-Stack developer / Design / Visual Artist</h2>
        <Link to="/contact" className='button flat-button'>CONTACT ME </Link>
      </div>
    </div>
  )
}

export default Home;