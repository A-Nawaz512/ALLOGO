import React from "react";
import {
   GiTowTruck,
   GiCarBattery,
   GiGasPump,
   GiCarWheel,
} from "react-icons/gi";
import { FaTools, FaTruckLoading, FaKey, FaBolt } from "react-icons/fa";
import { MdOutlineMiscellaneousServices } from "react-icons/md";

const ServicesGrid = () => {
   const services = [
      {
         icon: <GiTowTruck className="text-4xl" />,
         title: "Towing Service",
         description:
            "Vehicle towing to nearest garage or your preferred location",
         color: "from-red-500 to-orange-500",
         features: ["24/7 Available", "All vehicle types", "GPS tracked"],
      },
      {
         icon: <FaTools className="text-4xl" />,
         title: "Mechanic On-site",
         description: "Certified mechanics come to your location for repairs",
         color: "from-blue-500 to-cyan-500",
         features: ["Minor repairs", "Diagnostics", "Spare parts available"],
      },
      {
         icon: <GiCarBattery className="text-4xl" />,
         title: "Battery Service",
         description: "Jump-start or battery replacement service",
         color: "from-yellow-500 to-amber-500",
         features: ["Jump-start", "Battery test", "Replacement"],
      },
      {
         icon: <GiGasPump className="text-4xl" />,
         title: "Fuel Delivery",
         description: "Emergency fuel delivery when you run out",
         color: "from-green-500 to-emerald-500",
         features: ["Petrol/Diesel", "Quick delivery", "Safety measures"],
      },
      {
         icon: <GiCarWheel className="text-4xl" />,
         title: "Tire Service",
         description: "Flat tire repair or replacement on the spot",
         color: "from-gray-600 to-gray-800",
         features: ["Tire change", "Puncture repair", "New tires available"],
      },
      {
         icon: <FaKey className="text-4xl" />,
         title: "Lockout Service",
         description: "Locked out of your car? We can help!",
         color: "from-purple-500 to-pink-500",
         features: ["Key retrieval", "Lock opening", "No damage guarantee"],
      },
      {
         icon: <FaTruckLoading className="text-4xl" />,
         title: "Heavy Duty",
         description: "Towing and assistance for trucks & heavy vehicles",
         color: "from-indigo-500 to-blue-500",
         features: ["Heavy trucks", "Equipment transport", "Special handling"],
      },
      {
         icon: <MdOutlineMiscellaneousServices className="text-4xl" />,
         title: "Other Services",
         description: "Various emergency roadside services",
         color: "from-teal-500 to-green-500",
         features: [
            "Overheating help",
            "Electrical issues",
            "General assistance",
         ],
      },
   ];

   return (
      <section
         className="py-16 bg-linear-to-b from-gray-50 to-white"
         data-aos="fade-up"
      >
         <div className="container mx-auto px-4">
            <div className="text-center mb-12">
               <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                  Comprehensive{" "}
                  <span className="text-orange-600">Roadside Services</span>
               </h2>
               <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                  Get help for any roadside emergency with our network of
                  certified providers
               </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
               {services.map((service, index) => (
                  <div
                     key={index}
                     className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                     data-aos="zoom-in"
                     data-aos-delay={index * 100}
                  >
                     <div
                        className={`h-2 bg-linear-to-r ${service.color}`}
                     ></div>
                     <div className="p-6">
                        <div className="flex items-center justify-center w-16 h-16 rounded-full bg-linear-to-r from-gray-100 to-gray-200 mb-4 mx-auto">
                           <div className="text-gray-700">{service.icon}</div>
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">
                           {service.title}
                        </h3>
                        <p className="text-gray-600 mb-4 text-center">
                           {service.description}
                        </p>
                        <ul className="space-y-2">
                           {service.features.map((feature, idx) => (
                              <li
                                 key={idx}
                                 className="flex items-center text-sm text-gray-500"
                              >
                                 <FaBolt className="text-orange-500 mr-2 text-xs" />
                                 {feature}
                              </li>
                           ))}
                        </ul>
                        <button className="mt-6 w-full py-3 bg-linear-to-r from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 text-gray-800 font-semibold rounded-lg transition duration-300">
                           Learn More
                        </button>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
};

export default ServicesGrid;
