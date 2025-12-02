import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const DeliveryFeatures = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 60,
      easing: "ease-out-cubic",
    });
  }, []);

  const featureCardBase =
    "group relative overflow-hidden rounded-2xl border border-[#E2CF7D]/70 bg-gradient-to-br from-white via-[#FFF8E5] to-[#F5E4B880] p-5 shadow-[0_10px_30px_rgba(0,0,0,0.06)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_22px_45px_rgba(0,0,0,0.16)] hover:border-[#E2CF7D]";

  const iconWrapperBase =
    "mb-3 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[#6F4918] to-[#E2CF7D] text-xs font-semibold text-white shadow-[0_10px_25px_rgba(0,0,0,0.35)] ring-2 ring-white/40 ring-offset-2 ring-offset-[#FFF8E5]";

  return (
    <section className="relative w-full overflow-x-hidden bg-white py-16 sm:py-20 lg:py-12">
      {/* subtle background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_#E2CF7D26,_transparent_55%),linear-gradient(to_bottom,_#fff,_#fff)]" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div data-aos="fade-up" className="mx-auto max-w-3xl text-center">
          <p className="inline-flex items-center rounded-full bg-[#6F4918]/6 px-4 py-1 text-[1.5rem] font-semibold uppercase tracking-[0.24em] text-[#6F4918]">
            Features
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-snug text-[#1a1206] sm:text-4xl lg:text-[2.3rem]">
            Everything you need for smooth, trusted deliveries.
          </h2>

          <p className="mt-3 text-sm text-gray-600 sm:text-base">
            From live 3D tracking to photo confirmation, AILOGO keeps every
            delivery transparent for both senders and couriers.
          </p>
        </div>

        {/* MAIN LAYOUT */}
        <div className="mt-10 flex w-full flex-col items-center gap-10 lg:mt-12 lg:flex-row lg:items-center lg:justify-center lg:gap-14">
          {/* LEFT – FEATURE GRID */}
          <div data-aos="fade-right" className="w-full max-w-xl">
            <div className="grid gap-5 sm:grid-cols-2">
              {/* Feature 1 – 3D tracking */}
              <div className={featureCardBase}>
                {/* subtle top glow */}
                <div className="pointer-events-none absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-white/70 to-transparent" />

                <div className="flex items-start justify-between">
                  <span className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-[#b08a4a]">
                    01
                  </span>
                  <div className={iconWrapperBase}>
                    <div className="flex h-6 w-6 items-center justify-center rounded-md bg-black/10">
                      <span className="h-3.5 w-3.5 rounded-full border border-white/80" />
                    </div>
                  </div>
                </div>

                <h3 className="mt-1 text-sm font-semibold text-[#2b1a08] sm:text-base">
                  Real-time 3D tracking
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  Follow your courier in real time on a 3D map, from pickup to
                  drop-off — no guessing where your package is.
                </p>

                <div className="mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-[#6F4918] via-[#E2CF7D] to-transparent transition-all group-hover:w-20" />
              </div>

              {/* Feature 2 – Photo/signature */}
              <div className={featureCardBase}>
                <div className="pointer-events-none absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-white/70 to-transparent" />

                <div className="flex items-start justify-between">
                  <span className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-[#b08a4a]">
                    02
                  </span>
                  <div className={iconWrapperBase}>
                    <div className="h-5 w-6 rounded-sm border border-white/85">
                      <div className="mt-1 ml-1 h-1.5 w-1.5 rounded-full border border-white/80" />
                    </div>
                  </div>
                </div>

                <h3 className="mt-1 text-sm font-semibold text-[#2b1a08] sm:text-base">
                  Photo &amp; signature proof
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  Couriers capture a delivery photo and digital signature so
                  every completed drop-off is recorded and verifiable.
                </p>

                <div className="mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-[#6F4918] via-[#E2CF7D] to-transparent transition-all group-hover:w-20" />
              </div>

              {/* Feature 3 – Chat & calls */}
              <div className={featureCardBase}>
                <div className="pointer-events-none absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-white/70 to-transparent" />

                <div className="flex items-start justify-between">
                  <span className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-[#b08a4a]">
                    03
                  </span>
                  <div className={iconWrapperBase}>
                    <div className="flex h-4 w-6 items-center justify-center rounded-sm border border-white/85">
                      <span className="h-2 w-3 rounded-sm border border-white/80" />
                    </div>
                  </div>
                </div>

                <h3 className="mt-1 text-sm font-semibold text-[#2b1a08] sm:text-base">
                  In-app chat &amp; calls
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  Reach your courier instantly via in-app chat or call, without
                  exposing personal phone numbers.
                </p>

                <div className="mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-[#6F4918] via-[#E2CF7D] to-transparent transition-all group-hover:w-20" />
              </div>

              {/* Feature 4 – Multiple vehicles */}
              <div className={featureCardBase}>
                <div className="pointer-events-none absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-white/70 to-transparent" />

                <div className="flex items-start justify-between">
                  <span className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-[#b08a4a]">
                    04
                  </span>
                  <div className={iconWrapperBase}>
                    <div className="flex items-center gap-0.5">
                      <span className="h-2.5 w-3 rounded-sm border border-white/80" />
                      <span className="h-2.5 w-2 rounded-full border border-white/80" />
                    </div>
                  </div>
                </div>

                <h3 className="mt-1 text-sm font-semibold text-[#2b1a08] sm:text-base">
                  Moto &amp; car delivery options
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  Choose the vehicle that fits your package and timing — fast
                  motos for small parcels, cars for larger or fragile items.
                </p>

                <div className="mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-[#6F4918] via-[#E2CF7D] to-transparent transition-all group-hover:w-20" />
              </div>
            </div>
          </div>

          {/* RIGHT – VISUAL CARD / 3D tracking mock */}
          <div
            data-aos="fade-left"
            className="flex w-full max-w-lg items-center justify-center"
          >
            <div className="w-full rounded-3xl border border-[#E2CF7D]/70 bg-gradient-to-br from-[#FFF7DA] via-white to-[#E2CF7D]/45 p-5 shadow-[0_18px_55px_rgba(0,0,0,0.16)]">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6F4918]">
                    Live Delivery View
                  </p>
                  <h3 className="mt-1 text-lg font-semibold text-[#2b1a08]">
                    Real-time 3D courier route
                  </h3>
                </div>
                <span className="rounded-full bg-[#6F4918] px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-wide text-[#FDF6E7] shadow-md">
                  Real-time
                </span>
              </div>

              {/* fake map */}
              <div className="mt-4 h-48 rounded-2xl bg-gradient-to-br from-[#1b1307] via-[#4b3416] to-[#E2CF7D]/40 p-3 text-xs text-white/80">
                <div className="flex items-center justify-between text-[0.7rem]">
                  <span>Package #A-204</span>
                  <span className="rounded-full bg-black/40 px-2 py-0.5">
                    ETA 08 min
                  </span>
                </div>

                <div className="relative mt-3 h-[70%] overflow-hidden rounded-2xl bg-black/45">
                  {/* path line */}
                  <div className="absolute left-6 top-4 h-28 w-[2px] bg-gradient-to-b from-[#E2CF7D] to-transparent" />
                  <div className="absolute left-6 top-4 h-3 w-3 rounded-full border border-[#E2CF7D] bg-black/60" />
                  <div className="absolute left-5 bottom-6 flex items-center gap-1">
                    <span className="h-3 w-3 rounded-full bg-[#E2CF7D]" />
                    <span className="text-[0.7rem] text-[#FDF6E7]">
                      Courier
                    </span>
                  </div>

                  {/* destination pin */}
                  <div className="absolute right-6 bottom-5 flex flex-col items-center gap-1">
                    <span className="h-4 w-4 rounded-full border border-[#E2CF7D] bg-black/40" />
                    <span className="text-[0.7rem] text-[#FDF6E7]">
                      Drop-off
                    </span>
                  </div>
                </div>

                <div className="mt-3 flex items-center justify-between text-[0.7rem] text-[#FDF6E7]">
                  <span>3D map view powered by MapLibre</span>
                  <span className="rounded-full bg-white/10 px-2 py-0.5">
                    Zoom · Rotate · Follow
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeliveryFeatures;
