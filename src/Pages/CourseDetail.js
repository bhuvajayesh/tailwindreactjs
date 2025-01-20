import React from "react";
import Header from "../Componant/Header";
import Footer from "../Componant/Footer";
import CourseDetailBanner from "../../src/images/blog-detail-banner.jpg";
import user from "../../src/images/user.png";
import User from "../../src/images/user.png";
import recommendedPic1 from "../../src/images/recommended1.jpg";
import getChoicePic4 from "../../src/images/recommended5.jpg";
import getChoicePic6 from "../../src/images/recommended7.jpg";
import getChoicePic7 from "../../src/images/recommended8.jpg";
import physicalClass from "../../src/images/physical-classroom.jpg";
import offersPic from "../../src/images/education-offer.jpg";
import "react-tabs/style/react-tabs.css";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import ProgressBar from "@ramonak/react-progress-bar";
import { Link } from "react-router-dom";

const OverviewTabs = ["Overview", "Overview", "Overview", "Overview"];

const RatingStar = [
  {
    starNumber: "5 Stars",
    starCompleted: "5",
    starMaxCompleted: "7",
  },
  {
    starNumber: "4 Stars",
    starCompleted: "4",
    starMaxCompleted: "7",
  },
  {
    starNumber: "3 Stars",
    starCompleted: "3",
    starMaxCompleted: "7",
  },
  {
    starNumber: "2 Stars",
    starCompleted: "2",
    starMaxCompleted: "7",
  },
  {
    starNumber: "1 Stars",
    starCompleted: "1",
    starMaxCompleted: "7",
  },
];

const commentlist = [
  {
    commentUser: user,
    commentUserName: "Lina",
    commentTime: "3 Month",
    commentDisc:
      "Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...",
  },
  {
    commentUser: user,
    commentUserName: "Lina",
    commentTime: "3 Month",
    commentDisc:
      "Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...",
  },
];

