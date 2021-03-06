const menuList = ['home', 'about', 'work', 'skills', 'testimonials', 'contact'];

const NavigationDots = ({ active }) => {
  return (
    <div className="app__navigation">
      {menuList.map((item, index) => (
        <a 
          href={`#${item}`} 
          key={item + index}
          className='app__navigation-dot'
          style={active === item ? { backgroundColor: '#313BAC' } : { }}
        />
      ))}
    </div>
  )
}

export default NavigationDots