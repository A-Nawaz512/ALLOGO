import React from "react";
import {
   FaMapMarkerAlt,
   FaCar,
   FaTools,
   FaCreditCard,
   FaStar,
} from "react-icons/fa";
import { GiPathDistance } from "react-icons/gi";

const HowItWorks = () => {
   const steps = [
      {
         icon: <FaMapMarkerAlt className="text-3xl" />,
         title: "Set Location",
         description: "Pin your exact location on the map or use current GPS",
         color: "bg-blue-100 text-blue-600",
         number: "01",
      },
      {
         icon: <GiPathDistance className="text-3xl" />,
         title: "Choose Service",
         description:
            "Select from towing, mechanic, battery, fuel, or tire service",
         color: "bg-green-100 text-green-600",
         number: "02",
      },
      {
         icon: <FaCar className="text-3xl" />,
         title: "View Providers",
         description: "See available service providers with ratings and ETA",
         color: "bg-purple-100 text-purple-600",
         number: "03",
      },
      {
         icon: <FaTools className="text-3xl" />,
         title: "Get Help",
         description: "Provider arrives and performs the required service",
         color: "bg-orange-100 text-orange-600",
         number: "04",
      },
      {
         icon: <FaCreditCard className="text-3xl" />,
         title: "Secure Payment",
         description: "Pay cash or card directly in the app",
         color: "bg-teal-100 text-teal-600",
         number: "05",
      },
      {
         icon: <FaStar className="text-3xl" />,
         title: "Rate Service",
         description: "Rate your experience and help improve the community",
         color: "bg-yellow-100 text-yellow-600",
         number: "06",
      },
   ];

   return (
      <section
         className="py-16 relative overflow-hidden"
         style={{
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.95)), url('https://images.unsplash.com/photo-1519861531473-920034658307?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
         }}
         data-aos="fade-up"
      >
         <div className="container mx-auto px-4">
            <div className="text-center mb-12">
               <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                  How{" "}
                  <span className="text-orange-600">
                     ALLOGO Roadside Assistance
                  </span>{" "}
                  Works
               </h2>
               <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                  Get help in 6 simple steps - Fast, reliable, and transparent
               </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
               {steps.map((step, index) => (
                  <div
                     key={index}
                     className="relative"
                     data-aos="fade-up"
                     data-aos-delay={index * 100}
                  >
                     <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200 hover:shadow-xl transition-all duration-300">
                        <div className="flex items-start">
                           <div
                              className={`shrink-0 w-16 h-16 rounded-full ${step.color} flex items-center justify-center mr-4`}
                           >
                              {step.icon}
                           </div>
                           <div>
                              <div className="text-4xl font-bold text-gray-300 mb-2 absolute top-4 right-6">
                                 {step.number}
                              </div>
                              <h3 className="text-xl font-bold text-gray-800 mb-3">
                                 {step.title}
                              </h3>
                              <p className="text-gray-600">
                                 {step.description}
                              </p>
                           </div>
                        </div>

                        {index < steps.length - 1 && (
                           <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                              <div className="w-8 h-0.5 bg-linear-to-r from-orange-400 to-orange-300"></div>
                              <div className="w-0.5 h-8 bg-linear-to-b from-orange-400 to-orange-300 ml-3.5"></div>
                           </div>
                        )}
                     </div>
                  </div>
               ))}
            </div>

            <div className="mt-12 text-center">
               <div className="inline-flex items-center justify-center bg-linear-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg">
                  <FaTools className="mr-3" />
                  Average Response Time: 15-20 Minutes
               </div>
            </div>
         </div>
      </section>
   );
};

export default HowItWorks;
