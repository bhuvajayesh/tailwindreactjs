import React from "react";
import Logo from "../../src/images/logo.svg";
import Banner from "../../src/images/banner.svg";
import physicalClass from "../../src/images/physical-classroom.jpg";
import featurePic1 from "../../src/images/feature-pic1.png";
import featurePic2 from "../../src/images/feature-pic2.png";
import featurePic3 from "../../src/images/feature-pic3.png";
import featurePic4 from "../../src/images/feature-pic4.png";
import featurePic5 from "../../src/images/feature-pic5.png";
import exploreCourse from "../../src/images/explore-course.png";
import testimonial from "../../src/images/testimonial.png";
import blog1 from "../../src/images/blog1.jpg";
import blog2 from "../../src/images/blog2.jpg";
import blog3 from "../../src/images/blog3.jpg";
import blog4 from "../../src/images/blog4.jpg";
import { Link } from "react-router-dom";
import Footer from "../Componant/Footer";

const Menu = [
  {
    menuName: "Home",
    link: "/",
  },
  {
    menuName: "Courses",
    link: "/courses",
  },
  {
    menuName: "Careers",
    link: "/careers",
  },
  {
    menuName: "Blog",
    link: "/blog",
  },
  {
    menuName: "About Us",
    link: "/about-us",
  },
];

const ourSucess = [
  {
    sucessCount: "15K+",
    sucessLabel: "Students",
  },
  {
    sucessCount: "75 %",
    sucessLabel: "Total success",
  },
  {
    sucessCount: "35",
    sucessLabel: "Main questions",
  },
  {
    sucessCount: "26",
    sucessLabel: "Chief experts",
  },
  {
    sucessCount: "16",
    sucessLabel: "Years of experience",
  },
];

const blogList = [
  {
    blogPic: blog2,
    blogTag: "PRESS RELEASE",
    blogTitle:
      "Class Technologies Inc. Closes $30 Million Series A Financing to Meet High Demand",
    blogDisc:
      "Class Technologies is a company based in the District of Columbia that offers the next generation virtual classroom solution aimed at enhancing active learning, collaboration, and engagement in online classes and virtual instructor-led training.",
  },
  {
    blogPic: blog3,
    blogTag: "NEWS",
    blogTitle:
      "Zoom's earliest investors are betting millions on a better Zoom for schools",
    blogDisc:
      "Zoom was never created to be a consumer product. Nonetheless, the video-conferencing company's accessibility made it the answer to every social situation threatened by the pandemic, from happy hours to meetings.",
  },
  {
    blogPic: blog4,
    blogTag: "NEWS",
    blogTitle:
      "Former Blackboard CEO Raises $16M to Bring LMS Features to Zoom Classrooms",
    blogDisc:
      "This year, investors have reaped big financial returns from betting on Zoom. Since March, when the global pandemic accelerated, the stock price of the publicly traded online video company has increased five-fold, to over $500 per share, by Wednesday’s close.",
  },
];

const OurFeatures = [
  {
    featuresIcon: (
      <svg
        width="27"
        height="26"
        viewBox="0 0 27 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="11.8182" height="11.8182" rx="2" fill="#2F327D" />
        <rect
          y="14.1819"
          width="11.8182"
          height="11.8182"
          rx="2"
          fill="#2F327D"
        />
        <rect
          x="14.7734"
          width="11.8182"
          height="11.8182"
          rx="2"
          fill="#2F327D"
        />
        <rect
          x="14.7734"
          y="14.1819"
          width="11.8182"
          height="11.8182"
          rx="2"
          fill="#F48C06"
        />
      </svg>
    ),
    featuresLabel:
      "Teachers don't get lost in the grid view and have a dedicated Podium space.",
  },
  {
    featuresIcon: (
      <svg
        width="28"
        height="26"
        viewBox="0 0 28 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="8" y="6" width="20" height="20" rx="2" fill="#2F327D" />
        <rect width="21.2245" height="21.2245" rx="2" fill="#F48C06" />
      </svg>
    ),
    featuresLabel:
      "TA's and presenters can be moved to the front of the class.",
  },
  {
    featuresIcon: (
      <svg
        width="30"
        height="26"
        viewBox="0 0 30 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.5 11.375C6.15469 11.375 7.5 9.91758 7.5 8.125C7.5 6.33242 6.15469 4.875 4.5 4.875C2.84531 4.875 1.5 6.33242 1.5 8.125C1.5 9.91758 2.84531 11.375 4.5 11.375ZM25.5 11.375C27.1547 11.375 28.5 9.91758 28.5 8.125C28.5 6.33242 27.1547 4.875 25.5 4.875C23.8453 4.875 22.5 6.33242 22.5 8.125C22.5 9.91758 23.8453 11.375 25.5 11.375ZM27 13H24C23.175 13 22.4297 13.3605 21.8859 13.9445C23.775 15.0668 25.1156 17.093 25.4062 19.5H28.5C29.3297 19.5 30 18.7738 30 17.875V16.25C30 14.4574 28.6547 13 27 13ZM15 13C17.9016 13 20.25 10.4559 20.25 7.3125C20.25 4.16914 17.9016 1.625 15 1.625C12.0984 1.625 9.75 4.16914 9.75 7.3125C9.75 10.4559 12.0984 13 15 13ZM18.6 14.625H18.2109C17.2359 15.1328 16.1531 15.4375 15 15.4375C13.8469 15.4375 12.7688 15.1328 11.7891 14.625H11.4C8.41875 14.625 6 17.2453 6 20.475V21.9375C6 23.2832 7.00781 24.375 8.25 24.375H21.75C22.9922 24.375 24 23.2832 24 21.9375V20.475C24 17.2453 21.5812 14.625 18.6 14.625ZM8.11406 13.9445C7.57031 13.3605 6.825 13 6 13H3C1.34531 13 0 14.4574 0 16.25V17.875C0 18.7738 0.670312 19.5 1.5 19.5H4.58906C4.88438 17.093 6.225 15.0668 8.11406 13.9445Z"
          fill="#2F327D"
        />
      </svg>
    ),
    featuresLabel:
      "Teachers can easily see all students and class data at one time.",
  },
];

