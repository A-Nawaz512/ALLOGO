// RentalsHero.jsx
import React, { useState, useEffect } from "react";

const RentalsHero = () => {
   const images = ["/rides.jpg", "/scooter.jpg", "/vehical-rental.webp"];

   const [currentImageIndex, setCurrentImageIndex] = useState(0);

   useEffect(() => {
      const interval = setInterval(() => {
         setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 5000); // 5 seconds

      return () => clearInterval(interval);
   }, [images.length]);

   return (
      <section className="relative overflow-hidden text-white min-h-[500px] lg:min-h-[90vh]">
         {/* Background Images with fade transition */}
         <div className="absolute inset-0 z-0">
            {images.map((image, index) => (
               <div
                  key={image}
                  className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
                     index === currentImageIndex ? "opacity-100" : "opacity-0"
                  }`}
                  style={{
                     backgroundImage: `url('${image}')`,
                     zIndex: images.length - index,
                  }}
               >
                  {/* Dark overlay for better text readability */}
                  <div className="absolute inset-0 bg-black/60"></div>
                  {/* Gradient overlay */}
               </div>
            ))}
         </div>

         {/* Image indicator dots */}
         <div className="absolute bottom-6 left-1/2 z-30 flex -translate-x-1/2 gap-2">
            {images.map((_, index) => (
               <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`h-2 w-2 rounded-full transition-all duration-300 ${
                     index === currentImageIndex
                        ? "w-8 bg-[#f5c451]"
                        : "bg-white/50 hover:bg-white/80"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
               />
            ))}
         </div>

        
         <div className="relative z-20 mx-auto flex items-center justify-center max-w-6xl flex-col gap-12 px-6 py-16 lg:flex-row lg:items-center lg:py-20 xl:px-0">
            <div className="flex flex-col items-center text-center space-y-8">
               <h1 className="text-4xl font-semibold leading-tight text-[#B78E3B] sm:text-5xl lg:text-6xl">
                  Rent a car or scooter
                 <br />
                     right from the 3D map.
          
               </h1>
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

// Import your local images
import img1 from "../../assets/rentall1.jpg";
import img2 from "../../assets/rentall2.jpg";
import img3 from "../../assets/rentall3.jpg";
import img4 from "../../assets/rentall4.jpg";
import img5 from "../../assets/rentall5.jpg";
import img6 from "../../assets/rentall6.jpg";

const  RentalsHero = () => {
  const slides = [
    {
      title: "Rentals  Cars & Scooters",
      subText:
        "Find vehicles nearby, book for hours or days, and hit the road. Owners and rental agencies can list their fleet, set availability, and manage bookings — all in one place.",
      image: img1,
      cta1: { text: "Rent a vehicle", link: "/rent" },
      cta2: { text: "List your vehicle", link: "/list" },
    },
    {
      title: "For Clients Short-term  Hours / Days",
      subText:
        "Rent a car or scooter in a few taps: open the map, choose your vehicle, review price & conditions, and start your trip.",
      image: img2,
      cta1: { text: "View Map", link: "/map" },
      cta2: { text: "Learn More", link: "/clients" },
    },
    {
      title: "For Owners & Rental Agencies",
      subText:
        "List vehicles, set prices, and manage bookings from a unified dashboard. Vehicles automatically appear on the 3D map whenever they are available.",
      image: img3,
      cta1: { text: "List Vehicle", link: "/list" },
      cta2: { text: "Dashboard", link: "/dashboard" },
    },
    {
      title: "Luxury Rentals  Cars & Scooters",
      subText:
        "Premium vehicles for rent, fully verified, and ready to hit the road.",
      image: img4,
      cta1: { text: "Rent Luxury", link: "/rent/luxury" },
      cta2: { text: "List Premium", link: "/list" },
    },
    {
      title: "Affordable Rentals Nearby",
      subText:
        "Find the best deals on cars and scooters near your location.",
      image: img5,
      cta1: { text: "Find Deals", link: "/rent/deals" },
      cta2: { text: "List Yours", link: "/list" },
    },
    {
      title: "Quick Rentals  On the Go",
      subText:
        "Instant booking for vehicles ready when you need them.",
      image: img6,
      cta1: { text: "Book Now", link: "/rent/quick" },
      cta2: { text: "List Vehicle", link: "/list" },
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const slide = slides[currentIndex];

  return (
    <div className="relative min-h-screen text-white overflow-hidden">
      <section className="relative h-[90vh] flex items-center justify-center">
        {/* Background Images */}
        {slides.map((s, i) => (
          <div
            key={i}
            className={`absolute inset-0 bg-cover bg-center transition-all duration-[2000ms] ${
              i === currentIndex ? "opacity-100 scale-100" : "opacity-0 scale-105"
            }`}
            style={{ backgroundImage: `url(${s.image})` }}
          ></div>
        ))}

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/30"></div>

        {/* Content */}
        <div className="relative z-20 text-center px-5 max-w-3xl mx-auto" data-aos="fade-up">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.8 }}
            >
              {/* Main Title */}
              <h1 className="text-3xl md:text-4xl font-extrabold leading-tight mb-6">
                {slide.title}
              </h1>

               <p className="max-w-xl text-sm text-gray-300 sm:text-base">
                  Find vehicles nearby, book for hours or days, and hit the
                  road. Owners and rental agencies can list their fleet, set
                  availability, and manage bookings — all in one place.
               </p>

               {/* CTA buttons */}
               <div className="flex flex-wrap gap-4 pt-2">
                  <button className="rounded-full bg-[#B78E3B] px-6 py-3 text-medium font-semibold text-black shadow-lg shadow-[#f5c451]/40 transition-all duration-300 hover:translate-y-0.5 hover:bg-[#a18842] hover:shadow-xl hover:shadow-[#f5c451]/60">
                     Rent a vehicle
                  </button>
                  <button className="rounded-full border-2 border-[#B78E3B]/60 bg-transparent px-6 py-3 text-medium font-semibold text-[#B78E3B] transition-all duration-300 hover:border-[#f5c451] hover:translate-y-0.5 hover:bg-[#B78E3B] hover:text-white hover:shadow-lg hover:shadow-[#f5c451]/20">
                     List your vehicle
                  </button>
               </div>
            </div>
         </div>
      </section>
   );
              {/* Subtext */}
              <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-8">
                {slide.subText}
              </p>

              {/* CTA Buttons */}
              <div className="flex justify-center gap-4 mt-6">
                <a
                  href={slide.cta1.link}
                  className="bg-[#B78E3B] text-white font-semibold px-5 py-2 rounded-xl hover:bg-[#B78E3B] transition transform hover:scale-105 shadow-lg"
                >
                  {slide.cta1.text}
                </a>
                <a
                  href={slide.cta2.link}
                  className="border-2 border-[#B78E3B] text-[#B78E3B] font-semibold px-5 py-2 rounded-xl hover:bg-[#B78E3B] hover:text-white transition transform hover:scale-105 shadow-lg"
                >
                  {slide.cta2.text}
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom Fade */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0D0D0D] to-transparent"></div>
      </section>
    </div>
  );
};

export default RentalsHero;
