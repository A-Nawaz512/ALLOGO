// src/components/ModernNavbar.jsx
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import { IoLanguageSharp } from "react-icons/io5";

const ModernNavbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpenDesktop, setServicesOpenDesktop] = useState(false);
  const [servicesOpenMobile, setServicesOpenMobile] = useState(false);

  const [langOpenDesktop, setLangOpenDesktop] = useState(false);
  const [langOpenMobile, setLangOpenMobile] = useState(false);
  const [selectedLang, setSelectedLang] = useState("English");

  const toggleMobile = () => setMobileOpen(!mobileOpen);
  const toggleServicesDesktop = () => setServicesOpenDesktop(!servicesOpenDesktop);
  const toggleServicesMobile = () => setServicesOpenMobile(!servicesOpenMobile);

  const toggleLangDesktop = () => setLangOpenDesktop(!langOpenDesktop);
  const toggleLangMobile = () => setLangOpenMobile(!langOpenMobile);

  const servicesRef = useRef();
  const langRef = useRef();

  // CLICK OUTSIDE
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target)) {
        setServicesOpenDesktop(false);
      }
      if (langRef.current && !langRef.current.contains(event.target)) {
        setLangOpenDesktop(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const servicesList = [
    { label: "VTC / Passenger transport", path: "/services/rides" },
    { label: "Delivery / Courier", path: "/services/deliveries" },
    { label: "Vehicle rental", path: "/services/rentals" },
    { label: "Apartment rental", path: "/services/apartments" },
    { label: "Food delivery", path: "/services/food-delivery" },
    { label: "Roadside assistance", path: "/services/roadside-assistance" },
  ];

  const languages = ["English", "Français", "العربية"];

  return (
    <nav className="bg-black text-gray-100 py-3 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center gap-4">

          {/* BRAND */}
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="/ailogo.png"
              alt="Logo"
              className="h-10 lg:h-12 w-auto bg-black-400/20 shadow-sm shadow-[#755023] rounded-lg"
            />
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center space-x-6">

            <Link to="/" className="px-4 py-2 rounded hover:bg-[#6F4918] transition">
              Home
            </Link>

            <Link to="/about" className="px-4 py-2 rounded hover:bg-[#6F4918] transition">
              About
            </Link>

            {/* SERVICES DESKTOP DROPDOWN */}
            <div className="relative" ref={servicesRef}>
              <button
                onClick={toggleServicesDesktop}
                className="px-4 py-2 rounded flex items-center space-x-1 hover:bg-[#6F4918]"
              >
                <span>Services</span>
                {servicesOpenDesktop ? <FaCaretUp /> : <FaCaretDown />}
              </button>

              {servicesOpenDesktop && (
                <div className="absolute left-0 py-3 mt-2 w-64 bg-black border border-[#202020] rounded-lg shadow-lg animate-fadeIn">
                  {servicesList.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setServicesOpenDesktop(false)}
                      className="block px-4 py-2 hover:bg-[#6F4918] rounded"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/contact" className="px-4 py-2 rounded hover:bg-[#6F4918] transition">
              Contact
            </Link>
          </div>

          {/* AUTH + LANGUAGE DESKTOP */}
          <div className="hidden md:flex items-center space-x-5">

            {/* LANGUAGE DROPDOWN */}
            <div className="relative" ref={langRef}>
              <button
                onClick={toggleLangDesktop}
                className="px-4 py-2 flex items-center space-x-2 rounded hover:bg-[#6F4918]"
              >
                <IoLanguageSharp size={18} />
                <span>{selectedLang}</span>
                {langOpenDesktop ? <FaCaretUp /> : <FaCaretDown />}
              </button>

              {langOpenDesktop && (
                <div className="absolute right-0 py-2 mt-2 w-40 bg-black border border-[#202020] rounded-lg shadow-lg animate-fadeIn">
                  {languages.map((lang) => (
                    <button
                      key={lang}
                      onClick={() => {
                        setSelectedLang(lang);
                        setLangOpenDesktop(false);
                      }}
                      className="w-full text-left px-4 py-2 hover:bg-[#6F4918] rounded"
                    >
                      {lang}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/signup"
              className="px-5 py-2 bg-gradient-to-r from-[#6F4918] to-[#E2CF7D] text-white rounded-lg shadow-md hover:shadow-xl"
            >
              Sign Up
            </Link>

            <Link
              to="/login"
              className="px-5 py-2 border-2 border-[#6F4918] text-white rounded-lg hover:bg-[#6F4918]"
            >
              Login
            </Link>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={toggleMobile}
            className="md:hidden text-gray-100 hover:text-[#FFD700]"
          >
            {mobileOpen ? <HiX size={32} /> : <HiMenu size={32} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="md:hidden bg-black border-t border-[#202020] py-3 space-y-2 animate-fadeIn">

          <Link to="/" className="block px-6 py-2 hover:bg-[#6F4918] rounded">
            Home
          </Link>

          <Link to="/about" className="block px-6 py-2 hover:bg-[#6F4918] rounded">
            About
          </Link>

          {/* SERVICES MOBILE */}
          <button
            onClick={toggleServicesMobile}
            className="w-full px-6 py-2 flex justify-between items-center hover:bg-[#6F4918] rounded"
          >
            Services
            <span>{servicesOpenMobile ? "▲" : "▼"}</span>
          </button>

          {servicesOpenMobile && (
            <div className="ml-4 space-y-2 animate-fadeIn">
              {servicesList.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="block px-6 py-2 hover:bg-[#6F4918] rounded"
                  onClick={() => setServicesOpenMobile(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          )}

          <Link to="/contact" className="block px-6 py-2 hover:bg-[#6F4918] rounded">
            Contact
          </Link>

          {/* LANGUAGE MOBILE */}
          <button
            onClick={toggleLangMobile}
            className="w-full px-6 py-2 flex justify-between items-center hover:bg-[#6F4918] rounded"
          >
            Language: {selectedLang}
            <span>{langOpenMobile ? "▲" : "▼"}</span>
          </button>

          {langOpenMobile && (
            <div className="ml-4 space-y-2 animate-fadeIn">
              {languages.map((lang) => (
                <button
                  key={lang}
                  onClick={() => {
                    setSelectedLang(lang);
                    setLangOpenMobile(false);
                  }}
                  className="block w-full text-left px-6 py-2 hover:bg-[#6F4918] rounded"
                >
                  {lang}
                </button>
              ))}
            </div>
          )}

          {/* MOBILE AUTH BUTTONS */}
          <div className="px-6 space-y-3 pt-3">
            <Link
              to="/signup"
              className="block text-center px-5 py-2 bg-gradient-to-r from-[#6F4918] to-[#E2CF7D] text-white rounded-lg shadow-lg"
            >
              Sign Up
            </Link>

            <Link
              to="/login"
              className="block text-center px-5 py-2 border-2 border-[#6F4918] text-white rounded-lg hover:bg-[#6F4918]"
            >
              Login
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default ModernNavbar;
