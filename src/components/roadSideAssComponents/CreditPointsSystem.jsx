import React from "react";
import {
   FaCoins,
   FaExchangeAlt,
   FaGift,
   FaLock,
   FaUnlock,
   FaTrophy,
} from "react-icons/fa";

const CreditPointsSystem = () => {
   return (
      <section
         className="py-16 bg-linear-to-b from-white to-gray-100"
         data-aos="fade-up"
      >
         <div className="container mx-auto px-4">
            <div className="text-center mb-12">
               <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                  <span className="text-orange-600">Credit & Points</span>{" "}
                  System
               </h2>
               <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                  Smart systems to ensure quality service and user engagement
               </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
               {/* Provider Credit System */}
               <div
                  className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200"
                  data-aos="fade-right"
               >
                  <div className="flex items-center mb-6">
                     <div className="w-12 h-12 rounded-full bg-linear-to-r from-blue-500 to-cyan-500 flex items-center justify-center mr-4">
                        <FaCoins className="text-2xl text-white" />
                     </div>
                     <div>
                        <h3 className="text-2xl font-bold text-gray-800">
                           Provider Credit System
                        </h3>
                        <p className="text-gray-600">
                           Required credit to unlock new missions
                        </p>
                     </div>
                  </div>

                  <div className="space-y-6">
                     <div className="bg-linear-to-r from-blue-50 to-cyan-50 p-6 rounded-xl border border-blue-200">
                        <div className="flex justify-between items-center mb-4">
                           <h4 className="text-lg font-bold text-gray-800">
                              Roadside Assistance
                           </h4>
                           <span className="px-4 py-2 bg-blue-500 text-white rounded-full font-bold">
                              500 DZD
                           </span>
                        </div>
                        <p className="text-gray-600 mb-4">
                           Initial credit required to start accepting roadside
                           assistance missions
                        </p>
                        <div className="flex items-center text-sm text-gray-500">
                           <FaLock className="mr-2 text-red-500" />
                           <span className="mr-4">Locked without credit</span>
                           <FaUnlock className="mr-2 text-green-500" />
                           <span>Unlocks with 500 DZD credit</span>
                        </div>
                     </div>

                     <div className="grid grid-cols-2 gap-4">
                        <div className="bg-gray-50 p-4 rounded-xl border border-gray-300">
                           <h5 className="font-bold text-gray-800 mb-2">
                              Drivers
                           </h5>
                           <p className="text-2xl font-bold text-blue-600">
                              1,000 DZD
                           </p>
                           <p className="text-sm text-gray-500">
                              Required credit
                           </p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-xl border border-gray-300">
                           <h5 className="font-bold text-gray-800 mb-2">
                              Delivery
                           </h5>
                           <p className="text-2xl font-bold text-green-600">
                              2,000 DZD
                           </p>
                           <p className="text-sm text-gray-500">
                              Required credit
                           </p>
                        </div>
                     </div>

                     <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-200">
                        <div className="flex items-center">
                           <FaGift className="text-2xl text-yellow-600 mr-3" />
                           <div>
                              <h4 className="font-bold text-gray-800">
                                 Credit Usage
                              </h4>
                              <p className="text-gray-600 text-sm">
                                 Credit is deducted only when you accept a
                                 mission. Refill anytime!
                              </p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>

               {/* User Points System */}
               <div
                  className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200"
                  data-aos="fade-left"
               >
                  <div className="flex items-center mb-6">
                     <div className="w-12 h-12 rounded-full bg-linear-to-r from-orange-500 to-red-500 flex items-center justify-center mr-4">
                        <FaTrophy className="text-2xl text-white" />
                     </div>
                     <div>
                        <h3 className="text-2xl font-bold text-gray-800">
                           User Points System
                        </h3>
                        <p className="text-gray-600">1 Point = 1 DZD value</p>
                     </div>
                  </div>

                  <div className="space-y-6">
                     <div className="bg-linear-to-r from-orange-50 to-red-50 p-6 rounded-xl border border-orange-200">
                        <div className="text-center mb-6">
                           <div className="inline-flex items-center justify-center bg-linear-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-full mb-4">
                              <FaExchangeAlt className="mr-2" />
                              Point Transfer Feature
                           </div>
                           <h4 className="text-xl font-bold text-gray-800 mb-2">
                              Motivate Providers with Points
                           </h4>
                           <p className="text-gray-600">
                              Transfer your points to service providers as
                              appreciation
                           </p>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                           <div className="bg-white p-4 rounded-xl border border-orange-200 text-center">
                              <div className="text-2xl font-bold text-orange-600 mb-1">
                                 Users
                              </div>
                              <p className="text-sm text-gray-600">
                                 Give points to providers
                              </p>
                              <div className="mt-2 text-xs text-gray-500">
                                 Points earned from services
                              </div>
                           </div>
                           <div className="bg-white p-4 rounded-xl border border-orange-200 text-center">
                              <div className="text-2xl font-bold text-orange-600 mb-1">
                                 Providers
                              </div>
                              <p className="text-sm text-gray-600">
                                 Receive points from users
                              </p>
                              <div className="mt-2 text-xs text-gray-500">
                                 Use points for services
                              </div>
                           </div>
                        </div>
                     </div>

                     <div className="space-y-4">
                        <h4 className="font-bold text-gray-800 text-lg">
                           Points Can Be Used For:
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                           <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                                 <span className="text-blue-600 font-bold">
                                    ✓
                                 </span>
                              </div>
                              <span className="text-gray-700">
                                 Unlock new missions
                              </span>
                           </div>
                           <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                              <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mr-3">
                                 <span className="text-green-600 font-bold">
                                    ✓
                                 </span>
                              </div>
                              <span className="text-gray-700">
                                 Purchase credit
                              </span>
                           </div>
                           <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                              <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center mr-3">
                                 <span className="text-purple-600 font-bold">
                                    ✓
                                 </span>
                              </div>
                              <span className="text-gray-700">
                                 Pay for services
                              </span>
                           </div>
                           <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                              <div className="w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center mr-3">
                                 <span className="text-yellow-600 font-bold">
                                    ✓
                                 </span>
                              </div>
                              <span className="text-gray-700">
                                 Get discounts
                              </span>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default CreditPointsSystem;
