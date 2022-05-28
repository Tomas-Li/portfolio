import { NavigationDots, SocialMedia } from '../components';

/**
 * This is a Higher Order Component (HOC) that will add the NavigationDots and SocialMedia buttons.
 * The id in the most external <div> will let us navigate to every section! (+ its classes are rendered dynamically)
 * This wrapper will also take care of making every section at least an entire screen height size (className 'app_container' -> min-height: 100vh).
 * @param {*} Component 
 * @param {*} idName 
 * @param {*} classNames 
 * @returns 
 */
const AppWrap = (Component, idName, classNames) => function HOC() {
  return (
    <div id={idName} className={`app__container ${classNames}`}>
      <SocialMedia/>

      <div className='app__wrapper app__flex'>
        <Component />
        <div className='copyright'>
          <p className='p-text'>@2020 MICAEL</p>
          <p className='p-text'>All rights reserved</p>
        </div>
      </div>

      <NavigationDots active={idName}/>
    </div>
  )
}

export default AppWrap