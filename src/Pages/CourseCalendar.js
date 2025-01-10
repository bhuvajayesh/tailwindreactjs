import React from "react";
import { Link } from "react-router-dom";
import CalendarSidebar from "../Componant/CalendarSidebar";

function CourseCalendar() {
  return (
    <>
      <div className="flex flex-col md:flex-row bg-[#EBF5FF] md:h-screen">
        <div className="md:w-2/5 lg:w-2/6 xl:w-1/4 bg-white p-4 lg:pt-6 lg:pb-7 lg:px-5 h-full overflow-y-auto no-scrollbar">
          <Link
            to="/course-calendar-create1"
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
              Share and refer
            </h2>
            <p className="text-[#696984] text-sm md:text-base lg:text-lg">
              Lorem ipsum dolor sit amet, consectetur adi piscing elit, sed do
              eiusmodadipiscing elit, sed do eiusmodLorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do
              eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmodadipiscing elit, sed do eiusmodeiusmodadipiscing
              elit, sed do eiusmodLoremLorem ipsum dolor sit amet, consectetur
              adi piscing elit, sed do eiusmodadipiscing elit, sed do
              eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmodadipiscing elit, sed do eiusmodLorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit,
              sed do eiusmodeiusmodadipiscing elit, sed do eiusmodLorem
              eiusmodLorem dolor sit amet, consectetur adipiscing
            </p>
            <div className="bg-white mt-6 md:mt-10 xl:mt-[50px] p-10 rounded-xl md:rounded-[18px] text-center">
              <h2 className="text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-semibold">
                Calendar
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CourseCalendar;
