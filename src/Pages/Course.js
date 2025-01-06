import React from "react";
import Header from "../Componant/Header";
import Footer from "../Componant/Footer";
import course1 from "../../src/images/course1.jpg";
import course2 from "../../src/images/course2.jpg";
import course3 from "../../src/images/course3.jpg";
import studentsPic from "../../src/images/user.png";
import recommendedPic1 from "../../src/images/recommended1.jpg";
import recommendedPic2 from "../../src/images/recommended2.jpg";
import User from "../../src/images/user.png";
import { Link } from "react-router-dom";
import ProgressBar from "@ramonak/react-progress-bar";

import Slider from "react-slick";
import OnlineCoaching from "../Componant/OnlineCoaching";

const ourStudents = [
  {
    coursePic: course1,
    courseTitle: "AWS Certified Solutions Architect",
    courseUser: studentsPic,
    courseUserName: "Lina",
    courseCompleted: "5",
    courseMaxCompleted: "7",
    courseProcess: "Lesson 5 of 7",
  },
  {
    coursePic: course2,
    courseTitle: "AWS Certified Solutions Architect",
    courseUser: studentsPic,
    courseUserName: "Lina",
    courseCompleted: "6",
    courseMaxCompleted: "7",
    courseProcess: "Lesson 5 of 7",
  },
  {
    coursePic: course3,
    courseTitle: "AWS Certified Solutions Architect",
    courseUser: studentsPic,
    courseUserName: "Lina",
    courseCompleted: "5",
    courseMaxCompleted: "7",
    courseProcess: "Lesson 5 of 7",
  },
  {
    coursePic: course1,
    courseTitle: "AWS Certified Solutions Architect",
    courseUser: studentsPic,
    courseUserName: "Lina",
    courseCompleted: "5",
    courseMaxCompleted: "7",
    courseProcess: "Lesson 5 of 7",
  },
];

