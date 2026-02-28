import Hero from "../components/Hero";
import ribbon from "../assets/image.png";
import Portfolio from "../components/PortfolioSection";
import Services from "../components/ServiceSection";
import Testimonials from "../components/TestimonialSection";
import ExperienceSection from "../components/ExperienceSection";
import ImagesMarquee from "../components/ImagesMarquee";
import Footer from "../components/Footer";
import MarqueeShowcase from "../components/TextMarquee";
import AnnouncementBar from "@/components/AnnouncementBar";

const Home = () => {
  return (
    <div>
      <div className="hidden md:block">
        <AnnouncementBar />
      </div>
      <Hero />
      <div className="md:block hidden ribbon">
        <img className="h-[10vh] w-full" src={ribbon} alt="ribbon" />
      </div>
      <ImagesMarquee />
      <Services />
      <Portfolio />
      <Testimonials />
      <ExperienceSection />
      <MarqueeShowcase
        data={["DEVELOPMENT MADE SIMPLE ✦ DESIGN & DEVELOPMENT"]}
        speed={20}
      />
      <Footer />
    </div>
  );
};

export default Home;
