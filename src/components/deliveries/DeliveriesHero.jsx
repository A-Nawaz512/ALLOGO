import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import deliveryVideo from "../../assets/food.mp4";

const DeliveryHero = () => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      offset: 80,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    // ✅ hide any horizontal overflow coming from absolute elements / shadows
    <section className="relative min-h-[90vh] w-full overflow-x-hidden overflow-y-hidden bg-white">
      {/* Background video */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={deliveryVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-[#6F4918]/65 to-[#E2CF7D]/15" />

      {/* Decorative blurred lights */}
      <div className="pointer-events-none absolute -left-20 top-10 h-60 w-64 rounded-full bg-[#E2CF7D]/25 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[#6F4918]/40 blur-3xl" />

      {/* Content wrapper */}
      <div className="relative z-10 mx-auto max-w-6xl px-4 pt-28 pb-16 sm:px-6 lg:px-8">
        <div className="grid w-full items-start gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:items-center">
          {/* Left: text */}
          <div data-aos="fade-right">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-[#E2CF7D] backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-[#6F4918] to-[#E2CF7D]" />
              AlLOGO Delivery &amp; Courier
            </div>

            {/* Title */}
            <h1 className="mt-5 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl xl:text-[3.4rem]">
              Delivery &amp; Courier
            </h1>

            {/* Subtitle */}
            <p className="mt-4 max-w-xl text-sm text-gray-100 sm:text-base">
              Send packages quickly with live tracking across your city. Choose
              a nearby courier, confirm your trip, and follow every movement in
              real time on our 3D map.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap gap-4">
              <button
                className="group inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#6F4918] to-[#E2CF7D] px-8 py-3 text-sm font-semibold text-white shadow-xl shadow-black/40 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-[#E2CF7D]/80 focus:ring-offset-2 focus:ring-offset-black"
              >
                <span className="mr-2 inline-block h-2 w-2 rounded-full bg-white/80 transition-transform group-hover:scale-125 group-hover:bg-black/80" />
                Send a Package
              </button>

              <button
                className="inline-flex items-center justify-center rounded-full border border-[#E2CF7D] bg-white/5 px-8 py-3 text-sm font-semibold text-[#E2CF7D] backdrop-blur-md transition-all duration-200 hover:bg-[#E2CF7D] hover:text-black hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#E2CF7D]/80 focus:ring-offset-2 focus:ring-offset-black"
              >
                Become a Courier
              </button>
            </div>

            {/* Mini stats / trust row */}
            <div className="mt-8 flex flex-wrap gap-6 text-xs text-gray-100 sm:text-sm">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#E2CF7D]" />
                Live 3D tracking
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#E2CF7D]" />
                Cars &amp; scooters
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#E2CF7D]" />
                Loyalty points on every delivery
              </div>
            </div>
          </div>

          {/* Right: glass card / preview */}
          <div
            className="mt-10 flex justify-center lg:mt-0 lg:justify-end"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <div className="w-full max-w-sm rounded-3xl border border-white/10 bg-white/90 p-6 shadow-2xl backdrop-blur-md">
              <div className="flex items-center justify-between">
                <h2 className="text-sm font-semibold text-[#6F4918]">
                  Live Delivery Snapshot
                </h2>
                <span className="rounded-full bg-gradient-to-r from-[#6F4918] to-[#E2CF7D] px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-wide text-white">
                  Real-time
                </span>
              </div>

              <ol className="mt-4 space-y-3 text-sm text-gray-700">
                <li className="flex gap-3">
                  <span className="mt-0.5 inline-flex h-6 w-6 flex-none items-center justify-center rounded-full bg-[#6F4918]/10 text-[0.75rem] font-semibold text-[#6F4918]">
                    1
                  </span>
                  Set pickup &amp; drop-off directly on the map.
                </li>
                <li className="flex gap-3">
                  <span className="mt-0.5 inline-flex h-6 w-6 flex-none items-center justify-center rounded-full bg-[#6F4918]/10 text-[0.75rem] font-semibold text-[#6F4918]">
                    2
                  </span>
                  Match with a nearby car or scooter courier.
                </li>
                <li className="flex gap-3">
                  <span className="mt-0.5 inline-flex h-6 w-6 flex-none items-center justify-center rounded-full bg-[#6F4918]/10 text-[0.75rem] font-semibold text-[#6F4918]">
                    3
                  </span>
                  Track every move in 3D until delivery is confirmed.
                </li>
              </ol>

              <div className="mt-6 rounded-2xl bg-gradient-to-r from-[#6F4918]/10 to-[#E2CF7D]/20 px-4 py-3 text-xs text-gray-800">
                <p className="font-semibold text-[#6F4918]">
                  Earn as you deliver
                </p>
                <p className="mt-1">
                  Couriers earn on every completed trip and collect loyalty
                  points that unlock extra credit based on their activity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slight fade into next section */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
};

export default DeliveryHero;
