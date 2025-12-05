import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaUser,
  FaPhone,
  FaCar,
  FaFileUpload,
  FaWhatsapp,
  FaChevronDown,
  FaBiking,
  FaMotorcycle,
  FaWalking,
  FaBoxes,
} from "react-icons/fa";

export default function BecomeDelivery() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    whatsapp: "",
    vehicleType: "",
    deliveryCategory: "",
    serviceType: "Deliveries",
    license: null,
    registration: null,
    vehiclePhoto: null,
    termsAccepted: false,
  });

  const [vehicleOpen, setVehicleOpen] = useState(false);
  const [categoryOpen, setCategoryOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const inputClass =
    "w-full pl-10 pr-4 py-2 bg-white text-black border border-[#B78E3B] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#9A7A3E] shadow-sm hover:shadow-md transition-all duration-300";

  const dropdownClass =
    "w-full bg-white border border-[#B78E3B] rounded-xl px-4 py-2 flex justify-between items-center cursor-pointer shadow-sm hover:shadow-md transition-all";

  const optionsClass =
    "absolute w-full bg-white border border-[#B78E3B] mt-1 rounded-xl shadow-lg z-10 max-h-48 overflow-auto";

  const optionItemClass = "px-4 py-2 cursor-pointer hover:bg-[#B78E3B]/10";

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === "checkbox") {
      setForm({ ...form, [name]: checked });
    } else if (type === "file") {
      setForm({ ...form, [name]: files[0] });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const requiresDocs =
    form.vehicleType !== "Bicycle" && form.vehicleType !== "On Foot";

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    alert("Your delivery registration has been submitted for validation.");
  };

  return (
    <div className="min-h-screen bg-[#F8F9FB] flex items-center justify-center p-5 mb-5">
      <div className="w-full max-w-5xl bg-white rounded-2xl border border-[#B78E3B]/40 overflow-hidden shadow-lg">
        
        {/* HEADER */}
        <div className="bg-[#0D0D0D] text-center py-6 px-6 relative">
          <h2 className="text-3xl md:text-5xl font-bold tracking-wide text-[#B78E3B]">
            Become a Delivery Provider
          </h2>
          <div className="border-t border-[#B78E3B]/30 w-11/12 mx-auto my-2"></div>
          <p className="text-md text-white">
            Fill in the details below to register as a delivery provider on ALLOGO
          </p>
        </div>

        {/* FORM */}
        <div className="p-5 md:p-8 space-y-5 transition-all duration-300 hover:shadow-[0_0_25px_#B78E3B]">
          
          {/* First & Last Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="relative">
              <label className="block font-semibold text-md text-[#B78E3B] mb-1">
                First Name
              </label>
              <FaUser className="absolute left-3 top-[40px] text-[#B78E3B]" />
              <input
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                placeholder="Enter first name"
                className={inputClass}
              />
            </div>

            <div className="relative">
              <label className="block font-semibold text-md text-[#B78E3B] mb-1">
                Last Name
              </label>
              <FaUser className="absolute left-3 top-[40px] text-[#B78E3B]" />
              <input
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                placeholder="Enter last name"
                className={inputClass}
              />
            </div>
          </div>

          {/* Phone & WhatsApp */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            
            <div className="relative">
              <label className="block font-semibold text-md text-[#B78E3B] mb-1">
                Phone Number
              </label>
              <FaPhone className="absolute left-3 top-[40px] text-[#B78E3B]" />
              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Enter phone number"
                className={inputClass}
              />
            </div>

            <div className="relative">
              <label className="block font-semibold text-md text-[#B78E3B] mb-1">
                WhatsApp Number
              </label>
              <FaWhatsapp className="absolute left-3 top-[40px] text-[#B78E3B]" />
              <input
                name="whatsapp"
                value={form.whatsapp}
                onChange={handleChange}
                placeholder="Enter WhatsApp number"
                className={inputClass}
              />
            </div>
          </div>

          {/* Vehicle Type */}
          <div className="relative">
            <label className="block font-semibold text-md text-[#B78E3B] mb-1">
              Vehicle Type
            </label>
            <FaCar className="absolute left-3 top-[40px] text-[#B78E3B]" />
            <div
              className={`${dropdownClass} pl-10`}
              onClick={() => setVehicleOpen(!vehicleOpen)}
            >
              <span className={form.vehicleType ? "text-black" : "text-gray-500"}>
                {form.vehicleType || "Select vehicle type"}
              </span>
              <FaChevronDown className="text-[#B78E3B]" />
            </div>

            {vehicleOpen && (
              <ul className={optionsClass}>
                <li
                  className={optionItemClass}
                  onClick={() => {
                    setForm({ ...form, vehicleType: "" });
                    setVehicleOpen(false);
                  }}
                >
                  Select vehicle
                </li>
                <li
                  className={optionItemClass}
                  onClick={() => {
                    setForm({ ...form, vehicleType: "Bicycle" });
                    setVehicleOpen(false);
                  }}
                >
                  Bicycle
                </li>
                <li
                  className={optionItemClass}
                  onClick={() => {
                    setForm({ ...form, vehicleType: "Motorcycle" });
                    setVehicleOpen(false);
                  }}
                >
                  Motorcycle
                </li>
                <li
                  className={optionItemClass}
                  onClick={() => {
                    setForm({ ...form, vehicleType: "Car" });
                    setVehicleOpen(false);
                  }}
                >
                  Car
                </li>
                <li
                  className={optionItemClass}
                  onClick={() => {
                    setForm({ ...form, vehicleType: "On Foot" });
                    setVehicleOpen(false);
                  }}
                >
                  On Foot (Walker)
                </li>
              </ul>
            )}
          </div>

          {/* Delivery Category */}
          <div className="relative">
            <label className="block font-semibold text-md text-[#B78E3B] mb-1">
              Delivery Category
            </label>
            <FaBoxes className="absolute left-3 top-[40px] text-[#B78E3B]" />
            <div
              className={`${dropdownClass} pl-10`}
              onClick={() => setCategoryOpen(!categoryOpen)}
            >
              <span className={form.deliveryCategory ? "text-black" : "text-gray-500"}>
                {form.deliveryCategory || "Select delivery category"}
              </span>
              <FaChevronDown className="text-[#B78E3B]" />
            </div>

            {categoryOpen && (
              <ul className={optionsClass}>
                <li
                  className={optionItemClass}
                  onClick={() =>
                    setForm({ ...form, deliveryCategory: "Food" }) ||
                    setCategoryOpen(false)
                  }
                >
                  Food
                </li>
                <li
                  className={optionItemClass}
                  onClick={() =>
                    setForm({ ...form, deliveryCategory: "Pharmacy" }) ||
                    setCategoryOpen(false)
                  }
                >
                  Pharmacy
                </li>
                <li
                  className={optionItemClass}
                  onClick={() =>
                    setForm({ ...form, deliveryCategory: "Packages" }) ||
                    setCategoryOpen(false)
                  }
                >
                  Packages
                </li>
                <li
                  className={optionItemClass}
                  onClick={() =>
                    setForm({ ...form, deliveryCategory: "Products" }) ||
                    setCategoryOpen(false)
                  }
                >
                  Products
                </li>
                <li
                  className={optionItemClass}
                  onClick={() =>
                    setForm({ ...form, deliveryCategory: "All Deliveries" }) ||
                    setCategoryOpen(false)
                  }
                >
                  All Deliveries
                </li>
              </ul>
            )}
          </div>

          {/* Documents (Conditional) */}
          {requiresDocs && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="relative">
                <label className="block font-semibold text-md text-[#B78E3B] mb-1">
                  Upload License
                </label>
                <FaFileUpload className="absolute left-3 top-[40px] text-[#B78E3B]" />
                <input
                  type="file"
                  name="license"
                  onChange={handleChange}
                  className={`${inputClass} p-2`}
                />
              </div>

              <div className="relative">
                <label className="block font-semibold text-md text-[#B78E3B] mb-1">
                  Upload Vehicle Registration
                </label>
                <FaFileUpload className="absolute left-3 top-[40px] text-[#B78E3B]" />
                <input
                  type="file"
                  name="registration"
                  onChange={handleChange}
                  className={`${inputClass} p-2`}
                />
              </div>

              <div className="relative">
                <label className="block font-semibold text-md text-[#B78E3B] mb-1">
                  Upload Vehicle Photo
                </label>
                <FaFileUpload className="absolute left-3 top-[40px] text-[#B78E3B]" />
                <input
                  type="file"
                  name="vehiclePhoto"
                  onChange={handleChange}
                  className={`${inputClass} p-2`}
                />
              </div>
            </div>
          )}

          {/* Terms */}
          <label className="flex items-start gap-2 text-[#B78E3B] text-sm">
            <input
              name="termsAccepted"
              type="checkbox"
              checked={form.termsAccepted}
              onChange={handleChange}
              className="mt-1 h-4 w-4 rounded border-[#B78E3B] text-[#B78E3B] focus:ring-[#B78E3B]"
            />
            I confirm I have read and accepted the ALLOGO terms. I understand
            ALLOGO is only a connecting platform and any incident or payment
            outside the app is my responsibility.
          </label>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              onClick={handleSubmit}
              className="p-4 mt-4 text-white text-lg rounded-xl bg-[#B78E3B] hover:bg-[#b8924b] transition-all shadow-lg hover:shadow-[#9A7A3E]/50 font-semibold"
            >
              Send Verification Code
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