function Home() {
  return (
    <>
      <div className="bg-[#49BBBD] overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-3 md:py-4 xl:py-6">
            <Link to="/">
              <img
                src={Logo}
                alt="Logo"
                className="max-h-12 lg:max-h-14 xl:max-h-16 2xl:max-h-20 align-middle"
              />
            </Link>
            <div className="flex items-center gap-8 lg:gap-10 2xl:gap-16">
              <ul className="hidden md:flex gap-5 lg:gap-8 xl:gap-10 2xl:gap-16">
                {Menu.map((data, i) => (
                  <li key={i}>
                    <Link
                      to={data.link}
                      className="lg:text-lg xl:text-xl text-white hover:text-black"
                    >
                      {data.menuName}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="flex gap-4 lg:gap-[26px]">
                <Link
                  to="/"
                  className="min-w-24 lg:min-w-40 bg-white py-1.5 px-4 lg:pt-2 lg:pb-3 lg:px-6 text-center rounded-full text-[#5B5B5B] text-base lg:text-xl font-semibold hover:bg-[#5B5B5B] hover:text-white leading-normal"
                >
                  Login
                </Link>

                <Link
                  to="/"
                  className="min-w-24 lg:min-w-40 bg-white bg-opacity-30 py-1.5 px-4 lg:pt-2 lg:pb-3 lg:px-6 text-center rounded-full text-white text-base lg:text-xl font-semibold hover:bg-[#5B5B5B] hover:text-white leading-normal"
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-14 mt-8 lg:pt-12">
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-[56px] text-white font-semibold !leading-normal">
                <span className="text-[#F48C06]">Studying</span> Online is now
                much easier
              </h1>
              <p className="my-6 lg:mt-8 lg:mb-12 text-lg lg:text-xl xl:text-2xl text-white">
                TOTC is an interesting platform that will teach
                <br className="hidden lg:block" /> you in more an interactive
                way
              </p>
              <div className="flex items-center gap-6 xl:gap-10">
                <Link
                  to="/"
                  className="inline-block lg:min-w-40 whitespace-nowrap bg-white bg-opacity-30 py-2 px-4 lg:pt-2 lg:pb-3 lg:px-6 text-center rounded-full text-white text-lg lg:text-xl font-semibold hover:bg-[#5B5B5B] hover:text-white leading-normal"
                >
                  Join for free
                </Link>

                <Link to="/" className="flex items-center gap-4 xl:gap-8">
                  <svg
                    width="80"
                    height="80"
                    viewBox="0 0 80 80"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="40" cy="40" r="40" fill="white" />
                    <path
                      d="M54.5751 39.8097C55.2212 40.1983 55.2212 41.135 54.5751 41.5236L33.5154 54.1891C32.8489 54.5899 32 54.1099 32 53.3321L32 28.0012C32 27.2235 32.8489 26.7434 33.5154 27.1443L54.5751 39.8097Z"
                      fill="#23BDEE"
                    />
                  </svg>
                  <span className="text-lg lg:text-xl xl:text-2xl text-[#252641] text-left">
                    Watch how it works
                  </span>
                </Link>
              </div>
            </div>
            <div className="flex-1">
              <img src={Banner} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="py-10 md:py-14 lg:py-20 xl:py-24 2xl:py-32 text-center">
        <div className="container mx-auto px-4">
          <h3 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-[#010514] mb-4">
            Our Success
          </h3>
          <p className="text-[#010514] text-base md:text-lg">
            Ornare id fames interdum porttitor nulla turpis etiam. Diam vitae
            sollicitudin at nec <br className="hidden lg:block" /> nam et
            pharetra gravida. Adipiscing a quis ultrices eu ornare tristique vel
            nisl orci.
          </p>
          <ul className="flex flex-wrap md:flex-row justify-center gap-6 lg:gap-12 xl:gap-16 2xl:gap-20 mt-8 md:mt-12 xl:mt-20">
            {ourSucess.map((data, i) => (
              <li key={i} className="w-[calc(50%-12px)] md:w-auto">
                <span className="gradient-text">{data.sucessCount}</span>
                <label className="md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-[#343743]">
                  {data.sucessLabel}
                </label>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#2F327D] mb-5">
              All-In-One <span className="text-[#00CBB8]">Cloud Software.</span>
            </h3>
            <p className="text-lg md:text-xl xl:text-2xl text-[#696984]">
              TOTC is one powerful online software suite that combines all the
              tools <br className="hidden lg:block" /> needed to run a
              successful school or office.
            </p>
          </div>
          <ul className="md:mt-20 lg:mt-24 xl:mt-28 2xl:mt-40 flex flex-col md:flex-row justify-between md:gap-4 lg:gap-8 xl:gap-12 2xl:gap-[60px]">
            <li className="mt-20 p-4 lg:p-6 xl:p-10 !pt-0 2xl:px-14 2xl:pb-10 flex-1 bg-white text-center rounded-[20px] shadow-[0_10px_60px_0_rgba(38,45,118,0.08)]">
              <div className="bg-[#5B72EE] w-20 lg:w-[100px] aspect-square rounded-full flex items-center justify-center mx-auto mt-[-50px]">
                <svg
                  width="33"
                  height="46"
                  viewBox="0 0 33 46"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 lg:w-auto"
                >
                  <g clipPath="url(#clip0_10_961)">
                    <path
                      d="M24.75 23H8.25V28.75H24.75V23ZM32.3984 9.43359L23.9852 0.628906C23.5984 0.224609 23.0742 0 22.5242 0H22V11.5H33V10.952C33 10.3859 32.7852 9.83789 32.3984 9.43359ZM19.25 12.2188V0H2.0625C0.919531 0 0 0.961328 0 2.15625V43.8438C0 45.0387 0.919531 46 2.0625 46H30.9375C32.0805 46 33 45.0387 33 43.8438V14.375H21.3125C20.1781 14.375 19.25 13.4047 19.25 12.2188ZM5.5 6.46875C5.5 6.07164 5.80766 5.75 6.1875 5.75H13.0625C13.4423 5.75 13.75 6.07164 13.75 6.46875V7.90625C13.75 8.30336 13.4423 8.625 13.0625 8.625H6.1875C5.80766 8.625 5.5 8.30336 5.5 7.90625V6.46875ZM5.5 12.2188C5.5 11.8216 5.80766 11.5 6.1875 11.5H13.0625C13.4423 11.5 13.75 11.8216 13.75 12.2188V13.6562C13.75 14.0534 13.4423 14.375 13.0625 14.375H6.1875C5.80766 14.375 5.5 14.0534 5.5 13.6562V12.2188ZM27.5 39.5312C27.5 39.9284 27.1923 40.25 26.8125 40.25H19.9375C19.5577 40.25 19.25 39.9284 19.25 39.5312V38.0938C19.25 37.6966 19.5577 37.375 19.9375 37.375H26.8125C27.1923 37.375 27.5 37.6966 27.5 38.0938V39.5312ZM27.5 21.5625V30.1875C27.5 30.9817 26.8847 31.625 26.125 31.625H6.875C6.11531 31.625 5.5 30.9817 5.5 30.1875V21.5625C5.5 20.7683 6.11531 20.125 6.875 20.125H26.125C26.8847 20.125 27.5 20.7683 27.5 21.5625Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_10_961">
                      <rect width="33" height="46" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <h3 className="my-4 lg:my-6 xl:mt-12 xl:mb-6 2xl:mt-12 2xl:mb-6 text-lg md:text-base lg:text-xl 2xl:text-2xl text-[#2F327D] font-medium">
                Online Billing, Invoicing, & Contracts
              </h3>
              <p className="text-base xl:text-lg text-[#696984]">
                Simple and secure control of your organization's financial and
                legal transactions. Send customized invoices and contracts
              </p>
            </li>
            <li className="mt-20 p-4 lg:p-6 xl:p-10 !pt-0 2xl:px-14 2xl:pb-10 flex-1 bg-white text-center rounded-[20px] shadow-[0_10px_60px_0_rgba(38,45,118,0.08)]">
              <div className="bg-[#00CBB8] w-20 lg:w-[100px] aspect-square rounded-full flex items-center justify-center mx-auto mt-[-50px]">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 lg:w-auto"
                >
                  <g clipPath="url(#clip0_10_918)">
                    <path
                      d="M12.0005 0C11.0536 0 10.2861 0.767511 10.2861 1.71432V5.14285H13.7147V1.71432C13.7147 0.767511 12.9472 0 12.0005 0Z"
                      fill="#F5F5FC"
                    />
                    <path
                      d="M36.0005 0C35.0536 0 34.2861 0.767511 34.2861 1.71432V5.14285H37.7147V1.71432C37.7148 0.767511 36.9473 0 36.0005 0Z"
                      fill="#F5F5FC"
                    />
                    <path
                      d="M42.8571 5.14282H37.7143V12C37.7143 12.9468 36.9468 13.7143 36 13.7143C35.0532 13.7143 34.2857 12.9468 34.2857 12V5.14282H13.7142V12C13.7142 12.9468 12.9467 13.7143 11.9999 13.7143C11.0531 13.7143 10.2856 12.9468 10.2856 12V5.14282H5.14285C2.30253 5.14282 0 7.44535 0 10.2857V42.8571C0 45.6974 2.30253 48 5.14285 48H42.8571C45.6975 48 48 45.6974 48 42.8571V10.2857C48 7.44535 45.6975 5.14282 42.8571 5.14282ZM44.5714 42.8571C44.5714 43.8039 43.8039 44.5714 42.857 44.5714H5.14285C4.19605 44.5714 3.42854 43.8039 3.42854 42.8571V20.5714H44.5714V42.8571Z"
                      fill="#F5F5FC"
                    />
                    <path
                      d="M13.7141 23.9999H10.2856C9.3388 23.9999 8.57129 24.7674 8.57129 25.7142C8.57129 26.661 9.3388 27.4285 10.2856 27.4285H13.7141C14.6609 27.4285 15.4285 26.661 15.4285 25.7142C15.4285 24.7674 14.6609 23.9999 13.7141 23.9999Z"
                      fill="#F5F5FC"
                    />
                    <path
                      d="M25.7141 23.9999H22.2856C21.3388 23.9999 20.5713 24.7674 20.5713 25.7142C20.5713 26.661 21.3388 27.4285 22.2856 27.4285H25.7141C26.661 27.4285 27.4285 26.661 27.4285 25.7142C27.4285 24.7674 26.661 23.9999 25.7141 23.9999Z"
                      fill="#F5F5FC"
                    />
                    <path
                      d="M37.7141 23.9999H34.2856C33.3388 23.9999 32.5713 24.7674 32.5713 25.7142C32.5713 26.661 33.3388 27.4285 34.2856 27.4285H37.7141C38.661 27.4285 39.4285 26.661 39.4285 25.7142C39.4285 24.7674 38.6609 23.9999 37.7141 23.9999Z"
                      fill="#F5F5FC"
                    />
                    <path
                      d="M13.7141 30.8571H10.2856C9.3388 30.8571 8.57129 31.6246 8.57129 32.5714C8.57129 33.5182 9.3388 34.2857 10.2856 34.2857H13.7141C14.6609 34.2857 15.4285 33.5182 15.4285 32.5714C15.4285 31.6246 14.6609 30.8571 13.7141 30.8571Z"
                      fill="#F5F5FC"
                    />
                    <path
                      d="M25.7141 30.8571H22.2856C21.3388 30.8571 20.5713 31.6246 20.5713 32.5714C20.5713 33.5182 21.3388 34.2857 22.2856 34.2857H25.7141C26.661 34.2857 27.4285 33.5182 27.4285 32.5714C27.4285 31.6246 26.661 30.8571 25.7141 30.8571Z"
                      fill="#F5F5FC"
                    />
                    <path
                      d="M37.7141 30.8571H34.2856C33.3388 30.8571 32.5713 31.6246 32.5713 32.5714C32.5713 33.5182 33.3388 34.2857 34.2856 34.2857H37.7141C38.661 34.2857 39.4285 33.5182 39.4285 32.5714C39.4284 31.6246 38.6609 30.8571 37.7141 30.8571Z"
                      fill="#F5F5FC"
                    />
                    <path
                      d="M13.7141 37.7142H10.2856C9.3388 37.7142 8.57129 38.4817 8.57129 39.4286C8.57129 40.3754 9.3388 41.1428 10.2856 41.1428H13.7141C14.6609 41.1428 15.4285 40.3753 15.4285 39.4284C15.4285 38.4816 14.6609 37.7142 13.7141 37.7142Z"
                      fill="#F5F5FC"
                    />
                    <path
                      d="M25.7141 37.7142H22.2856C21.3388 37.7142 20.5713 38.4817 20.5713 39.4285C20.5713 40.3754 21.3388 41.1429 22.2856 41.1429H25.7141C26.661 41.1429 27.4285 40.3754 27.4285 39.4285C27.4285 38.4817 26.661 37.7142 25.7141 37.7142Z"
                      fill="#F5F5FC"
                    />
                    <path
                      d="M37.7141 37.7142H34.2856C33.3388 37.7142 32.5713 38.4817 32.5713 39.4285C32.5713 40.3754 33.3388 41.1429 34.2856 41.1429H37.7141C38.661 41.1429 39.4285 40.3754 39.4285 39.4285C39.4285 38.4817 38.6609 37.7142 37.7141 37.7142Z"
                      fill="#F5F5FC"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_10_918">
                      <rect width="48" height="48" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <h3 className="my-4 lg:my-6 xl:mt-12 xl:mb-6 text-lg md:text-base lg:text-xl 2xl:text-2xl text-[#2F327D] font-medium">
                Easy Scheduling & Attendance Tracking
              </h3>
              <p className="text-base xl:text-lg text-[#696984]">
                Schedule and reserve classrooms at one campus or multiple
                campuses. Keep detailed records of student attendance
              </p>
            </li>
            <li className="mt-20 p-4 lg:p-6 xl:p-10 !pt-0 2xl:px-14 2xl:pb-10 flex-1 bg-white text-center rounded-[20px] shadow-[0_10px_60px_0_rgba(38,45,118,0.08)]">
              <div className="bg-[#29B9E7] w-20 lg:w-[100px] aspect-square rounded-full flex items-center justify-center mx-auto mt-[-50px]">
                <svg
                  width="55"
                  height="44"
                  viewBox="0 0 55 44"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-10 lg:w-auto"
                >
                  <path
                    d="M8.25 19.25C11.2836 19.25 13.75 16.7836 13.75 13.75C13.75 10.7164 11.2836 8.25 8.25 8.25C5.21641 8.25 2.75 10.7164 2.75 13.75C2.75 16.7836 5.21641 19.25 8.25 19.25ZM46.75 19.25C49.7836 19.25 52.25 16.7836 52.25 13.75C52.25 10.7164 49.7836 8.25 46.75 8.25C43.7164 8.25 41.25 10.7164 41.25 13.75C41.25 16.7836 43.7164 19.25 46.75 19.25ZM49.5 22H44C42.4875 22 41.1211 22.6102 40.1242 23.5984C43.5875 25.4977 46.0453 28.9266 46.5781 33H52.25C53.7711 33 55 31.7711 55 30.25V27.5C55 24.4664 52.5336 22 49.5 22ZM27.5 22C32.8195 22 37.125 17.6945 37.125 12.375C37.125 7.05547 32.8195 2.75 27.5 2.75C22.1805 2.75 17.875 7.05547 17.875 12.375C17.875 17.6945 22.1805 22 27.5 22ZM34.1 24.75H33.3867C31.5992 25.6094 29.6141 26.125 27.5 26.125C25.3859 26.125 23.4094 25.6094 21.6133 24.75H20.9C15.4344 24.75 11 29.1844 11 34.65V37.125C11 39.4023 12.8477 41.25 15.125 41.25H39.875C42.1523 41.25 44 39.4023 44 37.125V34.65C44 29.1844 39.5656 24.75 34.1 24.75ZM14.8758 23.5984C13.8789 22.6102 12.5125 22 11 22H5.5C2.46641 22 0 24.4664 0 27.5V30.25C0 31.7711 1.22891 33 2.75 33H8.41328C8.95469 28.9266 11.4125 25.4977 14.8758 23.5984Z"
                    fill="white"
                  />
                </svg>
              </div>
              <h3 className="my-4 lg:my-6 xl:mt-12 xl:mb-6 text-lg md:text-base lg:text-xl 2xl:text-2xl text-[#2F327D] font-medium md:h-14 xl:h-16 flex items-center justify-center">
                Customer Tracking
              </h3>
              <p className="text-base xl:text-lg text-[#696984]">
                Automate and track emails to individuals or groups. Skilline's
                built-in system helps organize your organization
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className="pt-10 md:pt-14 lg:pt-20 xl:pt-24 2xl:pt-40">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#2F327D] mb-5">
              What is <span className="text-[#00CBB8]">TOTC?</span>
            </h3>
            <p className="text-lg md:text-xl xl:text-2xl text-[#696984]">
              TOTC is a platform that allows educators to create online classes
              whereby they can store the course materials online; manage
              assignments, quizzes and exams; monitor due dates; grade results
              and provide students with feedback all in one place.
            </p>
          </div>
          <div className="mt-10 lg:mt-14 xl:mt-[77px] flex flex-col md:flex-row justify-center gap-10 lg:gap-16 xl:gap-24">
            <div className="max-w-[600px] p-6 flex-1 bg-class-bg rounded-[20px] min-h-[200px] md:min-h-[250px] lg:min-h-[300px] xl:min-h-[400px] flex flex-col items-center justify-center">
              <h3 className="md:text-2xl lg:text-3xl font-semibold text-white mb-4">
                FOR INSTRUCTORS
              </h3>
              <Link
                to="/"
                className="py-3 px-7 lg:py-5 lg:px-9 text-center rounded-full border border-white text-white text-lg lg:text-xl font-semibold hover:bg-white hover:text-black"
              >
                Start a class today
              </Link>
            </div>
            <div className="max-w-[600px] p-6 flex-1 bg-student-bg rounded-[20px] min-h-[200px] md:min-h-[250px] lg:min-h-[300px] xl:min-h-[400px] flex flex-col items-center justify-center">
              <h3 className="md:text-2xl lg:text-3xl font-semibold text-white mb-4">
                FOR STUDENTS
              </h3>
              <Link
                to="/"
                className="py-3 px-7 lg:py-5 lg:px-9 text-center rounded-full bg-[#23BDEE] border border-[#23BDEE] border-opacity-90 bg-opacity-90 text-white text-lg lg:text-xl font-semibold hover:bg-white hover:text-black hover:bg-opacity-90 hover:border-white"
              >
                Enter access code
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-10 md:pt-14 lg:pt-20 xl:pt-24 2xl:pt-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-14">
            <div className="w-full md:w-1/2">
              <h3 className="text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-[#2F327D] font-medium leading-normal relative before:hidden before:lg:block before:content-[''] before:absolute before:-left-3 before:xl:-left-6 before:-top-2 before:xl:-top-3 before:bg-[#33EFA0] before:rounded-full before:w-[73px] before:aspect-square before:-z-10">
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
            <div className="w-full md:w-1/2 flex items-center justify-center relative before:hidden before:md:block before:content-[''] before:absolute before:-top-5 before:-left-5 before:bg-[#23BDEE] before:rounded-[20px] before:w-[138px] before:aspect-square after:hidden after:md:block after:content-[''] after:absolute after:-bottom-5 after:-right-5 after:bg-[#33EFA0] after:rounded-[20px] after:w-[231px] after:aspect-square">
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
      <div className="pt-10 md:pt-14 lg:pt-20 xl:pt-24 2xl:pt-40 pb-14">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#2F327D] mb-5">
              Our <span className="text-[#00CBB8]">Features</span>
            </h3>
            <p className="text-lg md:text-xl xl:text-2xl text-[#696984]">
              This very extraordinary feature, can make learning activities more
              efficient
            </p>
          </div>
          <div className="mt-10 md:mt-14 lg:pt-20 xl:pt-[100px] flex flex-col md:flex-row items-center md:gap-10 lg:gap-16 xl:gap-20 2xl:gap-28">
            <div className="md:w-1/2 lg:w-[55%]">
              <img src={featurePic1} alt="" className="w-full" />
            </div>
            <div className="flex-1 mt-8 md:mt-0">
              <h3 className="text-lg lg:text-xl xl:text-2xl 2xl:text-3xl 2xl:text-[40px] text-[#2F327D] font-semibold text-center md:text-left">
                A <span className="text-[#00CBB8]">user interface</span>{" "}
                designed for the classroom
              </h3>
              <ul className="mt-6 lg:mt-8 xl:mt-12 flex flex-col gap-5 lg:gap-6 xl:gap-10">
                {OurFeatures.map((data, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-4 lg:gap-6 xl:gap-8 2xl:gap-10"
                  >
                    <div className="bg-white w-[60px] aspect-square flex-none flex items-center justify-center rounded-full shadow-[0_15px_44px_0_rgba(13,15,28,0.12)]">
                      {data.featuresIcon}
                    </div>
                    <span className="text-base lg:text-lg xl:text-xl 2xl:text-[22px] text-[#696984]">
                      {data.featuresLabel}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-10 md:pt-12 lg:pt-20 xl:pt-40 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10 lg:gap-16 xl:gap-20 2xl:gap-28">
            <div className="flex-1 xl:flex-auto xl:w-2/5 text-center md:text-left">
              <h3 className="text-xl md:text-2xl lg:text-3xl xl:text-[40px] text-[#2F327D] font-semibold mb-5">
                <span className="text-[#00CBB8]">Tools</span> For Teachers And
                Learners
              </h3>
              <p className="text-base md:text-lg lg:text-xl xl:text-[22px] text-[#696984]">
                Class has a dynamic set of teaching tools built to be deployed
                and used during class. Teachers can handout assignments in
                real-time for students to complete and submit.
              </p>
            </div>
            <div className="w-full md:w-2/5">
              <img src={featurePic2} alt="" className="w-full" />
            </div>
          </div>
          <div className="mt-10 md:pt-12 lg:pt-20 xl:pt-40 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10 lg:gap-16 xl:gap-20 2xl:gap-28">
            <div className="w-full md:w-2/5 order-2 md:order-first">
              <img src={featurePic3} alt="" className="w-full" />
            </div>
            <div className="flex-1 xl:flex-auto xl:w-2/5 text-center md:text-left">
              <h3 className="text-xl md:text-2xl lg:text-3xl xl:text-[40px] text-[#2F327D] font-semibold mb-5">
                Assessments,
                <br className="hidden lg:block" />{" "}
                <span className="text-[#00CBB8]">Quizzes</span>, Tests
              </h3>
              <p className="text-base md:text-lg lg:text-xl xl:text-[22px] text-[#696984]">
                Easily launch live assignments, quizzes, and tests. Student
                results are automatically entered in the online gradebook.
              </p>
            </div>
          </div>
          <div className="mt-10 md:pt-12 lg:pt-20 xl:pt-40 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10 lg:gap-16 xl:gap-20">
            <div className="flex-1 xl:flex-auto xl:w-2/5 text-center md:text-left">
              <h3 className="text-xl md:text-2xl lg:text-3xl xl:text-[40px] text-[#2F327D] font-semibold mb-5">
                <span className="text-[#00CBB8]">
                  Class Management <br className="hidden lg:block" />
                </span>
                Tools for Educators
              </h3>
              <p className="text-base md:text-lg lg:text-xl xl:text-[22px] text-[#696984]">
                Class provides tools to help run and manage the class such as
                Class Roster, Attendance, and more. With the Gradebook, teachers
                can review and grade tests and quizzes in real-time.
              </p>
            </div>
            <div className="w-full md:w-1/2">
              <img src={featurePic4} alt="" className="w-full" />
            </div>
          </div>
          <div className="mt-10 md:pt-12 lg:pt-20 xl:pt-36 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10 lg:gap-16 xl:gap-20 2xl:gap-28">
            <div className="w-full md:w-1/2 order-2 md:order-first">
              <img src={featurePic5} alt="" className="w-full" />
            </div>
            <div className="flex-1 xl:flex-auto xl:w-2/5 text-center md:text-left">
              <h3 className="text-xl md:text-2xl lg:text-3xl xl:text-[40px] text-[#2F327D] font-semibold mb-5">
                One-on-One
                <br className="hidden lg:block" />{" "}
                <span className="text-[#00CBB8]">Discussions</span>
              </h3>
              <p className="text-base md:text-lg lg:text-xl xl:text-[22px] text-[#696984]">
                Teachers and teacher assistants can talk with students privately
                without leaving the Zoom environment.
              </p>
            </div>
          </div>
          <div className="text-center mt-6 md:mt-8 lg:mt-10 xl:mt-20 2xl:mt-24">
            <Link
              to="/"
              className="inline-block py-3 lg:py-4 px-5 xl:py-5 xl:px-7 text-center rounded-full border border-[#49BBBD] text-[#49BBBD] text-lg lg:text-xl xl:text-2xl hover:bg-[#49BBBD] hover:text-white"
            >
              See more features
            </Link>
          </div>
        </div>
      </div>
      <div>
        <img src={exploreCourse} alt="" className="w-full" />
      </div>
      <div className="pt-10 md:pt-14 lg:pt-20 xl:pt-24 2xl:pt-32">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-6 md:gap-10 lg:gap-28 xl:gap-36">
            <div className="w-full md:w-1/2">
              <div className="flex items-center gap-5 xl:gap-[30px]">
                <div className="w-14 lg:w-[80px] h-[1px] bg-[#525596]"></div>
                <span className="text-lg lg:text-xl text-[#525596]">
                  TESTIMONIAL
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-[#2F327D] mt-6 leading-normal">
                What They Say?
              </h3>
              <p className="text-[#696984] text-base md:text-lg lg:text-xl xl:text-2xl mt-4 xl:mt-6">
                TOTC has got more than 100k positive ratings from our users
                around the world.{" "}
              </p>
              <p className="text-[#696984] text-base md:text-lg lg:text-xl xl:text-2xl mt-4 xl:mt-6">
                Some of the students and teachers were greatly helped by the
                Skilline.
              </p>
              <br className="hidden xl:block" />
              <p className="text-[#696984] text-base md:text-lg lg:text-xl xl:text-2xl mt-4 xl:mt-6">
                Are you too? Please give your assessment
              </p>
              <Link
                to="/"
                className="btn-with-arrow mt-6 lg:mt-10 inline-flex items-center gap-4 lg:gap-6 pl-6 lg:pl-9 text-center rounded-full border border-[#49BBBD] text-[#49BBBD] text-lg md:text-xl lg:text-2xl hover:bg-[#49BBBD] hover:text-white"
              >
                Write your assessment
                <svg
                  width="80"
                  height="80"
                  viewBox="0 0 80 80"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[60px] lg:w-auto aspect-square h-auto"
                >
                  <circle cx="40" cy="40" r="39.5" stroke="#49BBBD" />
                  <path
                    d="M52.7071 40.7071C53.0976 40.3166 53.0976 39.6834 52.7071 39.2929L46.3431 32.9289C45.9526 32.5384 45.3195 32.5384 44.9289 32.9289C44.5384 33.3195 44.5384 33.9526 44.9289 34.3431L50.5858 40L44.9289 45.6569C44.5384 46.0474 44.5384 46.6805 44.9289 47.0711C45.3195 47.4616 45.9526 47.4616 46.3431 47.0711L52.7071 40.7071ZM27 41L52 41L52 39L27 39L27 41Z"
                    fill="#49BBBD"
                  />
                </svg>
              </Link>
            </div>
            <div className="w-full md:w-1/2">
              <img src={testimonial} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="py-10 md:py-14 lg:py-20 xl:py-24 2xl:pt-32 2xl:mb-28">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#2F327D] mb-5">
              Lastest News and Resources
            </h3>
            <p className="text-lg md:text-xl xl:text-2xl text-[#696984]">
              See the developments that have occurred to TOTC in the world
            </p>
          </div>
          <div className="flex flex-col lg:flex-row lg:gap-16 xl:gap-[100px] 2xl:gap-[120px] mt-10 md:mt-16 lg:mt-20 xl:mt-[100px]">
            <div className="w-full lg:w-2/5">
              <div className="rounded-[20px] overflow-hidden">
                <img
                  src={blog1}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-[#49BBBD] rounded-3xl text-xl min-w-[130px] h-10 inline-flex items-center justify-center text-white my-5 xl:mt-10 xl:mb-5">
                NEWS
              </div>
              <h3 className="text-lg md:text-xl xl:text-2xl font-medium text-[#252641] leading-normal">
                Class adds $30 million to its balance sheet for a Zoom-friendly
                edtech solution
              </h3>
              <p className="mt-5 mb-7 text-base md:text-lg xl:text-xl text-[#696984]">
                Class, launched less than a year ago by Blackboard co-founder
                Michael Chasen, integrates exclusively...
              </p>

              <Link to="/" className="text-xl text-[#696984] underline">
                Read more
              </Link>
            </div>
            <div className="w-full lg:w-3/5 flex flex-col gap-8 md:gap-[50px] mt-10 lg:mt-0">
              {blogList.map((data, i) => (
                <div
                  className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10"
                  key={i}
                >
                  <div className="rounded-[20px] overflow-hidden flex-none relative">
                    <img src={data.blogPic} alt="" />
                    <div className="bg-[#49BBBD] rounded-3xl text-[18px] min-w-[100px] h-[34px] px-3 py-1 inline-flex items-center justify-center text-white absolute bottom-5 right-5">
                      {data.blogTag}
                    </div>
                  </div>
                  <div className="">
                    <h3 className="text-lg xl:text-[22px] text-[#252641] mb-3 md:mb-5">
                      {data.blogTitle}
                    </h3>
                    <p className="line-clamp-2 text-base md:text-lg xl:text-xl text-[#696984] leading-normal">
                      {data.blogDisc}
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

export default Home;
