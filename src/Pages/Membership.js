import React from "react";
import Header from "../Componant/Header";
import Footer from "../Componant/Footer";
import { Link } from "react-router-dom";
import studentsPic from "../../src/images/user.png";
import RelatedBlog2 from "../../src/images/related-blog2.jpg";

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import Slider from "react-slick";
import OnlineCoaching from "../Componant/OnlineCoaching";

const checkIconArray = [
  {
    checkIcon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.4815 8.64001L10.3215 14.8L7.52148 12"
          stroke="#2D3436"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

const ourStudents = [
  {
    ourStudentsPic: studentsPic,
    ourStudentsName: "Bulkin Simons",
    ourStudentsDisc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod",
  },
  {
    ourStudentsPic: studentsPic,
    ourStudentsName: "Bulkin Simons",
    ourStudentsDisc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod",
  },
  {
    ourStudentsPic: studentsPic,
    ourStudentsName: "Bulkin Simons",
    ourStudentsDisc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod",
  },
  {
    ourStudentsPic: studentsPic,
    ourStudentsName: "Bulkin Simons",
    ourStudentsDisc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod",
  },
  {
    ourStudentsPic: studentsPic,
    ourStudentsName: "Bulkin Simons",
    ourStudentsDisc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod",
  },
  {
    ourStudentsPic: studentsPic,
    ourStudentsName: "Bulkin Simons",
    ourStudentsDisc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod",
  },
];

const RelatedBlog = [
  {
    RelatedBlogPic: RelatedBlog2,
    RelatedBlogTitle: "Become a Teacher",
    RelatedBlogDisc:
      "Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...",
  },
  {
    RelatedBlogPic: RelatedBlog2,
    RelatedBlogTitle: "Become a Teacher",
    RelatedBlogDisc:
      "Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...",
  },
];

function Membership() {
  var settings = {
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
          slidesToShow: 3,
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
        <div className="container mx-auto px-4">
          <h1 className="text-[#49BBBD] text-3xl md:text-4xl lg:text-[44px] xl:text-[54px] 2xl:text-[64px] font-semibold text-center tracking-[-1px] my-10 md:my-12 lg:my-16 xl:my-20 2xl:mt-28 2xl:mb-20">
            Affordable pricing
          </h1>
          <div className="flex flex-col md:flex-row justify-center gap-4 lg:gap-5 xl:gap-[30px]">
            <div className="border border-[#ADADAD] md:border-none bg-white p-4 lg:p-6 xl:p-8 flex flex-col rounded-2xl group hover:drop-shadow-[0_8px_8px_rgba(38,50,56,0.12)]">
              <h6 className="text-[#49BBBD] text-base lg:text-lg font-bold">
                Like a pussy
              </h6>
              <h2 className="text-[#2D3436] text-3xl lg:text-4xl xl:text-5xl font-bold my-3 lg:mt-4 lg:mb-7">
                Free{" "}
                <small className="text-[40%] xl:text-[25%] uppercase font-bold tracking-[2.5px]">
                  / forever
                </small>
              </h2>
              <ul className="flex-1 flex flex-col gap-2 lg:gap-3 xl:gap-5 mb-5">
                <li className="flex items-center gap-3 md:gap-4">
                  {checkIconArray.map((data, i) => (
                    <div
                      className="bg-[#E2E2E2] w-8 aspect-square rounded-full flex items-center justify-center"
                      key={i}
                    >
                      {data.checkIcon}
                    </div>
                  ))}
                  <span className="text-sm lg:text-base xl:text-lg text-[#2D3436]">
                    Components-driven system
                  </span>
                </li>
                <li className="flex items-center gap-3 md:gap-4">
                  {checkIconArray.map((data, i) => (
                    <div
                      className="bg-[#E2E2E2] w-8 aspect-square rounded-full flex items-center justify-center"
                      key={i}
                    >
                      {data.checkIcon}
                    </div>
                  ))}
                  <span className="text-sm lg:text-base xl:text-lg text-[#2D3436]">
                    Sales-boosting landing pages
                  </span>
                </li>
                <li className="flex items-center gap-3 md:gap-4">
                  {checkIconArray.map((data, i) => (
                    <div
                      className="bg-[#E2E2E2] w-8 aspect-square rounded-full flex items-center justify-center"
                      key={i}
                    >
                      {data.checkIcon}
                    </div>
                  ))}
                  <span className="text-sm lg:text-base xl:text-lg text-[#2D3436]">
                    Awesome Feather icons pack
                  </span>
                </li>
              </ul>
              <Link
                href=""
                className="w-full rounded-xl lg:rounded-2xl border border-[#ADADAD] py-3 lg:py-4 text-lg text-[#49BBBD] font-medium lg:font-bold text-center group-hover:bg-[#49BBBD] group-hover:text-white group-hover:border-[#49BBBD]"
              >
                Try for free
              </Link>
            </div>
            <div className="border border-[#ADADAD] md:border-none bg-white p-4 lg:p-6 xl:p-8 flex flex-col rounded-2xl group hover:drop-shadow-[0_8px_8px_rgba(38,50,56,0.12)]">
              <div className="flex items-center justify-between">
                <h6 className="text-[#49BBBD] text-base lg:text-lg font-bold">
                  Individual
                </h6>
                <span className="border border-[#6C5CE7] uppercase text-xs font-bold text-[#2D3436] p-2 rounded-full w-[90px] text-center">
                  best!
                </span>
              </div>
              <h2 className="text-[#2D3436] text-3xl lg:text-4xl xl:text-5xl font-bold my-3 lg:mt-4 lg:mb-7">
                $24{" "}
                <small className="text-[40%] xl:text-[25%] uppercase font-bold tracking-[2.5px]">
                  / month
                </small>
              </h2>
              <ul className="flex-1 flex flex-col gap-2 lg:gap-3 xl:gap-5 mb-5">
                <li className="flex items-center gap-3 md:gap-4">
                  {checkIconArray.map((data, i) => (
                    <div
                      className="bg-[#FDCB6E] w-8 aspect-square rounded-full flex items-center justify-center"
                      key={i}
                    >
                      {data.checkIcon}
                    </div>
                  ))}
                  <span className="text-sm lg:text-base xl:text-lg text-[#2D3436]">
                    Components-driven system
                  </span>
                </li>
                <li className="flex items-center gap-3 md:gap-4">
                  {checkIconArray.map((data, i) => (
                    <div
                      className="bg-[#FDCB6E] w-8 aspect-square rounded-full flex items-center justify-center"
                      key={i}
                    >
                      {data.checkIcon}
                    </div>
                  ))}
                  <span className="text-sm lg:text-base xl:text-lg text-[#2D3436]">
                    Sales-boosting landing pages
                  </span>
                </li>
                <li className="flex items-center gap-3 md:gap-4">
                  {checkIconArray.map((data, i) => (
                    <div
                      className="bg-[#FDCB6E] w-8 aspect-square rounded-full flex items-center justify-center"
                      key={i}
                    >
                      {data.checkIcon}
                    </div>
                  ))}
                  <span className="text-sm lg:text-base xl:text-lg text-[#2D3436]">
                    Awesome Feather icons pack
                  </span>
                </li>
                <li className="flex items-center gap-3 md:gap-4">
                  {checkIconArray.map((data, i) => (
                    <div
                      className="bg-[#FDCB6E] w-8 aspect-square rounded-full flex items-center justify-center"
                      key={i}
                    >
                      {data.checkIcon}
                    </div>
                  ))}
                  <span className="text-sm lg:text-base xl:text-lg text-[#2D3436]">
                    Themed into 3 different styles
                  </span>
                </li>
                <li className="flex items-center gap-3 md:gap-4">
                  {checkIconArray.map((data, i) => (
                    <div
                      className="bg-[#FDCB6E] w-8 aspect-square rounded-full flex items-center justify-center"
                      key={i}
                    >
                      {data.checkIcon}
                    </div>
                  ))}
                  <span className="text-sm lg:text-base xl:text-lg text-[#2D3436]">
                    Will help to learn Figma
                  </span>
                </li>
              </ul>
              <Link
                href=""
                className="w-full rounded-xl lg:rounded-2xl border border-[#ADADAD] py-3 lg:py-4 text-lg text-[#49BBBD] font-medium lg:font-bold text-center group-hover:bg-[#49BBBD] group-hover:text-white group-hover:border-[#49BBBD]"
              >
                Regular license
              </Link>
            </div>
            <div className="border border-[#ADADAD] md:border-none bg-white p-4 lg:p-6 xl:p-8 flex flex-col rounded-2xl group hover:drop-shadow-[0_8px_8px_rgba(38,50,56,0.12)]">
              <h6 className="text-[#49BBBD] text-base lg:text-lg font-bold">
                Corporate
              </h6>
              <h2 className="text-[#2D3436] text-3xl lg:text-4xl xl:text-5xl font-bold my-3 lg:mt-4 lg:mb-7">
                $12{" "}
                <small className="text-[40%] xl:text-[25%] uppercase font-bold tracking-[2.5px]">
                  / editor
                </small>
              </h2>
              <ul className="flex-1 flex flex-col gap-2 lg:gap-3 xl:gap-5 mb-5">
                <li className="flex items-center gap-3 md:gap-4">
                  {checkIconArray.map((data, i) => (
                    <div
                      className="bg-[#55EFC4] w-8 aspect-square rounded-full flex items-center justify-center"
                      key={i}
                    >
                      {data.checkIcon}
                    </div>
                  ))}
                  <span className="text-sm lg:text-base xl:text-lg text-[#2D3436]">
                    Components-driven system
                  </span>
                </li>
                <li className="flex items-center gap-3 md:gap-4">
                  {checkIconArray.map((data, i) => (
                    <div
                      className="bg-[#55EFC4] w-8 aspect-square rounded-full flex items-center justify-center"
                      key={i}
                    >
                      {data.checkIcon}
                    </div>
                  ))}
                  <span className="text-sm lg:text-base xl:text-lg text-[#2D3436]">
                    Sales-boosting landing pages
                  </span>
                </li>
                <li className="flex items-center gap-3 md:gap-4">
                  {checkIconArray.map((data, i) => (
                    <div
                      className="bg-[#55EFC4] w-8 aspect-square rounded-full flex items-center justify-center"
                      key={i}
                    >
                      {data.checkIcon}
                    </div>
                  ))}
                  <span className="text-sm lg:text-base xl:text-lg text-[#2D3436]">
                    Awesome Feather icons pack
                  </span>
                </li>
                <li className="flex items-center gap-3 md:gap-4">
                  {checkIconArray.map((data, i) => (
                    <div
                      className="bg-[#55EFC4] w-8 aspect-square rounded-full flex items-center justify-center"
                      key={i}
                    >
                      {data.checkIcon}
                    </div>
                  ))}
                  <span className="text-sm lg:text-base xl:text-lg text-[#2D3436]">
                    Themed into 3 different styles
                  </span>
                </li>
              </ul>
              <Link
                href=""
                className="w-full rounded-xl lg:rounded-2xl border border-[#ADADAD] py-3 lg:py-4 text-lg text-[#49BBBD] font-medium lg:font-bold text-center group-hover:bg-[#49BBBD] group-hover:text-white group-hover:border-[#49BBBD]"
              >
                Extended license
              </Link>
            </div>
          </div>
          <div className="bg-[#252641] py-10 md:py-12 lg:py-16 xl:py-20 2xl:pt-[70px] 2xl:pb-[83px] px-4 text-center rounded-2xl md:rounded-3xl lg:rounded-[36px] my-10 md:my-12 lg:my-16 xl:my-20 2xl:mt-48 2xl:mb-20">
            <OnlineCoaching />
          </div>
          <div className="">
            <h2 className="text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-semibold text-center !leading-normal">
              Online coaching lessons for remote learning
            </h2>
            <div className="my-10 md:my-12 lg:my-16 xl:my-20">
              <Accordion className="border-none">
                <AccordionItem className="border-b border-[#696984]">
                  <AccordionItemHeading>
                    <AccordionItemButton className="accordion-btn">
                      <span className="mr-4 w-5 h-5 rounded-full bg-[#ADF7E3] inline-block"></span>
                      <span className="text-sm lg:text-base xl:text-lg text-[#2D3436]">
                        Lorem ipsum dolor sit amet
                      </span>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel className="md:px-9 pb-4 md:pb-6">
                    <p className="text-sm md:text-base">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Fugit, quisquam cumque! Beatae facere atque tempore
                      maiores suscipit nemo nobis, a quos sit rerum tempora
                      soluta animi fugit molestias modi deleniti!
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem className="border-b border-[#696984]">
                  <AccordionItemHeading>
                    <AccordionItemButton className="accordion-btn">
                      <span className="mr-4 w-5 h-5 rounded-full bg-[#ADF7E3] inline-block"></span>
                      <span className="text-sm lg:text-base xl:text-lg text-[#2D3436]">
                        Consectetur adipiscing elit, sed do
                      </span>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel className="md:px-9 pb-4 md:pb-6">
                    <p className="text-sm md:text-base">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Fugit, quisquam cumque! Beatae facere atque tempore
                      maiores suscipit nemo nobis, a quos sit rerum tempora
                      soluta animi fugit molestias modi deleniti!
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem className="border-b border-[#696984]">
                  <AccordionItemHeading>
                    <AccordionItemButton className="accordion-btn">
                      <span className="mr-4 w-5 h-5 rounded-full bg-[#ADF7E3] inline-block"></span>
                      <span className="text-sm lg:text-base xl:text-lg text-[#2D3436]">
                        Eiusmod tempos Lorem ipsum
                      </span>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel className="md:px-9 pb-4 md:pb-6">
                    <p className="text-sm md:text-base">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Fugit, quisquam cumque! Beatae facere atque tempore
                      maiores suscipit nemo nobis, a quos sit rerum tempora
                      soluta animi fugit molestias modi deleniti!
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem className="border-b border-[#696984]">
                  <AccordionItemHeading>
                    <AccordionItemButton className="accordion-btn">
                      <span className="mr-4 w-5 h-5 rounded-full bg-[#ADF7E3] inline-block"></span>
                      <span className="text-sm lg:text-base xl:text-lg text-[#2D3436]">
                        Lorem ipsum dolor sit amet
                      </span>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel className="md:px-9 pb-4 md:pb-6">
                    <p className="text-sm md:text-base">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Fugit, quisquam cumque! Beatae facere atque tempore
                      maiores suscipit nemo nobis, a quos sit rerum tempora
                      soluta animi fugit molestias modi deleniti!
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem className="border-b border-[#696984]">
                  <AccordionItemHeading>
                    <AccordionItemButton className="accordion-btn">
                      <span className="mr-4 w-5 h-5 rounded-full bg-[#ADF7E3] inline-block"></span>
                      <span className="text-sm lg:text-base xl:text-lg text-[#2D3436]">
                        Lorem ipsum dolor sit amet
                      </span>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel className="md:px-9 pb-4 md:pb-6">
                    <p className="text-sm md:text-base">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Fugit, quisquam cumque! Beatae facere atque tempore
                      maiores suscipit nemo nobis, a quos sit rerum tempora
                      soluta animi fugit molestias modi deleniti!
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
        <div className="bg-[#EBF5FF] pt-10 pb-28 md:pt-12 md:pb-32 lg:pt-16 lg:pb-40 xl:pt-20 xl:pb-60 2xl:pb-[317px]">
          <div className="container mx-auto px-4">
            <h2 className="text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-semibold mb-4 md:mb-6 lg:mb-10 xl:mb-[50px]">
              What our students have to say
            </h2>
            <Slider {...settings} className="arrowCenterSlider">
              {ourStudents.map((data, i) => (
                <div
                  key={i}
                  className="bg-white rounded-[20px] p-4 xl:p-5 2xl:pt-8 2xl:pb-14 2xl:px-7 text-center"
                >
                  <div className="rounded-[20px] overflow-hidden w-full md:w-24 2xl:w-[118px] md:aspect-square mx-auto">
                    <img
                      src={data.ourStudentsPic}
                      alt=""
                      className="w-full h-48 object-cover object-top md:h-auto"
                    />
                  </div>
                  <h3 className="my-5 text-lg xl:text-xl 2xl:text-2xl font-semibold text-[#2D3436]">
                    {data.ourStudentsName}
                  </h3>
                  <p className="text-[#696984] text-base xl:text-lg">
                    {data.ourStudentsDisc}
                  </p>
                </div>
              ))}
            </Slider>
          </div>
        </div>
        <div className="mt-[-55px] lg:mt-[-68px] xl:mt-[-96px] 2xl:mt-[-123px]">
          <div className="container mx-auto px-4">
            <div className="bg-[#252641] rounded-2xl lg:rounded-3xl xl:rounded-[36px] p-4 md:p-8 lg:p-10 xl:px-20 xl:py-16 2xl:pt-[71px] 2xl:pb-[84px] 2xl:pl-[100px] 2xl:pr-[88px] flex flex-col md:flex-row items-center justify-between">
              <h2 className="mb-4 md:mb-auto text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-semibold text-white">
                APP is available for free
              </h2>
              <div className="flex items-stretch gap-2 md:gap-4 lg:gap-6 w-full md:w-auto">
                <Link
                  href=""
                  className="bg-[#29B9E7] rounded-xl p-2 lg:p-3 xl:p-4 min-w-[50%] md:min-w-[162px] lg:min-w-[200px] xl:min-w-[254px] flex items-center justify-center gap-3 xl:gap-4"
                >
                  <svg
                    width="34"
                    height="20"
                    viewBox="0 0 34 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="hidden md:block"
                  >
                    <path
                      d="M24.6094 14.4453C25.3711 14.4453 26.0156 13.8594 26.0156 13.0391C26.0156 12.2773 25.3711 11.6328 24.6094 11.6328C23.8477 11.6328 23.2031 12.2773 23.2031 13.0391C23.2031 13.8594 23.8477 14.4453 24.6094 14.4453ZM9.08203 14.4453C9.84375 14.4453 10.4883 13.8594 10.4883 13.0391C10.4883 12.2773 9.84375 11.6328 9.08203 11.6328C8.32031 11.6328 7.67578 12.2773 7.67578 13.0391C7.67578 13.8594 8.32031 14.4453 9.08203 14.4453ZM25.1367 6.00781C29.9414 8.64453 33.2227 13.5078 33.75 19.25H0C0.46875 13.5078 3.75 8.64453 8.55469 6.00781L5.74219 1.14453C5.68359 1.02734 5.68359 0.910156 5.68359 0.792969C5.68359 0.5 5.91797 0.207031 6.26953 0.207031C6.50391 0.207031 6.67969 0.382812 6.79688 0.558594L9.60938 5.48047C11.8359 4.48438 14.2969 3.95703 16.875 3.95703C19.4531 3.95703 21.8555 4.48438 24.082 5.48047L26.8945 0.558594C27.0117 0.382812 27.1875 0.207031 27.4219 0.207031C27.7734 0.207031 28.0078 0.5 28.0078 0.792969C28.0078 0.910156 28.0078 1.02734 27.9492 1.14453L25.1367 6.00781Z"
                      fill="white"
                    />
                  </svg>
                  <span className="text-base lg:text-lg xl:text-2xl font-medium xl:font-semibold text-white">
                    Android APP
                  </span>
                </Link>
                <Link
                  href=""
                  className="bg-[#49BBBD] rounded-xl p-2 lg:p-3 xl:p-4 min-w-[50%] md:min-w-[162px] lg:min-w-[200px] xl:min-w-[254px] flex items-center justify-center gap-3 xl:gap-4"
                >
                  <svg
                    width="28"
                    height="31"
                    viewBox="0 0 28 31"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="hidden md:block"
                  >
                    <path
                      d="M21.5078 8.30859C23.0312 8.60156 24.3203 9.42188 25.2578 10.7695C26.1367 12 26.7227 13.5234 27.0156 15.3398C27.3086 17.0391 27.3086 18.7383 26.957 20.3789C26.4883 23.1914 25.5508 25.4766 24.1445 27.3516C22.5039 29.6367 20.3945 30.75 17.8164 30.75C17.2305 30.75 16.5273 30.5742 15.7656 30.1641C15.2969 29.8711 14.7109 29.6953 14.0664 29.6953C13.4805 29.6953 12.8945 29.8711 12.4258 30.1641C11.6641 30.5742 10.9609 30.75 10.375 30.75C7.79688 30.75 5.6875 29.6367 4.04688 27.3516C2.64062 25.4766 1.70312 23.1914 1.23438 20.3789C0.882812 18.7383 0.882812 17.0391 1.17578 15.3398C1.46875 13.5234 2.05469 12 2.93359 10.7695C3.87109 9.42188 5.16016 8.60156 6.68359 8.30859C7.62109 8.19141 8.91016 8.30859 10.5508 8.71875C11.957 9.12891 13.1289 9.59766 14.0664 10.125C15.0625 9.59766 16.2344 9.12891 17.6406 8.71875C19.2812 8.30859 20.5703 8.19141 21.5078 8.30859ZM18.2852 5.90625C17.7578 6.43359 17.0547 6.78516 16.1172 7.01953C15.5312 7.25391 14.8281 7.3125 14.0664 7.3125L13.2461 7.25391C13.1289 6.72656 13.1289 6.08203 13.2461 5.37891C13.3633 3.97266 13.832 2.91797 14.5352 2.15625C15.1211 1.6875 15.8242 1.27734 16.7031 1.04297C17.3477 0.867188 18.0508 0.75 18.7539 0.75L19.6328 0.808594L19.6914 1.6875C19.6914 2.44922 19.6328 3.15234 19.3984 3.73828C19.1641 4.67578 18.8125 5.37891 18.2852 5.90625Z"
                      fill="white"
                    />
                  </svg>
                  <span className="text-base lg:text-lg xl:text-2xl font-medium xl:font-semibold text-white">
                    IOS APP
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="py-10 md:py-12 lg:py-16 xl:pt-20 xl:pb-40 2xl:pb-56">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-6 md:gap-12 lg:gap-16 xl:gap-[108px]">
              {RelatedBlog.map((data, i) => (
                <div
                  key={i}
                  className="bg-white rounded-[20px] p-4 md:p-6 xl:pt-[60px] xl:pb-[50px] xl:px-8 drop-shadow-[0_18px_47px_rgba(47,50,125,0.1)]"
                >
                  <div className="rounded-[20px] overflow-hidden">
                    <img src={data.RelatedBlogPic} alt="" className="w-full" />
                  </div>
                  <h3 className="my-4 text-lg xl:text-xl 2xl:text-[26px] font-medium text-[#252641]">
                    {data.RelatedBlogTitle}
                  </h3>
                  <p className="text-[#696984] text-base xl:text-lg 2xl:text-xl pb-6 xl:pb-12">
                    {data.RelatedBlogDisc}
                  </p>
                  <div className="text-center md:text-right">
                    <Link
                      to="/"
                      className="py-3 xl:py-4 px-6 xl:px-10 inline-block rounded-xl bg-[#49BBBD] text-white text-base xl:text-xl font-medium hover:bg-[#252641] hover:text-white"
                    >
                      Apply a Teacher
                    </Link>
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

export default Membership;
