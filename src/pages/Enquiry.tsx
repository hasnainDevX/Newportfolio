import EnquiryAbout from "@/components/Enquiry/EnquiryAbout"
import EnquiryForm from "@/components/Enquiry/EnquiryForm"
import EnquiryHero from "@/components/Enquiry/EnquiryHero"
import Footer from "@/components/Footer"

const Enquiry = () => {
  return (
    <div className="bg-[#FFFCF9]">
        <EnquiryHero />
        <EnquiryAbout />
        <EnquiryForm />
        <Footer/>
    </div>
  )
}

export default Enquiry