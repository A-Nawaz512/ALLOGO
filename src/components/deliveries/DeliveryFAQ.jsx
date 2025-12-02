import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const DeliveryFAQ = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 60,
      easing: "ease-out-cubic",
    });
  }, []);

  const faqs = [
    {
      id: 1,
      question: "What types of packages can I send?",
      answer:
        "You can send most everyday items such as documents, small boxes, parcels, gifts and non-perishable goods. For safety reasons, we don't transport cash, illegal items, dangerous chemicals, or anything that breaks local regulations.",
    },
    {
      id: 2,
      question: "Is my package insured?",
      answer:
        "Every trip includes basic coverage against loss or major damage during the delivery. For high-value items, you can declare an estimated value in the app so our support team has all the information needed if a claim is opened.",
    },
    {
      id: 3,
      question: "How does delivery confirmation work?",
      answer:
        "When the courier reaches the drop-off point, they capture a photo and, when required, a digital signature from the receiver. The delivery is then marked as completed in the app and you receive a real-time notification with the proof attached.",
    },
  ];

  const [openId, setOpenId] = useState(3); // default open question (you can change this)

  const toggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="relative w-full bg-gradient-to-b from-[#fdfaf3] via-white to-[#fdfaf3] py-16 sm:py-20 lg:py-15 overflow-hidden">
      {/* enhanced background with subtle gradient */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,_#E2CF7D25,_transparent_45%),radial-gradient(circle_at_80%_80%,_#6F491815,_transparent_50%),linear-gradient(to_bottom,_transparent_0%,_#fdfaf3_30%,_#fdfaf3_70%,_transparent_100%)]" />

      {/* decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-gradient-to-br from-[#E2CF7D]/15 to-transparent blur-xl"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 rounded-full bg-gradient-to-tr from-[#6F4918]/10 to-transparent blur-xl"></div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.2fr)] lg:items-start">
          {/* LEFT: INTRO + HIGHLIGHTS */}
          <div data-aos="fade-right" className="mb-10 lg:mb-0">
            {/* FAQ badge with enhanced styling */}
            <div className="mb-8 flex flex-col items-center text-center sm:items-start sm:text-left">
              <div className="relative mb-6">
                <span className="relative z-10 inline-flex items-center rounded-full bg-gradient-to-r from-[#f1e1c0] to-[#f8efd9] px-7 py-2 text-[1rem] font-bold uppercase tracking-[0.35em] text-[#6F4918] shadow-[0_4px_12px_rgba(226,207,125,0.25)]">
                  F A Q
                </span>
                <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#E2CF7D]/30 to-transparent blur-sm"></div>
              </div>

              <h2 className="text-3xl font-black leading-tight text-[#1a1206] sm:text-4xl lg:text-[2.5rem] lg:leading-[1.2]">
                Answers to common
                <span className="block bg-gradient-to-r from-[#6F4918] to-[#E2CF7D] bg-clip-text text-transparent">
                  questions about AILOGO Delivery.
                </span>
              </h2>
            </div>

            <p className="mt-3 text-sm text-gray-700 sm:text-base relative pl-4 border-l-2 border-[#E2CF7D]/50">
              Not sure what you can send or how confirmation works? Start with
              these quick answers. You can always reach our support team from
              inside the app if you still need help.
            </p>

            {/* enhanced highlight chips */}
            <div className="mt-8 grid gap-4 text-xs sm:text-[0.8rem] sm:grid-cols-2">
              <div className="group relative flex items-center gap-3 rounded-2xl bg-white/90 px-4 py-3 shadow-[0_6px_20px_rgba(111,73,24,0.08)] transition-all duration-300 hover:shadow-[0_10px_25px_rgba(111,73,24,0.12)] hover:-translate-y-0.5">
                <div className="absolute -left-1 -top-1 h-8 w-8 rounded-full bg-gradient-to-br from-[#6F4918] to-[#E2CF7D] opacity-0 group-hover:opacity-20 blur-md transition-opacity"></div>
                <span className="relative z-10 inline-flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-[#6F4918] to-[#E2CF7D] text-[0.7rem] font-bold text-white shadow-md">
                  ✓
                </span>
                <span className="relative z-10 font-medium text-[#3b2412]">
                  Clear rules on what can and can't be delivered.
                </span>
              </div>
              <div className="group relative flex items-center gap-3 rounded-2xl bg-white/90 px-4 py-3 shadow-[0_6px_20px_rgba(226,207,125,0.15)] transition-all duration-300 hover:shadow-[0_10px_25px_rgba(226,207,125,0.2)] hover:-translate-y-0.5">
                <div className="absolute -right-1 -bottom-1 h-8 w-8 rounded-full bg-gradient-to-tr from-[#E2CF7D] to-[#6F4918] opacity-0 group-hover:opacity-20 blur-md transition-opacity"></div>
                <span className="relative z-10 inline-flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-[#E2CF7D] to-[#f1e1c0] text-[0.7rem] font-bold text-[#6F4918] shadow-md">
                  3D
                </span>
                <span className="relative z-10 font-medium text-[#3b2412]">
                  Real-time 3D tracking plus proof of delivery.
                </span>
              </div>
            </div>

            {/* enhanced note */}
            <div className="mt-8 rounded-xl bg-gradient-to-r from-white/50 to-transparent p-4 backdrop-blur-sm">
              <p className="text-[0.75rem] text-gray-600">
                Still have questions? Once the platform is live, you'll be able to
                open a support ticket directly from the{" "}
                <span className="font-bold text-[#6F4918] bg-gradient-to-r from-[#6F4918]/10 to-transparent px-2 py-0.5 rounded">
                  Help &amp; FAQ
                </span>{" "}
                section in your AILOGO app.
              </p>
            </div>
          </div>

          {/* RIGHT: ENHANCED ACCORDION */}
          <div
            data-aos="fade-left"
            data-aos-delay="100"
            className="relative rounded-3xl bg-gradient-to-br from-white to-[#fdfaf3] p-6 shadow-[0_25px_60px_rgba(111,73,24,0.15)] sm:p-7 lg:p-8 before:absolute before:inset-0 before:rounded-3xl before:bg-gradient-to-br before:from-[#E2CF7D]/5 before:to-transparent before:content-['']"
          >
            {/* header with enhanced styling */}
            <div className="mb-6 flex items-center justify-between border-b border-[#E2CF7D]/30 pb-4">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-gradient-to-r from-[#6F4918] to-[#E2CF7D]"></div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#6F4918]">
                  Help center
                </p>
              </div>
              <span className="rounded-full bg-gradient-to-r from-[#FFF3C0] to-[#FDF6E7] px-4 py-1.5 text-[0.7rem] font-bold text-[#6F4918] shadow-[0_3px_10px_rgba(226,207,125,0.3)]">
                Most asked questions
              </span>
            </div>

            <div className="divide-y divide-[#E2CF7D]/30">
              {faqs.map((item) => {
                const isOpen = item.id === openId;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => toggle(item.id)}
                    className="group relative w-full py-5 text-left transition-all duration-300 hover:bg-gradient-to-r hover:from-white/50 hover:to-transparent first:pt-2"
                  >
                    {/* decorative line on hover */}
                    <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-transparent via-[#E2CF7D] to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

                    <div className="flex items-center justify-between gap-4 pl-3">
                      <div className="flex items-center gap-4">
                        <span className="relative inline-flex h-8 w-8 flex-none items-center justify-center rounded-full bg-gradient-to-br from-white to-[#FFF8E5] text-[0.75rem] font-bold text-[#6F4918] shadow-[0_4px_10px_rgba(226,207,125,0.3)]">
                          {item.id}
                          <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-[#E2CF7D] to-transparent opacity-0 group-hover:opacity-30 blur-sm transition-opacity"></div>
                        </span>
                        <span className="text-sm font-bold text-[#2b1a08] sm:text-[1rem] group-hover:text-[#6F4918] transition-colors">
                          {item.question}
                        </span>
                      </div>

                      {/* enhanced icon */}
                      <span
                        className={`ml-3 inline-flex h-7 w-7 flex-none items-center justify-center rounded-full bg-gradient-to-br from-[#6F4918]/10 to-[#E2CF7D]/10 text-sm font-black text-[#6F4918] shadow-sm transition-all duration-300 ${
                          isOpen
                            ? "rotate-90 scale-110 bg-gradient-to-br from-[#6F4918]/20 to-[#E2CF7D]/20"
                            : "group-hover:scale-110 group-hover:shadow-md"
                        }`}
                      >
                        ›
                      </span>
                    </div>

                    {/* enhanced answer */}
                    <div
                      className={`grid overflow-hidden pl-12 transition-all duration-300 ${
                        isOpen
                          ? "mt-4 grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="min-h-0">
                        <p className="rounded-lg bg-gradient-to-r from-[#FFF8E5]/30 to-transparent p-4 text-[0.85rem] leading-relaxed text-gray-700">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* enhanced footer */}
            <div className="mt-8 rounded-2xl bg-gradient-to-r from-[#FFF3C0] via-[#FDF6E7] to-[#E2CF7D] p-5 shadow-[0_8px_25px_rgba(226,207,125,0.25)] relative overflow-hidden">
              <div className="absolute right-0 top-0 h-16 w-16 -translate-y-1/2 translate-x-1/2 rounded-full bg-gradient-to-br from-white/30 to-transparent blur-md"></div>
              <div className="relative z-10">
                <div className="mb-2 flex items-center gap-2">
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-br from-[#6F4918] to-[#E2CF7D] text-[0.6rem] font-bold text-white">
                    💡
                  </span>
                  <p className="text-[0.8rem] font-bold text-[#3b2412]">
                    Pro tip: add details when you book your delivery.
                  </p>
                </div>
                <p className="text-[0.75rem] text-[#3b2412]/90">
                  The more information you share (package type, value, special
                  instructions), the easier it is for couriers and support to keep
                  your delivery safe.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeliveryFAQ;