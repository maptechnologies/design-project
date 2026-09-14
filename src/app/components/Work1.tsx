"use client";

/**
 * HowWeWork.tsx
 * "How We Work" section.
 * Cards are white/bordered by default, narrower width but same height.
 * On hover: teal gradient + soft shadow (no scaling).
 * Fully responsive across mobile / tablet / desktop.
 */

interface Step {
  number: string;
  title: string;
  desc: string;
}

const steps: Step[] = [
  {
    number: "01",
    title: "Design Brief",
    desc: "The process begins with your delivery of what you have in mind for the logo that is going to go ahead and represent your brand for you. This is what we begin the construction of the logo form.",
  },
  {
    number: "02",
    title: "Research & Sketch",
    desc: "Now that we are clear with what ingredients must be included to brew the perfect logo for you. Our designers will make a concept and make a draft to begin the collaborative design process.",
  },
  {
    number: "03",
    title: "Revision",
    desc: "Once we are satisfied with our delivery, we share it with the client. We are however completely open for constructive feedback and revisions.",
  },
  {
    number: "04",
    title: "Final Delivery",
    desc: "After having the files reviewed by the client and after having the errors removed, we deliver the project and all the necessary format files.",
  },
];

export default function HowWeWork() {
  return (
    <section className="relative w-full bg-white py-10 sm:py-14 lg:py-16 px-4 sm:px-6 overflow-hidden">
      {/* ================= BACKGROUND GRID LINES ================= */}
      <div
        className="pointer-events-none absolute inset-0 hidden sm:block"
        style={{
          backgroundImage: `
            linear-gradient(to right, #eaeaea 1px, transparent 1px),
            linear-gradient(to bottom, #eaeaea 1px, transparent 1px)
          `,
          backgroundSize: "33.333% 50%",
        }}
      />

      <div className="relative mx-auto max-w-6xl">
        {/* HEADING */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-8 sm:mb-10">
          How We Work
        </h2>

        {/* TOP ROW: Image + Card 01 */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-0 sm:gap-0 mb-2 sm:mb-6">
          <div className="w- h-56 sm:h-72 lg:h-full overflow-hidden">
            <img
              src="/iamge/design1.webp"
              alt="How We Work"
              className="w-full h-full object-cover"
            />
          </div>

          <StepCard step={steps[0]} />
        </div>

        {/* BOTTOM ROW: Cards 02, 03, 04 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 sm:gap-0">
          <StepCard step={steps[1]} />
          <StepCard step={steps[2]} />
          <StepCard step={steps[3]} />
        </div>
      </div>
    </section>
  );
}

function StepCard({ step }: { step: Step }) {
  return (
    <div
      className="group relative border border-gray-200 w-[80%] mx-auto py-5 sm:py-6 lg:py-7 px-4 sm:px-5 flex flex-col justify-center
      transition-all duration-300 ease-in-out cursor-pointer
      hover:border-transparent
      hover:bg-gradient-to-br hover:from-[#3fd8c9] hover:to-[#3fb6e0]
      hover:shadow-[0_20px_45px_-10px_rgba(0,0,0,0.35)]"
    >
      <h3 className="flex items-baseline gap-2 text-lg sm:text-xl font-bold mb-2 sm:mb-3">
        <span className="text-3xl sm:text-4xl font-extrabold text-gray-200 transition-colors duration-300 group-hover:text-white/40">
          {step.number}
        </span>
        <span className="text-sky-400 transition-colors duration-300 group-hover:text-white">
          {step.title}
        </span>
      </h3>

      <p className="text-gray-600 text-sm leading-relaxed text-center transition-colors duration-300 group-hover:text-white">
        {step.desc}
      </p>
    </div>
  );
}