import React from "react";

const AboutUs = () => {
  return (
    <div className="prose bg-[#f1f2f3] px-4 py-9 sm:px-8 sm:py-16 rounded max-w-full dark:bg-[#1b2e4b] dark:text-white-light w-full">
      <h2 className="text-dark mt-4 mb-0 text-center text-5xl dark:text-white-light">
        About Us
      </h2>
      <p className="lead mb-2 dark:text-white-light text-center">
        Sri Nagaikadai Jewellery
      </p>
      <hr className="mt-1 mb-4 m-auto w-[6%] h-1 bg-blue-600 border-0 rounded-lg dark:border-[#191e3a]" />
      <p className="mb-5 text-center">
        We create beautifully crafted jewellery that blends tradition with
        modern elegance. From gold and diamond collections to everyday wear, our
        designs are made with quality, care, and passion. Our mission is to help
        you celebrate life’s special moments with timeless pieces you’ll cherish
        forever.
      </p>
    </div>
  );
};

export default AboutUs;
