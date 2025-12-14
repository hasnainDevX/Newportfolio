import React from 'react'
import Hero from "./components/Hero"
import ribbon from "./assets/image.png";
import PortfolioSection from './components/PortfolioSection';
import Services from './components/ServiceSection';

const App = () => {
  return (
    <div className=''>
      <Hero />
      <div className="ribbon">
        <img className='h-[10vh] w-full' src={ribbon} alt="" />
      </div>

      <Services />
      <PortfolioSection />


    </div>
  )
}

export default App