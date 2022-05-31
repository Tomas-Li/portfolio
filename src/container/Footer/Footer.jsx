//External Imports
import { useState } from 'react';

//Internal Imports
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../libs/client';

//Assets
import { images } from '../../constants';

//styles
import './Footer.scss'

const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  //Destructuring the object only to make it easier to access every value below
  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  const handleSubmit = () => {
    setLoading(true);
    
    const contact = {
      _type: 'contact',
      name: name,
      email: email,
      message: message
    }

    client.create(contact)
      .then(data => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
  }

  return (
    <>
      <h2 className='head-text'>Take a coffe & chat with me</h2>
      <div className='app__footer-cards'>
        <div className='app__footer-card'>
          <img src={images.email} alt="email" />
          <a href='mailto:tomili.job@gmail.com' className='p-text'>tomili.job@gmail.com</a>
        </div>
        <div className='app__footer-card'>
          <img src={images.cv} alt="mobile" />
          <a href='/CV-TomásLiñan-En-Sp.pdf' download className='p-text' target="_blank">Curriculum Vitae</a>
        </div>
      </div>

      {!isFormSubmitted ? (
        <div className='app__footer-form app__flex'>
          <div className='app__flex'>
            <input 
              className='p-text' 
              type="text" 
              name="name" 
              placeholder='Your Name' 
              value={name} 
              onChange={handleChangeInput}
            />
          </div>
          <div className='app__flex'>
            <input 
              className='p-text' 
              type="email" 
              name="email" 
              placeholder='Your Email' 
              value={email} 
              onChange={handleChangeInput}
            />
          </div>
          <div>
            <textarea 
              className='p-text' 
              name='message'
              placeholder='Your Message (I would recommend to contact me through the email above. I check that one much more often that the one used on this form)'
              value={message}
              onChange={handleChangeInput}
            />
          </div>
          <button type="button" className='p-text' onClick={handleSubmit}>{loading ? 'Sending' : 'Send Message'}</button>
        </div>)
        :
        <div>
          <h3 className='head-text'>Thank you for getting in touch!</h3>
        </div>
      }
    </>
  )
}

export default AppWrap( MotionWrap(Footer, 'app__footer'), 'contact', 'app__whitebg');