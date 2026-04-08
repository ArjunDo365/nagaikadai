import React from "react";

const WorkingHours = () => {
  return (
    <div className="panel w-1/2 m-auto">
      <div className="flex items-center justify-between dark:text-white-light mb-5">
        <h5 className="font-semibold text-lg">Business Hours</h5>
      </div>
      <div>
        <div className="space-y-6">
          <div className="flex">
            <span className="shrink-0 grid place-content-center text-base w-9 h-9 rounded-md bg-success-light dark:bg-success text-success dark:text-success-light">
              Mo
            </span>
            <div className="px-3 flex-1">
              <div>Monday</div>
              {/* <div className="text-xs text-white-dark dark:text-gray-500">10 Jan 1:00PM</div> */}
            </div>
            <span className="text-success text-base px-1 ltr:ml-auto rtl:mr-auto whitespace-pre">
              09:00 AM to 05:00 PM
            </span>
          </div>
          <div className="flex">
            <span className="shrink-0 grid place-content-center text-base w-9 h-9 rounded-md bg-success-light dark:bg-success text-success dark:text-success-light">
              TU
            </span>
            <div className="px-3 flex-1">
              <div>Tuesday</div>
              {/* <div className="text-xs text-white-dark dark:text-gray-500">10 Jan 1:00PM</div> */}
            </div>
            <span className="text-success text-base px-1 ltr:ml-auto rtl:mr-auto whitespace-pre">
              09:00 AM to 05:00 PM
            </span>
          </div>
          <div className="flex">
            <span className="shrink-0 grid place-content-center text-base w-9 h-9 rounded-md bg-success-light dark:bg-success text-success dark:text-success-light">
              WE
            </span>
            <div className="px-3 flex-1">
              <div>Wednesday</div>
              {/* <div className="text-xs text-white-dark dark:text-gray-500">10 Jan 1:00PM</div> */}
            </div>
            <span className="text-success text-base px-1 ltr:ml-auto rtl:mr-auto whitespace-pre">
              09:00 AM to 05:00 PM
            </span>
          </div>
          <div className="flex">
            <span className="shrink-0 grid place-content-center text-base w-9 h-9 rounded-md bg-success-light dark:bg-success text-success dark:text-success-light">
              TH
            </span>
            <div className="px-3 flex-1">
              <div>Thursday</div>
              {/* <div className="text-xs text-white-dark dark:text-gray-500">10 Jan 1:00PM</div> */}
            </div>
            <span className="text-success text-base px-1 ltr:ml-auto rtl:mr-auto whitespace-pre">
              09:00 AM to 05:00 PM
            </span>
          </div>
          <div className="flex">
            <span className="shrink-0 grid place-content-center text-base w-9 h-9 rounded-md bg-success-light dark:bg-success text-success dark:text-success-light">
              FR
            </span>
            <div className="px-3 flex-1">
              <div>Friday</div>
              {/* <div className="text-xs text-white-dark dark:text-gray-500">10 Jan 1:00PM</div> */}
            </div>
            <span className="text-success text-base px-1 ltr:ml-auto rtl:mr-auto whitespace-pre">
              09:00 AM to 05:00 PM
            </span>
          </div>
          <div className="flex">
            <span className="shrink-0 grid place-content-center text-base w-9 h-9 rounded-md bg-success-light dark:bg-success text-success dark:text-success-light">
              SA
            </span>
            <div className="px-3 flex-1">
              <div>Saturday</div>
              {/* <div className="text-xs text-white-dark dark:text-gray-500">10 Jan 1:00PM</div> */}
            </div>
            <span className="text-success text-base px-1 ltr:ml-auto rtl:mr-auto whitespace-pre">
              09:00 AM to 05:00 PM
            </span>
          </div>
          <div className="flex">
            <span className="shrink-0 grid place-content-center text-base w-9 h-9 rounded-md bg-success-light dark:bg-success text-success dark:text-success-light">
              SU
            </span>
            <div className="px-3 flex-1">
              <div>Sunday</div>
              {/* <div className="text-xs text-white-dark dark:text-gray-500">10 Jan 1:00PM</div> */}
            </div>
            <span className="text-success text-base px-1 ltr:ml-auto rtl:mr-auto whitespace-pre">
              09:00 AM to 05:00 PM
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkingHours;
