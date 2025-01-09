import React from "react";
import Header from "../Componant/Header";
import Footer from "../Componant/Footer";
import { Link } from "react-router-dom";
import getChoicePic1 from "../../src/images/recommended2.jpg";
import getChoicePic2 from "../../src/images/recommended3.jpg";
import getChoicePic3 from "../../src/images/recommended4.jpg";
import getChoicePic4 from "../../src/images/recommended5.jpg";
import getChoicePic5 from "../../src/images/recommended6.jpg";
import getChoicePic6 from "../../src/images/recommended7.jpg";
import getChoicePic7 from "../../src/images/recommended8.jpg";
import getChoicePic8 from "../../src/images/recommended9.jpg";
import User from "../../src/images/user.png";
import learningPlatform from "../../src/images/learning-platform.png";
import recommendedPic1 from "../../src/images/recommended1.jpg";
import classesToughtPic1 from "../../src/images/classes-tought1.jpg";
import classesToughtPic2 from "../../src/images/classes-tought2.jpg";
import classesToughtPic3 from "../../src/images/classes-tought3.jpg";
import classesToughtPic4 from "../../src/images/meeting-thumb3.jpg";
import studentSay from "../../src/images/student-say.png";
import offersPic1 from "../../src/images/offer-pic1.jpg";
import offersPic2 from "../../src/images/offer-pic2.jpg";
import offersPic3 from "../../src/images/offer-pic3.jpg";

const searchFilter = [
  {
    filterValue: "Subject",
    filterValue1: "Subject1",
    filterValue2: "Subject2",
  },
  {
    filterValue: "Partner",
    filterValue1: "Partner1",
    filterValue2: "Partner2",
  },
  {
    filterValue: "Program",
    filterValue1: "Program1",
    filterValue2: "Program2",
  },
  {
    filterValue: "Language",
    filterValue1: "Language1",
    filterValue2: "Language2",
  },
  {
    filterValue: "Abaliability",
    filterValue1: "Abaliability1",
    filterValue2: "Abaliability2",
  },
  {
    filterValue: "Learning Type",
    filterValue1: "Learning Type1",
    filterValue2: "Learning Type2",
  },
];

const getChoice = [
  {
    getChoicePic: getChoicePic1,
    getChoiceTag: "Design",
    getChoiceTime: "3 Month",
    getChoiceTitle: "AWS Certified solutions Architect",
    getChoiceDisc:
      "Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor",
    getChoiceUser: User,
    getChoiceUserName: "Lina",
    getChoiceOldPrice: "$100",
    getChoiceNewPrice: "$80",
  },
  {
    getChoicePic: getChoicePic2,
    getChoiceTag: "Design",
    getChoiceTime: "3 Month",
    getChoiceTitle: "AWS Certified solutions Architect",
    getChoiceDisc:
      "Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor",
    getChoiceUser: User,
    getChoiceUserName: "Lina",
    getChoiceOldPrice: "$100",
    getChoiceNewPrice: "$80",
  },
  {
    getChoicePic: getChoicePic3,
    getChoiceTag: "Design",
    getChoiceTime: "3 Month",
    getChoiceTitle: "AWS Certified solutions Architect",
    getChoiceDisc:
      "Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor",
    getChoiceUser: User,
    getChoiceUserName: "Lina",
    getChoiceOldPrice: "$100",
    getChoiceNewPrice: "$80",
  },
  {
    getChoicePic: getChoicePic4,
    getChoiceTag: "Design",
    getChoiceTime: "3 Month",
    getChoiceTitle: "AWS Certified solutions Architect",
    getChoiceDisc:
      "Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor",
    getChoiceUser: User,
    getChoiceUserName: "Lina",
    getChoiceOldPrice: "$100",
    getChoiceNewPrice: "$80",
  },
  {
    getChoicePic: getChoicePic5,
    getChoiceTag: "Design",
    getChoiceTime: "3 Month",
    getChoiceTitle: "AWS Certified solutions Architect",
    getChoiceDisc:
      "Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor",
    getChoiceUser: User,
    getChoiceUserName: "Lina",
    getChoiceOldPrice: "$100",
    getChoiceNewPrice: "$80",
  },
  {
    getChoicePic: getChoicePic6,
    getChoiceTag: "Design",
    getChoiceTime: "3 Month",
    getChoiceTitle: "AWS Certified solutions Architect",
    getChoiceDisc:
      "Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor",
    getChoiceUser: User,
    getChoiceUserName: "Lina",
    getChoiceOldPrice: "$100",
    getChoiceNewPrice: "$80",
  },
  {
    getChoicePic: getChoicePic7,
    getChoiceTag: "Design",
    getChoiceTime: "3 Month",
    getChoiceTitle: "AWS Certified solutions Architect",
    getChoiceDisc:
      "Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor",
    getChoiceUser: User,
    getChoiceUserName: "Lina",
    getChoiceOldPrice: "$100",
    getChoiceNewPrice: "$80",
  },
  {
    getChoicePic: getChoicePic8,
    getChoiceTag: "Design",
    getChoiceTime: "3 Month",
    getChoiceTitle: "AWS Certified solutions Architect",
    getChoiceDisc:
      "Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor",
    getChoiceUser: User,
    getChoiceUserName: "Lina",
    getChoiceOldPrice: "$100",
    getChoiceNewPrice: "$80",
  },
];

