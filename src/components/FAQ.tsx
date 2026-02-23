import { useState } from "react";

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "How much does a web design project cost?",
    answer: "Every project is unique, but our website packages typically start from £1,200. The final investment depends on the scope, number of pages, and any additional features. You can review our full 2026 Services & Pricing Guide for a detailed breakdown.",
  },
  {
    question: "How long does the process take?",
    answer: "Most website projects are completed within 4–6 weeks from the project kick-off date. This timeline depends on how quickly content and feedback are provided. We'll agree on a clear timeline before we begin so there are no surprises.",
  },
  {
    question: "Do you offer payment plans?",
    answer: "Yes! We offer split payment options to make things more manageable. Typically this is a 50% deposit to secure your spot, with the remaining balance due before your site goes live. We can discuss what works best for you.",
  },
  {
    question: "What website platforms do you work with?",
    answer: "We primarily design and build on Shopify and custom-coded platforms. If you're unsure what's right for your business, we'll help you figure that out during the enquiry process — no tech knowledge required on your end.",
  },
  {
    question: "Will my website work on mobile?",
    answer: "Absolutely. Every website we build is fully responsive and tested across devices and screen sizes. Mobile experience is a core part of our design process, not an afterthought.",
  },
  {
    question: "I'm not sure what I need — can we chat first?",
    answer: "Of course! Fill out the enquiry form and give us a rough idea of where you're at. We'll be in touch to set up a discovery call where we can talk through your goals and figure out the best path forward together.",
  },
];

const FAQItem = ({ faq }: { faq: FAQ; index: number }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="border-b transition-colors duration-300"
      style={{ borderColor: "#e0d9d0" }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between text-left py-7 md:py-8 gap-6 group cursor-pointer"
      >
        <span
          className="text-2xl md:text-3xl lg:text-4xl font-normal leading-snug transition-colors duration-300 group-hover:opacity-70 px-10 md:px-16 lg:px-24"
          style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", color: "#1a1a1a" }}
        >
          {faq.question}
        </span>

        {/* Chevron icon — rotates on open */}
        <span
          className="shrink-0 flex items-center justify-center transition-transform duration-400 px-10 md:px-16 "
          style={{
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
            color: "#1a1a1a",
          }}
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <path
              d="M5 8l6 6 6-6"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>

      {/* Answer — smooth height animation */}
      <div
        className="overflow-hidden transition-all duration-500 ease-in-out"
        style={{ maxHeight: open ? "300px" : "0px" }}
      >
        <p
          className="pb-8 leading-relaxed max-w-3xl font-sans px-10 md:px-16 lg:px-24"
          style={{ fontSize: "1rem", color: "#6b6560" }}
        >
          {faq.answer}
        </p>
      </div>
    </div>
  );
};

const FAQSection = () => {
  return (
    <section className="w-full  py-20 md:py-28">
      <div className="m mx-auto">

        {/* Header */}
        <p
          className="text-xs tracking-[0.4em] uppercase text-[#999] mb-12 font-sans px-10 md:px-16 lg:px-24"
        >
          Frequently Asked Questions
        </p>

        {/* FAQ list */}
        <div style={{ borderTop: "1px solid #e0d9d0" }}>
          {faqs.map((faq, idx) => (
            <FAQItem key={idx} faq={faq} index={idx} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQSection;