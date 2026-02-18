import AboutHero from '@/components/About/AboutHero'
import MyApproach from '@/components/About/MyApproach'
import Cta from '@/components/Cta'
import ExperienceSection from '@/components/ExperienceSection'
import Footer from '@/components/Footer'

const About = () => {
  return (
    <div className='bg-white'>
        <AboutHero/>
        <MyApproach/>
        <ExperienceSection/>
        <Cta/>
        <Footer/>
    </div>
  )
}

export default About