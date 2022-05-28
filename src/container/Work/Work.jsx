//External imports
import { useState, useEffect } from 'react';
import {AiFillEye, AiFillGithub } from 'react-icons/ai'
import { motion } from 'framer-motion';

//Internal Imports
import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../libs/client';

//styles
import './Work.scss'

//Categories
const categories = ['UI/UX', 'Web App', 'Mobile App', 'React JS', 'All']

const Work = () => {
  //State
  const [activeFilter, setActiveFilter] = useState('All');
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  useEffect(() => {
    const query = '*[_type == "works"]';

    client.fetch(query)
      .then(data => {
        setWorks(data);
        setFilterWork(data);
      })
  }, [])
  

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    
    //The following will reset the card animations and control the filter
    setAnimateCard([{ y: 100, opacity: 0 }])
    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if(item === 'All'){
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  }

  return (
    <>
      <h2 className='head-text'> My Creative <span>Portfolio</span> Section</h2>

      <div className='app__works-filter'>
        {categories.map((item, index) => (
          <div 
            key={index} 
            onClick={() => handleWorkFilter(item)} 
            className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
          >
            {item}
          </div>
        ))}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {filterWork.map((work, index) => (
          <div className='app__work-item app__flex' key={index}>
            <div className='app__work-img app__flex'>
              <img src={urlFor(work.imgUrl)} alt={work.name}/>

              {/* This motion.div hides everything until hover and makes the children appear one after other */}
              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                className='app__work-hover app__flex'
              >
                {/* The next link is for the eye icon */}
                <a href={work.projectLink} target='_blank' rel='noopener noreferrer'>
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className='app__flex'
                  >
                    <AiFillEye />
                  </motion.div>
                </a>

                {/* The next link is for the  */}
                <a href={work.codeLink} target='_blank' rel='noopener noreferrer'>
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className='app__flex'
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className='app__work-content app__flex'>
              <h4 className='bold-text'>{work.title}</h4>
              <p className='p-text' style={{ marginTop: 10 }}>{work.description}</p>

              <div className='app__work-tag app__flex'>
                <p className='p-text'>{work.tags[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  )
}

export default AppWrap( MotionWrap(Work, 'app__works'), 'work', 'app_primarybg');