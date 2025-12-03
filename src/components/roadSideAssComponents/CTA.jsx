import React from "react";
import {
   FaDownload,
   FaUserPlus,
   FaQuestionCircle,
   FaHeadset,
   FaWhatsapp,
   FaPhoneAlt,
} from "react-icons/fa";

const CTA = () => {
   return (
      <section
         className="py-16 bg-linear-to-br from-gray-900 to-black"
         data-aos="fade-up"
      >
         <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
               {/* Main CTA */}
               <div className="bg-linear-to-r from-orange-600 to-red-600 rounded-3xl p-8 md:p-12 text-white shadow-2xl mb-12">
                  <div className="flex flex-col lg:flex-row items-center justify-between">
                     <div className="mb-8 lg:mb-0 lg:mr-8">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                           Ready to Join ALLOGO?
                        </h2>
                        <p className="text-xl opacity-90 mb-6">
                           Download the app now and experience seamless roadside
                           assistance
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                           <button className="bg-white text-orange-700 hover:bg-gray-100 font-bold py-4 px-8 rounded-full text-lg transition duration-300 transform hover:scale-105 flex items-center justify-center">
                              <FaDownload className="mr-3" />
                              Download App
                           </button>
                           <button className="bg-transparent border-2 border-white hover:bg-white/20 font-bold py-4 px-8 rounded-full text-lg transition duration-300 flex items-center justify-center">
                              <FaUserPlus className="mr-3" />
                              Become a Provider
                           </button>
                        </div>
                     </div>
                     <div className="text-center">
                        <div className="text-6xl font-bold mb-2">24/7</div>
                        <div className="text-xl opacity-90">
                           Emergency Support
                        </div>
                        <div className="flex items-center justify-center mt-4">
                           <FaPhoneAlt className="mr-2" />
                           <span className="text-2xl font-bold">
                              +213 XXX XXX XXX
                           </span>
                        </div>
                     </div>
                  </div>
               </div>

               {/* Support Section */}
               <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                  <div className="bg-gray-800 rounded-2xl p-6 text-center hover:bg-gray-700 transition duration-300">
                     <div className="w-16 h-16 rounded-full bg-linear-to-r from-blue-500 to-cyan-500 flex items-center justify-center mx-auto mb-4">
                        <FaQuestionCircle className="text-2xl text-white" />
                     </div>
                     <h3 className="text-xl font-bold text-white mb-3">
                        FAQ & Help Center
                     </h3>
                     <p className="text-gray-300 mb-4">
                        Find answers to common questions
                     </p>
                     <button className="text-blue-400 hover:text-blue-300 font-semibold">
                        Visit Help Center →
                     </button>
                  </div>

                  <div className="bg-gray-800 rounded-2xl p-6 text-center hover:bg-gray-700 transition duration-300">
                     <div className="w-16 h-16 rounded-full bg-linear-to-r from-green-500 to-emerald-500 flex items-center justify-center mx-auto mb-4">
                        <FaWhatsapp className="text-2xl text-white" />
                     </div>
                     <h3 className="text-xl font-bold text-white mb-3">
                        WhatsApp Support
                     </h3>
                     <p className="text-gray-300 mb-4">
                        24/7 customer support via WhatsApp
                     </p>
                     <button className="text-green-400 hover:text-green-300 font-semibold">
                        Chat Now →
                     </button>
                  </div>

                  <div className="bg-gray-800 rounded-2xl p-6 text-center hover:bg-gray-700 transition duration-300">
                     <div className="w-16 h-16 rounded-full bg-linear-to-r from-purple-500 to-pink-500 flex items-center justify-center mx-auto mb-4">
                        <FaHeadset className="text-2xl text-white" />
                     </div>
                     <h3 className="text-xl font-bold text-white mb-3">
                        Live Support
                     </h3>
                     <p className="text-gray-300 mb-4">
                        Call our support team anytime
                     </p>
                     <button className="text-purple-400 hover:text-purple-300 font-semibold">
                        Contact Support →
                     </button>
                  </div>
               </div>

               {/* Final Note */}
               <div className="text-center text-gray-400">
                  <p className="text-lg mb-4">
                     ALLOGO is a connecting platform only. We are not
                     responsible for incidents outside the app.
                  </p>
                  <div className="flex flex-wrap justify-center gap-6 text-sm">
                     <a href="#" className="hover:text-white transition">
                        Terms of Service
                     </a>
                     <a href="#" className="hover:text-white transition">
                        Privacy Policy
                     </a>
                     <a href="#" className="hover:text-white transition">
                        Safety Guidelines
                     </a>
                     <a href="#" className="hover:text-white transition">
                        Provider Agreement
                     </a>
                     <a href="#" className="hover:text-white transition">
                        Contact Us
                     </a>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default CTA;
