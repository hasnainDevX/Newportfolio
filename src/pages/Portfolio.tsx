import MarqueeShowcase from '@/components/TextMarquee'
import Cta from '@/components/Cta'
import Footer from '@/components/Footer'
import PortfolioHero from '@/components/Portfolio/PortfolioHero'
import PortfoliosSection from '@/components/Portfolio/PortfoliosSection'

const Portfolio = () => {
  return (
    <div className='bg-[#FFFCF9]'>
        <PortfolioHero/>
        <PortfoliosSection/>
        <MarqueeShowcase data={["DEVELOPMENT  MADE  SIMPLE / ✦ /  DESIGN  &  DEVELOPMENT"]} speed={20}/>
        <Cta/>
        <Footer/>
    </div>
  )
}

export default Portfolio