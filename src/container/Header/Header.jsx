//External Imports
import { motion } from 'framer-motion';
import { useState } from 'react';

//Internal Imports
import { AppWrap } from '../../wrapper';
import AvionSVG from './AvionSVG';

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

// Technologies displayed around the central sphere.
const technologies = [
  { image: images.python, name: 'Python' },
  { image: images.node, name: 'Node.js' },
  { image: images.cpp, name: 'C++' },
  { image: images.php, name: 'PHP', isSecondary: true },
  { image: images.java, name: 'Java', isSecondary: true }
]
 
const Header = () => {
  const [isSphereVisible, setIsSphereVisible] = useState(false);
  const [waveKey, setWaveKey] = useState(0);

  return (
    <div className='app__header app__flex'>
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className='app__header-info'
      >
        <div className='app__header-badge'>
          <div
            className='badge-cmp app__flex'
            onMouseEnter={() => setWaveKey((key) => key + 1)}
          >
            <span
              className={`app__header-wave${waveKey ? ' is-hover-triggered' : ''}`}
              key={waveKey}
              role='img'
              aria-label='Saludo'
            >
              👋
            </span>
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
        viewport={{ once: true }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className='app__header-img'
      >
        <img
          onAnimationEnd={() => setIsSphereVisible(true)}
          src={images.circle}
          alt="profile_circle"
          className='overlay-circle'
        />
        <AvionSVG isActive={isSphereVisible} />
      </motion.div>
      

      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className='app__header-circles'
      >
        {technologies.map(({ image, name, isSecondary }) => (
          <div
            className={`circle-cmp app__flex${isSecondary ? ' circle-cmp--secondary' : ''}`}
            key={name}
          >
            <img src={image} alt={name} />
          </div>
        ))}
      </motion.div>

    </div>
  )
}

export default AppWrap(Header, 'home')