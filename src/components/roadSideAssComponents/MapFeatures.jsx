import React from "react";
import {
   FaMap,
   FaMapMarkerAlt,
   FaCar,
   FaTools,
   FaHouseUser,
   FaShippingFast,
   FaBicycle,
   FaLayerGroup,
} from "react-icons/fa";

const MapFeatures = () => {
   const mapServices = [
      {
         service: "Roadside Assistance",
         color: "bg-orange-500",
         icon: <FaTools />,
         description: "Orange markers on the map",
         features: [
            "Real-time tracking",
            "ETA estimation",
            "Service type visible",
         ],
      },
      {
         service: "Rides / Drivers",
         color: "bg-black",
         icon: <FaCar />,
         description: "Black (male) / Pink (female)",
         features: ["Driver selection", "Price negotiation", "Live tracking"],
      },
      {
         service: "Deliveries",
         color: "bg-blue-600",
         icon: <FaShippingFast />,
         description: "Dark blue markers",
         features: ["Package tracking", "Multi-stop", "Direct assignment"],
      },
      {
         service: "Apartment Rental",
         color: "bg-green-700",
         icon: <FaHouseUser />,
         description: "Dark green markers",
         features: ["Property details", "Ratings", "Booking system"],
      },
      {
         service: "Vehicle Rental",
         color: "bg-purple-700",
         icon: <FaBicycle />,
         description: "Dark purple markers",
         features: ["Various vehicles", "Instant booking", "Digital keys"],
      },
   ];

   return (
      <section
         className="py-16 relative overflow-hidden"
         style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.85)), url('https://images.unsplash.com/photo-1528164344705-47542687000d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2090&q=80')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
         }}
         data-aos="fade-up"
      >
         <div className="container mx-auto px-4">
            <div className="text-center mb-12">
               <div className="inline-flex items-center justify-center bg-linear-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-full mb-6">
                  <FaMap className="mr-2" />
                  <span className="font-bold">OpenStreetMap Integration</span>
               </div>
               <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Live <span className="text-orange-400">Map Tracking</span> &
                  Service Discovery
               </h2>
               <p className="text-gray-300 max-w-2xl mx-auto text-lg">
                  Free OpenStreetMap integration with real-time service provider
                  tracking
               </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
               {/* Map Legend */}
               <div
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-gray-700"
                  data-aos="fade-right"
               >
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                     <FaLayerGroup className="mr-3 text-orange-400" />
                     Service Map Legend
                  </h3>

                  <div className="space-y-4">
                     {mapServices.map((service, index) => (
                        <div
                           key={index}
                           className="bg-white/5 hover:bg-white/10 p-4 rounded-xl border border-gray-700 transition-all duration-300"
                           data-aos="fade-up"
                           data-aos-delay={index * 100}
                        >
                           <div className="flex items-center">
                              <div
                                 className={`w-12 h-12 rounded-full ${service.color} flex items-center justify-center mr-4`}
                              >
                                 <div className="text-white text-xl">
                                    {service.icon}
                                 </div>
                              </div>
                              <div className="grow">
                                 <div className="flex justify-between items-center">
                                    <h4 className="text-lg font-bold text-white">
                                       {service.service}
                                    </h4>
                                    <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm">
                                       {service.description}
                                    </span>
                                 </div>
                                 <div className="flex flex-wrap gap-2 mt-2">
                                    {service.features.map((feature, idx) => (
                                       <span
                                          key={idx}
                                          className="px-3 py-1 bg-gray-800/50 text-gray-300 rounded-full text-xs"
                                       >
                                          {feature}
                                       </span>
                                    ))}
                                 </div>
                              </div>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>

               {/* Map Features */}
               <div className="space-y-6">
                  <div
                     className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-gray-700"
                     data-aos="fade-left"
                  >
                     <div className="flex items-center mb-6">
                        <FaMapMarkerAlt className="text-3xl text-orange-400 mr-4" />
                        <div>
                           <h3 className="text-2xl font-bold text-white">
                              Real-time Features
                           </h3>
                           <p className="text-gray-300">
                              Advanced map functionality
                           </p>
                        </div>
                     </div>

                     <div className="grid grid-cols-2 gap-4">
                        <div className="bg-linear-to-br from-orange-500/20 to-red-500/20 p-4 rounded-xl border border-orange-500/30">
                           <div className="text-orange-400 font-bold mb-2">
                              2D / 3D View
                           </div>
                           <p className="text-gray-300 text-sm">
                              Switch between 2D and 3D map views
                           </p>
                        </div>
                        <div className="bg-linear-to-br from-blue-500/20 to-cyan-500/20 p-4 rounded-xl border border-blue-500/30">
                           <div className="text-blue-400 font-bold mb-2">
                              Live Tracking
                           </div>
                           <p className="text-gray-300 text-sm">
                              Real-time provider location updates
                           </p>
                        </div>
                        <div className="bg-linear-to-br from-green-500/20 to-emerald-500/20 p-4 rounded-xl border border-green-500/30">
                           <div className="text-green-400 font-bold mb-2">
                              Pop-up Details
                           </div>
                           <p className="text-gray-300 text-sm">
                              Tap markers for provider information
                           </p>
                        </div>
                        <div className="bg-linear-to-br from-purple-500/20 to-pink-500/20 p-4 rounded-xl border border-purple-500/30">
                           <div className="text-purple-400 font-bold mb-2">
                              Route Planning
                           </div>
                           <p className="text-gray-300 text-sm">
                              Optimized routes for service providers
                           </p>
                        </div>
                     </div>
                  </div>

                  <div
                     className="bg-linear-to-r from-orange-600/20 to-red-600/20 rounded-2xl p-8 border border-orange-500/30"
                     data-aos="zoom-in"
                  >
                     <h4 className="text-xl font-bold text-white mb-4">
                        Pop-up Information Includes:
                     </h4>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex items-center">
                           <div className="w-3 h-3 rounded-full bg-green-500 mr-3"></div>
                           <span className="text-gray-300">
                              Provider Name & Type
                           </span>
                        </div>
                        <div className="flex items-center">
                           <div className="w-3 h-3 rounded-full bg-yellow-500 mr-3"></div>
                           <span className="text-gray-300">
                              Rating & Reviews
                           </span>
                        </div>
                        <div className="flex items-center">
                           <div className="w-3 h-3 rounded-full bg-blue-500 mr-3"></div>
                           <span className="text-gray-300">
                              Service Availability
                           </span>
                        </div>
                        <div className="flex items-center">
                           <div className="w-3 h-3 rounded-full bg-purple-500 mr-3"></div>
                           <span className="text-gray-300">
                              Estimated Arrival Time
                           </span>
                        </div>
                     </div>
                  </div>

                  <div className="text-center">
                     <button className="bg-linear-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-4 px-8 rounded-full text-lg transition duration-300 transform hover:scale-105 shadow-lg">
                        Explore Live Map
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default MapFeatures;
