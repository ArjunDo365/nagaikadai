import { IndianRupee } from "lucide-react";
import p1 from "../assets/images/poster.png";
import c2 from "../assets/images/c2.jpg";
import c3 from "../assets/images/c3.jpg";

const GoldRate = () => {
  const downloadImage = (fileName) => {
    const link = document.createElement("a");
    link.href = p1;
    link.download = fileName; // forces download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <div id="tdr" className="prose bg-[#f1f2f3] px-4 py-9 sm:px-8 sm:py-16 rounded max-w-full dark:bg-[#1b2e4b] dark:text-white-light w-full mb-5">
        <h2 className="text-dark mt-4 mb-3 text-center text-5xl dark:text-white-light">
          Gold Rates
        </h2>
        <hr className="mt-1 mb-10 m-auto w-[6%] h-1 bg-yellow-600 border-0 rounded-lg dark:border-[#191e3a]" />

        <div className="flex gap-6 items-center justify-center">
          <div className="flex flex-wrap w-full justify-center mb-5">
            <div className="border border-gray-500/20 rounded-md shadow-[rgb(31_45_61_/_10%)_0px_2px_10px_1px] dark:shadow-[0_2px_11px_0_rgb(6_8_24_/_39%)] p-6 pt-12 mt-8 relative">
              <div className="bg-yellow-600 absolute text-white-light ltr:left-6 rtl:right-6 -top-8 w-16 h-16 rounded-md flex items-center justify-center mb-5 mx-auto">
                <IndianRupee className="w-12 h-12" />
              </div>
              <h5 className="text-dark text-lg font-semibold mb-3.5 dark:text-white-light">
                1 Gram
              </h5>
              <div className="flex justify-center items-center gap-3">
                <IndianRupee className="w-12 h-12 text-yellow-500" />
                <p className="text-yellow-500 text-[3rem] m-auto">14,200</p>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap w-full justify-center mb-5">
            <div className="border border-gray-500/20 rounded-md shadow-[rgb(31_45_61_/_10%)_0px_2px_10px_1px] dark:shadow-[0_2px_11px_0_rgb(6_8_24_/_39%)] p-6 pt-12 mt-8 relative">
              <div className="bg-yellow-600 absolute text-white-light ltr:left-6 rtl:right-6 -top-8 w-16 h-16 rounded-md flex items-center justify-center mb-5 mx-auto">
                <IndianRupee className="w-12 h-12" />
              </div>
              <h5 className="text-dark text-lg font-semibold mb-3.5 dark:text-white-light">
                8 Grams
              </h5>
              <div className="flex justify-center items-center gap-3">
                <IndianRupee className="w-12 h-12 text-yellow-500" />
                <p className="text-yellow-500 text-[3rem] m-auto">113,600</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 flex items-center justify-center gap-6 w-full">
        <button type="button" className="btn btn-secondary rounded-full" onClick={() => downloadImage("poster.png")}>
          Image Download 1
        </button>
        <button type="button" className="btn btn-secondary rounded-full" onClick={() => downloadImage("poster.png")}>
          Image Download 2
        </button>
        <button type="button" className="btn btn-secondary rounded-full" onClick={() => downloadImage("poster.png")}>
          Image Download 3
        </button>
        <button type="button" className="btn btn-secondary rounded-full" onClick={() => downloadImage("poster.png")}>
          Image Download 4
        </button>
      </div>
      <div className="mt-6 flex items-center justify-center w-full mb-6">
        <button type="button" className="btn btn-warning w-[500px]" onClick={() => downloadImage("poster.png")}>
          Poster Download
        </button>
      </div>
    </>
  );
};

export default GoldRate;
