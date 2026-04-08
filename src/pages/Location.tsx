import React from "react";

const Location = () => {
  return (
    <div id="lca" className="prose bg-[#f1f2f3] px-4 py-9 sm:px-8 sm:py-16 rounded max-w-full dark:bg-[#1b2e4b] dark:text-white-light w-full mb-5">
      <h2 className="text-dark mt-4 mb-3 text-center text-5xl dark:text-white-light">
        Our Location
      </h2>
      <hr className="mt-1 mb-10 m-auto w-[6%] h-1 bg-blue-600 border-0 rounded-lg dark:border-[#191e3a]" />
      <div className="w-3/4 h-[400px] rounded-2xl overflow-hidden shadow-lg m-auto">
        <iframe
          title="location-map"
          src="https://www.google.com/maps?q=Coimbatore&output=embed"
          className="w-full h-full border-0"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Location;
