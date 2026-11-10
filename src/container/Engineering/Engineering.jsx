//External imports
import { useState, useEffect } from 'react';

//Internal Imports
import { AppWrap, MotionWrap } from '../../wrapper';
import { client, urlFor } from '../../libs/client';

//styles
import "./Engineering.scss"

const Engineering = () => {
  //states
  const [brands, setBrands] = useState([]);
  const [engineering, setEngineering] = useState([]);
  

  useEffect(() => {
    const engineeringQuery = '*[_type == "engineering"]';
    const brandsQuery = '*[_type == "brands"]';

    client.fetch(engineeringQuery)
      .then(data => {
        setEngineering(data);
      });

    client.fetch(brandsQuery)
      .then(data => {
        setBrands(data);
      });
  }, [])

  return (
    <>
    {engineering.length && (
      <>
        
      </>
    )}
    </>
  )
}

export default AppWrap(MotionWrap(Engineering, 'app__engineering'), 'engineering', 'app__primarybg');