import { useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import emailjs from '@emailjs/browser'
import './index.scss'
import self from '../../assets/images/self.png'

const Contact = () => {

  const [letterClass] = useState('text-animate')


  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm('service_gn18unt', 'template_py84daf', '#emailForm', 'P5nZzin4vGmIFgR7d')
      .then(function (response) {
        alert('SUCCESS!', response.status, response.text);
        window.location.reload(false);
      }, function (error) {
        alert('FAILED...', error);
        window.location.reload(false);
      });
  }

  return (
    <>     
    <div className='contact-page'>
      <div className='text-zone'>
        <h1> 
          <AnimatedLetters letterClass={letterClass}
            strArray={['C', 'O', 'N', 'T', 'A', 'C', 'T', ' ', 'M', 'E']}
            idx={10} 
          />
        </h1>
        <p>
          I am interested in internship or employment opportunities -- especially long-term, ambitious projects. However, if you would like to contact with other questions or concerns, please use the contact form to reach out!
        </p>
        <div className='contact-form'>
          <form id='emailForm' onSubmit={sendEmail}>
            <ul>
              <li>
                <input type="text" name='name' placeholder='Name' required></input>
              </li>
              <li>
                <input type="email" name='email' placeholder='Email' required></input>
              </li>
                <li>
                <input placeholder="Subject" type="text" name='subject' required ></input>
              </li>
              <li>
                <textarea placeholder="Message" name='message'></textarea>
              </li>
              <li>
                <input type="submit" className='flat-button' value="SEND" />
              </li>
            </ul>
          </form>
        </div>
      </div>
      
    </div>

 
    </>
  )
}

export default Contact;