const shareCourse = [
  {
    shareCourseIcon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="group"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16ZM22.1 11.5C22.8 11.4 23.4 11.3 24 11C23.6 11.7 23 12.3 22.3 12.7C22.5 17.4 19.1 22.5 13 22.5C11.2 22.5 9.5 21.9 8 21C9.7 21.2 11.5 20.7 12.7 19.8C11.2 19.8 10 18.8 9.6 17.5C10.1 17.6 10.6 17.5 11.1 17.4C9.6 17 8.5 15.6 8.5 14.1C9 14.3 9.5 14.5 10 14.5C8.6 13.5 8.1 11.6 9 10.1C10.7 12.1 13.1 13.4 15.8 13.5C15.3 11.5 16.9 9.5 19 9.5C19.9 9.5 20.8 9.9 21.4 10.5C22.2 10.3 22.9 10.1 23.5 9.7C23.3 10.5 22.8 11.1 22.1 11.5Z"
          fill="#696984"
          className="group-hover:fill-[#179cf0]"
        />
      </svg>
    ),
  },
  {
    shareCourseIcon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="group"
      >
        <path
          d="M0 16C0 24.8366 7.16344 32 16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16Z"
          fill="#696984"
          className="group-hover:fill-[#395498]"
        />
        <path
          d="M24 16C24 11.6 20.4 8 16 8C11.6 8 8 11.6 8 16C8 20 10.9 23.3 14.7 23.9V18.3H12.7V16H14.7V14.2C14.7 12.2 15.9 11.1 17.7 11.1C18.6 11.1 19.5 11.3 19.5 11.3V13.3H18.5C17.5 13.3 17.2 13.9 17.2 14.5V16H19.4L19 18.3H17.1V24C21.1 23.4 24 20 24 16Z"
          fill="white"
        />
      </svg>
    ),
  },
  {
    shareCourseIcon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="group"
      >
        <path
          d="M0 16C0 24.8366 7.16344 32 16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16Z"
          fill="#696984"
          className="group-hover:fill-[#FF0000]"
        />
        <path
          d="M23.6 12.1C23.4 11.4 22.9 10.9 22.2 10.7C21 10.4 15.9 10.4 15.9 10.4C15.9 10.4 10.9 10.4 9.60001 10.7C8.90001 10.9 8.4 11.4 8.2 12.1C8 13.4 8 16 8 16C8 16 8 18.6 8.3 19.9C8.5 20.6 9 21.1 9.7 21.3C10.9 21.6 16 21.6 16 21.6C16 21.6 21 21.6 22.3 21.3C23 21.1 23.5 20.6 23.7 19.9C24 18.6 24 16 24 16C24 16 24 13.4 23.6 12.1ZM14.4 18.4V13.6L18.6 16L14.4 18.4Z"
          fill="white"
        />
      </svg>
    ),
  },
  {
    shareCourseIcon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="group"
      >
        <path
          d="M0 16C0 24.8366 7.16344 32 16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16Z"
          fill="#696984"
          className="group-hover:fill-[#c92a90]"
        />
        <path
          d="M15.9992 9.2C18.1992 9.2 18.4992 9.2 19.3992 9.2C20.1992 9.2 20.5992 9.4 20.8992 9.5C21.2992 9.7 21.5992 9.8 21.8992 10.1C22.1992 10.4 22.3992 10.7 22.4992 11.1C22.5992 11.4 22.6992 11.8 22.7992 12.6C22.7992 13.5 22.7992 13.7 22.7992 16C22.7992 18.3 22.7992 18.5 22.7992 19.4C22.7992 20.2 22.5992 20.6 22.4992 20.9C22.2992 21.3 22.1992 21.6 21.8992 21.9C21.5992 22.2 21.2992 22.4 20.8992 22.5C20.5992 22.6 20.1992 22.7 19.3992 22.8C18.4992 22.8 18.2992 22.8 15.9992 22.8C13.6992 22.8 13.4992 22.8 12.5992 22.8C11.7992 22.8 11.3992 22.6 11.0992 22.5C10.6992 22.3 10.3992 22.2 10.0992 21.9C9.79922 21.6 9.59922 21.3 9.49922 20.9C9.39922 20.6 9.29922 20.2 9.19922 19.4C9.19922 18.5 9.19922 18.3 9.19922 16C9.19922 13.7 9.19922 13.5 9.19922 12.6C9.19922 11.8 9.39922 11.4 9.49922 11.1C9.69922 10.7 9.79922 10.4 10.0992 10.1C10.3992 9.8 10.6992 9.6 11.0992 9.5C11.3992 9.4 11.7992 9.3 12.5992 9.2C13.4992 9.2 13.7992 9.2 15.9992 9.2ZM15.9992 7.7C13.6992 7.7 13.4992 7.7 12.5992 7.7C11.6992 7.7 11.0992 7.9 10.5992 8.1C10.0992 8.3 9.59922 8.6 9.09922 9.1C8.59922 9.6 8.39922 10 8.09922 10.6C7.89922 11.1 7.79922 11.7 7.69922 12.6C7.69922 13.5 7.69922 13.8 7.69922 16C7.69922 18.3 7.69922 18.5 7.69922 19.4C7.69922 20.3 7.89922 20.9 8.09922 21.4C8.29922 21.9 8.59922 22.4 9.09922 22.9C9.59922 23.4 9.99922 23.6 10.5992 23.9C11.0992 24.1 11.6992 24.2 12.5992 24.3C13.4992 24.3 13.7992 24.3 15.9992 24.3C18.1992 24.3 18.4992 24.3 19.3992 24.3C20.2992 24.3 20.8992 24.1 21.3992 23.9C21.8992 23.7 22.3992 23.4 22.8992 22.9C23.3992 22.4 23.5992 22 23.8992 21.4C24.0992 20.9 24.1992 20.3 24.2992 19.4C24.2992 18.5 24.2992 18.2 24.2992 16C24.2992 13.8 24.2992 13.5 24.2992 12.6C24.2992 11.7 24.0992 11.1 23.8992 10.6C23.6992 10.1 23.3992 9.6 22.8992 9.1C22.3992 8.6 21.9992 8.4 21.3992 8.1C20.8992 7.9 20.2992 7.8 19.3992 7.7C18.4992 7.7 18.2992 7.7 15.9992 7.7Z"
          fill="white"
        />
        <path
          d="M15.9992 11.7C13.5992 11.7 11.6992 13.6 11.6992 16C11.6992 18.4 13.5992 20.3 15.9992 20.3C18.3992 20.3 20.2992 18.4 20.2992 16C20.2992 13.6 18.3992 11.7 15.9992 11.7ZM15.9992 18.8C14.4992 18.8 13.1992 17.6 13.1992 16C13.1992 14.5 14.3992 13.2 15.9992 13.2C17.4992 13.2 18.7992 14.4 18.7992 16C18.7992 17.5 17.4992 18.8 15.9992 18.8Z"
          fill="white"
        />
        <path
          d="M20.3992 12.6C20.9515 12.6 21.3992 12.1523 21.3992 11.6C21.3992 11.0477 20.9515 10.6 20.3992 10.6C19.8469 10.6 19.3992 11.0477 19.3992 11.6C19.3992 12.1523 19.8469 12.6 20.3992 12.6Z"
          fill="white"
        />
      </svg>
    ),
  },
  {
    shareCourseIcon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="group"
      >
        <path
          d="M0 16C0 24.8366 7.16344 32 16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16Z"
          fill="#696984"
          className="group-hover:fill-[#2297d0]"
        />
        <path
          d="M8.09992 15.7083C12.3949 13.8371 15.2589 12.6034 16.6919 12.0074C20.7834 10.3056 21.6335 10.01 22.1877 10.0001C22.3095 9.99805 22.582 10.0283 22.7586 10.1715C22.9076 10.2924 22.9486 10.4558 22.9683 10.5705C22.9879 10.6851 23.0123 10.9464 22.9929 11.1505C22.7712 13.4801 21.8118 19.1335 21.3237 21.7427C21.1172 22.8468 20.7105 23.217 20.3168 23.2532C19.4613 23.3319 18.8116 22.6878 17.9829 22.1446C16.6862 21.2946 15.9537 20.7654 14.695 19.936C13.2404 18.9774 14.1834 18.4506 15.0124 17.5896C15.2293 17.3643 18.999 13.9355 19.0719 13.6244C19.0811 13.5855 19.0895 13.4405 19.0034 13.3639C18.9172 13.2874 18.7901 13.3136 18.6983 13.3344C18.5683 13.3639 16.4968 14.7331 12.4839 17.4419C11.8959 17.8457 11.3633 18.0424 10.8862 18.0321C10.3601 18.0207 9.34822 17.7346 8.59598 17.4901C7.67333 17.1902 6.94002 17.0316 7.00388 16.5223C7.03714 16.257 7.40248 15.9856 8.09992 15.7083Z"
          fill="white"
        />
      </svg>
    ),
  },
  {
    shareCourseIcon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="group"
      >
        <path
          d="M0 16C0 24.8366 7.16344 32 16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16Z"
          fill="#696984"
          className="group-hover:fill-[#54b460]"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M21.6 10.3C20.1 8.8 18.1 8 16 8C11.6 8 8 11.6 8 16C8 17.4 8.40001 18.8 9.10001 20L8 24L12.2 22.9C13.4 23.5 14.7 23.9 16 23.9C20.4 23.9 24 20.3 24 15.9C24 13.8 23.1 11.8 21.6 10.3ZM16 22.6C14.8 22.6 13.6 22.3 12.6 21.7L12.4 21.6L9.89999 22.3L10.6 19.9L10.4 19.6C9.69999 18.5 9.39999 17.3 9.39999 16.1C9.39999 12.5 12.4 9.5 16 9.5C17.8 9.5 19.4 10.2 20.7 11.4C22 12.7 22.6 14.3 22.6 16.1C22.6 19.6 19.7 22.6 16 22.6ZM19.6 17.6C19.4 17.5 18.4 17 18.2 17C18 16.9 17.9 16.9 17.8 17.1C17.7 17.3 17.3 17.7 17.2 17.9C17.1 18 17 18 16.8 18C16.6 17.9 16 17.7 15.2 17C14.6 16.5 14.2 15.8 14.1 15.6C14 15.4 14.1 15.3 14.2 15.2C14.3 15.1 14.4 15 14.5 14.9C14.6 14.8 14.6 14.7 14.7 14.6C14.8 14.5 14.7 14.4 14.7 14.3C14.7 14.2 14.3 13.2 14.1 12.8C14 12.5 13.8 12.5 13.7 12.5C13.6 12.5 13.5 12.5 13.3 12.5C13.2 12.5 13 12.5 12.8 12.7C12.6 12.9 12.1 13.4 12.1 14.4C12.1 15.4 12.8 16.3 12.9 16.5C13 16.6 14.3 18.7 16.3 19.5C18 20.2 18.3 20 18.7 20C19.1 20 19.9 19.5 20 19.1C20.2 18.6 20.2 18.2 20.1 18.2C20 17.7 19.8 17.7 19.6 17.6Z"
          fill="white"
        />
      </svg>
    ),
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

