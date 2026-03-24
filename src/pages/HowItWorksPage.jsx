// src/pages/HowItWorksPage.jsx
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { LeafyGreen } from "lucide-react";
import { Upload } from "lucide-react";
import { ComputerIcon } from "lucide-react";
import { ShoppingBasket } from "lucide-react";
import { Car } from "lucide-react";

const steps = [
  {
    number: 1,
    icon: <Upload/>,
    title: "Farmers upload crops",
    description:
      "List your harvest with photos, quantity, and location. Voice upload available for farmers who prefer speaking over typing.",
    details: [
      "Upload crop photos",
      "Set quantity and price",
      "Add your farm location",
      "Voice upload available",
    ],
  },
  {
    number: 2,
    icon: <ComputerIcon/>,
    title: "AI predicts price & demand",
    description:
      "Our AI analyzes market trends, weather patterns, and regional demand to suggest the best selling price for your crops.",
    details: [
      "Real-time market analysis",
      "Weather-based forecasting",
      "Regional demand insights",
      "Best price suggestions",
    ],
  },
  {
    number: 3,
    icon: <ShoppingBasket/> ,
    title: "Buyers place orders",
    description:
      "Buyers browse verified crop listings, compare prices, and order directly from farmers with full transparency.",
    details: [
      "Browse verified listings",
      "Compare crop prices",
      "Order directly from farmers",
      "Full transaction transparency",
    ],
  },
  {
    number: 4,
    icon: <Car/>,
    title: "Secure payment & delivery",
    description:
      "Escrow payments protect both parties. Funds are only released when delivery is confirmed by the buyer.",
    details: [
      "Escrow payment protection",
      "Delivery confirmation",
      "Dispute resolution",
      "Instant fund release",
    ],
  },
];

const faqs = [
  {
    question: "How does the AI price prediction work?",
    answer:
      "Our AI analyzes historical price data, current market trends, weather patterns, and regional demand to generate accurate crop price predictions.",
  },
  {
    question: "Is my payment secure?",
    answer:
      "Yes. All payments go through our escrow system. Funds are held securely and only released to the farmer once the buyer confirms delivery.",
  },
  {
    question: "How do I get verified as a farmer?",
    answer:
      "After registering, submit your farm details and a valid ID. Our team reviews and verifies your account within 24 hours.",
  },
  {
    question: "Can buyers negotiate prices?",
    answer:
      "Yes. Buyers can send offers to farmers who can accept, decline, or counter-offer directly on the platform.",
  },
];

export default function HowItWorksPage() {
  return (
    <div className="bg-[#f5f5f0] min-h-screen flex flex-col">
      <Navbar />

      {/* Hero */}
      <section className="px-6 lg:px-16 py-24 text-center flex flex-col items-center gap-6">
        <div className="bg-[#e8f0e8] text-[#2d7a2d] text-sm font-medium px-4 py-2 flex gap-2 rounded-full w-fit">
         <span> <LeafyGreen/> </span> Simple process
        </div>
        <h1 className="text-5xl lg:text-6xl font-black text-[#1a2e1a] max-w-3xl leading-tight">
          From farm to buyer in{" "}
          <span className="text-[#2d7a2d]">four simple steps</span>
        </h1>
        <p className="text-[#666] text-lg max-w-xl leading-relaxed">
          Agrosynth makes agricultural trading simple, secure, and profitable
          for both farmers and buyers.
        </p>
        <Link
          to="/register"
          className="bg-[#2d7a2d] text-white px-8 py-3 rounded-xl font-semibold hover:bg-[#256325] transition-colors"
        >
          Get started →
        </Link>
      </section>

      {/* Steps */}
      <section className="px-6 lg:px-16 py-16 flex flex-col gap-12">
        {steps.map((step, index) => (
          <div
            key={step.number}
            className={`flex flex-col lg:flex-row items-center gap-12 ${
              index % 2 !== 0 ? "lg:flex-row-reverse" : ""
            }`}
          >
            {/* Text Side */}
            <div className="flex-1 flex flex-col gap-6">
              {/* Number + Icon */}
              <div className="flex items-center gap-4">
                <div className="bg-[#2d7a2d] text-white w-10 h-10 rounded-full flex items-center justify-center text-lg font-black">
                  {step.number}
                </div>
                <span className="text-4xl">{step.icon}</span>
              </div>

              {/* Title */}
              <h2 className="text-3xl lg:text-4xl font-black text-[#1a2e1a]">
                {step.title}
              </h2>

              {/* Description */}
              <p className="text-[#666] text-lg leading-relaxed">
                {step.description}
              </p>

              {/* Detail Points */}
              <ul className="flex flex-col gap-3">
                {step.details.map((detail) => (
                  <li
                    key={detail}
                    className="flex items-center gap-3 text-[#555] text-sm"
                  >
                    <div className="bg-[#e8f0e8] text-[#2d7a2d] w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">
                      ✓
                    </div>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>

            {/* Card Side */}
            <div className="flex-1 bg-white rounded-2xl p-8 shadow-sm flex flex-col gap-4 w-full">
              <div className="bg-[#e8f0e8] w-16 h-16 rounded-2xl flex items-center justify-center text-4xl">
                {step.icon}
              </div>
              <h3 className="text-xl font-black text-[#1a2e1a]">
                Step {step.number} — {step.title}
              </h3>
              <p className="text-[#666] text-sm leading-relaxed">
                {step.description}
              </p>
              <div className="grid grid-cols-2 gap-3 mt-2">
                {step.details.map((detail) => (
                  <div
                    key={detail}
                    className="bg-[#f5f5f0] rounded-xl px-3 py-2 text-xs font-medium text-[#555]"
                  >
                    ✓ {detail}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* FAQ Section */}
      <section className="px-6 lg:px-16 py-24 bg-white">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-[#1a2e1a]">
            Frequently asked questions
          </h2>
          <p className="text-[#666] text-lg mt-4">
            Everything you need to know about Agrosynth
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="bg-[#f5f5f0] rounded-2xl p-6 flex flex-col gap-3"
            >
              <h3 className="font-bold text-[#1a2e1a] text-base">
                {faq.question}
              </h3>
              <p className="text-[#666] text-sm leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-[#2d7a2d] px-6 lg:px-16 py-24 flex flex-col items-center text-center gap-6">
        <h2 className="text-4xl lg:text-5xl font-black text-white max-w-2xl leading-tight">
          Ready to get started?
        </h2>
        <p className="text-green-100 text-lg max-w-xl">
          Join thousands of farmers and buyers already trading on Agrosynth.
        </p>
        <div className="flex items-center gap-4 flex-wrap justify-center">
          <Link
            to="/register"
            className="bg-[#f0a500] text-[#1a2e1a] px-8 py-3 rounded-xl font-bold hover:bg-[#e09400] transition-colors"
          >
            Create account →
          </Link>
          <Link
            to="/marketplace"
            className="border border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-[#256325] transition-colors"
          >
            Explore marketplace
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}