const recommendedForYou = [
  {
    recommendedPic: recommendedPic1,
    recommendedTag: "Design",
    recommendedTime: "3 Month",
    recommendedTitle: "AWS Certified solutions Architect",
    recommendedDisc:
      "Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor",
    recommendedUser: User,
    recommendedUserName: "Lina",
    recommendedOldPrice: "$100",
    recommendedNewPrice: "$80",
  },
  {
    recommendedPic: getChoicePic6,
    recommendedTag: "Design",
    recommendedTime: "3 Month",
    recommendedTitle: "AWS Certified solutions Architect",
    recommendedDisc:
      "Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor",
    recommendedUser: User,
    recommendedUserName: "Lina",
    recommendedOldPrice: "$100",
    recommendedNewPrice: "$80",
  },
  {
    recommendedPic: getChoicePic7,
    recommendedTag: "Design",
    recommendedTime: "3 Month",
    recommendedTitle: "AWS Certified solutions Architect",
    recommendedDisc:
      "Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor",
    recommendedUser: User,
    recommendedUserName: "Lina",
    recommendedOldPrice: "$100",
    recommendedNewPrice: "$80",
  },
  {
    recommendedPic: getChoicePic4,
    recommendedTag: "Design",
    recommendedTime: "3 Month",
    recommendedTitle: "AWS Certified solutions Architect",
    recommendedDisc:
      "Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor",
    recommendedUser: User,
    recommendedUserName: "Lina",
    recommendedOldPrice: "$100",
    recommendedNewPrice: "$80",
  },
];

const classesTought = [
  {
    classesToughtPic: classesToughtPic1,
    classesToughtTitle: "Jane Cooper",
    classesToughtDisc:
      "Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor",
  },
  {
    classesToughtPic: classesToughtPic2,
    classesToughtTitle: "Adam",
    classesToughtDisc:
      "Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor",
  },
  {
    classesToughtPic: classesToughtPic3,
    classesToughtTitle: "Tomara",
    classesToughtDisc:
      "Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor",
  },
  {
    classesToughtPic: classesToughtPic1,
    classesToughtTitle: "Jane Cooper",
    classesToughtDisc:
      "Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor",
  },
  {
    classesToughtPic: classesToughtPic1,
    classesToughtTitle: "Jane Cooper",
    classesToughtDisc:
      "Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor",
  },
  {
    classesToughtPic: classesToughtPic1,
    classesToughtTitle: "Jane Cooper",
    classesToughtDisc:
      "Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor",
  },
];

const educationOffers = [
  {
    offersPic: offersPic1,
    offersLabel: "50%",
    offersTitle: "Lorem ipsum dolor",
    offersDisc:
      "Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur dipising elit, sed do eiusmod tempor",
  },
  {
    offersPic: offersPic2,
    offersLabel: "10%",
    offersTitle: "Lorem ipsum dolor",
    offersDisc:
      "Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur dipising elit, sed do eiusmod tempor",
  },
  {
    offersPic: offersPic3,
    offersLabel: "50%",
    offersTitle: "Lorem ipsum dolor",
    offersDisc:
      "Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur dipising elit, sed do eiusmod tempor",
  },
];