const educationOffers = [
  {
    offersPic: offersPic,
    offersLabel: "50%",
    offersTitle: "FOR INSTRUCTORS",
    offersDisc:
      "TOTC’s school management software helps traditional and online schools manage scheduling,",
  },
  {
    offersPic: offersPic,
    offersLabel: "50%",
    offersTitle: "FOR INSTRUCTORS",
    offersDisc:
      "TOTC’s school management software helps traditional and online schools manage scheduling,",
  },
  {
    offersPic: offersPic,
    offersLabel: "50%",
    offersTitle: "FOR INSTRUCTORS",
    offersDisc:
      "TOTC’s school management software helps traditional and online schools manage scheduling,",
  },
];

function CourseDetail() {
  return (
    <>
      <Header />
      <div className="pt-[72px] md:pt-[92px] xl:pt-[112px] 2xl:pt-[128px]">
        <img src={CourseDetailBanner} alt="" className="w-full" />
        <div className="py-10 md:py-12 lg:pt-[59px] lg:pb-[100px]">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-stretch gap-5 md:gap-8 lg:gap-12 xl:gap-24 2xl:gap-48">
              <div className="flex-1">
                <Tabs defaultIndex={3} onSelect={(index) => console.log(index)}>
                  <TabList className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 xl:gap-6 2xl:gap-[50px]">
                    {OverviewTabs.map((item, i) => (
                      <Tab
                        key={i}
                        className="cursor-pointer p-3 md:p-2 lg:p-2.5 xl:py-4 bg-[#DDDDDD] text-[#696969] font-semibold text-sm md:text-base xl:text-xl outline-none flex items-center justify-center rounded-xl"
                      >
                        {item}
                      </Tab>
                    ))}
                  </TabList>
                  <div className="pt-6 lg:pt-10 xl:pt-12 2xl:pt-20">
                    <TabPanel>
                      <h2 className="text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-medium">
                        Overview 1
                      </h2>
                    </TabPanel>
                    <TabPanel>
                      <h2 className="text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-medium">
                        Overview 2
                      </h2>
                    </TabPanel>
                    <TabPanel>
                      <h2 className="text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-medium">
                        Overview 3
                      </h2>
                    </TabPanel>
                    <TabPanel>
                      <div className="bg-[#9DCCFF] bg-opacity-30 rounded-[20px] p-4 lg:p-8 xl:p-[50px]">
                        <div className="flex flex-col md:flex-row gap-5 lg:gap-8 xl:gap-11">
                          <div className="bg-white rounded-[20px] p-4 lg:p-6 text-center md:w-2/5 xl:w-[30%]">
                            <h2 className="md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-semibold text-black text-opacity-50">
                              4 out of 5
                            </h2>
                            <ul className="flex items-center justify-center gap-1.5 my-3 md:my-4 lg:my-7">
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
                                    fill="#808080"
                                  />
                                </svg>
                              </li>
                            </ul>
                            <span className="md:text-lg xl:text-xl text-black text-opacity-50">
                              Top Raiting
                            </span>
                          </div>
                          <div className="flex-1">
                            {RatingStar.map((data, i) => (
                              <div
                                key={i}
                                className="flex items-center gap-3 lg:gap-4 xl:gap-11 mb-1.5 lg:mb-3 last:mb-0"
                              >
                                <label className="lg:text-lg xl:text-xl text-black text-opacity-50">
                                  {data.starNumber}
                                </label>
                                <div className="flex-1">
                                  <ProgressBar
                                    completed={data.starCompleted}
                                    maxCompleted={data.starMaxCompleted}
                                    className="course-progress"
                                    height={8}
                                    bgColor="#49BBBD"
                                    baseBgColor="#D9D9D9"
                                    labelClassName="progress-label"
                                  />
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="mt-10 lg:mt-12 xl:mt-20">
                          {commentlist.map((data, i) => (
                            <div
                              key={i}
                              className="border-b border-[#696984] pb-4 mb-4 xl:pb-6 xl:mb-6 last:border-none last:pb-0 last:mb-0"
                            >
                              <div className="flex items-end justify-between">
                                <div className="flex items-center gap-3">
                                  <img
                                    src={data.commentUser}
                                    alt=""
                                    className="w-14 xl:w-[70px] aspect-square rounded-full"
                                  />
                                  <div>
                                    <h4 className="text-lg font-medium">
                                      {data.commentUserName}
                                    </h4>
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
                                <div className="flex items-center gap-2.5">
                                  <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M12 0.375C18.4219 0.375 23.625 5.57812 23.625 12C23.625 18.4219 18.4219 23.625 12 23.625C5.57812 23.625 0.375 18.4219 0.375 12C0.375 5.57812 5.57812 0.375 12 0.375ZM12 21.375C17.1562 21.375 21.375 17.2031 21.375 12C21.375 6.84375 17.1562 2.625 12 2.625C6.79688 2.625 2.625 6.84375 2.625 12C2.625 17.2031 6.79688 21.375 12 21.375ZM14.8594 16.5L10.875 13.5938C10.7344 13.5 10.6875 13.3125 10.6875 13.1719V5.4375C10.6875 5.15625 10.9219 4.875 11.25 4.875H12.75C13.0312 4.875 13.3125 5.15625 13.3125 5.4375V12.0938L16.4062 14.3906C16.6875 14.5781 16.7344 14.9062 16.5469 15.1875L15.6562 16.3594C15.4688 16.6406 15.1406 16.6875 14.8594 16.5Z"
                                      fill="#D9D9D9"
                                    />
                                  </svg>
                                  <span className="text-[#696984] text-sm font-medium">
                                    {data.commentTime}
                                  </span>
                                </div>
                              </div>
                              <p className="text-sm md:text-base lg:text-lg xl:text-xl text-[#696984] mt-5">
                                {data.commentDisc}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </TabPanel>
                  </div>
                </Tabs>
              </div>
              <div className="md:w-2/6 2xl:w-[30%] bg-white p-4 xl:p-6 drop-shadow-[2px_2px_10px_rgba(0,0,0,0.25)] rounded-[20px]">
                <div className="flex items-center justify-between gap-4">
                  <h2 className="text-lg lg:text-2xl xl:text-4xl font-semibold">$49.65</h2>
                  <span className="lg:text-xl xl:text-2xl font-semibold text-black text-opacity-50 line-through">
                    $99.99
                  </span>
                  <label className="lg:text-xl xl:text-2xl font-semibold text-black text-opacity-50">
                    50% Off
                  </label>
                </div>
                <div className="text-center my-4 xl:my-8 lg:text-lg xl:text-xl font-semibold text-[#49BBBD]">
                  11 hour left at this price
                </div>
                <Link
                  to=""
                  className="w-full py-3 xl:py-4 inline-block rounded-xl bg-[#49BBBD] text-white text-center xl:text-lg 2xl:text-xl font-semibold hover:bg-[#252641] hover:text-white"
                >
                  Buy Now
                </Link>
                <h2 className="text-lg md:text-base lg:text-xl xl:text-2xl 2xl:text-3xl font-semibold border-t border-[#696984] mt-3 pt-3 lg:mt-6 lg:pt-6 xl:mt-8 xl:pt-8">
                  This Course included
                </h2>
                <ul className="mt-2 lg:mt-4 xl:mt-8">
                  <li className="flex items-center gap-2.5">
                    <div className="w-5">
                      <svg
                        width="22"
                        height="21"
                        viewBox="0 0 22 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18.8906 10.5L20.6875 12.2578C21.2344 12.7656 20.9609 13.6641 20.2578 13.8594L17.8359 14.4844L18.5 16.9062C18.6953 17.6094 18.0703 18.2344 17.3672 18.0391L14.9453 17.375L14.3203 19.7969C14.125 20.5391 13.2266 20.7734 12.7188 20.2266L11 18.4297L9.24219 20.2266C8.73438 20.7344 7.83594 20.5391 7.64062 19.7969L7.01562 17.375L4.59375 18.0391C3.89062 18.2344 3.26562 17.6094 3.46094 16.9062L4.125 14.4844L1.70312 13.8594C1 13.6641 0.726562 12.7656 1.27344 12.2578L3.07031 10.5L1.27344 8.74219C0.726562 8.23438 1 7.33594 1.70312 7.17969L4.125 6.55469L3.46094 4.13281C3.26562 3.42969 3.89062 2.76562 4.59375 2.96094L7.01562 3.66406L7.64062 1.20312C7.79688 0.5 8.73438 0.265625 9.24219 0.8125L11 2.60938L12.7188 0.8125C13.2266 0.265625 14.1641 0.539062 14.3203 1.20312L14.9453 3.66406L17.3672 2.96094C18.0703 2.76562 18.6953 3.42969 18.5 4.13281L17.8359 6.55469L20.2578 7.17969C20.9609 7.33594 21.2344 8.23438 20.6875 8.74219L18.8906 10.5Z"
                          fill="#49BBBD"
                        />
                      </svg>
                    </div>
                    <span className="text-xs lg:text-sm font-bold text-black text-opacity-50">
                      Money Back Guarantee
                    </span>
                  </li>
                  <li className="flex items-center gap-2.5 mt-2.5">
                    <div className="w-5">
                      <svg
                        width="20"
                        height="19"
                        viewBox="0 0 20 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20 5.125V16.375C20 17.4297 19.1406 18.25 18.125 18.25H1.875C0.820312 18.25 0 17.4297 0 16.375V5.125C0 4.10938 0.820312 3.25 1.875 3.25H5.3125L5.78125 2C6.05469 1.25781 6.75781 0.75 7.53906 0.75H12.4219C13.2031 0.75 13.9062 1.25781 14.1797 2L14.6875 3.25H18.125C19.1406 3.25 20 4.10938 20 5.125ZM14.6875 10.75C14.6875 8.17188 12.5781 6.0625 10 6.0625C7.38281 6.0625 5.3125 8.17188 5.3125 10.75C5.3125 13.3672 7.38281 15.4375 10 15.4375C12.5781 15.4375 14.6875 13.3672 14.6875 10.75ZM13.4375 10.75C13.4375 12.6641 11.875 14.1875 10 14.1875C8.08594 14.1875 6.5625 12.6641 6.5625 10.75C6.5625 8.875 8.08594 7.3125 10 7.3125C11.875 7.3125 13.4375 8.875 13.4375 10.75Z"
                          fill="#49BBBD"
                        />
                      </svg>
                    </div>
                    <span className="text-xs lg:text-sm font-bold text-black text-opacity-50">
                      Access on all devices
                    </span>
                  </li>
                  <li className="flex items-center gap-2.5 mt-2.5">
                    <div className="w-5">
                      <svg
                        width="15"
                        height="21"
                        viewBox="0 0 15 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.75 5.8125V0.5H0.9375C0.390625 0.5 0 0.929688 0 1.4375V19.5625C0 20.1094 0.390625 20.5 0.9375 20.5H14.0625C14.5703 20.5 15 20.1094 15 19.5625V6.75H9.6875C9.14062 6.75 8.75 6.35938 8.75 5.8125ZM11.25 15.0312C11.25 15.3047 11.0156 15.5 10.7812 15.5H4.21875C3.94531 15.5 3.75 15.3047 3.75 15.0312V14.7188C3.75 14.4844 3.94531 14.25 4.21875 14.25H10.7812C11.0156 14.25 11.25 14.4844 11.25 14.7188V15.0312ZM11.25 12.5312C11.25 12.8047 11.0156 13 10.7812 13H4.21875C3.94531 13 3.75 12.8047 3.75 12.5312V12.2188C3.75 11.9844 3.94531 11.75 4.21875 11.75H10.7812C11.0156 11.75 11.25 11.9844 11.25 12.2188V12.5312ZM11.25 9.71875V10.0312C11.25 10.3047 11.0156 10.5 10.7812 10.5H4.21875C3.94531 10.5 3.75 10.3047 3.75 10.0312V9.71875C3.75 9.48438 3.94531 9.25 4.21875 9.25H10.7812C11.0156 9.25 11.25 9.48438 11.25 9.71875ZM15 5.26562C15 5.03125 14.8828 4.79688 14.7266 4.60156L10.8984 0.773438C10.7031 0.617188 10.4688 0.5 10.2344 0.5H10V5.5H15V5.26562Z"
                          fill="#49BBBD"
                        />
                      </svg>
                    </div>
                    <span className="text-xs lg:text-sm font-bold text-black text-opacity-50">
                      Certification of completion
                    </span>
                  </li>
                  <li className="flex items-center gap-2.5 mt-2.5">
                    <div className="w-5">
                      <svg
                        width="20"
                        height="15"
                        viewBox="0 0 20 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.9688 10H14.4922C14.7266 10 15 9.76562 15 9.53125V4.25781C15 4.02344 14.7266 3.75 14.4922 3.75H12.9688C12.7344 3.75 12.5 4.02344 12.5 4.25781V9.53125C12.5 9.76562 12.7344 10 12.9688 10ZM16.7188 10H18.2422C18.4766 10 18.75 9.76562 18.75 9.53125V0.507812C18.75 0.273438 18.4766 0 18.2422 0H16.7188C16.4844 0 16.25 0.273438 16.25 0.507812V9.53125C16.25 9.76562 16.4844 10 16.7188 10ZM5.46875 10H6.99219C7.22656 10 7.5 9.76562 7.5 9.53125V6.75781C7.5 6.52344 7.22656 6.25 6.99219 6.25H5.46875C5.23438 6.25 5 6.52344 5 6.75781V9.53125C5 9.76562 5.23438 10 5.46875 10ZM9.21875 10H10.7422C10.9766 10 11.25 9.76562 11.25 9.53125V1.75781C11.25 1.52344 10.9766 1.25 10.7422 1.25H9.21875C8.98438 1.25 8.75 1.52344 8.75 1.75781V9.53125C8.75 9.76562 8.98438 10 9.21875 10ZM19.375 12.5H2.5V0.625C2.5 0.3125 2.1875 0 1.875 0H0.625C0.273438 0 0 0.3125 0 0.625V13.75C0 14.4531 0.546875 15 1.25 15H19.375C19.6875 15 20 14.7266 20 14.375V13.125C20 12.8125 19.6875 12.5 19.375 12.5Z"
                          fill="#49BBBD"
                        />
                      </svg>
                    </div>
                    <span className="text-xs lg:text-sm font-bold text-black text-opacity-50">
                      32 Modules
                    </span>
                  </li>
                </ul>
                <h2 className="text-lg md:text-base lg:text-xl xl:text-2xl 2xl:text-3xl font-semibold border-t border-[#696984] mt-3 pt-3 lg:mt-6 lg:pt-6 xl:mt-8 xl:pt-8">
                  Training 5 or more people
                </h2>
                <p className="mt-3 lg:mt-4 xl:mt-7 text-[#696984] text-[13px] lg:text-sm">
                  Class, launched less than a year ago by Blackboard co-founder
                  Michael Chasen, integrates exclusively...
                </p>
                <h2 className="text-lg md:text-base lg:text-xl xl:text-2xl 2xl:text-3xl font-semibold border-t border-[#696984] mt-3 pt-3 lg:mt-6 lg:pt-6 xl:mt-8 xl:pt-8">
                  Share this course
                </h2>
                <ul className="flex items-center gap-2.5 md:gap-1 lg:gap-4 xl:gap-6 mt-4 lg:mt-8 xl:mt-10 2xl:mt-12">
                  {shareCourse.map((data, i) => (
                    <li key={i}>
                      <Link to="">{data.shareCourseIcon}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#EBF5FF] py-10 md:py-12 lg:py-16 xl:py-24">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-4 md:mb-6 lg:mb-10 xl:mb-[50px] gap-3 md:gap-0">
              <h2 className="text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-medium">
                Marketing Articles
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
        <div className="bg-white py-10 md:py-12 lg:py-16 xl:py-24 2xl:pt-48 2xl:pb-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-14">
              <div className="w-full md:w-1/2">
                <h3 className="text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-[#2F327D] font-medium leading-normal relative before:hidden before:lg:block before:content-[''] before:absolute before:-left-3 before:xl:-left-6 before:-top-2 before:xl:-top-3 before:bg-[#33EFA0] before:rounded-full before:w-[73px] before:aspect-square before:-z-10 z-0">
                  Everything you can do in a physical
                  <br className="hidden lg:block" /> classroom,{" "}
                  <span className="text-[#00CBB8]">you can do with TOTC</span>
                </h3>
                <p className="text-[#696984] text-lg lg:text-xl xl:text-2xl my-5 lg:my-[30px]">
                  TOTC's school management software helps traditional and online
                  schools manage scheduling, attendance, payments and virtual
                  classrooms all in one secure cloud-based system.
                </p>

                <Link
                  to=""
                  className="text-[#696984] text-lg lg:text-xl underline"
                >
                  Learn more
                </Link>
              </div>
              <div className="w-full md:w-1/2 flex items-center justify-center relative before:hidden before:md:block before:content-[''] before:absolute before:-top-5 before:-left-5 before:bg-[#23BDEE] before:rounded-[20px] before:w-[138px] before:aspect-square after:hidden after:md:block after:content-[''] after:absolute after:-bottom-5 after:-right-5 after:bg-[#33EFA0] after:rounded-[20px] after:w-[231px] after:aspect-square z-0">
                <img
                  src={physicalClass}
                  alt=""
                  className="relative z-10 rounded-[20px] w-full"
                />
                <svg
                  width="70"
                  height="70"
                  viewBox="0 0 70 70"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute z-20 cursor-pointer"
                >
                  <circle cx="35" cy="35" r="35" fill="white" />
                  <path
                    d="M47.5751 34.7264C48.2212 35.115 48.2212 36.0517 47.5751 36.4403L29.5154 47.3015C28.8489 47.7024 28 47.2223 28 46.4446L28 24.7221C28 23.9444 28.8489 23.4643 29.5154 23.8652L47.5751 34.7264Z"
                    fill="#23BDEE"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="py-10 md:py-12 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between pb-6 md:pb-8 lg:pb-10 xl:pb-16">
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
            <div className="flex flex-col md:flex-row relative gap-5 lg:gap-10 xl:gap-14 2xl:gap-[70px]">
              {educationOffers.map((data, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-[20px] overflow-hidden relative border border-black"
                >
                  <img src={data.offersPic} alt="" className="w-full" />
                  <div className="p-5 md:p-3 lg:p-6 xl:p-8 2xl:py-10 2xl:px-12 absolute w-full h-full top-0 left-0">
                    <label className="md:text-base 2xl:text-2xl font-bold text-white bg-[#D94044] rounded-[10px] aspect-square p-2 flex items-center justify-center w-16 md:w-12 lg:w-16 xl:w-20 2xl:w-[100px]">
                      {data.offersLabel}
                    </label>
                    <h2 className="my-3 lg:my-4 xl:my-6 2xl:mt-8 2xl:mb-9 text-xl md:text-base lg:text-xl xl:text-2xl 2xl:text-[32px] font-semibold text-white">
                      {data.offersTitle}
                    </h2>
                    <p className="text-lg md:text-sm lg:text-base xl:text-xl 2xl:text-2xl text-white">
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

export default CourseDetail;
