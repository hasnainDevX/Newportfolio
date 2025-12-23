import Hero from "./components/Hero"
import ribbon from "./assets/image.png";
import Portfolio from './components/PortfolioSection';
import Services from './components/ServiceSection';
import Testimonials from "./components/TestimonialSection";
import ExperienceSection from "./components/ExperienceSection";
import ImagesMarquee from "./components/ImagesMarquee";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Hero />
      <div className="ribbon">
        <img className='h-[10vh] w-full' src={ribbon} alt="ribbon" />
      </div>
      <ImagesMarquee/>
      <Services />
      <Portfolio />
      <Testimonials/>
      <ExperienceSection/>
      <Footer/>
    </div>
  )
}

export default App