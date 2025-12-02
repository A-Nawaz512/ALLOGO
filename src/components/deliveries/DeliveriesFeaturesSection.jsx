import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const DeliveryHowItWorks = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 60,
      easing: "ease-out-cubic",
    });
  }, []);

  const steps = [
    {
      id: 1,
      title: "Enter pickup & drop-off locations",
      text: "Pin where the courier should collect your package and where it needs to go. We use precise map locations so nothing gets lost.",
    },
    {
      id: 2,
      title: "Add package type & notes",
      text: "Tell us what you're sending—documents, boxes, fragile items—and add any special instructions for the courier.",
    },
    {
      id: 3,
      title: "Get matched with a courier",
      text: "AlLOGO connects you with a nearby courier using a scooter or car, depending on distance and package size.",
    },
    {
      id: 4,
      title: "Track live & get delivery confirmation",
      text: "Watch your courier move in real time on the 3D map. Once the receiver gets the package, they confirm delivery in the app.",
    },
  ];

  return (
    // prevent any child from causing horizontal scroll
    <section className="relative w-full overflow-x-hidden bg-white py-16 sm:py-20 lg:py-18 overflow-hidden">
      {/* Soft background glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_#E2CF7D26,_transparent_55%),linear-gradient(to_bottom,_#fff,_#fff)]" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl" data-aos="fade-up">
          <p className="inline-flex items-center rounded-full bg-[#6F4918]/6 px-4 py-1 text-[1rem] font-semibold uppercase tracking-[0.24em] text-[#6F4918]">
            For Clients • How it Works
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-snug text-[#1a1206] sm:text-4xl lg:text-[2.75rem]">
            Send a package in just four simple steps.
          </h2>

          <p className="mt-3 text-sm text-gray-600 sm:text-base">
            From entering your pickup location to delivery confirmation, AlLOGO
            keeps every step clear, fast, and fully tracked in real time.
          </p>
        </div>

        {/* Divider */}
        <div className="mt-8 h-px w-full rounded-full mt-[-14px]
  bg-gradient-to-r from-[#6F4918]/5 via-[#E2CF7D]/40 to-[#6F4918]/5" />

        {/* Steps grid */}
        <div
          className="mt-10 grid w-full gap-6 md:mt-12 md:grid-cols-2 xl:grid-cols-4"
          data-aos="fade-up"
          data-aos-delay="80"
        >
          {steps.map((step, index) => (
            <div
              key={step.id}
              data-aos="fade-up"
              data-aos-delay={120 + index * 60}
              className="group relative flex h-full flex-col rounded-3xl border border-[#E2CF7D]/70 bg-gradient-to-b from-white via-[#FFF9EA] to-white p-6 shadow-[0_18px_45px_rgba(0,0,0,0.04)] transition-all duration-200 hover:-translate-y-2 hover:border-[#E2CF7D] hover:shadow-[0_26px_70px_rgba(0,0,0,0.10)]"
            >
              {/* Glow behind badge */}
              <div className="pointer-events-none absolute -top-6 left-8 h-12 w-12 rounded-full bg-[#E2CF7D]/40 blur-xl opacity-0 transition-opacity duration-200 group-hover:opacity-100" />

              {/* Step badge row */}
              <div className="mb-4 flex items-center gap-3">
                <div className="relative flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-[#6F4918] to-[#E2CF7D] text-xs font-semibold text-white shadow-md">
                  <span className="relative z-10">{step.id}</span>
                  <div className="absolute inset-1 rounded-2xl border border-white/30" />
                </div>
                <span className="rounded-full bg-[#6F4918]/7 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-[#6F4918]">
                  Step {step.id}
                </span>
              </div>

              {/* Main content */}
              <div className="flex-1">
                <h3 className="text-[1.05rem] font-semibold text-[#2b1a08] sm:text-[1.1rem]">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  {step.text}
                </p>
              </div>

              {/* Bottom accent & dots */}
              <div className="mt-6 flex items-center justify-between">
                <div className="h-1 w-16 rounded-full bg-gradient-to-r from-[#6F4918] to-[#E2CF7D] transition-all duration-200 group-hover:w-24" />
                <div className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#6F4918]/40" />
                  <span className="h-1.5 w-1.5 rounded-full bg-[#6F4918]/30" />
                  <span className="h-1.5 w-1.5 rounded-full bg-[#6F4918]/20" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DeliveryHowItWorks;
