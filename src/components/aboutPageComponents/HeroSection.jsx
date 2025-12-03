// src/components/about/HeroSection.jsx
import React, { useEffect } from "react";
import { FaMapMarkedAlt, FaCar, FaShieldAlt } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const HeroSection = () => {
   useEffect(() => {
      // Initialize AOS with custom settings
      AOS.init({
         duration: 800,
         once: true,
         disable: window.innerWidth < 768, // Disable on mobile devices
         startEvent: "DOMContentLoaded",
         offset: 100,
      });

      // Re-initialize on resize to handle responsive behavior
      const handleResize = () => {
         if (window.innerWidth >= 768) {
            AOS.init({
               duration: 800,
               once: true,
               disable: false,
               startEvent: "DOMContentLoaded",
               offset: 100,
            });
         } else {
            AOS.refreshHard(); // Disable AOS on mobile
         }
      };

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
   }, []);

   return (
      <section className="relative py-20 px-6 lg:px-8 overflow-hidden min-h-screen">
         {/* Background image */}
         <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/company.jpg')" }}
         >
            {/* Overlay to ensure text readability */}
            <div className="absolute inset-0 bg-black/40"></div>
         </div>

         <div className="max-w-6xl mx-auto relative z-10">
            <div className="max-w-6xl">
               <div className="animate-fadeIn w-[60%] mx-auto flex flex-col items-center gap-4">
                  <h1
                     className="text-5xl text-center md:text-6xl font-bold mb-6"
                     data-aos="fade-right"
                     data-aos-delay="100"
                  >
                     <span className="text-white">Revolutionizing</span>{" "}
                     <span className="bg-linear-to-r from-[#6F4918] via-[#6F4918] to-[#E2CF7D] bg-clip-text text-transparent">
                        Mobility & Services
                     </span>
                  </h1>
                  <p
                     className="text-white text-center text-lg mb-8 leading-relaxed"
                     data-aos="fade-right"
                     data-aos-delay="200"
                  >
                     ALLOGO is Algeria's premier multi-service platform
                     integrating transportation, rentals, delivery, and
                     assistance services into one seamless 3D-powered ecosystem.
                  </p>

                  <div
                     className="grid md:grid-cols-3 gap-4 mb-8"
                     data-aos="fade-up"
                     data-aos-delay="300"
                  >
                     <div className=" p-4 rounded-lg border border-white transform transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#E2CF7D]/30">
                        <FaCar className="text-[#E2CF7D] text-2xl mb-2" />
                        <p className="text-gray-200 font-semibold">
                           6 Services
                        </p>
                        <p className="text-gray-400 text-sm">
                           Integrated Platform
                        </p>
                     </div>
                     <div className=" p-4 rounded-lg border border-white transform transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#E2CF7D]/30">
                        <FaMapMarkedAlt className="text-[#E2CF7D] text-2xl mb-2" />
                        <p className="text-gray-200 font-semibold">
                           3D Live Map
                        </p>
                        <p className="text-gray-400 text-sm">
                           Real-time Tracking
                        </p>
                     </div>
                     <div className=" p-4 rounded-lg border border-white transform transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#E2CF7D]/30">
                        <FaShieldAlt className="text-[#E2CF7D] text-2xl mb-2" />
                        <p className="text-gray-200 font-semibold">Secure</p>
                        <p className="text-gray-400 text-sm">
                           Trusted Platform
                        </p>
                     </div>
                  </div>
               </div>

               
            </div>
         </div>
      </section>
   );
};

export default HeroSection;
