// src/components/HowItWorks.jsx

const steps = [
  {
    number: 1,
    icon: "📤",
    title: "Farmers upload crops",
    description:
      "List your harvest with photos, quantity, and location. Voice upload available.",
  },
  {
    number: 2,
    icon: "🧠",
    title: "AI predicts price & demand",
    description:
      "Our AI analyzes market trends and suggests the best selling price.",
  },
  {
    number: 3,
    icon: "🛒",
    title: "Buyers place orders",
    description:
      "Buyers browse, compare, and order directly from verified farmers.",
  },
  {
    number: 4,
    icon: "🚚",
    title: "Secure payment & delivery",
    description:
      "Escrow payments protect both parties until delivery is confirmed.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-[#f5f5f0] px-6 lg:px-16 py-24">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-black text-[#1a2e1a]">
          How it works
        </h2>
        <p className="text-[#666] text-lg mt-4">
          From farm to buyer in four simple steps.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step) => (
          <div
            key={step.number}
            className="bg-white rounded-2xl p-6 flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow"
          >
            {/* Number + Icon Row */}
            <div className="flex items-center gap-3">
              {/* Number Circle */}
              <div className="bg-[#2d7a2d] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                {step.number}
              </div>
              {/* Icon */}
              <span className="text-2xl">{step.icon}</span>
            </div>

            {/* Title */}
            <h3 className="text-lg font-bold text-[#1a2e1a]">
              {step.title}
            </h3>

            {/* Description */}
            <p className="text-[#666] text-sm leading-relaxed">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}