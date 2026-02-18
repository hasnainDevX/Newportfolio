import EnquiryAbout from "@/components/Enquiry/EnquiryAbout"
import EnquiryForm from "@/components/Enquiry/EnquiryForm"
import EnquiryHero from "@/components/Enquiry/EnquiryHero"
import FAQSection from "@/components/FAQ"
import Footer from "@/components/Footer"

const Enquiry = () => {
  return (
    <div className="bg-[#FFFCF9]">
        <EnquiryHero />
        <EnquiryAbout />
        <EnquiryForm />
        <FAQSection/>
        <Footer/>
    </div>
  )
}

export default Enquiry