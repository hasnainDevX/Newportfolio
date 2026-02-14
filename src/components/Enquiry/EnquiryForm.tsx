import { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  businessName: string;
  website: string;
  socialMedia: string;
  location: string;
  reviewedPricingGuide: string;
  budget: string;
  timeline: string;
  referralSource: string;
  referralName: string;
  additionalInfo: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    businessName: "",
    website: "",
    socialMedia: "",
    location: "",
    reviewedPricingGuide: "",
    budget: "",
    timeline: "",
    referralSource: "",
    referralName: "",
    additionalInfo: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ): void => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-6 py-16">
      <form onSubmit={handleSubmit} className="space-y-12">
        {/* First Name */}
        <div className="relative">
          <label
            htmlFor="firstName"
            className="block text-sm text-[#2A2A2A] mb-3"
            style={{ fontFamily: "sans-serif" }}
          >
            First Name<span className="text-[#2A2A2A]">*</span>
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            className="w-full bg-transparent border-0 border-b border-charcoal pb-3 text-[#2A2A2A] text-base focus:outline-none focus:border-[#A68B44] transition-colors"
            style={{ fontFamily: "sans-serif" }}
          />
        </div>

        {/* Last Name */}
        <div className="relative">
          <label
            htmlFor="lastName"
            className="block text-sm text-[#2A2A2A] mb-3"
            style={{ fontFamily: "sans-serif" }}
          >
            Last Name<span className="text-[#2A2A2A]">*</span>
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
            className="w-full bg-transparent border-0 border-b border-charcoal pb-3 text-[#2A2A2A] text-base focus:outline-none focus:border-[#A68B44] transition-colors"
            style={{ fontFamily: "sans-serif" }}
          />
        </div>

        {/* Contact Email */}
        <div className="relative">
          <label
            htmlFor="email"
            className="block text-sm text-[#2A2A2A] mb-3"
            style={{ fontFamily: "sans-serif" }}
          >
            Contact Email<span className="text-[#2A2A2A]">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full bg-transparent border-0 border-b border-charcoal pb-3 text-[#2A2A2A] text-base focus:outline-none focus:border-[#A68B44] transition-colors"
            style={{ fontFamily: "sans-serif" }}
          />
        </div>

        {/* Business Name */}
        <div className="relative">
          <label
            htmlFor="businessName"
            className="block text-sm text-[#2A2A2A] mb-3"
            style={{ fontFamily: "sans-serif" }}
          >
            Business Name<span className="text-[#2A2A2A]">*</span>
          </label>
          <input
            type="text"
            id="businessName"
            name="businessName"
            value={formData.businessName}
            onChange={handleChange}
            required
            className="w-full bg-transparent border-0 border-b border-charcoal pb-3 text-[#2A2A2A] text-base focus:outline-none focus:border-[#A68B44] transition-colors"
            style={{ fontFamily: "sans-serif" }}
          />
        </div>

        {/* Business Website */}
        <div className="relative">
          <label
            htmlFor="website"
            className="block text-sm text-[#2A2A2A] mb-3"
            style={{ fontFamily: "sans-serif" }}
          >
            Business website (if you have one already)
            <span className="text-[#2A2A2A]">*</span>
          </label>
          <input
            type="url"
            id="website"
            name="website"
            value={formData.website}
            onChange={handleChange}
            className="w-full bg-transparent border-0 border-b border-charcoal pb-3 text-[#2A2A2A] text-base focus:outline-none focus:border-[#A68B44] transition-colors"
            style={{ fontFamily: "sans-serif" }}
          />
        </div>

        {/* Social Media Handle */}
        <div className="relative">
          <label
            htmlFor="socialMedia"
            className="block text-sm text-[#2A2A2A] mb-3"
            style={{ fontFamily: "sans-serif" }}
          >
            Business social media handle (if you have social media)
          </label>
          <input
            type="text"
            id="socialMedia"
            name="socialMedia"
            value={formData.socialMedia}
            onChange={handleChange}
            className="w-full bg-transparent border-0 border-b border-charcoal pb-3 text-[#2A2A2A] text-base focus:outline-none focus:border-[#A68B44] transition-colors"
            style={{ fontFamily: "sans-serif" }}
          />
        </div>

        {/* Location */}
        <div className="relative">
          <label
            htmlFor="location"
            className="block text-sm text-[#2A2A2A] mb-3"
            style={{ fontFamily: "sans-serif" }}
          >
            Where are you based?<span className="text-[#2A2A2A]">*</span>
          </label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
            className="w-full bg-transparent border-0 border-b border-charcoal pb-3 text-[#2A2A2A] text-base focus:outline-none focus:border-[#A68B44] transition-colors"
            style={{ fontFamily: "sans-serif" }}
          />
        </div>

        {/* Pricing Guide Review */}
        <div className="relative">
          <label
            className="block text-sm text-[#2A2A2A] mb-6"
            style={{ fontFamily: "sans-serif" }}
          >
            Have you had a chance to review our 2026 Services & Pricing Guide?
            You can grab it here:{" "}
            <a
              href="https://www.canva.com/design/DAG8Kq0kAEc/oB-vS_7yPJfvYZ7-TkyUdA/view?utm_content=DAG8Kq0kAEc&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h5bb1ad8fe9"
              className="text-soft-blue hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.canva.com/design/DAG8Kq0kAEc/oB-vS_7yPJfvYZ7-TkyUdA/view
            </a>
          </label>
          <div className="flex gap-8 border-b border-charcoal pb-3">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="reviewedPricingGuide"
                value="yes"
                checked={formData.reviewedPricingGuide === "yes"}
                onChange={handleChange}
                className="w-4 h-4"
              />
              <span
                className="text-sm text-[#2A2A2A]"
                style={{ fontFamily: "sans-serif" }}
              >
                Yes
              </span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="reviewedPricingGuide"
                value="no"
                checked={formData.reviewedPricingGuide === "no"}
                onChange={handleChange}
                className="w-4 h-4"
              />
              <span
                className="text-sm text-[#2A2A2A]"
                style={{ fontFamily: "sans-serif" }}
              >
                No
              </span>
            </label>
          </div>
        </div>

        {/* Budget */}
        <div className="relative">
          <label
            className="block text-sm text-[#2A2A2A] mb-6"
            style={{ fontFamily: "sans-serif" }}
          >
            Where does your budget roughly fall?
            <span className="text-[#2A2A2A]">*</span>
          </label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-b border-charcoal pb-6">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="budget"
                value="£1,200 - £2,500 GBP"
                checked={formData.budget === "£1,200 - £2,500 GBP"}
                onChange={handleChange}
                required
                className="w-4 h-4"
              />
              <span
                className="text-sm text-[#2A2A2A]"
                style={{ fontFamily: "sans-serif" }}
              >
                £1,200 - £2,500 GBP
              </span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="budget"
                value="£2,500 - 4,000 GBP"
                checked={formData.budget === "£2,500 - 4,000 GBP"}
                onChange={handleChange}
                className="w-4 h-4"
              />
              <span
                className="text-sm text-[#2A2A2A]"
                style={{ fontFamily: "sans-serif" }}
              >
                £2,500 - 4,000 GBP
              </span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="budget"
                value="£4,500 - 6,000 GBP"
                checked={formData.budget === "£4,500 - 6,000 GBP"}
                onChange={handleChange}
                className="w-4 h-4"
              />
              <span
                className="text-sm text-[#2A2A2A]"
                style={{ fontFamily: "sans-serif" }}
              >
                £4,500 - 6,000 GBP
              </span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="budget"
                value="£6,000+ GBP"
                checked={formData.budget === "£6,000+ GBP"}
                onChange={handleChange}
                className="w-4 h-4"
              />
              <span
                className="text-sm text-[#2A2A2A]"
                style={{ fontFamily: "sans-serif" }}
              >
                £6,000+ GBP
              </span>
            </label>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          <label
            className="block text-sm text-[#2A2A2A] mb-6"
            style={{ fontFamily: "sans-serif" }}
          >
            What's your timeline?<span className="text-[#2A2A2A]">*</span>
          </label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-b border-charcoal pb-6">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="timeline"
                value="Less than 1 month"
                checked={formData.timeline === "Less than 1 month"}
                onChange={handleChange}
                required
                className="w-4 h-4"
              />
              <span
                className="text-sm text-[#2A2A2A]"
                style={{ fontFamily: "sans-serif" }}
              >
                Less than 1 month
              </span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="timeline"
                value="Within 1-2 months"
                checked={formData.timeline === "Within 1-2 months"}
                onChange={handleChange}
                className="w-4 h-4"
              />
              <span
                className="text-sm text-[#2A2A2A]"
                style={{ fontFamily: "sans-serif" }}
              >
                Within 1-2 months
              </span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="timeline"
                value="Within 3-4 months"
                checked={formData.timeline === "Within 3-4 months"}
                onChange={handleChange}
                className="w-4 h-4"
              />
              <span
                className="text-sm text-[#2A2A2A]"
                style={{ fontFamily: "sans-serif" }}
              >
                Within 3-4 months
              </span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="timeline"
                value="Just gathering info right now"
                checked={formData.timeline === "Just gathering info right now"}
                onChange={handleChange}
                className="w-4 h-4"
              />
              <span
                className="text-sm text-[#2A2A2A]"
                style={{ fontFamily: "sans-serif" }}
              >
                Just gathering info right now
              </span>
            </label>
          </div>
        </div>

        {/* Referral Source */}
        <div className="relative">
          <label
            htmlFor="referralSource"
            className="block text-sm text-[#2A2A2A] mb-3"
            style={{ fontFamily: "sans-serif" }}
          >
            How did you hear about us?<span className="text-[#2A2A2A]">*</span>
          </label>
          <select
            id="referralSource"
            name="referralSource"
            value={formData.referralSource}
            onChange={handleChange}
            required
            className="w-full bg-transparent border-0 border-b border-charcoal pb-3 text-[#2A2A2A] text-base focus:outline-none focus:border-[#A68B44] transition-colors cursor-pointer"
            style={{ fontFamily: "sans-serif" }}
          >
            <option value="">Select</option>
            <option value="Google Search">Google Search</option>
            <option value="Instagram">Instagram</option>
            <option value="Facebook">Facebook</option>
            <option value="Pinterest">Pinterest</option>
            <option value="LinkedIn">LinkedIn</option>
            <option value="Word of Mouth">Word of Mouth</option>
            <option value="Referral">Referral</option>
            <option value="Previous Client">Previous Client</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Referral Name */}
        <div className="relative">
          <label
            htmlFor="referralName"
            className="block text-sm text-[#2A2A2A] mb-3"
            style={{ fontFamily: "sans-serif" }}
          >
            If you found us via word of mouth, who can we thank?
          </label>
          <input
            type="text"
            id="referralName"
            name="referralName"
            value={formData.referralName}
            onChange={handleChange}
            className="w-full bg-transparent border-0 border-b border-charcoal pb-3 text-[#2A2A2A] text-base focus:outline-none focus:border-[#A68B44] transition-colors"
            style={{ fontFamily: "sans-serif" }}
          />
        </div>

        {/* Additional Information */}
        <div className="relative">
          <label
            htmlFor="additionalInfo"
            className="block text-sm text-[#2A2A2A] mb-3"
            style={{ fontFamily: "sans-serif" }}
          >
            Do you have questions or information you would like us to know?
          </label>
          <textarea
            id="additionalInfo"
            name="additionalInfo"
            value={formData.additionalInfo}
            onChange={handleChange}
            rows={1}
            className="w-full bg-transparent border-0 border-b border-charcoal pb-3 text-[#2A2A2A] text-base focus:outline-none focus:border-[#A68B44] transition-colors resize-none"
            style={{ fontFamily: "sans-serif" }}
          />
        </div>

        {/* Submit Button */}
        <div className="pt-8 flex justify-end">
          <button
            type="submit"
            className="px-12 py-3 border-2 border-black text-sm tracking-widest uppercase hover:bg-black hover:text-white transition-colors duration-300"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;