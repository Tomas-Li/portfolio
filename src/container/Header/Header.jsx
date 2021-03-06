//External Imports
import { motion } from 'framer-motion';

//Internal Imports
import { AppWrap } from '../../wrapper';

//Assets
import { images } from '../../constants';

//styles
import './Header.scss'

//Const for motion.div variants
const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut'
    }
  }
}

//images that are being shown in the header
const technologies = [images.python, images.node, images.cpp]
 
const Header = () => {
  return (
    <div className='app__header app__flex'>
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className='app__header-info'
      >
        <div className='app__header-badge'>
          <div className='badge-cmp app__flex'>
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className='p-text'>Hello, I am </p>
              <h1 className='head-text'>Tomás Liñan</h1>
            </div>
          </div>

          <div className='tag-cmp app__flex'>
            <p className='p-text'>*Aeronautical Engineer</p>
            <p className='p-text'>*Frontend Developer</p>
            <p className='p-text'>*Backend Developer</p>
          </div>
        </div>
      </motion.div>

      {/* Person Img + background transition*/}
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className='app__header-img'
      >
        {/* <img src={images.profile} alt="profile_bg" /> */}
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          src={images.circle}
          alt="profile_circle"
          className='overlay-circle'
        />
      </motion.div>
      

      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className='app__header-circles'
      >
        {technologies.map((circle, index) => (
          <div className='circle-cmp app__flex' key={`circle-${index}`}>
            <img src={circle} alt='circle' />
          </div>
        ))}
      </motion.div>

    </div>
  )
}

export default AppWrap(Header, 'home')