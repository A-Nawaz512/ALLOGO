import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const LoyaltyCredit = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 60,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <section className="relative w-full bg-gradient-to-b from-[#fefcf7] via-white to-[#fefcf7] py-16 sm:py-20 lg:py-24 overflow-hidden">
      {/* enhanced dark band with gradient overlay */}
      <div className="absolute inset-x-0 top-8 bottom-8 bg-gradient-to-r from-[#24160a] via-[#2d1a0c] to-[#6F4918] shadow-[inset_0_-20px_40px_rgba(0,0,0,0.3)]" />

      {/* decorative elements */}
      <div className="absolute top-1/4 left-5 w-32 h-32 rounded-full bg-gradient-to-br from-[#E2CF7D]/10 to-transparent blur-2xl" />
      <div className="absolute bottom-1/4 right-5 w-40 h-40 rounded-full bg-gradient-to-tr from-[#6F4918]/10 to-transparent blur-2xl" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div
          data-aos="fade-up"
          className="mx-auto max-w-3xl text-center text-white"
        >
          <div className="relative inline-block">
            <span className="relative z-10 inline-flex items-center rounded-full bg-gradient-to-r from-white/15 to-transparent px-5 py-1.5 text-[1rem] font-bold uppercase tracking-[0.24em] text-[#E2CF7D] shadow-[0_0_20px_rgba(226,207,125,0.3)]">
              Loyalty &amp; Credit
            </span>
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#E2CF7D]/20 to-transparent blur-sm" />
          </div>

          <h2 className="mt-5 text-3xl font-black leading-tight sm:text-4xl lg:text-[2.4rem]">
            Earn points on every trip
            <span className="block bg-gradient-to-r from-[#E2CF7D] via-white to-[#E2CF7D]/80 bg-clip-text text-transparent">
              unlock instant working credit.
            </span>
          </h2>

          <p className="mt-4 text-sm text-white/90 sm:text-base max-w-2xl mx-auto leading-relaxed">
            Every completed delivery grows your loyalty balance. Active
            couriers with strong history can unlock short-term credit inside
            the AILOGO app to keep earning without any downtime.
          </p>
        </div>

        {/* MAIN LAYOUT */}
        <div className="mt-12 flex flex-col gap-8 lg:mt-16 lg:flex-row lg:items-stretch">
          {/* LEFT – LOYALTY WALLET CARD */}
          <div
            data-aos="fade-right"
            className="w-full lg:w-[55%]"
          >
            <div className="relative h-full overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#2d1a0c] via-[#3b2412] to-[#6F4918] p-6 sm:p-7 shadow-[0_25px_60px_rgba(0,0,0,0.7)] before:absolute before:inset-0 before:bg-gradient-to-b before:from-transparent before:to-black/20 before:content-['']">
              {/* top glow effect */}
              <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[#E2CF7D]/20 via-transparent to-transparent" />

              {/* top row: title + badge */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-white/10">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#E2CF7D]">
                    Courier wallet
                  </p>
                  <h3 className="mt-1 text-xl font-bold text-white">
                    Loyalty points overview
                  </h3>
                </div>
                <span className="rounded-full bg-gradient-to-r from-[#E2CF7D] to-[#f8e6a9] px-4 py-1.5 text-[0.7rem] font-bold uppercase tracking-wide text-[#3b2412] shadow-[0_4px_15px_rgba(226,207,125,0.4)]">
                  1 point = 1 DA
                </span>
              </div>

              {/* center row – points & credit */}
              <div className="mt-6 grid gap-6 sm:grid-cols-[1.1fr_minmax(0,1fr)]">
                {/* points block */}
                <div className="rounded-2xl border border-white/15 bg-gradient-to-br from-black/30 to-black/10 p-5 backdrop-blur-sm shadow-inner shadow-black/30">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#E2CF7D]">
                    Current points
                  </p>
                  <div className="mt-3 flex items-end gap-2">
                    <span className="text-3xl font-bold text-white">
                      1,280
                    </span>
                    <span className="mb-1 text-sm text-[#E2CF7D]">pts</span>
                  </div>
                  <p className="mt-2 text-xs text-white/80">
                    Earned from recent completed deliveries and rentals.
                  </p>

                  {/* small benefits row */}
                  <div className="mt-5 grid gap-3 text-[0.7rem] text-white/90 sm:grid-cols-2">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-gradient-to-r from-[#E2CF7D] to-[#f8e6a9]" />
                      <span className="font-medium">Loyalty applied to every service type</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-gradient-to-r from-[#E2CF7D] to-[#f8e6a9]" />
                      <span className="font-medium">Use history to unlock extra credit</span>
                    </div>
                  </div>
                </div>

                {/* credit gauge */}
                <div className="flex flex-col justify-between rounded-2xl border border-[#E2CF7D]/50 bg-gradient-to-br from-[#FDF6E7] to-[#f8efd9] p-5 text-[#3b2412] shadow-inner shadow-[#E2CF7D]/20">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#b08a4a]">
                      Credit eligibility
                    </p>

                    <div className="mt-4 flex items-center gap-4">
                      {/* circular progress */}
                      <div className="relative h-16 w-16">
                        <div className="absolute inset-0 rounded-full border-2 border-[#E2CF7D]/50" />
                        <div className="absolute inset-1 rounded-full border-[6px] border-t-[#6F4918] border-r-[#6F4918] border-b-[#E2CF7D]/40 border-l-[#E2CF7D]/40 rotate-[-40deg]" />
                        <div className="absolute inset-2 flex items-center justify-center rounded-full bg-gradient-to-br from-white to-[#FDF6E7] text-sm font-bold text-[#6F4918] shadow-inner">
                          80%
                        </div>
                      </div>

                      <div className="space-y-1 text-xs">
                        <p className="font-bold text-[#3b2412]">
                          Up to <span className="text-[#6F4918]">2,000 DA</span>{" "}
                          credit available
                        </p>
                        <p className="text-[#6b5a3c] leading-relaxed">
                          Based on completed jobs, on-time rate and repayment
                          history.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* status chips */}
                  <div className="mt-5 flex flex-wrap gap-2 text-[0.7rem]">
                    <span className="rounded-full bg-gradient-to-r from-[#6F4918] to-[#8a5f2b] px-3 py-1.5 font-bold text-white shadow-md">
                      Active courier
                    </span>
                    <span className="rounded-full border border-[#6F4918]/40 bg-gradient-to-r from-white to-[#FDF6E7] px-3 py-1.5 font-bold text-[#6F4918] shadow-sm">
                      Auto-repayment from earnings
                    </span>
                  </div>
                </div>
              </div>

              {/* footer note */}
              <p className="mt-6 text-[0.7rem] text-white/75 p-3 rounded-lg bg-black/20 border border-white/10">
                New credit can only be requested after your previous balance
                has been fully repaid from your earnings or card payment. No
                hidden interest, just a fixed amount linked to your activity.
              </p>
            </div>
          </div>

          {/* RIGHT – HOW IT WORKS LIST */}
          <div
            data-aos="fade-left"
            className="w-full lg:w-[45%]"
          >
            <div className="h-full rounded-[2rem] bg-gradient-to-br from-white to-[#fefcf7] p-6 shadow-[0_20px_50px_rgba(111,73,24,0.25)] lg:p-7 border border-[#E2CF7D]/20">
              <div className="flex items-center gap-2 pb-4 border-b border-[#E2CF7D]/30">
                <div className="h-2 w-2 rounded-full bg-gradient-to-r from-[#6F4918] to-[#E2CF7D]" />
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#6F4918]">
                  How loyalty &amp; credit work
                </p>
              </div>

              <ol className="mt-5 space-y-6">
                {[
                  {
                    num: 1,
                    title: "Earn points on every completed job",
                    desc: "Each successful ride, delivery or rental adds loyalty points to your profile. More activity = more points."
                  },
                  {
                    num: 2,
                    title: "Build eligibility for AILOGO credit",
                    desc: "Once you reach the required activity level and have a clean repayment history, you qualify for in-app credit between 1,000–2,000 DA."
                  },
                  {
                    num: 3,
                    title: "Credit repays itself from your earnings",
                    desc: "Borrow once, then let the system repay automatically from your commissions and card payments. You can't take new credit until the previous balance is closed."
                  }
                ].map((item) => (
                  <li key={item.num} className="flex gap-3 group">
                    <span className="mt-0.5 inline-flex h-8 w-8 flex-none items-center justify-center rounded-full bg-gradient-to-br from-[#6F4918] to-[#E2CF7D] text-sm font-black text-white shadow-[0_4px_15px_rgba(111,73,24,0.4)] group-hover:scale-110 transition-transform">
                      {item.num}
                    </span>
                    <div>
                      <h4 className="font-bold text-[#2b1a08] group-hover:text-[#6F4918] transition-colors">
                        {item.title}
                      </h4>
                      <p className="mt-2 text-sm text-gray-700 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>

              {/* mini highlight bar */}
              <div className="mt-7 rounded-2xl bg-gradient-to-r from-[#FFF3C2] via-[#FDF6E7] to-[#E2CF7D] p-5 text-xs text-[#3b2412] shadow-[0_8px_25px_rgba(226,207,125,0.3)]">
                <div className="flex items-center gap-2 mb-2">
                  <div className="h-3 w-3 rounded-full bg-gradient-to-r from-[#6F4918] to-[#E2CF7D]" />
                  <p className="font-bold text-[#3b2412]">
                    Result: more flexibility for serious couriers.
                  </p>
                </div>
                <p className="leading-relaxed">
                  Use loyalty to cover fuel, maintenance or short gaps, while
                  keeping full visibility on how much you owe and how fast it's
                  being repaid.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoyaltyCredit;