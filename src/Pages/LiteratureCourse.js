import React from "react";
import Header from "../Componant/Header";
import Footer from "../Componant/Footer";
import courseUser from "../../src/images/classes-tought3.jpg";
import CourseTabPic1 from "../../src/images/book1.jpg";
import CourseTabPic2 from "../../src/images/book2.jpg";
import CourseTabPic3 from "../../src/images/book3.jpg";
import CourseTabPic4 from "../../src/images/book4.jpg";
import CourseTabPic5 from "../../src/images/book5.jpg";
import CourseTabPic6 from "../../src/images/book6.jpg";
import { Link } from "react-router-dom";
import "react-tabs/style/react-tabs.css";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

const TabNameList = [
  "About",
  "Course",
  "Notes",
  "Project",
  "Podcast",
  "Book",
  "Review",
];

const CourseTabList = [
  {
    CourseBookPic: CourseTabPic1,
    CourseBookName: "All Benefits of PLUS",
    CourseBookPrice: "$24",
  },
  {
    CourseBookPic: CourseTabPic2,
    CourseBookName: "All Benefits of PLUS",
    CourseBookPrice: "$24",
  },
  {
    CourseBookPic: CourseTabPic3,
    CourseBookName: "All Benefits of PLUS",
    CourseBookPrice: "$24",
  },
  {
    CourseBookPic: CourseTabPic4,
    CourseBookName: "All Benefits of PLUS",
    CourseBookPrice: "$24",
  },
  {
    CourseBookPic: CourseTabPic5,
    CourseBookName: "All Benefits of PLUS",
    CourseBookPrice: "$24",
  },
  {
    CourseBookPic: CourseTabPic6,
    CourseBookName: "All Benefits of PLUS",
    CourseBookPrice: "$24",
  },
];

function LiteratureCourse() {
  return (
    <>
      <Header />
      <div className="pt-[72px] md:pt-[92px] xl:pt-[112px] 2xl:pt-[128px]">
        <div className="container mx-auto px-4">
          <div className="-mx-4 md:mx-0 literature-course-bg flex flex-col lg:flex-row items-center gap-4 md:gap-6 xl:gap-[34px] md:rounded-[20px] p-6 xl:p-8 xl:pl-12">
            <div className="bg-white rounded-full p-1.5 lg:p-2 xl:p-2.5 2xl:p-3">
              <img
                src={courseUser}
                alt=""
                className="rounded-full aspect-square w-48 md:w-40 lg:w-52 xl:w-64 2xl:w-[338px]"
              />
            </div>
            <div className="lg:flex-1 bg-white bg-opacity-80 rounded-[20px] p-4 lg:p-6 xl:p-8 2xl:p-12">
              <div className="flex items-center justify-between">
                <h2 className="lg:text-xl xl:text-2xl 2xl:text-3xl font-medium">
                  John Anderson
                </h2>
                <Link
                  to="/blog-detail"
                  className="py-2 px-4 md:py-3 md:px-6 inline-block rounded-xl bg-[#49BBBD] text-white xl:text-lg 2xl:text-xl font-semibold hover:bg-[#252641] hover:text-white"
                >
                  Enroll Now
                </Link>
              </div>
              <p className="text-[#64696A] mt-2 mb-4 md:text-lg">
                Assistant Professor at Mcmaster University
              </p>
              <p className="text-[#2D3436] lg:text-lg xl:text-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt utlabore et dolore magna aliqua. Ut
                enum ad minim veniam, quis nostrud
              </p>
              <div className="flex flex-col md:flex-row justify-between mt-3 md:mt-5 xl:mt-7 gap-4">
                <ul className="flex flex-wrap md:flex-nowrap items-center gap-3 md:gap-6 lg:gap-8 xl:gap-16 2xl:gap-32 xl:pl-4 2xl:pl-8 flex-1">
                  <li className="flex items-center gap-1">
                    <svg
                      width="23"
                      height="21"
                      viewBox="0 0 23 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20.625 7.21875L14.9219 6.39844L12.3438 1.20312C11.9141 0.304688 10.5859 0.265625 10.1172 1.20312L7.57812 6.39844L1.83594 7.21875C0.820312 7.375 0.429688 8.625 1.17188 9.36719L5.27344 13.3906L4.29688 19.0547C4.14062 20.0703 5.23438 20.8516 6.13281 20.3828L11.25 17.6875L16.3281 20.3828C17.2266 20.8516 18.3203 20.0703 18.1641 19.0547L17.1875 13.3906L21.2891 9.36719C22.0312 8.625 21.6406 7.375 20.625 7.21875ZM15.1562 12.7266L16.0938 18.1172L11.25 15.5781L6.36719 18.1172L7.30469 12.7266L3.35938 8.89844L8.78906 8.11719L11.25 3.19531L13.6719 8.11719L19.1016 8.89844L15.1562 12.7266Z"
                        fill="#2D3436"
                        fillOpacity="0.8"
                      />
                    </svg>
                    <span className="text-[#515657] text-[15px]">
                      4.9 instructor Rating
                    </span>
                  </li>
                  <li className="flex items-center gap-1">
                    <svg
                      width="23"
                      height="15"
                      viewBox="0 0 23 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.25 3.125C10.8203 3.16406 10.3906 3.20312 10 3.32031C10.1953 3.63281 10.2734 4.02344 10.3125 4.375C10.3125 5.58594 9.29688 6.5625 8.125 6.5625C7.73438 6.5625 7.34375 6.48438 7.07031 6.28906C6.95312 6.67969 6.875 7.07031 6.875 7.5C6.875 9.92188 8.82812 11.875 11.25 11.875C13.6719 11.875 15.625 9.92188 15.625 7.5C15.625 5.11719 13.6719 3.16406 11.25 3.16406V3.125ZM22.3438 6.95312C20.2344 2.8125 16.0156 0 11.25 0C6.44531 0 2.22656 2.8125 0.117188 6.95312C0.0390625 7.10938 0 7.30469 0 7.5C0 7.73438 0.0390625 7.92969 0.117188 8.08594C2.22656 12.2266 6.44531 15 11.25 15C16.0156 15 20.2344 12.2266 22.3438 8.08594C22.4219 7.92969 22.4609 7.73438 22.4609 7.53906C22.4609 7.30469 22.4219 7.10938 22.3438 6.95312ZM11.25 13.125C7.38281 13.125 3.82812 10.9766 1.95312 7.5C3.82812 4.02344 7.38281 1.875 11.25 1.875C15.0781 1.875 18.6328 4.02344 20.5078 7.5C18.6328 10.9766 15.0781 13.125 11.25 13.125Z"
                        fill="#2D3436"
                        fillOpacity="0.8"
                      />
                    </svg>
                    <span className="text-[#515657] text-[15px]">
                      1,592 Students
                    </span>
                  </li>
                  <li className="flex items-center gap-1">
                    <svg
                      width="20"
                      height="21"
                      viewBox="0 0 20 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.4922 9.79688L7.61719 5.61719C6.99219 5.30469 6.25 5.73438 6.25 6.4375V14.5625C6.25 15.3047 6.99219 15.7344 7.61719 15.3828L14.4922 11.4375C15.1562 11.0859 15.1562 10.1875 14.4922 9.79688ZM19.6875 10.5C19.6875 5.14844 15.3516 0.8125 10 0.8125C4.64844 0.8125 0.3125 5.14844 0.3125 10.5C0.3125 15.8516 4.64844 20.1875 10 20.1875C15.3516 20.1875 19.6875 15.8516 19.6875 10.5ZM2.1875 10.5C2.1875 6.20312 5.66406 2.6875 10 2.6875C14.2969 2.6875 17.8125 6.20312 17.8125 10.5C17.8125 14.8359 14.2969 18.3125 10 18.3125C5.66406 18.3125 2.1875 14.8359 2.1875 10.5Z"
                        fill="#2D3436"
                        fillOpacity="0.8"
                      />
                    </svg>
                    <span className="text-[#515657] text-[15px]">Courses</span>
                  </li>
                </ul>
                <ul className="flex justify-end md:justify-normal gap-3 md:gap-6">
                  <li>
                    <Link to="">
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16ZM22.1 11.5C22.8 11.4 23.4 11.3 24 11C23.6 11.7 23 12.3 22.3 12.7C22.5 17.4 19.1 22.5 13 22.5C11.2 22.5 9.5 21.9 8 21C9.7 21.2 11.5 20.7 12.7 19.8C11.2 19.8 10 18.8 9.6 17.5C10.1 17.6 10.6 17.5 11.1 17.4C9.6 17 8.5 15.6 8.5 14.1C9 14.3 9.5 14.5 10 14.5C8.6 13.5 8.1 11.6 9 10.1C10.7 12.1 13.1 13.4 15.8 13.5C15.3 11.5 16.9 9.5 19 9.5C19.9 9.5 20.8 9.9 21.4 10.5C22.2 10.3 22.9 10.1 23.5 9.7C23.3 10.5 22.8 11.1 22.1 11.5Z"
                          fill="#49BBBD"
                        />
                      </svg>
                    </Link>
                  </li>
                  <li>
                    <Link to="">
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0 16C0 24.8366 7.16344 32 16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16Z"
                          fill="#49BBBD"
                        />
                        <path
                          d="M23.6 12.1C23.4 11.4 22.9 10.9 22.2 10.7C21 10.4 15.9 10.4 15.9 10.4C15.9 10.4 10.9 10.4 9.60001 10.7C8.90001 10.9 8.4 11.4 8.2 12.1C8 13.4 8 16 8 16C8 16 8 18.6 8.3 19.9C8.5 20.6 9 21.1 9.7 21.3C10.9 21.6 16 21.6 16 21.6C16 21.6 21 21.6 22.3 21.3C23 21.1 23.5 20.6 23.7 19.9C24 18.6 24 16 24 16C24 16 24 13.4 23.6 12.1ZM14.4 18.4V13.6L18.6 16L14.4 18.4Z"
                          fill="white"
                        />
                      </svg>
                    </Link>
                  </li>
                  <li>
                    <Link to="">
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0 16C0 24.8366 7.16344 32 16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16Z"
                          fill="#49BBBD"
                        />
                        <path
                          d="M15.9992 9.19995C18.1992 9.19995 18.4992 9.19995 19.3992 9.19995C20.1992 9.19995 20.5992 9.39995 20.8992 9.49995C21.2992 9.69995 21.5992 9.79995 21.8992 10.1C22.1992 10.4 22.3992 10.7 22.4992 11.1C22.5992 11.4 22.6992 11.8 22.7992 12.6C22.7992 13.5 22.7992 13.7 22.7992 16C22.7992 18.3 22.7992 18.5 22.7992 19.4C22.7992 20.2 22.5992 20.6 22.4992 20.9C22.2992 21.3 22.1992 21.6 21.8992 21.9C21.5992 22.2 21.2992 22.4 20.8992 22.5C20.5992 22.6 20.1992 22.7 19.3992 22.8C18.4992 22.8 18.2992 22.8 15.9992 22.8C13.6992 22.8 13.4992 22.8 12.5992 22.8C11.7992 22.8 11.3992 22.6 11.0992 22.5C10.6992 22.3 10.3992 22.2 10.0992 21.9C9.79922 21.6 9.59922 21.3 9.49922 20.9C9.39922 20.6 9.29922 20.2 9.19922 19.4C9.19922 18.5 9.19922 18.3 9.19922 16C9.19922 13.7 9.19922 13.5 9.19922 12.6C9.19922 11.8 9.39922 11.4 9.49922 11.1C9.69922 10.7 9.79922 10.4 10.0992 10.1C10.3992 9.79995 10.6992 9.59995 11.0992 9.49995C11.3992 9.39995 11.7992 9.29995 12.5992 9.19995C13.4992 9.19995 13.7992 9.19995 15.9992 9.19995ZM15.9992 7.69995C13.6992 7.69995 13.4992 7.69995 12.5992 7.69995C11.6992 7.69995 11.0992 7.89995 10.5992 8.09995C10.0992 8.29995 9.59922 8.59995 9.09922 9.09995C8.59922 9.59995 8.39922 9.99995 8.09922 10.6C7.89922 11.1 7.79922 11.7 7.69922 12.6C7.69922 13.5 7.69922 13.8 7.69922 16C7.69922 18.3 7.69922 18.5 7.69922 19.4C7.69922 20.3 7.89922 20.9 8.09922 21.4C8.29922 21.9 8.59922 22.4 9.09922 22.9C9.59922 23.4 9.99922 23.6 10.5992 23.9C11.0992 24.1 11.6992 24.1999 12.5992 24.2999C13.4992 24.2999 13.7992 24.2999 15.9992 24.2999C18.1992 24.2999 18.4992 24.2999 19.3992 24.2999C20.2992 24.2999 20.8992 24.1 21.3992 23.9C21.8992 23.7 22.3992 23.4 22.8992 22.9C23.3992 22.4 23.5992 22 23.8992 21.4C24.0992 20.9 24.1992 20.3 24.2992 19.4C24.2992 18.5 24.2992 18.2 24.2992 16C24.2992 13.8 24.2992 13.5 24.2992 12.6C24.2992 11.7 24.0992 11.1 23.8992 10.6C23.6992 10.1 23.3992 9.59995 22.8992 9.09995C22.3992 8.59995 21.9992 8.39995 21.3992 8.09995C20.8992 7.89995 20.2992 7.79995 19.3992 7.69995C18.4992 7.69995 18.2992 7.69995 15.9992 7.69995Z"
                          fill="white"
                        />
                        <path
                          d="M15.9992 11.7C13.5992 11.7 11.6992 13.6 11.6992 16C11.6992 18.4 13.5992 20.3 15.9992 20.3C18.3992 20.3 20.2992 18.4 20.2992 16C20.2992 13.6 18.3992 11.7 15.9992 11.7ZM15.9992 18.8C14.4992 18.8 13.1992 17.6 13.1992 16C13.1992 14.5 14.3992 13.2 15.9992 13.2C17.4992 13.2 18.7992 14.4 18.7992 16C18.7992 17.5 17.4992 18.8 15.9992 18.8Z"
                          fill="white"
                        />
                        <path
                          d="M20.3992 12.6C20.9515 12.6 21.3992 12.1522 21.3992 11.6C21.3992 11.0477 20.9515 10.6 20.3992 10.6C19.8469 10.6 19.3992 11.0477 19.3992 11.6C19.3992 12.1522 19.8469 12.6 20.3992 12.6Z"
                          fill="white"
                        />
                      </svg>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-10 md:mt-12 lg:mt-16">
            <Tabs defaultIndex={5} onSelect={(index) => console.log(index)}>
              <TabList className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-2 lg:gap-4 2xl:gap-6">
                {TabNameList.map((item, i) => (
                  <Tab
                    key={i}
                    className="cursor-pointer p-3 md:p-2 lg:p-3 xl:py-4 bg-[#DDDDDD] text-[#696969] font-semibold text-sm md:text-lg xl:text-xl outline-none flex items-center justify-center rounded-xl"
                  >
                    {item}
                  </Tab>
                ))}
              </TabList>
              <div className="py-10 md:py-12 lg:pt-16 lg:pb-14">
                <TabPanel>
                  <h2 className="text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-medium mb-4 md:mb-6 lg:mb-10 xl:mb-[50px]">
                    About
                  </h2>
                </TabPanel>
                <TabPanel>
                  <h2 className="text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-medium mb-4 md:mb-6 lg:mb-10 xl:mb-[50px]">
                    Course
                  </h2>
                </TabPanel>
                <TabPanel>
                  <h2 className="text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-medium mb-4 md:mb-6 lg:mb-10 xl:mb-[50px]">
                    Notes
                  </h2>
                </TabPanel>
                <TabPanel>
                  <h2 className="text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-medium mb-4 md:mb-6 lg:mb-10 xl:mb-[50px]">
                    Project
                  </h2>
                </TabPanel>
                <TabPanel>
                  <h2 className="text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-medium mb-4 md:mb-6 lg:mb-10 xl:mb-[50px]">
                    Podcast
                  </h2>
                </TabPanel>
                <TabPanel>
                  <h2 className="text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-medium mb-4 md:mb-6 lg:mb-10 xl:mb-[50px]">
                    Literature course
                  </h2>
                  <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 lg:gap-10 xl:gap-16 2xl:gap-20">
                    {CourseTabList.map((data, i) => (
                      <div
                        key={i}
                        className="bg-white rounded-[10px] p-4 lg:p-6 drop-shadow-[2px_2px_10px_rgba(0,0,0,0.25)]"
                      >
                        <img
                          src={data.CourseBookPic}
                          alt=""
                          className="mx-auto rounded-xl"
                        />
                        <div className="flex items-center justify-between gap-3 mt-6">
                          <h3 className="lg:text-lg xl:text-xl 2xl:text-2xl font-light">
                            {data.CourseBookName}
                          </h3>
                          <label className="text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-bold text-[#49BBBD] text-opacity-80">
                            {data.CourseBookPrice}
                          </label>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabPanel>
                <TabPanel>
                  <h2 className="text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-medium mb-4 md:mb-6 lg:mb-10 xl:mb-[50px]">
                    Review
                  </h2>
                </TabPanel>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default LiteratureCourse;
