import Hero from "./components/Hero"
import ribbon from "./assets/image.png";
import Portfolio from './components/PortfolioSection';
import Services from './components/ServiceSection';
import Testimonials from "./components/TestimonialSection";

const App = () => {
  return (
    <div>
      <Hero />
      <div className="ribbon">
        <img className='h-[10vh] w-full' src={ribbon} alt="ribbon" />
      </div>
      <Services />
      <Portfolio />
      <Testimonials/>
    </div>
  )
}

export default App