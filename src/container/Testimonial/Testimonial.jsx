//External imports
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

//Internal Imports
import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../libs/client';

//styles
import './Testimonial.scss'

const Testimonial = () => {
  //States
  const [brands, setBrands] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  //This is just a shortcut for the current testimonial that is being shown
  const test = testimonials[currentIndex];

  useEffect(() => {
    const testimonialsQuery = '*[_type == "testimonials"]';
    const brandsQuery = '*[_type == "brands"]';

    client.fetch(testimonialsQuery)
      .then(data => {
        setTestimonials(data);
      });

    client.fetch(brandsQuery)
      .then(data => {
        setBrands(data);
      });
  }, [])

  const handleClick = (index) => {
    setCurrentIndex(index)
  }

  return (
    <>
      {testimonials.length && (
        <>
          <div className='app__testimonial-item app__flex'>
            <img src={urlFor(test?.imgurl)} alt="testimonial" />
            <div className='app__testimonial-content'>
              <p className='p-text'>{test.feedback}</p>
              <div>
                <h4 className='bold-text'>{test.name}</h4>
                <h5 className='p-text'>{test.company}</h5>
              </div>
            </div>
          </div>

          {/* Buttons to move between testimonials */}
          <div className='app__testimonial-btns app__flex'>
            <div 
              className='app__flex' 
              onClick={() => handleClick(currentIndex === 0 ? testimonials.length -1 : currentIndex - 1)}
            >
              <HiChevronLeft />
            </div>
            <div 
              className='app__flex' 
              onClick={() => handleClick(currentIndex === testimonials.length -1 ? 0 : currentIndex + 1)}
            >
              <HiChevronRight />
            </div>
          </div>
        </>
      )}

      <div className='app__testimonial-brands app__flex'>
        {brands.map(brand => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ dutarion: 0.5, type: 'tween' }}
            key={brand._id}
          >
            <img src={urlFor(brand.imgUrl)} alt={brand.name}/>
          </motion.div>
        ))}
      </div>
    </>
  )
}

export default AppWrap(MotionWrap(Testimonial, 'app__testimonial'), 'testimonials', 'app__primarybg');