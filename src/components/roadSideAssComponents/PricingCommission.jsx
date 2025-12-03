import React from "react";
import {
   FaPercentage,
   FaCreditCard,
   FaMoneyBillWave,
   FaShieldAlt,
   FaSyncAlt,
} from "react-icons/fa";

const PricingCommission = () => {
   const pricing = [
      {
         service: "Towing Service",
         basePrice: "Starting from 1500 DZD",
         commission: "5%",
         payment: "Cash or Card",
         color: "border-red-200 bg-red-50",
      },
      {
         service: "Mechanic On-site",
         basePrice: "Starting from 2000 DZD",
         commission: "5%",
         payment: "Cash or Card",
         color: "border-blue-200 bg-blue-50",
      },
      {
         service: "Battery Service",
         basePrice: "Starting from 1000 DZD",
         commission: "5%",
         payment: "Cash or Card",
         color: "border-yellow-200 bg-yellow-50",
      },
      {
         service: "Fuel Delivery",
         basePrice: "Fuel cost + 500 DZD",
         commission: "5%",
         payment: "Cash or Card",
         color: "border-green-200 bg-green-50",
      },
   ];

   const features = [
      {
         icon: <FaPercentage className="text-2xl" />,
         title: "Low 5% Commission",
         description: "Only 5% commission per service - lowest in market",
      },
      {
         icon: <FaCreditCard className="text-2xl" />,
         title: "Flexible Payments",
         description: "Pay with cash or card as per your convenience",
      },
      {
         icon: <FaMoneyBillWave className="text-2xl" />,
         title: "Transparent Pricing",
         description: "See exact costs before confirming service",
      },
      {
         icon: <FaShieldAlt className="text-2xl" />,
         title: "Secure Transactions",
         description: "All payments processed securely through app",
      },
      {
         icon: <FaSyncAlt className="text-2xl" />,
         title: "No Hidden Fees",
         description: "What you see is what you pay - no surprises",
      },
   ];

   return (
      <section
         className="py-16 bg-linear-to-br from-gray-900 to-gray-800"
         data-aos="fade-up"
      >
         <div className="container mx-auto px-4">
            <div className="text-center mb-12">
               <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Transparent{" "}
                  <span className="text-orange-400">Pricing & Commission</span>
               </h2>
               <p className="text-gray-300 max-w-2xl mx-auto text-lg">
                  Fair pricing with the lowest commission rates in the industry
               </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
               {/* Pricing Table */}
               <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                     <FaPercentage className="mr-3 text-orange-400" />
                     Service Pricing & ALLOGO Commission
                  </h3>

                  <div className="space-y-4">
                     {pricing.map((item, index) => (
                        <div
                           key={index}
                           className={`p-6 rounded-xl border ${item.color} backdrop-blur-sm`}
                           data-aos="fade-right"
                           data-aos-delay={index * 100}
                        >
                           <div className="flex justify-between items-center mb-2">
                              <h4 className="text-xl font-bold text-gray-800">
                                 {item.service}
                              </h4>
                              <span className="px-4 py-1 bg-orange-500 text-white rounded-full text-sm font-bold">
                                 {item.commission} Commission
                              </span>
                           </div>
                           <div className="grid grid-cols-2 gap-4">
                              <div>
                                 <p className="text-gray-600 text-sm">
                                    Base Price
                                 </p>
                                 <p className="text-lg font-bold text-gray-800">
                                    {item.basePrice}
                                 </p>
                              </div>
                              <div>
                                 <p className="text-gray-600 text-sm">
                                    Payment Method
                                 </p>
                                 <p className="text-lg font-semibold text-gray-800">
                                    {item.payment}
                                 </p>
                              </div>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>

               {/* Features */}
               <div className="space-y-6">
                  {features.map((feature, index) => (
                     <div
                        key={index}
                        className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-orange-500/50 transition-all duration-300"
                        data-aos="fade-left"
                        data-aos-delay={index * 100}
                     >
                        <div className="flex items-start">
                           <div className="shrink-0 w-12 h-12 rounded-full bg-linear-to-r from-orange-500 to-red-500 flex items-center justify-center mr-4">
                              <div className="text-white">{feature.icon}</div>
                           </div>
                           <div>
                              <h4 className="text-xl font-bold text-white mb-2">
                                 {feature.title}
                              </h4>
                              <p className="text-gray-300">
                                 {feature.description}
                              </p>
                           </div>
                        </div>
                     </div>
                  ))}

                  {/* Commission Comparison */}
                  <div
                     className="bg-linear-to-r from-orange-600 to-red-600 rounded-2xl p-6 text-white"
                     data-aos="zoom-in"
                  >
                     <h4 className="text-2xl font-bold mb-3">
                        Why 5% Commission?
                     </h4>
                     <ul className="space-y-2">
                        <li className="flex items-center">
                           <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                           Lower than competitors (typically 10-20%)
                        </li>
                        <li className="flex items-center">
                           <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                           More earnings for service providers
                        </li>
                        <li className="flex items-center">
                           <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                           Affordable service costs for customers
                        </li>
                        <li className="flex items-center">
                           <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                           Sustainable platform growth
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default PricingCommission;
