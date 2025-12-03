import React from "react";
import {
   FaCarCrash,
   FaPhoneAlt,
   FaMapMarkerAlt,
   FaTools,
} from "react-icons/fa";
import { GiTowTruck } from "react-icons/gi";

const HeroSection = () => {
   return (
      <section
         className="relative min-h-[90vh] flex items-center justify-center bg-linear-to-r from-orange-900 to-orange-700"
         style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
         }}
         data-aos="fade-in"
      >
         <div className="container mx-auto px-4 py-16 text-center text-white">
            <div className="max-w-4xl mx-auto">
               <div className="inline-flex items-center justify-center bg-orange-600 text-white px-6 py-3 rounded-full mb-6">
                  <FaTools className="mr-2 text-xl" />
                  <span className="font-semibold">
                     Roadside Assistance & Towing
                  </span>
               </div>

               <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  Emergency Help{" "}
                  <span className="text-orange-400">On The Road</span>
               </h1>

               <p className="text-xl md:text-2xl mb-8 text-gray-200">
                  24/7 Roadside Assistance, Mechanics, Towing & More
               </p>

               <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-orange-400/30">
                     <GiTowTruck className="text-4xl mx-auto mb-4 text-orange-300" />
                     <h3 className="text-xl font-bold mb-2">Fast Towing</h3>
                     <p className="text-gray-300">
                        Quick response within minutes
                     </p>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-orange-400/30">
                     <FaTools className="text-4xl mx-auto mb-4 text-orange-300" />
                     <h3 className="text-xl font-bold mb-2">On-site Repairs</h3>
                     <p className="text-gray-300">
                        Skilled mechanics at your location
                     </p>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-orange-400/30">
                     <FaCarCrash className="text-4xl mx-auto mb-4 text-orange-300" />
                     <h3 className="text-xl font-bold mb-2">Emergency Help</h3>
                     <p className="text-gray-300">
                        24/7 available for emergencies
                     </p>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-orange-400/30">
                     <FaMapMarkerAlt className="text-4xl mx-auto mb-4 text-orange-300" />
                     <h3 className="text-xl font-bold mb-2">Live Tracking</h3>
                     <p className="text-gray-300">
                        Real-time service provider tracking
                     </p>
                  </div>
               </div>

               <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-full text-lg transition duration-300 transform hover:scale-105 shadow-lg">
                     <FaPhoneAlt className="inline mr-2" />
                     Request Help Now
                  </button>
                  <button className="bg-transparent hover:bg-white/20 text-white font-bold py-4 px-8 rounded-full text-lg border-2 border-white transition duration-300">
                     Become a Provider
                  </button>
               </div>
            </div>
         </div>
      </section>
   );
};

export default HeroSection;
