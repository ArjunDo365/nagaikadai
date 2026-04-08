import c1 from "../assets/images/c1.jpg";
import c2 from "../assets/images/c2.jpg";
import c3 from "../assets/images/c3.jpg";

const services = [
  { img: c1, name: "Gold Ornaments" },
  { img: c2, name: "Silver Ornaments" },
  { img: c3, name: "Diamond Ornaments" },
  { img: c1, name: "Platinum Ornaments" },
];

const Services = () => {
  return (
    <div className="bg-white px-4 py-9 sm:px-8 sm:py-16 rounded w-full mb-5 dark:bg-[#1b2e4b]">
      <h2 className="text-center text-5xl mb-3 dark:text-white-light text-[#7B2D26]">
        Services
      </h2>
      <hr className="mt-1 mb-10 m-auto w-[6%] h-1 bg-yellow-500 border-0 rounded-lg" />

      {/* Grid Layout */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
        {services.map((service, index) => (
          <div key={index} className="text-center group">
            {/* Image wrapper */}
            <div className="overflow-hidden rounded-2xl">
              <img
                src={service.img}
                alt={service.name}
                className="w-full h-[400px] object-cover rounded-2xl transform transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            {/* Name below card */}
            <h5 className="mt-3 text-lg font-semibold text-gray-500 dark:text-white-light">
              {service.name}
            </h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
