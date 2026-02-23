import AboutHero from '@/components/About/AboutHero'
import MyApproach from '@/components/About/MyApproach'
import Cta from '@/components/Cta'
import ExperienceSection from '@/components/ExperienceSection'
// import FAQSection from '@/components/FAQ'
import Footer from '@/components/Footer'

const About = () => {
  return (
    <div className=''>
        <AboutHero/>
        <MyApproach/>
        <ExperienceSection/>
        {/* <FAQSection/> */}
        <Cta/>
        <Footer/>
    </div>
  )
}

export default About