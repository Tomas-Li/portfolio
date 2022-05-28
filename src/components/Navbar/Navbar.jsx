//External imports
import { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';

//assets
import { images } from '../../constants';

//styles
import './Navbar.scss'

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const menuList = ['home', 'about', 'work', 'skills', 'contact'];

  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <img src={images.logo} alt='logo' />
      </div>
      <ul className='app__navbar-links'>
        {menuList.map((item) => (
          <li className='app__flex p-text' key={`link-${item}`}>
            {/* The following div is purely stetical, it only adds a dot on hover over every item*/}
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

      {/* Lateral toggleable menu; only appears when screen is smaller than 900px */}
      <div className='app__navbar-menu'>
          <HiMenuAlt4 onClick={() => setToggle(true)}/>

          {toggle && (
              <motion.div
                whileInView={{ x:[300, 0] }}
                transition={{ duration: 0.85, ease: 'easeOut' }}
              >
                <HiX onClick={() => setToggle(false)}/>
                <ul className='app__navbar-links'>
                  {menuList.map((item) => (
                    <li key={item}>
                      <a href={`#${item}`} onClick={() => setToggle(false)}>{item}</a>
                    </li>
                  ))}
                </ul>
              </motion.div>
          )}
      </div>
    </nav>
  )
}

export default Navbar