function Search() {
  return (
    <>
      <Header />
      <div className="pt-[72px] md:pt-[92px] xl:pt-[112px] 2xl:pt-[128px]">
        <div className="search-banner py-8 md:py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="bg-white p-2 md:p-[5px] flex items-center justify-between gap-4 rounded-[10px]">
              <input
                type="text"
                placeholder="Search your favourite course"
                className="w-full outline-none pl-2 md:pl-7 tracking-[2px] placeholder:text-[#B4B5C2] text-sm md:text-base"
              />
              <Link
                to="/blog-detail"
                className="py-1.5 px-4 md:py-2.5 lg:py-3.5 md:px-10 inline-block rounded-xl bg-[#49BBBD] text-white md:text-xl font-semibold hover:bg-[#252641] hover:text-white"
              >
                Search
              </Link>
            </div>
            <div className="mt-3 md:mt-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 md:gap-3 xl:gap-5">
              {searchFilter.map((data, i) => (
                <div key={i} className="relative">
                  <select className="w-full bg-white rounded-[10px] xl:text-lg pl-4 pr-10 py-3 xl:py-3.5 transition duration-300 ease outline-none appearance-none cursor-pointer">
                    <option value="{data.filterValue}">
                      {data.filterValue}
                    </option>
                    <option value="{data.filterValue1}">
                      {data.filterValue1}
                    </option>
                    <option value="{data.filterValue2}">
                      {data.filterValue2}
                    </option>
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
                      fill="#252641"
                    />
                  </svg>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-10 2xl:gap-14 py-10 md:py-16">
            {getChoice.map((data, i) => (
              <div
                key={i}
                className="bg-white p-5 lg:pb-8 rounded-[20px] drop-shadow-[0_18px_47px_rgba(47,50,125,0.10)]"
              >
                <div className="overflow-hidden rounded-[20px]">
                  <img src={data.getChoicePic} alt="" className="w-full" />
                </div>
                <div className="flex items-center justify-between py-5">
                  <div className="flex items-center gap-2.5">
                    <svg
                      width="21"
                      height="21"
                      viewBox="0 0 21 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="0.5"
                        y="0.5"
                        width="9"
                        height="9"
                        rx="1.5"
                        stroke="#D9D9D9"
                      />
                      <rect
                        x="0.5"
                        y="11.5"
                        width="9"
                        height="9"
                        rx="1.5"
                        stroke="#D9D9D9"
                      />
                      <rect
                        x="11.5"
                        y="11.5"
                        width="9"
                        height="9"
                        rx="1.5"
                        stroke="#D9D9D9"
                      />
                      <rect
                        x="11.5"
                        y="0.5"
                        width="9"
                        height="9"
                        rx="1.5"
                        stroke="#D9D9D9"
                      />
                    </svg>
                    <span className="text-sm text-[#696984] font-medium">
                      {data.getChoiceTag}
                    </span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <div className="flex items-center gap-2.5">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 0.375C5.57812 0.375 0.375 5.57812 0.375 12C0.375 18.4219 5.57812 23.625 12 23.625C18.4219 23.625 23.625 18.4219 23.625 12C23.625 5.57812 18.4219 0.375 12 0.375ZM12 21.375C6.79688 21.375 2.625 17.2031 2.625 12C2.625 6.84375 6.79688 2.625 12 2.625C17.1562 2.625 21.375 6.84375 21.375 12C21.375 17.2031 17.1562 21.375 12 21.375ZM14.8594 16.5C15.1406 16.6875 15.4688 16.6406 15.6562 16.3594L16.5469 15.1875C16.7344 14.9062 16.6875 14.5781 16.4062 14.3906L13.3125 12.0938V5.4375C13.3125 5.15625 13.0312 4.875 12.75 4.875H11.25C10.9219 4.875 10.6875 5.15625 10.6875 5.4375V13.1719C10.6875 13.3125 10.7344 13.5 10.875 13.5938L14.8594 16.5Z"
                          fill="#D9D9D9"
                        />
                      </svg>
                      <span className="text-sm text-[#696984] font-medium">
                        {data.getChoiceTime}
                      </span>
                    </div>
                  </div>
                </div>
                <h3 className="md:md:text-lg xl:text-xl 2xl:text-2xl font-medium text-[#252641] leading-normal">
                  {data.getChoiceTitle}
                </h3>
                <p className="my-4 2xl:mt-5 2xl:mb-4 text-[#696984] text-sm md:text-lg">
                  {data.getChoiceDisc}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <img
                      src={data.getChoiceUser}
                      alt=""
                      className="rounded-full w-[44px] aspect-square"
                    />
                    <span className="text-lg font-medium">
                      {data.getChoiceUserName}
                    </span>
                  </div>
                  <div className="flex items-center gap-3.5">
                    <span className="text-[#808080] text-lg font-light line-through">
                      {data.getChoiceOldPrice}
                    </span>
                    <span className="text-[#49BBBD] xl:text-xl 2xl:text-2xl font-bold">
                      {data.getChoiceNewPrice}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-[#EBF5FF] p-4 md:p-6 lg:py-8 lg:px-20 2xl:px-32 rounded-[20px] flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/2">
              <h2 className="text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-semibold text-[#252641]">
                Know about learning
                <br /> learning platform
              </h2>
              <ul className="my-5 2xl:my-7 flex flex-col gap-2 lg:gap-4">
                <li className="flex items-center gap-4 text-sm md:text-base lg:text-lg text-[#2D3436]">
                  <span className="w-5 aspect-square rounded-full bg-[#A3F2E3]"></span>
                  Free E-book, video & consolation
                </li>
                <li className="flex items-center gap-4 text-sm md:text-base lg:text-lg text-[#2D3436]">
                  <span className="w-5 aspect-square rounded-full bg-[#A3F2E3]"></span>
                  Top instructors from around world
                </li>
                <li className="flex items-center gap-4 text-sm md:text-base lg:text-lg text-[#2D3436]">
                  <span className="w-5 aspect-square rounded-full bg-[#A3F2E3]"></span>
                  Top courses from your team
                </li>
              </ul>
              <Link
                to="/blog-detail"
                className="py-3 xl:py-5 px-6 xl:px-16 inline-block rounded-xl bg-[#49BBBD] text-white text-base font-semibold xl:font-bold hover:bg-[#252641] hover:text-white"
              >
                Start learning now
              </Link>
            </div>
            <div className="md:w-1/2">
              <img src={learningPlatform} alt="" className="w-full" />
            </div>
          </div>
        </div>
        <div className="bg-[#EBF5FF] py-10 md:py-12 lg:py-16 xl:py-24 2xl:pb-52 mt-10 md:mt-12 lg:mt-16">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-4 md:mb-6 lg:mb-10 xl:mb-[50px] gap-3 md:gap-0">
              <h2 className="text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-medium">
                Recommended for you
              </h2>
              <Link
                href=""
                className="text-[#49BBBD] font-semibold text-base lg:text-lg xl:text-xl whitespace-nowrap"
              >
                See all
              </Link>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-10 2xl:gap-[50px]">
              {recommendedForYou.map((data, i) => (
                <div
                  key={i}
                  className="bg-white p-4 md:px-5 md:pt-5 md:pb-8 rounded-[20px] drop-shadow-[0_18px_47px_rgba(47,50,125,0.10)]"
                >
                  <div className="overflow-hidden rounded-[20px]">
                    <img src={data.recommendedPic} alt="" className="w-full" />
                  </div>
                  <div className="flex items-center justify-between py-5">
                    <div className="flex items-center gap-2.5">
                      <svg
                        width="21"
                        height="21"
                        viewBox="0 0 21 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="0.5"
                          y="0.5"
                          width="9"
                          height="9"
                          rx="1.5"
                          stroke="#D9D9D9"
                        />
                        <rect
                          x="0.5"
                          y="11.5"
                          width="9"
                          height="9"
                          rx="1.5"
                          stroke="#D9D9D9"
                        />
                        <rect
                          x="11.5"
                          y="11.5"
                          width="9"
                          height="9"
                          rx="1.5"
                          stroke="#D9D9D9"
                        />
                        <rect
                          x="11.5"
                          y="0.5"
                          width="9"
                          height="9"
                          rx="1.5"
                          stroke="#D9D9D9"
                        />
                      </svg>
                      <span className="text-sm text-[#696984] font-medium">
                        {data.recommendedTag}
                      </span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <div className="flex items-center gap-2.5">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12 0.375C5.57812 0.375 0.375 5.57812 0.375 12C0.375 18.4219 5.57812 23.625 12 23.625C18.4219 23.625 23.625 18.4219 23.625 12C23.625 5.57812 18.4219 0.375 12 0.375ZM12 21.375C6.79688 21.375 2.625 17.2031 2.625 12C2.625 6.84375 6.79688 2.625 12 2.625C17.1562 2.625 21.375 6.84375 21.375 12C21.375 17.2031 17.1562 21.375 12 21.375ZM14.8594 16.5C15.1406 16.6875 15.4688 16.6406 15.6562 16.3594L16.5469 15.1875C16.7344 14.9062 16.6875 14.5781 16.4062 14.3906L13.3125 12.0938V5.4375C13.3125 5.15625 13.0312 4.875 12.75 4.875H11.25C10.9219 4.875 10.6875 5.15625 10.6875 5.4375V13.1719C10.6875 13.3125 10.7344 13.5 10.875 13.5938L14.8594 16.5Z"
                            fill="#D9D9D9"
                          />
                        </svg>
                        <span className="text-sm text-[#696984] font-medium">
                          {data.recommendedTime}
                        </span>
                      </div>
                    </div>
                  </div>
                  <h3 className="md:md:text-lg xl:text-xl 2xl:text-2xl font-medium text-[#252641] leading-normal">
                    {data.recommendedTitle}
                  </h3>
                  <p className="my-4 2xl:mt-5 2xl:mb-4 text-[#696984] text-sm md:text-lg">
                    {data.recommendedDisc}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <img
                        src={data.recommendedUser}
                        alt=""
                        className="rounded-full w-[44px] aspect-square"
                      />
                      <span className="text-lg font-medium">
                        {data.recommendedUserName}
                      </span>
                    </div>
                    <div className="flex items-center gap-3.5">
                      <span className="text-[#808080] text-lg font-light line-through">
                        {data.recommendedOldPrice}
                      </span>
                      <span className="text-[#49BBBD] xl:text-xl 2xl:text-2xl font-bold">
                        {data.recommendedNewPrice}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="py-10 md:py-12 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-4 md:mb-6 lg:mb-10 xl:mb-[50px] gap-3 md:gap-0">
              <h2 className="text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-medium">
                Classes tought by real creators
              </h2>
              <Link
                href=""
                className="text-[#49BBBD] font-semibold text-base lg:text-lg xl:text-xl whitespace-nowrap"
              >
                See all
              </Link>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 lg:gap-12">
              {classesTought.map((data, i) => (
                <div
                  key={i}
                  className="bg-white drop-shadow-[2px_2px_10px_rgba(0,0,0,0.25)] md:mt-12 lg:mt-20 xl:mt-28 2xl:mt-[138px] text-center p-4 md:px-2 lg:px-4 2xl:px-16 md:pb-5 lg:pb-[30px] rounded-xl md:rounded-none"
                >
                  <img
                    src={data.classesToughtPic}
                    alt=""
                    className="mx-auto md:-mt-12 lg:-mt-20 xl:-mt-28 2xl:mt-[-138px] w-32 md:w-40 lg:w-48 xl:w-56 2xl:w-[278px] rounded-xl md:rounded-none"
                  />
                  <h2 className="text-lg xl:text-xl 2xl:text-2xl font-medium text-[#252641] my-5">
                    {data.classesToughtTitle}
                  </h2>
                  <p className="md:text-sm lg:text-base text-[#696984]">
                    {data.classesToughtDisc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="bg-[#EBF5FF] py-10 md:py-12 lg:pt-[70px] lg:pb-20">
          <div className="container mx-auto px-4">
            <h2 className="text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-medium mb-4 md:mb-6 lg:mb-10 xl:mb-14 2xl:mb-[70px]">
              What our students have to say
            </h2>
            <div className="bg-white flex flex-col md:flex-row items-center gap-5 md:gap-0 p-5 md:p-8 lg:p-10 xl:pt-20 xl:pl-24 xl:pb-8 xl:pr-14 rounded-xl md:rounded-3xl lg:rounded-[40px]">
              <img
                src={studentSay}
                alt=""
                className="md:w-4/12 lg:w-2/5 2xl:w-auto"
              />
              <div className="flex-1 md:px-10 lg:px-16 xl:px-20 2xl:px-24">
                <h2 className="text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-semibold 2xl:font-bold text-[#252641]">
                  Savannah Nguyen
                </h2>
                <Link
                  to="mailto:tanya.hill@example.com"
                  className="md:text-lg xl:text-xl 2xl:text-2xl block my-3 md:my-4 xl:mt-7 xl:mb-5"
                >
                  tanya.hill@example.com
                </Link>
                <p className="text-sm md:text-base xl:text-lg text-[#696984]">
                  Lorem ipsum dolor sit amet, consectetur adipising elit, sed do
                  eiusmod tempor
                </p>
                <p className="text-sm md:text-base xl:text-lg text-[#696984]">
                  Lorem ipsum dolor sit amet, consectetur adipising elit, sed do
                  eiusmod tempor
                </p>
                <p className="text-sm md:text-base xl:text-lg text-[#696984]">
                  Lorem ipsum dolor sit amet, consectetur adipising elit, sed do
                  eiusmod tempor
                </p>
                <ul className="flex gap-3 md:gap-6 mt-4 md:mt-8">
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
                          d="M24 16C24 11.6 20.4 8 16 8C11.6 8 8 11.6 8 16C8 20 10.9 23.3 14.7 23.9V18.3H12.7V16H14.7V14.2C14.7 12.2 15.9 11.1 17.7 11.1C18.6 11.1 19.5 11.3 19.5 11.3V13.3H18.5C17.5 13.3 17.2 13.9 17.2 14.5V16H19.4L19 18.3H17.1V24C21.1 23.4 24 20 24 16Z"
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
              <ul className="flex md:flex-col gap-4 xl:gap-6 xl:pt-11 w-full md:w-auto">
                <li className="cursor-pointer w-12 md:w-10 lg:w-12 xl:w-16 2xl:w-[79px] aspect-square">
                  <img
                    src={classesToughtPic2}
                    alt=""
                    className="w-full aspect-square rounded-full object-cover align-middle"
                  />
                </li>
                <li className="cursor-pointer w-12 md:w-10 lg:w-12 xl:w-16 2xl:w-[79px] aspect-square">
                  <img
                    src={classesToughtPic1}
                    alt=""
                    className="w-full aspect-square rounded-full object-cover align-middle"
                  />
                </li>
                <li className="cursor-pointer w-12 md:w-10 lg:w-12 xl:w-16 2xl:w-[79px] aspect-square">
                  <img
                    src={classesToughtPic3}
                    alt=""
                    className="w-full aspect-square rounded-full object-cover align-middle"
                  />
                </li>
                <li className="cursor-pointer w-12 md:w-10 lg:w-12 xl:w-16 2xl:w-[79px] aspect-square">
                  <img
                    src={classesToughtPic4}
                    alt=""
                    className="w-full aspect-square rounded-full object-cover align-middle"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="py-10 md:py-12 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between pb-6 md:pb-8 lg:pb-10 xl:pb-[70px]">
              <h3 className="text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-medium">
                Top Education offers and deals are listed here
              </h3>
              <Link
                href=""
                className="text-[#49BBBD] font-semibold text-base lg:text-lg xl:text-xl flex-none"
              >
                See all
              </Link>
            </div>
            <div className="flex flex-col md:flex-row relative gap-5 lg:gap-10 xl:gap-14 2xl:gap-[72px]">
              {educationOffers.map((data, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-[20px] overflow-hidden relative"
                >
                  <img src={data.offersPic} alt="" className="w-full" />
                  <div className="p-5 md:p-3 lg:p-5 xl:p-11 absolute w-full h-full top-0 left-0">
                    <label className="text-2xl md:text-xl lg:text-3xl 2xl:text-[50px] font-semibold lg:font-bold text-white bg-[#49BBBD] rounded-[10px] aspect-square p-2 inline-flex items-center justify-center">
                      {data.offersLabel}
                    </label>
                    <h2 className="mt-3 lg:mt-5 xl:mt-7 mb-1 lg:mb-2 text-xl md:text-base lg:text-xl xl:text-[28px] font-bold text-white">
                      {data.offersTitle}
                    </h2>
                    <p className="text-lg md:text-sm lg:text-lg xl:text-xl text-white line-clamp-4 2xl:line-clamp-5 leading-normal">
                      {data.offersDisc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Search;
