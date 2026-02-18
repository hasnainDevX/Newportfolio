"use client";

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

const budgetOptions = [
  "£1,200 – £2,500 GBP",
  "£2,500 – £4,000 GBP",
  "£4,500 – £6,000 GBP",
  "£6,000+ GBP",
];

const timelineOptions = [
  "Less than 1 month",
  "Within 1–2 months",
  "Within 3–4 months",
  "Just gathering info",
];

const referralOptions = [
  "Google Search", "Instagram", "Facebook", "Pinterest",
  "LinkedIn", "Word of Mouth", "Referral", "Previous Client", "Other",
];

// ── Shared class strings ──────────────────────────────────────────────────────
const labelCls =
  "block text-sm text-[#1A1A1A] font-sans mb-2 tracking-wide";

const inputCls =
  "w-full bg-transparent border-0 border-b border-[#1A1A1A] pb-3 pt-1 " +
  "text-[#1A1A1A] text-base font-sans placeholder:text-[#BBBBBB] " +
  "focus:outline-none focus:border-[#A68B44] transition-colors duration-300";

// ── Pill radio ────────────────────────────────────────────────────────────────
const PillRadio = ({
  name, value, checked, onChange, label,
}: {
  name: string; value: string; checked: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void; label: string;
}) => (
  <label className="cursor-pointer">
    <input type="radio" name={name} value={value} checked={checked} onChange={onChange} className="sr-only" />
    <span
      className={`inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full border text-sm font-sans transition-all duration-200 select-none ${
        checked
          ? "border-[#1A1A1A] bg-[#1A1A1A] text-white"
          : "border-[#C8C0B8] bg-transparent text-[#1A1A1A] hover:border-[#1A1A1A]"
      }`}
    >
      {checked && (
        <svg className="w-3 h-3 shrink-0" viewBox="0 0 12 12" fill="none">
          <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
      {label}
    </span>
  </label>
);

// ── Main component ────────────────────────────────────────────────────────────
const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    firstName: "", lastName: "", email: "", businessName: "",
    website: "", socialMedia: "", location: "", reviewedPricingGuide: "",
    budget: "", timeline: "", referralSource: "", referralName: "", additionalInfo: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="w-full max-w-2xl mx-auto px-6 py-32 text-center font-sans">
        <div className="w-14 h-14 rounded-full border border-[#A68B44] flex items-center justify-center mx-auto mb-8">
          <svg className="w-6 h-6 text-[#A68B44]" viewBox="0 0 24 24" fill="none">
            <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h2 className="text-3xl text-[#1A1A1A] font-normal mb-4" style={{ fontFamily: '"Libre Caslon Text", serif' }}>
          Thank you, {formData.firstName}.
        </h2>
        <p className="text-[#555] text-sm leading-relaxed max-w-sm mx-auto font-sans">
          Your enquiry has been received. We'll be in touch within 48 hours to discuss your project.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-3xl mx-auto px-6 py-12 font-sans">
      <form onSubmit={handleSubmit} className="space-y-10">

        {/* First Name */}
        <div>
          <label htmlFor="firstName" className={labelCls}>
            First Name<span className="text-[#A68B44]">*</span>
          </label>
          <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required className={inputCls} />
        </div>

        {/* Last Name */}
        <div>
          <label htmlFor="lastName" className={labelCls}>
            Last Name<span className="text-[#A68B44]">*</span>
          </label>
          <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required className={inputCls} />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className={labelCls}>
            Contact Email<span className="text-[#A68B44]">*</span>
          </label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className={inputCls} />
        </div>

        {/* Business Name */}
        <div>
          <label htmlFor="businessName" className={labelCls}>
            Business Name<span className="text-[#A68B44]">*</span>
          </label>
          <input type="text" id="businessName" name="businessName" value={formData.businessName} onChange={handleChange} required className={inputCls} />
        </div>

        {/* Website */}
        <div>
          <label htmlFor="website" className={labelCls}>
            Business website (if you have one already)
          </label>
          <input type="url" id="website" name="website" value={formData.website} onChange={handleChange} placeholder="https://" className={inputCls} />
        </div>

        {/* Social Media */}
        <div>
          <label htmlFor="socialMedia" className={labelCls}>
            Business social media handle (if you have social media)
          </label>
          <input type="text" id="socialMedia" name="socialMedia" value={formData.socialMedia} onChange={handleChange} placeholder="@handle" className={inputCls} />
        </div>

        {/* Location */}
        <div>
          <label htmlFor="location" className={labelCls}>
            Where are you based?<span className="text-[#A68B44]">*</span>
          </label>
          <input type="text" id="location" name="location" value={formData.location} onChange={handleChange} required className={inputCls} />
        </div>

        {/* Pricing Guide */}
        <div className="space-y-4">
          <label className={labelCls}>
            Have you had a chance to review our{" "}
            <a
              href="https://www.canva.com/design/DAG8Kq0kAEc/oB-vS_7yPJfvYZ7-TkyUdA/view"
              target="_blank" rel="noopener noreferrer"
              className="underline underline-offset-2 text-[#A68B44] hover:text-[#1A1A1A] transition-colors"
            >
              2026 Services & Pricing Guide
            </a>
            ?
          </label>
          <div className="flex gap-3 flex-wrap">
            {["Yes", "No"].map((val) => (
              <PillRadio key={val} name="reviewedPricingGuide" value={val.toLowerCase()} checked={formData.reviewedPricingGuide === val.toLowerCase()} onChange={handleChange} label={val} />
            ))}
          </div>
        </div>

        {/* Budget */}
        <div className="space-y-4">
          <label className={labelCls}>
            Where does your budget roughly fall?<span className="text-[#A68B44]">*</span>
          </label>
          <div className="flex flex-wrap gap-3">
            {budgetOptions.map((val) => (
              <PillRadio key={val} name="budget" value={val} checked={formData.budget === val} onChange={handleChange} label={val} />
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="space-y-4">
          <label className={labelCls}>
            What's your timeline?<span className="text-[#A68B44]">*</span>
          </label>
          <div className="flex flex-wrap gap-3">
            {timelineOptions.map((val) => (
              <PillRadio key={val} name="timeline" value={val} checked={formData.timeline === val} onChange={handleChange} label={val} />
            ))}
          </div>
        </div>

        {/* Referral Source */}
        <div className="relative">
          <label htmlFor="referralSource" className={labelCls}>
            How did you hear about us?<span className="text-[#A68B44]">*</span>
          </label>
          <select
            id="referralSource" name="referralSource"
            value={formData.referralSource} onChange={handleChange} required
            className={`${inputCls} cursor-pointer appearance-none pr-8`}
          >
            <option value="">Select an option</option>
            {referralOptions.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
          </select>
          <svg className="absolute right-0 bottom-3.5 w-4 h-4 text-[#1A1A1A] pointer-events-none" viewBox="0 0 16 16" fill="none">
            <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        {/* Referral Name */}
        <div>
          <label htmlFor="referralName" className={labelCls}>
            If you found us via word of mouth, who can we thank?
          </label>
          <input type="text" id="referralName" name="referralName" value={formData.referralName} onChange={handleChange} className={inputCls} />
        </div>

        {/* Additional Info */}
        <div>
          <label htmlFor="additionalInfo" className={labelCls}>
            Do you have questions or information you would like us to know?
          </label>
          <textarea
            id="additionalInfo" name="additionalInfo"
            value={formData.additionalInfo} onChange={handleChange}
            rows={3}
            placeholder="Tell us about your vision, goals, or any questions..."
            className={`${inputCls} resize-none leading-relaxed`}
          />
          <div className="flex justify-end mt-1">
            <span className={`text-xs font-sans ${formData.additionalInfo.length > 450 ? "text-[#A68B44]" : "text-[#BBB]"}`}>
              {formData.additionalInfo.length} / 500
            </span>
          </div>
        </div>

        {/* Submit */}
        <div className="pt-4 flex justify-end">
          <button
            type="submit"
            className="px-16 py-3 bg-soft-beige border border-charcoal rounded-xl hover:bg-charcoal text-sm tracking-widest uppercase hover:text-white transition-colors duration-300 font-sans text-[#1A1A1A]"
          >
            Submit Enquiry
          </button>
        </div>

      </form>
    </div>
  );
};

export default ContactForm;