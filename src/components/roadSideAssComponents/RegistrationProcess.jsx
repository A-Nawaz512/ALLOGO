import React from "react";
import {
   FaUser,
   FaWhatsapp,
   FaIdCard,
   FaCar,
   FaHome,
   FaCheckCircle,
   FaClock,
   FaFileAlt,
} from "react-icons/fa";
import { GiCheckMark } from "react-icons/gi";

const RegistrationProcess = () => {
   const userSteps = [
      {
         icon: <FaUser className="text-2xl" />,
         title: "Basic Info",
         description: "Name, surname, photo, and user type",
         duration: "2 minutes",
      },
      {
         icon: <FaWhatsapp className="text-2xl" />,
         title: "WhatsApp Verification",
         description: "Receive and enter confirmation code",
         duration: "1 minute",
      },
      {
         icon: <GiCheckMark className="text-2xl" />,
         title: "Immediate Access",
         description: "Start using services right away",
         duration: "Instant",
      },
   ];

   const providerSteps = [
      {
         icon: <FaFileAlt className="text-2xl" />,
         title: "Document Upload",
         description: "License, registration, vehicle/apartment photos",
         duration: "5 minutes",
      },
      {
         icon: <FaClock className="text-2xl" />,
         title: "Controller Review",
         description: "Manual verification by ALLOGO team",
         duration: "24-48 hours",
      },
      {
         icon: <FaCheckCircle className="text-2xl" />,
         title: "Approval & Activation",
         description: "Receive notification and start working",
         duration: "Instant after approval",
      },
   ];

   const providerTypes = [
      {
         icon: <FaCar className="text-2xl" />,
         title: "Roadside Assistance",
         docs: ["Mechanic License", "Vehicle Registration", "Insurance"],
      },
      {
         icon: <FaIdCard className="text-2xl" />,
         title: "Towing Service",
         docs: ["Towing License", "Vehicle Documents", "Operator License"],
      },
      {
         icon: <FaHome className="text-2xl" />,
         title: "Other Providers",
         docs: [
            "Professional License",
            "ID Verification",
            "Service Certificates",
         ],
      },
   ];

   return (
      <section
         className="py-16 bg-linear-to-b from-white to-gray-50"
         data-aos="fade-up"
      >
         <div className="container mx-auto px-4">
            <div className="text-center mb-12">
               <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                  Simple{" "}
                  <span className="text-orange-600">Registration Process</span>
               </h2>
               <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                  Easy onboarding for both users and service providers
               </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
               {/* User Registration */}
               <div
                  className="bg-white rounded-2xl shadow-lg p-8 border border-blue-200"
                  data-aos="fade-right"
               >
                  <div className="flex items-center mb-8">
                     <div className="w-14 h-14 rounded-full bg-linear-to-r from-blue-500 to-cyan-500 flex items-center justify-center mr-4">
                        <FaUser className="text-2xl text-white" />
                     </div>
                     <div>
                        <h3 className="text-2xl font-bold text-gray-800">
                           For Users (Clients)
                        </h3>
                        <p className="text-gray-600">
                           Quick WhatsApp verification
                        </p>
                     </div>
                  </div>

                  <div className="space-y-6">
                     {userSteps.map((step, index) => (
                        <div
                           key={index}
                           className="flex items-center p-4 bg-blue-50 rounded-xl border border-blue-100"
                           data-aos="fade-up"
                           data-aos-delay={index * 100}
                        >
                           <div className=" shrink-0 w-12 h-12 rounded-full bg-white border-2 border-blue-200 flex items-center justify-center mr-4">
                              <div className="text-blue-600">{step.icon}</div>
                           </div>
                           <div className="flex grow">
                              <h4 className="font-bold text-gray-800">
                                 {step.title}
                              </h4>
                              <p className="text-gray-600 text-sm">
                                 {step.description}
                              </p>
                           </div>
                           <div className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-semibold">
                              {step.duration}
                           </div>
                        </div>
                     ))}
                  </div>

                  <div className="mt-8 p-4 bg-linear-to-r from-blue-50 to-cyan-50 rounded-xl border border-blue-200">
                     <p className="text-blue-800 font-semibold">
                        ✅ Immediate access to all services after WhatsApp
                        verification
                     </p>
                  </div>
               </div>

               {/* Provider Registration */}
               <div
                  className="bg-white rounded-2xl shadow-lg p-8 border border-orange-200"
                  data-aos="fade-left"
               >
                  <div className="flex items-center mb-8">
                     <div className="w-14 h-14 rounded-full bg-linear-to-r from-orange-500 to-red-500 flex items-center justify-center mr-4">
                        <FaCar className="text-2xl text-white" />
                     </div>
                     <div>
                        <h3 className="text-2xl font-bold text-gray-800">
                           For Providers
                        </h3>
                        <p className="text-gray-600">
                           Document verification required
                        </p>
                     </div>
                  </div>

                  <div className="space-y-6">
                     {providerSteps.map((step, index) => (
                        <div
                           key={index}
                           className="flex items-center p-4 bg-orange-50 rounded-xl border border-orange-100"
                           data-aos="fade-up"
                           data-aos-delay={index * 100}
                        >
                           <div className=" shrink-0 w-12 h-12 rounded-full bg-white border-2 border-orange-200 flex items-center justify-center mr-4">
                              <div className="text-orange-600">{step.icon}</div>
                           </div>
                           <div className="flex grow">
                              <h4 className="font-bold text-gray-800">
                                 {step.title}
                              </h4>
                              <p className="text-gray-600 text-sm">
                                 {step.description}
                              </p>
                           </div>
                           <div className="text-sm bg-orange-100 text-orange-700 px-3 py-1 rounded-full font-semibold">
                              {step.duration}
                           </div>
                        </div>
                     ))}
                  </div>

                  <div className="mt-8 p-4 bg-linear-to-r from-orange-50 to-red-50 rounded-xl border border-orange-200">
                     <p className="text-orange-800 font-semibold">
                        ⚠️ Manual validation by ALLOGO controller before
                        activation
                     </p>
                  </div>
               </div>
            </div>

            {/* Provider Types */}
            <div className="max-w-4xl mx-auto" data-aos="fade-up">
               <h3 className="text-2xl font-bold text-gray-800 text-center mb-8">
                  Required Documents by Provider Type
               </h3>

               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {providerTypes.map((type, index) => (
                     <div
                        key={index}
                        className="bg-white rounded-xl shadow-md p-6 border border-gray-200 hover:shadow-lg transition-all duration-300"
                        data-aos="zoom-in"
                        data-aos-delay={index * 100}
                     >
                        <div className="flex items-center mb-4">
                           <div className="w-12 h-12 rounded-full bg-linear-to-r from-gray-100 to-gray-200 flex items-center justify-center mr-4">
                              <div className="text-gray-700">{type.icon}</div>
                           </div>
                           <h4 className="text-xl font-bold text-gray-800">
                              {type.title}
                           </h4>
                        </div>

                        <ul className="space-y-3">
                           {type.docs.map((doc, idx) => (
                              <li key={idx} className="flex items-center">
                                 <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                                 <span className="text-gray-700">{doc}</span>
                              </li>
                           ))}
                        </ul>

                        <div className="mt-6 pt-4 border-t border-gray-200">
                           <p className="text-sm text-gray-500">
                              Plus: Recent photos, ID verification, and contact
                              information
                           </p>
                        </div>
                     </div>
                  ))}
               </div>
            </div>

            {/* Legal Notice */}
            <div
               className="mt-12 max-w-3xl mx-auto p-6 bg-linear-to-r from-red-50 to-orange-50 rounded-2xl border border-red-200"
               data-aos="fade-up"
            >
               <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                  <FaFileAlt className="mr-3 text-red-500" />
                  Legal & Security Notice
               </h4>
               <div className="bg-white p-4 rounded-lg border border-gray-300">
                  <p className="text-gray-700 italic">
                     "I confirm I have read and accepted the ALLOGO terms. I
                     understand ALLOGO is only a connecting platform and that
                     any incident or payment outside the app is my
                     responsibility."
                  </p>
                  <div className="flex items-center mt-4">
                     <input
                        type="checkbox"
                        id="terms"
                        className="mr-3 w-5 h-5"
                     />
                     <label
                        htmlFor="terms"
                        className="text-gray-700 font-semibold"
                     >
                        Required checkbox during registration
                     </label>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default RegistrationProcess;
