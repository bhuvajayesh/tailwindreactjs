import React from "react";
import { Link } from "react-router-dom";
import CalendarSidebar from "../Componant/CalendarSidebar";

function CourseCalendarCreate1() {
  return (
    <>
      <div className="flex flex-col md:flex-row bg-[#EBF5FF] md:h-screen">
        <div className="md:w-2/5 lg:w-2/6 xl:w-1/4 bg-white p-4 lg:pt-6 lg:pb-7 lg:px-5 h-full overflow-y-auto no-scrollbar">
          <Link
            to="/"
            className="w-10 lg:w-[50px] p-2 aspect-square bg-[#49BBBD] flex items-center justify-center"
          >
            <svg
              width="27"
              height="16"
              viewBox="0 0 27 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line x1="1" y1="8.5" x2="27" y2="8.5" stroke="white" />
              <line
                x1="1.15817"
                y1="8.30111"
                x2="8.15816"
                y2="1.30111"
                stroke="white"
              />
              <line
                x1="1.6077"
                y1="8.62297"
                x2="9.07246"
                y2="15.1251"
                stroke="white"
              />
            </svg>
          </Link>
          <CalendarSidebar />
        </div>
        <div className="flex-1 h-full overflow-y-auto no-scrollbar">
          <div className="bg-[#49BBBD] p-4 lg:p-5 xl:py-6 xl:px-12">
            <h2 className="text-white md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl !leading-normal">
              Learn about Adobe XD & Prototyping
            </h2>
            <div className="mt-1.5 flex items-center justify-between">
              <span className="text-sm md:text-lg 2xl:text-xl text-white">
                Introduction about XD
              </span>
              <div className="flex items-center gap-2.5">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 md:w-6 h-auto aspect-square"
                >
                  <path
                    d="M12 0.375C18.4219 0.375 23.625 5.57812 23.625 12C23.625 18.4219 18.4219 23.625 12 23.625C5.57812 23.625 0.375 18.4219 0.375 12C0.375 5.57812 5.57812 0.375 12 0.375ZM12 21.375C17.1562 21.375 21.375 17.2031 21.375 12C21.375 6.84375 17.1562 2.625 12 2.625C6.79688 2.625 2.625 6.84375 2.625 12C2.625 17.2031 6.79688 21.375 12 21.375ZM14.8594 16.5L10.875 13.5938C10.7344 13.5 10.6875 13.3125 10.6875 13.1719V5.4375C10.6875 5.15625 10.9219 4.875 11.25 4.875H12.75C13.0312 4.875 13.3125 5.15625 13.3125 5.4375V12.0938L16.4062 14.3906C16.6875 14.5781 16.7344 14.9062 16.5469 15.1875L15.6562 16.3594C15.4688 16.6406 15.1406 16.6875 14.8594 16.5Z"
                    fill="white"
                  />
                </svg>
                <span className="text-sm md:text-lg 2xl:text-xl text-white">
                  1 hour
                </span>
              </div>
            </div>
          </div>
          <div className="p-4 md:p-5 lg:p-[30px]">
            <h2 className="text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-semibold mb-3 lg:mb-5">
              Create new event
            </h2>
            <p className="text-[#696984] text-sm md:text-base lg:text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmodadipiscing elit, sed do eiusmodLorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do
              eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmodadipiscing elit, sed do eiusmodeiusmodadipiscing
              elit, sed do eiusmodLorem
            </p>
            <div className="bg-white mt-6 md:mt-10 xl:mt-[50px] p-4 lg:p-6 xl:p-[30px] rounded-xl md:rounded-[18px] flex flex-col gap-3 lg:gap-y-5">
              <div className="w-full">
                <label className="text-[#5B5B5B] mb-1 lg:mb-2.5 text-sm lg:text-base font-semibold block">
                  Event Name
                </label>
                <input
                  type="text"
                  placeholder="Adobe XD Auto - Animate : Your Guide to Creating"
                  className="border border-[#D9D9D9] rounded-[10px] p-3 xl:py-4 xl:px-5 placeholder:text-[#9D9B9B] xl:text-lg w-full outline-none"
                />
              </div>
              <div className="flex flex-col lg:flex-row gap-3 lg:gap-6 xl:gap-x-11">
                <div className="lg:w-1/2">
                  <label className="text-[#5B5B5B] mb-1 lg:mb-2.5 text-sm lg:text-base font-semibold block">
                    Start date / Time
                  </label>
                  <input
                    type="text"
                    placeholder="September 24, 2017 07:59 am"
                    className="border border-[#D9D9D9] rounded-[10px] p-3 xl:py-4 xl:px-5 placeholder:text-[#9D9B9B] xl:text-lg w-full outline-none"
                  />
                </div>
                <div className="lg:w-1/2">
                  <label className="text-[#5B5B5B] mb-1 lg:mb-2.5 text-sm lg:text-base font-semibold block">
                    End Date / Time
                  </label>
                  <input
                    type="text"
                    placeholder="September 24, 2017 07:59 am"
                    className="border border-[#D9D9D9] rounded-[10px] p-3 xl:py-4 xl:px-5 placeholder:text-[#9D9B9B] xl:text-lg w-full outline-none"
                  />
                </div>
              </div>
              <div className="w-full">
                <label className="text-[#5B5B5B] mb-1 lg:mb-2.5 text-sm lg:text-base font-semibold block">
                  Location
                </label>
                <input
                  type="text"
                  placeholder="2118 Thornridge Cir, Syracuse, Connecticut 35624"
                  className="border border-[#D9D9D9] rounded-[10px] p-3 xl:py-4 xl:px-5 placeholder:text-[#9D9B9B] xl:text-lg w-full outline-none"
                />
              </div>
              <div className="flex flex-col lg:flex-row gap-3 lg:gap-6 xl:gap-x-11">
                <div className="lg:w-1/2">
                  <label className="text-[#5B5B5B] mb-1 lg:mb-2.5 text-sm lg:text-base font-semibold block">
                    Notification
                  </label>
                  <div className="relative">
                    <select className="w-full border border-[#D9D9D9] bg-white rounded-[10px] xl:text-lg p-3 xl:py-4 xl:pl-5 xl:pr-10 transition duration-300 ease outline-none appearance-none cursor-pointer">
                      <option value="30 mins">30 mins</option>
                      <option value="60 mins">60 mins</option>
                      <option value="90 mins">90 mins</option>
                    </select>
                    <svg
                      width="17"
                      height="10"
                      viewBox="0 0 17 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute top-6 right-4 w-4 h-auto"
                    >
                      <path
                        d="M7.70312 9.54688C8.125 9.96875 8.82812 9.96875 9.25 9.54688L15.625 3.17188C16.0938 2.70312 16.0938 2 15.625 1.57812L14.5938 0.5C14.125 0.078125 13.4219 0.078125 13 0.5L8.45312 5.04688L3.95312 0.5C3.53125 0.078125 2.82812 0.078125 2.35938 0.5L1.32812 1.57812C0.859375 2 0.859375 2.70312 1.32812 3.17188L7.70312 9.54688Z"
                        fill="#696984"
                      />
                    </svg>
                  </div>
                </div>
                <div className="lg:w-1/2">
                  <label className="text-[#5B5B5B] mb-1 lg:mb-2.5 text-sm lg:text-base font-semibold block">
                    Email
                  </label>
                  <input
                    type="text"
                    placeholder="jessica.hansome@example.com"
                    className="border border-[#D9D9D9] rounded-[10px] p-3 xl:py-4 xl:px-5 placeholder:text-[#9D9B9B] xl:text-lg w-full outline-none"
                  />
                </div>
              </div>
              <div className="w-full">
                <label className="text-[#5B5B5B] mb-1 lg:mb-2.5 text-sm lg:text-base font-semibold block">
                  Event Description
                </label>
                <textarea
                  name=""
                  id=""
                  placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit"
                  className="w-full h-52 md:h-64 border border-[#D9D9D9] rounded-[10px] outline-none py-4 px-5 resize-none xl:text-lg"
                />
              </div>
              <div className="flex justify-end">
                <Link
                  to="/course-calendar-create2"
                  className="pt-3 pb-4 px-3 min-w-52 lg:min-w-64 inline-block rounded-xl bg-[#49BBBD] text-white text-xl text-center font-semibold xl:font-bold hover:bg-[#252641] hover:text-white"
                >
                  Save Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CourseCalendarCreate1;
