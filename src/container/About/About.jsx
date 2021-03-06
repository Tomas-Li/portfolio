//External imports
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

//Internal imports
import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../libs/client';

//styles
import './About.scss';


const About = () => {
  //State
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query)
      .then(data => {
        const sortData = data.sort(function(a, b) {
          return a['order'] - b['order'];
        })
        setAbouts(sortData);
      })
  }, []);

  return (
    <>
      <h2 className='head-text'>
        <span>Developing</span> has been <br /> my <span>passion</span> for years
      </h2>

      <div className='app__profiles'>
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className='app__profile-item'
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className='bold-text' style={{ marginTop: 20 }}>{about.title}</h2>
            <p className='p-text' style={{ marginTop: 20 }}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  )
}

export default AppWrap( MotionWrap(About, 'app__about'), 'about', 'app__whitebg');