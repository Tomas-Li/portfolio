//Internal imports
import { About, Footer, Header, Skills, Testimonial, Work } from "./container";
import { Navbar } from './components';

//Styles
import './App.scss'

const app = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default app