const favouriteCourse = [
  {
    favouriteIcon: (
      <svg
        width="90"
        height="90"
        viewBox="0 0 90 90"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-auto w-full"
      >
        <path
          d="M0 4C0 1.79086 1.79086 0 4 0H86C88.2091 0 90 1.79086 90 4V86C90 88.2091 88.2091 90 86 90H4C1.79086 90 0 88.2091 0 86V4Z"
          fill="#49BBBD"
          fillOpacity="0.3"
        />
        <path
          d="M39.7852 47.9141C37.3828 48.0312 35.2734 48.9688 34.043 52.1328C33.9258 52.4844 33.5742 52.7188 33.2227 52.7188C32.5781 52.7188 30.5273 51.0781 29.9414 50.7266C30 55.5312 32.168 59.75 37.5 59.75C41.8945 59.75 45 57.2305 45 52.7188C45 52.543 44.9414 52.3672 44.9414 52.1914L39.7852 47.9141ZM56.7773 29.75C55.8984 29.75 55.0781 30.1602 54.4336 30.7461C42.4805 41.4688 41.25 41.7031 41.25 44.8672C41.25 45.6289 41.4258 46.3906 41.7188 47.0938L45.4688 50.1992C45.8789 50.3164 46.3477 50.375 46.7578 50.375C50.4492 50.375 52.5586 47.7383 59.1797 35.375C59.5898 34.5547 60 33.6172 60 32.6797C60 30.9805 58.4766 29.75 56.7773 29.75Z"
          fill="#49BBBD"
        />
      </svg>
    ),
    favouriteTitle: "Design",
    favouriteDisc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod",
  },
  {
    favouriteIcon: (
      <svg
        width="90"
        height="90"
        viewBox="0 0 90 90"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-auto w-full"
      >
        <path
          d="M0 4C0 1.79086 1.79086 0 4 0H86C88.2091 0 90 1.79086 90 4V86C90 88.2091 88.2091 90 86 90H4C1.79086 90 0 88.2091 0 86V4Z"
          fill="#5B72EE"
          fillOpacity="0.3"
        />
        <path
          d="M60.9375 29.75H32.8125C31.2305 29.75 30 31.0391 30 32.5625V51.3125C30 52.8945 31.2305 54.125 32.8125 54.125H44.0625L43.125 56.9375H38.9062C38.0859 56.9375 37.5 57.582 37.5 58.3438C37.5 59.1641 38.0859 59.75 38.9062 59.75H54.8438C55.6055 59.75 56.25 59.1641 56.25 58.3438C56.25 57.582 55.6055 56.9375 54.8438 56.9375H50.625L49.6875 54.125H60.9375C62.4609 54.125 63.75 52.8945 63.75 51.3125V32.5625C63.75 31.0391 62.4609 29.75 60.9375 29.75ZM60 50.375H33.75V33.5H60V50.375Z"
          fill="#5B72EE"
        />
      </svg>
    ),
    favouriteTitle: "Development",
    favouriteDisc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod",
  },
  {
    favouriteIcon: (
      <svg
        width="90"
        height="90"
        viewBox="0 0 90 90"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-auto w-full"
      >
        <path
          d="M0 4C0 1.79086 1.79086 0 4 0H86C88.2091 0 90 1.79086 90 4V86C90 88.2091 88.2091 90 86 90H4C1.79086 90 0 88.2091 0 86V4Z"
          fill="#9DCCFF"
          fillOpacity="0.3"
        />
        <path
          d="M56.25 34.0859C56.25 31.6836 50.332 29.75 43.125 29.75C35.8594 29.75 30 31.6836 30 34.0859V36.7227C30 39.125 35.8594 41 43.125 41C50.332 41 56.25 39.125 56.25 36.7227V34.0859ZM56.25 40.0625C53.3789 42.0547 48.2227 42.9336 43.125 42.9336C37.9688 42.9336 32.8125 42.0547 30 40.0625V46.0977C30 48.5 35.8594 50.375 43.125 50.375C50.332 50.375 56.25 48.5 56.25 46.0977V40.0625ZM56.25 49.4375C53.3789 51.4297 48.2227 52.3086 43.125 52.3086C37.9688 52.3086 32.8125 51.4297 30 49.4375V55.4727C30 57.875 35.8594 59.75 43.125 59.75C50.332 59.75 56.25 57.875 56.25 55.4727V49.4375Z"
          fill="#9DCCFF"
        />
      </svg>
    ),
    favouriteTitle: "Development",
    favouriteDisc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod",
  },
  {
    favouriteIcon: (
      <svg
        width="90"
        height="90"
        viewBox="0 0 90 90"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-auto w-full"
      >
        <path
          d="M0 4C0 1.79086 1.79086 0 4 0H86C88.2091 0 90 1.79086 90 4V86C90 88.2091 88.2091 90 86 90H4C1.79086 90 0 88.2091 0 86V4Z"
          fill="#00CBB8"
          fillOpacity="0.3"
        />
        <path
          d="M48.75 49.4375C48.75 49.9648 48.2812 50.375 47.8125 50.375H42.1875C41.6602 50.375 41.25 49.9648 41.25 49.4375V46.625H30V55.0625C30 56.5859 31.2891 57.875 32.8125 57.875H57.1875C58.6523 57.875 60 56.5859 60 55.0625V46.625H48.75V49.4375ZM57.1875 37.25H52.5V34.4375C52.5 32.9727 51.1523 31.625 49.6875 31.625H40.3125C38.7891 31.625 37.5 32.9727 37.5 34.4375V37.25H32.8125C31.2891 37.25 30 38.5977 30 40.0625V44.75H60V40.0625C60 38.5977 58.6523 37.25 57.1875 37.25ZM48.75 37.25H41.25V35.375H48.75V37.25Z"
          fill="#00CBB8"
        />
      </svg>
    ),
    favouriteTitle: "Business",
    favouriteDisc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod",
  },
  {
    favouriteIcon: (
      <svg
        width="90"
        height="90"
        viewBox="0 0 90 90"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-auto w-full"
      >
        <path
          d="M0 4C0 1.79086 1.79086 0 4 0H86C88.2091 0 90 1.79086 90 4V86C90 88.2091 88.2091 90 86 90H4C1.79086 90 0 88.2091 0 86V4Z"
          fill="#F48C06"
          fillOpacity="0.3"
        />
        <path
          d="M40.957 35.7734C38.9648 35.7734 37.3828 37.2969 37.3828 39.1719C37.3828 41.0469 38.9648 42.5703 40.957 42.5703C42.9492 42.5703 44.5898 41.0469 44.5898 39.1719C44.5898 37.2969 42.9492 35.7734 40.957 35.7734ZM49.3945 35.7734C47.4023 35.7734 45.7617 37.2969 45.7617 39.1719C45.7617 41.0469 47.4023 42.5703 49.3945 42.5703C51.3867 42.5703 52.9688 41.0469 52.9688 39.1719C52.9688 37.2969 51.3867 35.7734 49.3945 35.7734ZM58.5352 41.0469L58.1836 41.2812V29.6797C58.1836 28.0977 57.0117 26.75 55.4883 26.75H34.4531C32.9883 26.75 31.7578 28.0977 31.7578 29.6797V41.2812C31.6406 41.2227 31.5234 41.1641 31.4062 41.0469C30.5273 40.4609 29.9414 41.2812 30.4688 42.1016C31.5234 43.3906 33.5742 45.0312 36.6797 46.3203C33.3984 57.5703 44.7656 59.3281 44.5312 53.5859C44.5312 53.5273 44.5898 50.2461 44.5898 47.9023C44.8828 47.9609 45.1172 48.0781 45.3516 48.0781C45.3516 50.4219 45.4102 53.5273 45.4102 53.5859C45.2344 59.3281 56.543 57.5703 53.2617 46.3203C56.3672 45.0312 58.418 43.4492 59.4727 42.1016C60 41.2812 59.4141 40.4609 58.5352 41.0469ZM56.7773 42.1602C52.7344 44.3867 49.2188 43.9766 47.3438 43.918C45.9375 43.8594 45.4688 44.4453 45.3516 45.3828C44.7656 44.9141 44.2969 44.4453 44.1797 44.3867C43.8867 44.0352 43.3594 43.918 42.5977 43.918C40.7227 43.9766 37.3242 44.3867 33.3984 42.2773V31.0273C33.3984 28.9766 33.9258 28.332 35.7422 28.332H54.375C56.1328 28.332 56.7773 29.0938 56.7773 31.0273V42.1602Z"
          fill="#F48C06"
        />
      </svg>
    ),
    favouriteTitle: "Marketing",
    favouriteDisc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod",
  },
  {
    favouriteIcon: (
      <svg
        width="90"
        height="90"
        viewBox="0 0 90 90"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-auto w-full"
      >
        <path
          d="M0 4C0 1.79086 1.79086 0 4 0H86C88.2091 0 90 1.79086 90 4V86C90 88.2091 88.2091 90 86 90H4C1.79086 90 0 88.2091 0 86V4Z"
          fill="#EE645B"
          fillOpacity="0.3"
        />
        <path
          d="M56.25 50.8438V31.1562C56.25 30.3945 55.6055 29.75 54.8438 29.75H35.625C32.5195 29.75 30 32.2695 30 35.375V54.125C30 57.2305 32.5195 59.75 35.625 59.75H54.8438C55.6055 59.75 56.25 59.1641 56.25 58.3438V57.4062C56.25 56.9961 56.0156 56.5859 55.7227 56.3516C55.4297 55.4141 55.4297 52.8359 55.7227 51.957C56.0156 51.7227 56.25 51.3125 56.25 50.8438ZM37.5 37.6016C37.5 37.4258 37.6172 37.25 37.8516 37.25H50.2734C50.4492 37.25 50.625 37.4258 50.625 37.6016V38.7734C50.625 39.0078 50.4492 39.125 50.2734 39.125H37.8516C37.6172 39.125 37.5 39.0078 37.5 38.7734V37.6016ZM37.5 41.3516C37.5 41.1758 37.6172 41 37.8516 41H50.2734C50.4492 41 50.625 41.1758 50.625 41.3516V42.5234C50.625 42.7578 50.4492 42.875 50.2734 42.875H37.8516C37.6172 42.875 37.5 42.7578 37.5 42.5234V41.3516ZM52.3242 56H35.625C34.5703 56 33.75 55.1797 33.75 54.125C33.75 53.1289 34.5703 52.25 35.625 52.25H52.3242C52.207 53.3047 52.207 55.0039 52.3242 56Z"
          fill="#EE645B"
        />
      </svg>
    ),
    favouriteTitle: "Photography",
    favouriteDisc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod",
  },
  {
    favouriteIcon: (
      <svg
        width="90"
        height="90"
        viewBox="0 0 90 90"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-auto w-full"
      >
        <path
          d="M0 4C0 1.79086 1.79086 0 4 0H86C88.2091 0 90 1.79086 90 4V86C90 88.2091 88.2091 90 86 90H4C1.79086 90 0 88.2091 0 86V4Z"
          fill="#252641"
          fillOpacity="0.3"
        />
        <path
          d="M58.5938 33.5H58.125V34.6719C58.125 35.082 57.7734 35.375 57.4219 35.375H55.0781C54.668 35.375 54.375 35.082 54.375 34.6719V33.5H35.625V34.6719C35.625 35.082 35.2734 35.375 34.9219 35.375H32.5781C32.168 35.375 31.875 35.082 31.875 34.6719V33.5H31.4062C30.5859 33.5 30 34.1445 30 34.9062V54.5938C30 55.4141 30.5859 56 31.4062 56H31.875V54.8281C31.875 54.4766 32.168 54.125 32.5781 54.125H34.9219C35.2734 54.125 35.625 54.4766 35.625 54.8281V56H54.375V54.8281C54.375 54.4766 54.668 54.125 55.0781 54.125H57.4219C57.7734 54.125 58.125 54.4766 58.125 54.8281V56H58.5938C59.3555 56 60 55.4141 60 54.5938V34.9062C60 34.1445 59.3555 33.5 58.5938 33.5ZM35.625 51.5469C35.625 51.957 35.2734 52.25 34.9219 52.25H32.5781C32.168 52.25 31.875 51.957 31.875 51.5469V49.2031C31.875 48.8516 32.168 48.5 32.5781 48.5H34.9219C35.2734 48.5 35.625 48.8516 35.625 49.2031V51.5469ZM35.625 45.9219C35.625 46.332 35.2734 46.625 34.9219 46.625H32.5781C32.168 46.625 31.875 46.332 31.875 45.9219V43.5781C31.875 43.2266 32.168 42.875 32.5781 42.875H34.9219C35.2734 42.875 35.625 43.2266 35.625 43.5781V45.9219ZM35.625 40.2969C35.625 40.707 35.2734 41 34.9219 41H32.5781C32.168 41 31.875 40.707 31.875 40.2969V37.9531C31.875 37.6016 32.168 37.25 32.5781 37.25H34.9219C35.2734 37.25 35.625 37.6016 35.625 37.9531V40.2969ZM51.5625 52.4844C51.5625 52.8945 51.2109 53.1875 50.8594 53.1875H39.1406C38.7305 53.1875 38.4375 52.8945 38.4375 52.4844V46.8594C38.4375 46.5078 38.7305 46.1562 39.1406 46.1562H50.8594C51.2109 46.1562 51.5625 46.5078 51.5625 46.8594V52.4844ZM51.5625 42.6406C51.5625 43.0508 51.2109 43.3438 50.8594 43.3438H39.1406C38.7305 43.3438 38.4375 43.0508 38.4375 42.6406V37.0156C38.4375 36.6641 38.7305 36.3125 39.1406 36.3125H50.8594C51.2109 36.3125 51.5625 36.6641 51.5625 37.0156V42.6406ZM58.125 51.5469C58.125 51.957 57.7734 52.25 57.4219 52.25H55.0781C54.668 52.25 54.375 51.957 54.375 51.5469V49.2031C54.375 48.8516 54.668 48.5 55.0781 48.5H57.4219C57.7734 48.5 58.125 48.8516 58.125 49.2031V51.5469ZM58.125 45.9219C58.125 46.332 57.7734 46.625 57.4219 46.625H55.0781C54.668 46.625 54.375 46.332 54.375 45.9219V43.5781C54.375 43.2266 54.668 42.875 55.0781 42.875H57.4219C57.7734 42.875 58.125 43.2266 58.125 43.5781V45.9219ZM58.125 40.2969C58.125 40.707 57.7734 41 57.4219 41H55.0781C54.668 41 54.375 40.707 54.375 40.2969V37.9531C54.375 37.6016 54.668 37.25 55.0781 37.25H57.4219C57.7734 37.25 58.125 37.6016 58.125 37.9531V40.2969Z"
          fill="#252641"
        />
      </svg>
    ),
    favouriteTitle: "Acting",
    favouriteDisc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod",
  },
  {
    favouriteIcon: (
      <svg
        width="90"
        height="90"
        viewBox="0 0 90 90"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-auto w-full"
      >
        <path
          d="M0 4C0 1.79086 1.79086 0 4 0H86C88.2091 0 90 1.79086 90 4V86C90 88.2091 88.2091 90 86 90H4C1.79086 90 0 88.2091 0 86V4Z"
          fill="#00CBB8"
          fillOpacity="0.3"
        />
        <path
          d="M48.75 49.4375C48.75 49.9648 48.2812 50.375 47.8125 50.375H42.1875C41.6602 50.375 41.25 49.9648 41.25 49.4375V46.625H30V55.0625C30 56.5859 31.2891 57.875 32.8125 57.875H57.1875C58.6523 57.875 60 56.5859 60 55.0625V46.625H48.75V49.4375ZM57.1875 37.25H52.5V34.4375C52.5 32.9727 51.1523 31.625 49.6875 31.625H40.3125C38.7891 31.625 37.5 32.9727 37.5 34.4375V37.25H32.8125C31.2891 37.25 30 38.5977 30 40.0625V44.75H60V40.0625C60 38.5977 58.6523 37.25 57.1875 37.25ZM48.75 37.25H41.25V35.375H48.75V37.25Z"
          fill="#00CBB8"
        />
      </svg>
    ),
    favouriteTitle: "Business",
    favouriteDisc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod",
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
    recommendedPic: recommendedPic2,
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
    recommendedPic: recommendedPic2,
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
    recommendedPic: recommendedPic2,
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

const getChoice = [
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
    recommendedPic: recommendedPic2,
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
    recommendedPic: recommendedPic2,
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

function Course() {
  var settings = {
    dots: false,
    infinite: false,
    arrow: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  var recommendedSettings = {
    dots: false,
    infinite: false,
    arrow: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <Header />
      <div className="pt-[72px] md:pt-[92px] xl:pt-[112px] 2xl:pt-[128px]">
        <div className="bg-[#EBF5FF] pt-10 md:pt-[50px] pb-12 lg:pb-20 xl:pb-[107px]">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-4 md:mb-6 lg:mb-10 xl:mb-[50px] gap-3 md:gap-0">
              <h2 className="text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-semibold">
                Welcome back, ready for your next lesson?
              </h2>
              <Link
                href=""
                className="text-[#49BBBD] font-semibold text-base lg:text-lg xl:text-xl whitespace-nowrap"
              >
                View hisotry
              </Link>
            </div>
            <Slider {...settings} className="arrowSlider course-slider">
              {ourStudents.map((data, i) => (
                <div key={i} className="bg-white rounded-[20px] p-3 md:p-5">
                  <div className="rounded-[20px] overflow-hidden">
                    <img src={data.coursePic} alt="" className="w-full" />
                  </div>
                  <h3 className="my-4 text-lg xl:text-xl 2xl:text-2xl font-medium text-[#252641]">
                    {data.courseTitle}
                  </h3>
                  <div className="flex items-center">
                    <img
                      src={data.courseUser}
                      alt="User"
                      className="rounded-full w-[42px] aspect-square"
                    />
                    <span className="ml-4 text-lg font-medium">
                      {data.courseUserName}
                    </span>
                  </div>
                  <div className="mt-6 mb-3">
                    <ProgressBar
                      completed={data.courseCompleted}
                      maxCompleted={data.courseMaxCompleted}
                      className="course-progress"
                      height={8}
                      bgColor="#49BBBD"
                      baseBgColor="#D9D9D9"
                      labelClassName="progress-label"
                    />
                  </div>
                  <div className="text-right text-sm font-semibold text-[#808080]">
                    {data.courseProcess}
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
        <div className="py-10 md:py-12 lg:py-16 xl:pt-20 xl:pb-[100px]">
          <div className="container mx-auto px-4">
            <h2 className="text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-semibold mb-4 md:mb-6 lg:mb-10 xl:mb-[50px]">
              Choice favourite course from top category
            </h2>
            <div className="flex flex-wrap gap-6 xl:gap-10 2xl:gap-20">
              {favouriteCourse.map((data, i) => (
                <div
                  key={i}
                  className="md:w-[calc(33.33%-16px)] lg:w-[calc(33.33%-16px)] xl:w-[calc(25%-30px)] 2xl:w-[calc(25%-60px)] bg-white rounded-[20px] p-5 lg:p-8 lg:pb-14 drop-shadow-[0_18px_47px_rgba(47,50,125,0.10)] text-center"
                >
                  <div className="rounded overflow-hidden w-16 lg:w-[90px] aspect-square mx-auto">
                    {data.favouriteIcon}
                  </div>
                  <h3 className="my-4 lg:mt-5 lg:mb-6 text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-semibold">
                    {data.favouriteTitle}
                  </h3>
                  <p className="text-sm lg:text-lg text-[#696984]">
                    {data.favouriteDisc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="bg-[#EBF5FF] py-10 md:py-12 lg:py-16 xl:pt-24 xl:pb-[163px]">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-4 md:mb-6 lg:mb-10 xl:mb-[50px] gap-3 md:gap-0">
              <h2 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-medium">
                Recommended for you
              </h2>
              <Link
                href=""
                className="text-[#49BBBD] font-semibold text-base lg:text-lg xl:text-xl whitespace-nowrap"
              >
                See all
              </Link>
            </div>
            <Slider
              {...recommendedSettings}
              className="arrowSlider course-slider"
            >
              {recommendedForYou.map((data, i) => (
                <div
                  key={i}
                  className="w-full md:w-[calc(50%-10px)] lg:w-auto bg-white shadow-xl p-4 md:px-5 md:pt-5 md:pb-8 rounded-[20px]"
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
                  <h3 className="text-lg xl:text-xl 2xl:text-2xl font-medium text-[#252641] leading-normal">
                    {data.recommendedTitle}
                  </h3>
                  <p className="my-4 2xl:mt-5 2xl:mb-4 text-[#696984] md:text-lg">
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
            </Slider>
          </div>
        </div>
        <div className="py-10 md:py-12 lg:py-16 xl:py-[90px]">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-4 md:mb-6 lg:mb-10 xl:mb-[50px] gap-3 md:gap-0">
              <h2 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-medium">
                Get choice of your course
              </h2>
              <Link
                href=""
                className="text-[#49BBBD] font-semibold text-base lg:text-lg xl:text-xl whitespace-nowrap"
              >
                See all
              </Link>
            </div>
            <div className="flex flex-wrap lg:flex-nowrap gap-5 lg:gap-6 xl:gap-8 2xl:gap-[50px]">
              {getChoice.map((data, i) => (
                <div
                  key={i}
                  className="w-full md:w-[calc(50%-10px)] lg:w-auto bg-white shadow-xl p-4 md:px-5 md:pt-5 md:pb-8 rounded-[20px]"
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
                  <h3 className="text-lg xl:text-xl 2xl:text-2xl font-medium text-[#252641] leading-normal">
                    {data.recommendedTitle}
                  </h3>
                  <p className="my-4 2xl:mt-5 2xl:mb-4 text-[#696984] md:text-lg">
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
        <div className="container mx-auto px-4">
          <div className="bg-[#252641] py-10 md:py-12 lg:py-16 xl:py-20 2xl:pt-[70px] 2xl:pb-[83px] px-4 text-center rounded-2xl md:rounded-3xl lg:rounded-[36px]">
            <OnlineCoaching />
          </div>
        </div>
        <div className="py-10 md:py-12 lg:py-16 xl:py-[90px]">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-4 md:mb-6 lg:mb-10 xl:mb-[50px] gap-3 md:gap-0">
              <h2 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-medium">
                The course in personal development
              </h2>
              <Link
                href=""
                className="text-[#49BBBD] font-semibold text-base lg:text-lg xl:text-xl whitespace-nowrap"
              >
                See all
              </Link>
            </div>
            <div className="flex flex-wrap lg:flex-nowrap gap-5 lg:gap-6 xl:gap-8 2xl:gap-[50px]">
              {getChoice.map((data, i) => (
                <div
                  key={i}
                  className="w-full md:w-[calc(50%-10px)] lg:w-auto bg-white shadow-xl p-4 md:px-5 md:pt-5 md:pb-8 rounded-[20px]"
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
                  <h3 className="text-lg xl:text-xl 2xl:text-2xl font-medium text-[#252641] leading-normal">
                    {data.recommendedTitle}
                  </h3>
                  <p className="my-4 2xl:mt-5 2xl:mb-4 text-[#696984] md:text-lg">
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
        <div className="bg-[#EBF5FF] py-10 md:py-12 lg:py-16 xl:pt-24 xl:pb-[138px]">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-4 md:mb-6 lg:mb-10 xl:mb-[50px] gap-3 md:gap-0">
              <h2 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-medium">
                Student are viewing
              </h2>
              <Link
                href=""
                className="text-[#49BBBD] font-semibold text-base lg:text-lg xl:text-xl whitespace-nowrap"
              >
                See all
              </Link>
            </div>
            <div className="flex flex-wrap lg:flex-nowrap gap-5 lg:gap-6 xl:gap-8 2xl:gap-[50px]">
              {getChoice.map((data, i) => (
                <div
                  key={i}
                  className="w-full md:w-[calc(50%-10px)] lg:w-auto bg-white shadow-xl p-4 md:px-5 md:pt-5 md:pb-8 rounded-[20px]"
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
                  <h3 className="text-lg xl:text-xl 2xl:text-2xl font-medium text-[#252641] leading-normal">
                    {data.recommendedTitle}
                  </h3>
                  <p className="my-4 2xl:mt-5 2xl:mb-4 text-[#696984] md:text-lg">
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
      </div>
      <Footer />
    </>
  );
}

export default Course;
