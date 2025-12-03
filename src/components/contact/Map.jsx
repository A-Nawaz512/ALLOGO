import React, { useEffect } from 'react';
import AOS from 'aos'; // Import AOS for animations
import 'aos/dist/aos.css'; // Import AOS styles

function Map() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Trigger animations only once
    });
  }, []);

  return (
    <div className="w-full h-[300px] md:h-[400px] relative" data-aos="fade-up">
      <iframe
        title="Map of Algeria"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3198927.022283062!2d-8.667987101368188!3d28.033886446222777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128fb5a7dd6a8b39%3A0x1e1c3798d3e5b2f7!2sAlgeria!5e0!3m2!1sen!2s!4v1701500000000!5m2!1sen!2s"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default Map;
