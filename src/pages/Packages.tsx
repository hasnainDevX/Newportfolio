import PackagesHero from '@/components/PackagesHero'
import PackagesSection from '@/components/PackagesSection'
import PackagesAbout from '@/components/PackagesAbout'
import TestimonialsSection from '@/components/TestimonialSection'
import MarqueeShowcase from '@/components/TextMarquee'
import OurProcess from '@/components/OurProcess'
import Cta from '@/components/Cta'
import Footer from '@/components/Footer'
import FAQSection from '@/components/FAQ'

const Packages = () => {
  return (
    <div>
        <PackagesHero/>
        <PackagesAbout/>
        <PackagesSection/>
        {/* <TestimonialsSection/> */}
        <FAQSection/>
        <MarqueeShowcase data={["DEVELOPMENT  MADE  SIMPLE / ✦ /  DESIGN  &  DEVELOPMENT"]} speed={20}/>
        <OurProcess/>
        <Cta/>
        <Footer/>
    </div>
  )
}

export default Packages