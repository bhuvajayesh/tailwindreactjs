import React from "react";
import { Link } from "react-router-dom";
import CalendarSidebar from "../Componant/CalendarSidebar";
import classroomVideo from "../../src/images/class.mp4";
import user from "../../src/images/user.png";

function CourseFullView() {
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
            <div>
              <video
                width="100%"
                controls
                // autoPlay
                loop
                className="rounded-[20px]"
              >
                <source src={classroomVideo} type="video/mp4" />
              </video>
            </div>
            <h2 className="text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-semibold mt-10 xl:mt-20">
              O6 Super Coins on the way
            </h2>
            <p className="text-[#696984] lg:text-lg my-5 xl:mt-[30px] xl:mb-[50px]">
              Lorem ipsum dolor sit amet, consectetur adi piscing elit, sed do
              eiusmodadipiscing elit, sed do eiusmodLorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do
              eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmodadipiscing elit, sed do eiusmodeiusmodadipiscing
              elit, sed do eiusmod
            </p>
            <h2 className="text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-semibold">
              Who this course is for?
            </h2>
            <p className="text-[#696984] lg:text-lg my-5 xl:mt-[30px] xl:mb-[50px]">
              Lorem ipsum dolor sit amet, consectetur adi piscing elit, sed do
              eiusmodadipiscing elit, sed do eiusmodLorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do
              eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmodadipiscing elit, sed do eiusmodeiusmodadipiscing
              elit, sed do eiusmodL
            </p>
            <h2 className="text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-semibold">
              Archievable
            </h2>
            <p className="text-[#696984] lg:text-lg my-5 xl:mt-[30px] xl:mb-16">
              Lorem ipsum dolor sit amet, consectetur adi piscing elit, sed do
              eiusmodadipiscing elit, sed do eiusmodLorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do
              eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmodadipiscing elit, sed do eiusmodeiusmodadipiscing
              elit, sed do eiusmodLWho this course is for? Lorem ipsum dolor sit
              amet, consectetur adi piscing elit, sed do eiusmodadipiscing elit,
              sed do eiusmodLorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmodadipiscing elit, sed do eiusmodLorem ipsum
              dolor sit amet, consectetur adipiscing elit, sed do
              eiusmodadipiscing elit, sed do eiusmodeiusmodadipiscing elit, sed
              do eiusmodL
            </p>
            <div className="bg-[#F48C06] bg-opacity-30 rounded-2xl p-5 lg:p-[30px] lg:pb-10">
              <div className="flex gap-4 lg:gap-5">
                <img
                  src={user}
                  alt=""
                  className="w-[70px] aspect-square rounded-lg"
                />
                <div>
                  <h3 className="text-[#2D3436] text-lg md:text-xl lg:text-2xl font-semibold">
                    Bulkin Simons
                  </h3>
                  <ul className="flex items-center gap-1.5 mt-2">
                    <li>
                      <svg
                        width="21"
                        height="22"
                        viewBox="0 0 21 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.51575 0.40484C9.7113 -0.134947 10.3774 -0.134947 10.5729 0.40484L12.9384 6.93459C13.0208 7.16216 13.2072 7.31765 13.4212 7.33734L19.5611 7.90248C20.0687 7.9492 20.2745 8.67646 19.8878 9.05679L15.2098 13.6576C15.0468 13.8179 14.9756 14.0695 15.0254 14.3091L16.4545 21.1882C16.5727 21.7568 16.0339 22.2064 15.5993 21.9016L10.3427 18.2153C10.1595 18.0869 9.92911 18.0869 9.74591 18.2153L4.48928 21.9016C4.05473 22.2064 3.5159 21.7568 3.63406 21.1882L5.06326 14.3091C5.11306 14.0695 5.04186 13.8179 4.87884 13.6576L0.20085 9.05679C-0.185866 8.67646 0.0199544 7.9492 0.527516 7.90248L6.66745 7.33734C6.88143 7.31765 7.06782 7.16216 7.15027 6.93459L9.51575 0.40484Z"
                          fill="#FDB022"
                        />
                      </svg>
                    </li>
                    <li>
                      <svg
                        width="21"
                        height="22"
                        viewBox="0 0 21 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.51575 0.40484C9.7113 -0.134947 10.3774 -0.134947 10.5729 0.40484L12.9384 6.93459C13.0208 7.16216 13.2072 7.31765 13.4212 7.33734L19.5611 7.90248C20.0687 7.9492 20.2745 8.67646 19.8878 9.05679L15.2098 13.6576C15.0468 13.8179 14.9756 14.0695 15.0254 14.3091L16.4545 21.1882C16.5727 21.7568 16.0339 22.2064 15.5993 21.9016L10.3427 18.2153C10.1595 18.0869 9.92911 18.0869 9.74591 18.2153L4.48928 21.9016C4.05473 22.2064 3.5159 21.7568 3.63406 21.1882L5.06326 14.3091C5.11306 14.0695 5.04186 13.8179 4.87884 13.6576L0.20085 9.05679C-0.185866 8.67646 0.0199544 7.9492 0.527516 7.90248L6.66745 7.33734C6.88143 7.31765 7.06782 7.16216 7.15027 6.93459L9.51575 0.40484Z"
                          fill="#FDB022"
                        />
                      </svg>
                    </li>
                    <li>
                      <svg
                        width="21"
                        height="22"
                        viewBox="0 0 21 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.51575 0.40484C9.7113 -0.134947 10.3774 -0.134947 10.5729 0.40484L12.9384 6.93459C13.0208 7.16216 13.2072 7.31765 13.4212 7.33734L19.5611 7.90248C20.0687 7.9492 20.2745 8.67646 19.8878 9.05679L15.2098 13.6576C15.0468 13.8179 14.9756 14.0695 15.0254 14.3091L16.4545 21.1882C16.5727 21.7568 16.0339 22.2064 15.5993 21.9016L10.3427 18.2153C10.1595 18.0869 9.92911 18.0869 9.74591 18.2153L4.48928 21.9016C4.05473 22.2064 3.5159 21.7568 3.63406 21.1882L5.06326 14.3091C5.11306 14.0695 5.04186 13.8179 4.87884 13.6576L0.20085 9.05679C-0.185866 8.67646 0.0199544 7.9492 0.527516 7.90248L6.66745 7.33734C6.88143 7.31765 7.06782 7.16216 7.15027 6.93459L9.51575 0.40484Z"
                          fill="#FDB022"
                        />
                      </svg>
                    </li>
                    <li>
                      <svg
                        width="21"
                        height="22"
                        viewBox="0 0 21 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.51575 0.40484C9.7113 -0.134947 10.3774 -0.134947 10.5729 0.40484L12.9384 6.93459C13.0208 7.16216 13.2072 7.31765 13.4212 7.33734L19.5611 7.90248C20.0687 7.9492 20.2745 8.67646 19.8878 9.05679L15.2098 13.6576C15.0468 13.8179 14.9756 14.0695 15.0254 14.3091L16.4545 21.1882C16.5727 21.7568 16.0339 22.2064 15.5993 21.9016L10.3427 18.2153C10.1595 18.0869 9.92911 18.0869 9.74591 18.2153L4.48928 21.9016C4.05473 22.2064 3.5159 21.7568 3.63406 21.1882L5.06326 14.3091C5.11306 14.0695 5.04186 13.8179 4.87884 13.6576L0.20085 9.05679C-0.185866 8.67646 0.0199544 7.9492 0.527516 7.90248L6.66745 7.33734C6.88143 7.31765 7.06782 7.16216 7.15027 6.93459L9.51575 0.40484Z"
                          fill="#FDB022"
                        />
                      </svg>
                    </li>
                    <li>
                      <svg
                        width="21"
                        height="22"
                        viewBox="0 0 21 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.51575 0.40484C9.7113 -0.134947 10.3774 -0.134947 10.5729 0.40484L12.9384 6.93459C13.0208 7.16216 13.2072 7.31765 13.4212 7.33734L19.5611 7.90248C20.0687 7.9492 20.2745 8.67646 19.8878 9.05679L15.2098 13.6576C15.0468 13.8179 14.9756 14.0695 15.0254 14.3091L16.4545 21.1882C16.5727 21.7568 16.0339 22.2064 15.5993 21.9016L10.3427 18.2153C10.1595 18.0869 9.92911 18.0869 9.74591 18.2153L4.48928 21.9016C4.05473 22.2064 3.5159 21.7568 3.63406 21.1882L5.06326 14.3091C5.11306 14.0695 5.04186 13.8179 4.87884 13.6576L0.20085 9.05679C-0.185866 8.67646 0.0199544 7.9492 0.527516 7.90248L6.66745 7.33734C6.88143 7.31765 7.06782 7.16216 7.15027 6.93459L9.51575 0.40484Z"
                          fill="#FDB022"
                        />
                      </svg>
                    </li>
                  </ul>
                </div>
              </div>
              <p className="text-[#696984] lg:text-lg mt-5 lg:mt-[30px]">
                Lorem ipsum dolor sit amet, consectetur adi piscing elit, sed do
                eiusmodadipiscing elit, sed do eiusmodLorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmodadipiscing
                elit, sed do eiusmodLorem
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CourseFullView;
