import React, { useState } from "react";
import {
   FaGift,
   FaFire,
   FaCar,
   FaMotorcycle,
   FaShippingFast,
   FaTools,
   FaHome,
   FaKey,
   FaPlus,
   FaMinus,
} from "react-icons/fa";

const FreeServices = () => {
   const [progress, setProgress] = useState(7);

   const freeServices = [
      {
         icon: <FaCar className="text-2xl" />,
         title: "Car Rides",
         count: "3 free rides",
         description: "Get 3 free car rides when you start",
         value: 3,
      },
      {
         icon: <FaMotorcycle className="text-2xl" />,
         title: "Motorcycle Rides",
         count: "2 free rides",
         description: "2 free motorcycle rides included",
         value: 2,
      },
      {
         icon: <FaShippingFast className="text-2xl" />,
         title: "Deliveries",
         count: "3 free deliveries",
         description: "Free food, pharmacy, or package delivery",
         value: 3,
      },
      {
         icon: <FaTools className="text-2xl" />,
         title: "Roadside Assistance",
         count: "2 free services",
         description: "Free towing or mechanic service",
         value: 2,
      },
      {
         icon: <FaHome className="text-2xl" />,
         title: "Rental Services",
         count: "2 free rentals",
         description: "Free vehicle or apartment rental",
         value: 2,
      },
      {
         icon: <FaKey className="text-2xl" />,
         title: "Other Services",
         count: "3 free services",
         description: "Additional free services",
         value: 3,
      },
   ];

   const percentage = (progress / 15) * 100;

   const handleAddService = () => {
      if (progress < 15) {
         setProgress(progress + 1);
      }
   };

   const handleRemoveService = () => {
      if (progress > 0) {
         setProgress(progress - 1);
      }
   };

   const handleReset = () => {
      setProgress(0);
   };

   const handleUseAll = () => {
      setProgress(15);
   };

   return (
      <section
         className="py-16 relative overflow-hidden"
         style={{
            backgroundImage: `linear-linear(rgba(255, 247, 237, 0.95), rgba(255, 247, 237, 0.95)), url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
         }}
         data-aos="fade-up"
      >
         <div className="container mx-auto px-4">
            <div className="text-center mb-12">
               <div className="inline-flex items-center justify-center bg-linear-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-full mb-6">
                  <FaGift className="mr-2 text-xl" />
                  <span className="font-bold">New Provider Bonus</span>
               </div>
               <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                  <span className="text-orange-600">15 Free Services</span> for
                  New Providers
               </h2>
               <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                  Start your journey with ALLOGO and enjoy commission-free
                  services
               </p>
            </div>

            <div className="max-w-4xl mx-auto">
               {/* Progress Bar */}
               <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-orange-200">
                  <div className="flex justify-between items-center mb-4">
                     <div>
                        <h3 className="text-2xl font-bold text-gray-800">
                           Your Progress
                        </h3>
                        <p className="text-gray-600">
                           Free services used: {progress}/15
                        </p>
                     </div>
                     <div className="flex items-center bg-orange-100 text-orange-800 px-4 py-2 rounded-full">
                        <FaFire className="mr-2" />
                        <span className="font-bold">New Provider</span>
                     </div>
                  </div>

                  <div className="mb-4">
                     <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
                        <div
                           className="h-full bg-linear-to-r from-orange-500 to-red-500 rounded-full transition-all duration-1000"
                           style={{ width: `${percentage}%` }}
                        ></div>
                     </div>
                     <div className="flex justify-between text-sm text-gray-600 mt-2">
                        <span>0 services</span>
                        <span className="font-bold">
                           {15 - progress} free services remaining
                        </span>
                        <span>15 services</span>
                     </div>
                  </div>

                  {/* Progress Controls */}
                  <div className="flex flex-wrap gap-4 mb-6">
                     <button
                        onClick={handleAddService}
                        disabled={progress >= 15}
                        className="flex-1 min-w-[120px] bg-linear-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-3 px-4 rounded-lg transition duration-300 flex items-center justify-center"
                     >
                        <FaPlus className="mr-2" />
                        Add Service
                     </button>
                     <button
                        onClick={handleRemoveService}
                        disabled={progress <= 0}
                        className="flex-1 min-w-[120px] bg-linear-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-3 px-4 rounded-lg transition duration-300 flex items-center justify-center"
                     >
                        <FaMinus className="mr-2" />
                        Remove Service
                     </button>
                     <button
                        onClick={handleReset}
                        className="flex-1 min-w-[120px] bg-linear-to-r from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700 text-white font-semibold py-3 px-4 rounded-lg transition duration-300"
                     >
                        Reset
                     </button>
                     <button
                        onClick={handleUseAll}
                        className="flex-1 min-w-[120px] bg-linear-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-semibold py-3 px-4 rounded-lg transition duration-300"
                     >
                        Use All
                     </button>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                     <div className="bg-orange-50 p-4 rounded-xl border border-orange-200">
                        <div className="text-2xl font-bold text-orange-600">
                           {progress}
                        </div>
                        <div className="text-gray-700">Services Used</div>
                     </div>
                     <div className="bg-green-50 p-4 rounded-xl border border-green-200">
                        <div className="text-2xl font-bold text-green-600">
                           {15 - progress}
                        </div>
                        <div className="text-gray-700">Services Remaining</div>
                     </div>
                     <div className="bg-blue-50 p-4 rounded-xl border border-blue-200">
                        <div className="text-2xl font-bold text-blue-600">
                           {progress === 15 ? "5%" : "0%"}
                        </div>
                        <div className="text-gray-700">Commission Rate</div>
                     </div>
                  </div>
               </div>

               {/* Free Services Grid */}
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                  {freeServices.map((service, index) => (
                     <div
                        key={index}
                        className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                        data-aos="zoom-in"
                        data-aos-delay={index * 100}
                     >
                        <div className="flex items-center mb-4">
                           <div className="w-12 h-12 rounded-full bg-linear-to-r from-orange-100 to-red-100 flex items-center justify-center mr-4">
                              <div className="text-orange-600">
                                 {service.icon}
                              </div>
                           </div>
                           <div>
                              <h4 className="font-bold text-gray-800 text-lg">
                                 {service.title}
                              </h4>
                              <p className="text-orange-600 font-bold">
                                 {service.count}
                              </p>
                           </div>
                        </div>
                        <p className="text-gray-600 text-sm mb-4">
                           {service.description}
                        </p>
                        <div className="flex items-center text-sm text-gray-500">
                           <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                           Included in free package
                        </div>
                     </div>
                  ))}
               </div>

               {/* Benefits Section */}
               <div className="bg-linear-to-r from-orange-500 to-red-500 rounded-2xl p-8 text-white shadow-lg">
                  <h3 className="text-2xl font-bold mb-6">
                     After 15 Free Services:
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     <div className="bg-white/20 backdrop-blur-sm p-6 rounded-xl">
                        <h4 className="font-bold text-xl mb-3">
                           Normal Commission Applies
                        </h4>
                        <ul className="space-y-2">
                           <li className="flex items-center">
                              <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                              Roadside Assistance: 5% commission
                           </li>
                           <li className="flex items-center">
                              <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                              Rides/Drivers: 7% commission
                           </li>
                           <li className="flex items-center">
                              <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                              Deliveries: 5% commission
                           </li>
                        </ul>
                     </div>
                     <div className="bg-white/20 backdrop-blur-sm p-6 rounded-xl">
                        <h4 className="font-bold text-xl mb-3">
                           Continuous Benefits
                        </h4>
                        <ul className="space-y-2">
                           <li className="flex items-center">
                              <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                              Priority in customer searches
                           </li>
                           <li className="flex items-center">
                              <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                              Access to premium features
                           </li>
                           <li className="flex items-center">
                              <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                              Higher visibility on map
                           </li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default FreeServices;
