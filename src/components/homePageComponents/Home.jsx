<<<<<<< HEAD
import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const slides = [
    {
      id: 1,
      title: "All Services,One Platform",
      subtitle: "Complete Digital Ecosystem",
      description: "Transport, rentals, delivery, food, and roadside assistance all in one app with live 3D tracking.",
      image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      link:'/services/rides'
    },
    {
      id: 2,
      title: "Book Your Ride in Seconds",
      subtitle: "Fast, safe, and affordable.",
      description: "Choose your driver, your vehicle, and track your ride in 3D anytime, anywhere.",
      image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      link:'/services/rides'
    },
    {
      id: 3,
      title: "Rent Cars, Scooters, or Apartments",
      subtitle: "Verified owners. Transparent pricing.",
      description: "Find rentals around you instantly and book securely with AlLOGO.",
      image: "https://img.freepik.com/free-photo/beautiful-kitchen-interior-design_23-2150976526.jpg?ga=GA1.1.1146211304.1754028702&semt=ais_hybrid&w=740&q=80",
      link:'/services/rentals'
    },
    {
      id: 4,
      title: "Delivery & Food at Your Door",
      subtitle: "Send parcels or order meals easily.",
      description: "Track every courier live on our 3D map for a transparent delivery experience.",
      image: "https://img.freepik.com/premium-photo/back-view-deliveryman-knocking-door-holding-food-from-grocery-store_926199-2148140.jpg?ga=GA1.1.1146211304.1754028702&semt=ais_hybrid&w=740&q=80",
      link:'/services/deliveries'
    },
    {
      id: 5,
      title: "Emergency Roadside Assistance",
      subtitle: "Help whenever you need it.",
      description: "Request a technician instantly for any vehicle breakdown 24/7.",
      image: "https://img.freepik.com/premium-photo/woman-took-her-car-change-tires_926199-2163583.jpg?ga=GA1.1.1146211304.1754028702&semt=ais_hybrid&w=740&q=80",
      link:'/services/roadside-assistance'
    },
  ];

  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goToSlide = useCallback((index) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrent(index);
    setTimeout(() => setIsTransitioning(false), 700);
  }, [isTransitioning]);

  const nextSlide = useCallback(() => {
    goToSlide((current + 1) % slides.length);
  }, [current, slides.length, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide((current - 1 + slides.length) % slides.length);
  }, [current, slides.length, goToSlide]);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const slide = slides[current];

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Background Image with Overlays */}
      <div className="absolute inset-0 transition-all duration-1000 ease-in-out">
        <img
          src={slide.image}
          alt={slide.title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
        {/* Solid Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4 md:px-8 lg:px-26">
          <div className="max-w-2xl">
  
            {/* Title with Decorative Element */}
            <div className="mb-6">
              <div className="flex items-center mb-4">
                {/* <div className="w-16 h-1 rounded-full mr-4" style={{ backgroundColor: "#B78E3B" }}></div> */}
                <h1
                  className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                  style={{ color: "#B78E3B" }}
                >
                  {slide.title}
                </h1>
              </div>
            </div>

            {/* Subtitle */}
            <h2 className="text-xl md:text-2xl lg:text-3xl mb-6 font-semibold text-white">
              {slide.subtitle}
            </h2>

            {/* Description */}
            <p className="text-lg md:text-xl mb-10 max-w-xl leading-relaxed text-gray-300">
              {slide.description}
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <Link to={slide.link}>
                <button
                  className="px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 active:scale-95"
                  style={{
                    backgroundColor: "#B78E3B",
                    color: "white",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = "#543918";
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = '0 10px 25px rgba(183, 142, 59, 0.6)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = "#B78E3B";
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = 'none';
                  }}
                >
                  Explore more
                  <span className="ml-3">→</span>
                </button>
              </Link>

              {/* <button
                className="px-8 py-4 rounded-lg font-semibold text-lg border-2 transition-all duration-300 hover:scale-105 active:scale-95"
                style={{
                  borderColor: "#B78E3B",
                  color: "#B78E3B",
                  backgroundColor: "rgba(183, 142, 59, 0.1)"
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "rgba(183, 142, 59, 0.2)";
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 10px 25px rgba(183, 142, 59, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "rgba(183, 142, 59, 0.1)";
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = 'none';
                }}
              >
                Become a Partner
              </button> */}
            </div>

          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute hidden sm:flex left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/50 hover:bg-black/70 backdrop-blur-sm transition-all duration-300 group"
        aria-label="Previous slide"
        style={{ border: "1px solid #543918" }}
      >
        <svg className="w-6 h-6 text-white group-hover:text-[#B78E3B] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute hidden sm:flex right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/50 hover:bg-black/70 backdrop-blur-sm transition-all duration-300 group"
        aria-label="Next slide"
        style={{ border: "1px solid #543918" }}
      >
        <svg className="w-6 h-6 text-white group-hover:text-[#B78E3B] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Slide Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
        <div className="flex items-center gap-2">
          {slides.map((slideItem, index) => (
            <div
              key={slideItem.id}
              className="flex flex-col items-center cursor-pointer group"
              onClick={() => goToSlide(index)}
            >
              <div className="relative mb-2">
                <div
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${index === current ? 'scale-125' : 'opacity-50'}`}
                  style={{
                    backgroundColor: index === current ? "#B78E3B" : "white",
                  }}
                ></div>
                {index === current && (
                  <div className="absolute inset-0 animate-ping rounded-full" style={{ backgroundColor: "#B78E3B" }}></div>
                )}
              </div>
         
            </div>
          ))}
        </div>
      </div>

  
    </div>
  );
}
=======
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Pagination, EffectFade, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

export default function HeroSection() {
   const slides = [
      {
         title: "Delivery & Courier",
         subtitle:
            "Send packages instantly with smart route optimization and real-time tracking for peace of mind.",
      },
      {
         title: "Vehicle Rental",
         subtitle:
            "Rent cars, scooters, or bikes with flexible periods and easy online booking, perfect for all your mobility needs.",
      },
      {
         title: "Apartment & Home Rentals",
         subtitle:
            "Discover verified short-term and long-term rentals with online tours and instant booking.",
      },
      {
         title: "Food Delivery",
         subtitle:
            "Order from your favorite restaurants and enjoy hot, fresh meals delivered right to your doorstep.",
      },
      {
         title: "Roadside Assistance",
         subtitle:
            "24/7 emergency support for towing, tire changes, fuel delivery, and quick vehicle repairs.",
      },
   ];

   // Typewriter logic
   const [textIndex, setTextIndex] = useState(0);
   const [displayedText, setDisplayedText] = useState("");

   useEffect(() => {
      const currentText = slides[textIndex].subtitle;
      let i = 0;
      const interval = setInterval(() => {
         setDisplayedText(currentText.slice(0, i + 1));
         i++;
         if (i === currentText.length) clearInterval(interval);
      }, 30);
      return () => clearInterval(interval);
   }, [textIndex]);

   return (
      <div className="text-white min-h-screen w-full bg-black relative overflow-hidden">
         {/* Floating Gold Glow */}
         <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.3, scale: 1 }}
            transition={{
               duration: 2,
               repeat: Infinity,
               repeatType: "reverse",
            }}
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#E2CF7D]/20 blur-[150px]"
         />

         <Swiper
            modules={[Autoplay, Pagination, EffectFade, Navigation]}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{
               clickable: true,
               bulletClass: "swiper-pagination-bullet !bg-white/10",
               bulletActiveClass:
                  "!bg-[#E2CF7D] !scale-150 !shadow-[0_0_10px_#E2CF7D]",
            }}
            navigation={{
               nextEl: ".hero-next",
               prevEl: ".hero-prev",
            }}
            effect="fade"
            loop
            onSlideChange={(swiper) => setTextIndex(swiper.realIndex)}
            className="min-h-screen"
         >
            {slides.map((slide, index) => (
               <SwiperSlide key={index}>
                  <div className="min-h-screen flex items-center justify-center bg-black px-6 text-center pt-24 pb-20">
                     <motion.div
                        initial={{ opacity: 0, y: 40, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="max-w-4xl mx-auto"
                     >
                        {/* Title with shimmer gradient */}
                        <motion.h1
                           initial={{ backgroundPosition: "0% 50%" }}
                           animate={{ backgroundPosition: "100% 50%" }}
                           transition={{
                              duration: 4,
                              repeat: Infinity,
                              repeatType: "reverse",
                           }}
                           className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-[#E2CF7D] via-[#6F4918] to-[#E2CF7D] 
                  text-transparent bg-clip-text tracking-tight drop-shadow-[0_0_18px_rgba(226,207,125,0.35)]
                  bg-[length:300%_300%]"
                        >
                           {slide.title}
                        </motion.h1>

                        {/* Typewriter Subtitle */}
                        <motion.p
                           initial={{ opacity: 0, y: 20 }}
                           animate={{ opacity: 1, y: 0 }}
                           transition={{ delay: 0.2, duration: 0.8 }}
                           className="text-gray-300 max-w-2xl mx-auto mt-4 text-sm md:text-base leading-relaxed h-[80px]"
                        >
                           {displayedText}
                           <span className="animate-pulse">|</span>
                        </motion.p>

                        {/* Learn More button with glow + scale */}
                        <motion.button
                           whileHover={{
                              scale: 1.1,
                              boxShadow: "0 0 35px rgba(226,207,125,0.7)",
                           }}
                           whileTap={{ scale: 0.95 }}
                           className="mt-6 px-8 py-3 rounded-full bg-gradient-to-r 
                    from-[#E2CF7D] to-[#86631F] text-black font-semibold shadow-lg
                    transition-all duration-300"
                        >
                           Learn More
                        </motion.button>
                     </motion.div>
                  </div>
               </SwiperSlide>
            ))}
         </Swiper>

         {/* Navigation Arrows */}
         <motion.button
            whileHover={{ scale: 1.15, rotate: -5 }}
            className="hero-prev absolute top-1/2 left-5 -translate-y-1/2 z-30
        w-12 h-12 rounded-full flex items-center justify-center
        bg-white/10 backdrop-blur-xl border border-white/30 shadow-xl
        hover:bg-[#E2CF7D] hover:shadow-[0_0_25px_rgba(226,207,125,0.7)]
        transition-all duration-300"
         >
            <span className="text-2xl font-bold text-white">‹</span>
         </motion.button>

         <motion.button
            whileHover={{ scale: 1.15, rotate: 5 }}
            className="hero-next absolute top-1/2 right-5 -translate-y-1/2 z-30
        w-12 h-12 rounded-full flex items-center justify-center
        bg-white/10 backdrop-blur-xl border border-white/30 shadow-xl
        hover:bg-[#E2CF7D] hover:shadow-[0_0_25px_rgba(226,207,125,0.7)]
        transition-all duration-300"
         >
            <span className="text-2xl font-bold text-white">›</span>
         </motion.button>
      </div>
   );
}
>>>>>>> 10c1b0afefd9f076b7df0a59dd55e612c1e3dcc5
