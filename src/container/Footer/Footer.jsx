//Internal Imports
import { AppWrap, MotionWrap } from '../../wrapper';

//Assets
import { images } from '../../constants';
import { BsLinkedin } from 'react-icons/bs';

//styles
import './Footer.scss'

const Footer = () => {
  return (
    <>
      <h2 className='head-text'>Feel Free To Send Me A Message And Check My Media</h2>
      <div className='app__footer-cards app__footer-cards--social'>
        <a href='mailto:tomili.job@gmail.com' className='app__footer-card app__footer-card--email'>
          <img src={images.email} alt="" />
          <span className='p-text'>tomili.job@gmail.com</span>
        </a>
        <a href='/Resume Tomas Linan - Japan 2026 - V1.0.2.pdf' download className='app__footer-card app__footer-card--cv'>
          <img src={images.cv} alt="" />
          <span className='p-text'>Curriculum Vitae</span>
        </a>
        <a
          href='https://www.linkedin.com/in/tom%C3%A1s-li%C3%B1an/'
          target='_blank'
          rel='noopener noreferrer'
          className='app__footer-card app__footer-card--linkedin'
        >
          <BsLinkedin aria-hidden='true' />
          <span className='p-text'>LinkedIn</span>
        </a>
      </div>
    </>
  )
}

export default AppWrap( MotionWrap(Footer, 'app__footer'), 'contact', 'app__primarybg');