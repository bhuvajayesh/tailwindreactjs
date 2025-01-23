import React from "react";
import Logo from "../../src/images/landing/logo.svg";
import landingBanner from "../../src/images/landing/banner.jpg";
import powerColl1 from "../../src/images/landing/power-coll1.jpg";
import powerColl2 from "../../src/images/landing/power-coll2.jpg";
import { Link } from "react-router-dom";

const countDown = [
  {
    countDownValue: "32K+",
    countDownName: "Users",
  },
  {
    countDownValue: "2.3k+",
    countDownName: "Subscribers",
  },
  {
    countDownValue: "198+",
    countDownName: "Country",
  },
  {
    countDownValue: "76%",
    countDownName: "Profit",
  },
];

const riteAdvantages = [
  {
    riteIcon: (
      <svg
        width="61"
        height="61"
        viewBox="0 0 61 61"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-12 lg:w-[60px] h-auto mx-auto md:mx-0"
      >
        <path
          d="M47.8965 8.10058H12.9921C10.2497 8.10058 8.0058 10.3444 8.0058 13.0869V47.9913C8.0058 50.7338 10.2497 52.9776 12.9921 52.9776H47.8965C50.639 52.9776 52.8828 50.7338 52.8828 47.9913V13.0869C52.8828 10.3444 50.639 8.10058 47.8965 8.10058ZM22.9648 43.0049H17.9785V25.5528H22.9648V43.0049ZM32.9375 43.0049H27.9511V18.0733H32.9375V43.0049ZM42.9102 43.0049H37.9238V33.0323H42.9102V43.0049Z"
          fill="white"
        />
      </svg>
    ),
    riteTitle: "Help your team succeed",
    riteDisc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    riteIcon: (
      <svg
        width="61"
        height="61"
        viewBox="0 0 61 61"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-12 lg:w-[60px] h-auto mx-auto md:mx-0"
      >
        <path
          d="M42.0435 30.5391C45.4841 30.5391 48.2515 27.7467 48.2515 24.3062C48.2515 20.8656 45.4841 18.0733 42.0435 18.0733C40.3905 18.0733 38.8051 18.7299 37.6362 19.8988C36.4673 21.0677 35.8106 22.6531 35.8106 24.3062C35.8106 25.9592 36.4673 27.5446 37.6362 28.7135C38.8051 29.8824 40.3905 30.5391 42.0435 30.5391ZM23.3448 28.0459C27.4834 28.0459 30.7993 24.7051 30.7993 20.5664C30.7993 16.4278 27.4834 13.0869 23.3448 13.0869C19.2061 13.0869 15.8653 16.4278 15.8653 20.5664C15.8653 24.7051 19.2061 28.0459 23.3448 28.0459ZM42.0435 35.5254C37.481 35.5254 28.3311 37.8192 28.3311 42.3817V45.4981C28.3311 46.8694 29.453 47.9913 30.8243 47.9913H53.2628C54.634 47.9913 55.756 46.8694 55.756 45.4981V42.3817C55.756 37.8192 46.606 35.5254 42.0435 35.5254ZM23.3448 33.0323C17.5357 33.0323 5.89258 35.9493 5.89258 41.7584V45.4981C5.89258 46.8694 7.0145 47.9913 8.38575 47.9913H23.3448V42.3817C23.3448 40.2625 24.1675 36.5476 29.2536 33.7304C27.0845 33.2816 24.9903 33.0323 23.3448 33.0323Z"
          fill="white"
        />
      </svg>
    ),
    riteTitle: "Integrate with top work tools",
    riteDisc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    riteIcon: (
      <svg
        width="61"
        height="61"
        viewBox="0 0 61 61"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-12 lg:w-[60px] h-auto mx-auto md:mx-0"
      >
        <path
          d="M45.1634 13.0869V8.10059C45.1634 5.3581 42.9196 3.11425 40.1771 3.11425H30.2044C27.4619 3.11425 25.2181 5.3581 25.2181 8.10059V13.0869H17.7386C14.9961 13.0869 12.7522 15.3308 12.7522 18.0733V40.5118C12.7522 43.2543 14.9961 45.4981 17.7386 45.4981H52.6429C55.3854 45.4981 57.6293 43.2543 57.6293 40.5118V18.0733C57.6293 15.3308 55.3854 13.0869 52.6429 13.0869H45.1634ZM40.1771 13.0869H30.2044V8.10059H40.1771V13.0869ZM5.27271 23.0596C3.90147 23.0596 2.77954 24.1815 2.77954 25.5528V50.4845C2.77954 53.2269 5.02339 55.4708 7.76588 55.4708H45.1634C46.5347 55.4708 47.6566 54.3489 47.6566 52.9776C47.6566 51.6064 46.5347 50.4845 45.1634 50.4845H7.76588V25.5528C7.76588 24.1815 6.64395 23.0596 5.27271 23.0596Z"
          fill="white"
        />
      </svg>
    ),
    riteTitle: "Work together with your best team",
    riteDisc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
];

const enterpriseList = [
  {
    enterpriseTitle: "Enterprise",
    enterpriseDisc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    enterpriseIcon: (
      <svg
        width="43"
        height="45"
        viewBox="0 0 43 45"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect y="0.0134277" width="43" height="44" rx="21.5" fill="white" />
        <path
          d="M28.3036 20.2175H6.73462V23.8093H28.3036V29.1971L35.4693 22.0134L28.3036 14.8297V20.2175Z"
          fill="black"
        />
      </svg>
    ),
  },
  {
    enterpriseTitle: "Everything you need",
    enterpriseDisc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    enterpriseIcon: (
      <svg
        width="43"
        height="45"
        viewBox="0 0 43 45"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect y="0.0134277" width="43" height="44" rx="21.5" fill="white" />
        <path
          d="M28.3036 20.2175H6.73462V23.8093H28.3036V29.1971L35.4693 22.0134L28.3036 14.8297V20.2175Z"
          fill="black"
        />
      </svg>
    ),
  },
  {
    enterpriseTitle: "No- code",
    enterpriseDisc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    enterpriseIcon: (
      <svg
        width="43"
        height="45"
        viewBox="0 0 43 45"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect y="0.0134277" width="43" height="44" rx="21.5" fill="white" />
        <path
          d="M28.3036 20.2175H6.73462V23.8093H28.3036V29.1971L35.4693 22.0134L28.3036 14.8297V20.2175Z"
          fill="black"
        />
      </svg>
    ),
  },
];

const footerLinks = [
  {
    footerLinkName: "Feature",
  },
  {
    footerLinkName: "Solutions",
  },
  {
    footerLinkName: "Pricing & Plans",
  },
];

const footerSocial = [
  {
    footerSocialIcon: (
      <svg
        width="25"
        height="26"
        viewBox="0 0 25 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.5709 2.59668C14.7427 2.5998 15.3375 2.60605 15.8511 2.62064L16.0532 2.62793C16.2865 2.63626 16.5167 2.64668 16.7948 2.65918C17.9032 2.71126 18.6594 2.88626 19.323 3.14355C20.0105 3.40814 20.5896 3.76647 21.1688 4.3446C21.6985 4.86532 22.1083 5.49521 22.3698 6.19043C22.6271 6.85397 22.8021 7.61022 22.8542 8.7196C22.8667 8.99668 22.8771 9.22689 22.8855 9.46126L22.8917 9.66335C22.9073 10.1758 22.9136 10.7706 22.9157 11.9425L22.9167 12.7196V14.0842C22.9193 14.844 22.9113 15.6038 22.8927 16.3633L22.8865 16.5654C22.8782 16.7998 22.8677 17.03 22.8552 17.3071C22.8032 18.4165 22.6261 19.1717 22.3698 19.8363C22.1091 20.5319 21.6991 21.1619 21.1688 21.6821C20.6479 22.2116 20.0181 22.6214 19.323 22.8831C18.6594 23.1404 17.9032 23.3154 16.7948 23.3675C16.5477 23.3792 16.3004 23.3896 16.0532 23.3988L15.8511 23.405C15.3375 23.4196 14.7427 23.4269 13.5709 23.429L12.7938 23.43H11.4302C10.6701 23.4326 9.90995 23.4246 9.15003 23.4061L8.94795 23.3998C8.70067 23.3904 8.45344 23.3797 8.20628 23.3675C7.09795 23.3154 6.3417 23.1404 5.67711 22.8831C4.98198 22.6221 4.35234 22.2121 3.83232 21.6821C3.30216 21.1616 2.89193 20.5316 2.63024 19.8363C2.37295 19.1727 2.19795 18.4165 2.14586 17.3071C2.13426 17.0599 2.12384 16.8127 2.11461 16.5654L2.10941 16.3633C2.09021 15.6038 2.08153 14.844 2.08336 14.0842V11.9425C2.08046 11.1827 2.0881 10.4229 2.10628 9.66335L2.11357 9.46126C2.12191 9.22689 2.13232 8.99668 2.14482 8.7196C2.19691 7.61022 2.37191 6.85501 2.6292 6.19043C2.89078 5.4945 3.30182 4.86441 3.83336 4.3446C4.35325 3.81488 4.98247 3.405 5.67711 3.14355C6.3417 2.88626 7.09691 2.71126 8.20628 2.65918C8.48337 2.64668 8.71462 2.63626 8.94795 2.62793L9.15003 2.62168C9.90961 2.60317 10.6694 2.59519 11.4292 2.59772L13.5709 2.59668ZM12.5 7.80501C11.1187 7.80501 9.79394 8.35375 8.81718 9.3305C7.84043 10.3073 7.2917 11.632 7.2917 13.0133C7.2917 14.3947 7.84043 15.7194 8.81718 16.6962C9.79394 17.6729 11.1187 18.2217 12.5 18.2217C13.8814 18.2217 15.2061 17.6729 16.1829 16.6962C17.1596 15.7194 17.7084 14.3947 17.7084 13.0133C17.7084 11.632 17.1596 10.3073 16.1829 9.3305C15.2061 8.35375 13.8814 7.80501 12.5 7.80501ZM12.5 9.88835C12.9104 9.88828 13.3168 9.96904 13.696 10.126C14.0751 10.283 14.4197 10.5131 14.7099 10.8033C15.0001 11.0934 15.2304 11.4379 15.3875 11.817C15.5446 12.1961 15.6255 12.6024 15.6256 13.0128C15.6256 13.4232 15.5449 13.8296 15.3879 14.2088C15.2309 14.5879 15.0008 14.9325 14.7106 15.2227C14.4205 15.5129 14.076 15.7432 13.6969 15.9003C13.3178 16.0574 12.9115 16.1383 12.5011 16.1383C11.6723 16.1383 10.8774 15.8091 10.2914 15.2231C9.70531 14.637 9.37607 13.8421 9.37607 13.0133C9.37607 12.1845 9.70531 11.3897 10.2914 10.8036C10.8774 10.2176 11.6723 9.88835 12.5011 9.88835M17.9698 6.24251C17.6245 6.24251 17.2933 6.3797 17.0491 6.62388C16.8049 6.86807 16.6677 7.19926 16.6677 7.5446C16.6677 7.88993 16.8049 8.22112 17.0491 8.46531C17.2933 8.7095 17.6245 8.84668 17.9698 8.84668C18.3152 8.84668 18.6463 8.7095 18.8905 8.46531C19.1347 8.22112 19.2719 7.88993 19.2719 7.5446C19.2719 7.19926 19.1347 6.86807 18.8905 6.62388C18.6463 6.3797 18.3152 6.24251 17.9698 6.24251Z"
          fill="white"
        />
      </svg>
    ),
  },
  {
    footerSocialIcon: (
      <svg
        width="24"
        height="26"
        viewBox="0 0 24 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M22.2129 6.40514C21.4494 6.7569 20.6398 6.98793 19.8109 7.09056C20.6839 6.54591 21.3372 5.68924 21.6489 4.68014C20.8289 5.18847 19.9299 5.54472 18.9939 5.73743C18.3645 5.03595 17.5302 4.57073 16.6208 4.41408C15.7114 4.25744 14.7778 4.41815 13.9651 4.87124C13.1525 5.32432 12.5063 6.04439 12.127 6.91951C11.7477 7.79462 11.6566 8.77574 11.8679 9.71035C10.2048 9.62367 8.57785 9.17361 7.09262 8.38937C5.60739 7.60514 4.29712 6.50428 3.24688 5.15827C2.87517 5.82332 2.67984 6.57933 2.68088 7.34889C2.68088 8.85931 3.41988 10.1937 4.54088 10.9749C3.8769 10.9531 3.22753 10.7663 2.64688 10.4301V10.4833C2.64685 11.4894 2.98091 12.4645 3.59241 13.2433C4.20391 14.0221 5.05519 14.5566 6.00188 14.7562C5.38552 14.9304 4.73917 14.956 4.11188 14.8312C4.3788 15.6972 4.89909 16.4546 5.59988 16.9972C6.30066 17.5399 7.14684 17.8406 8.01988 17.8572C7.15224 18.5671 6.15877 19.0918 5.09629 19.4014C4.03381 19.7109 2.92317 19.7993 1.82788 19.6614C3.7396 20.942 5.96499 21.6219 8.23788 21.6197C15.9319 21.6197 20.1379 14.9812 20.1379 9.22389C20.1379 9.03639 20.1339 8.84681 20.1259 8.66035C20.9443 8.04405 21.6507 7.28073 22.2119 6.40618"
          fill="white"
        />
      </svg>
    ),
  },
  {
    footerSocialIcon: (
      <svg
        width="25"
        height="26"
        viewBox="0 0 25 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20.073 6.0654C18.6875 5.41956 17.1875 4.95081 15.625 4.67998C15.6113 4.67954 15.5977 4.68211 15.5851 4.68751C15.5725 4.69291 15.5613 4.70101 15.5521 4.71123C15.3646 5.05498 15.1459 5.5029 15 5.84665C13.3427 5.59665 11.6573 5.59665 10 5.84665C9.85421 5.49248 9.63546 5.05498 9.43754 4.71123C9.42712 4.6904 9.39587 4.67998 9.36462 4.67998C7.80212 4.95081 6.31254 5.41956 4.91671 6.0654C4.90629 6.0654 4.89587 6.07581 4.88546 6.08623C2.05212 10.3258 1.27087 14.4508 1.65629 18.5341C1.65629 18.555 1.66671 18.5758 1.68754 18.5862C3.56254 19.9612 5.36462 20.7946 7.14587 21.3466C7.17712 21.3571 7.20837 21.3466 7.21879 21.3258C7.63546 20.7529 8.01046 20.1487 8.33337 19.5133C8.35421 19.4716 8.33337 19.43 8.29171 19.4196C7.69796 19.1904 7.13546 18.9196 6.58337 18.6071C6.54171 18.5862 6.54171 18.5237 6.57296 18.4925C6.68754 18.4091 6.80212 18.3154 6.91671 18.2321C6.93754 18.2112 6.96879 18.2112 6.98962 18.2216C10.573 19.8571 14.4375 19.8571 17.9792 18.2216C18 18.2112 18.0313 18.2112 18.0521 18.2321C18.1667 18.3258 18.2813 18.4091 18.3959 18.5029C18.4375 18.5341 18.4375 18.5966 18.3855 18.6175C17.8438 18.9404 17.2709 19.2008 16.6771 19.43C16.6355 19.4404 16.625 19.4925 16.6355 19.5237C16.9688 20.1591 17.3438 20.7633 17.75 21.3362C17.7813 21.3466 17.8125 21.3571 17.8438 21.3466C19.6355 20.7946 21.4375 19.9612 23.3125 18.5862C23.3334 18.5758 23.3438 18.555 23.3438 18.5341C23.8021 13.8154 22.5834 9.72165 20.1146 6.08623C20.1042 6.07581 20.0938 6.0654 20.073 6.0654ZM8.87504 16.0446C7.80212 16.0446 6.90629 15.055 6.90629 13.8362C6.90629 12.6175 7.78129 11.6279 8.87504 11.6279C9.97921 11.6279 10.8542 12.6279 10.8438 13.8362C10.8438 15.055 9.96879 16.0446 8.87504 16.0446ZM16.1355 16.0446C15.0625 16.0446 14.1667 15.055 14.1667 13.8362C14.1667 12.6175 15.0417 11.6279 16.1355 11.6279C17.2396 11.6279 18.1146 12.6279 18.1042 13.8362C18.1042 15.055 17.2396 16.0446 16.1355 16.0446Z"
          fill="white"
        />
      </svg>
    ),
  },
];

function Landing() {
  return (
    <>
      <div className="bg-black text-white">
        <div className="fixed top-0 left-0 w-full z-10 py-4 lg:py-7 px-10 lg:px-[50px] bg-black">
          <Link to="">
            <img src={Logo} alt="" />
          </Link>
        </div>
        <div className="flex flex-col md:flex-row pt-[60px] lg:pt-[84px]">
          <div className="md:w-1/2 p-4 md:py-0 md:px-10 lg:px-20 xl:px-24 2xl:px-[120px] flex flex-col justify-center md:items-start text-center md:text-left">
            <h1
              style={{ fontFamily: "Monda, serif" }}
              className="text-2xl md:text-4xl lg:text-5xl xl:text-[66px] 2xl:text-[85px] font-bold leading-none"
            >
              Manage Your
              <br className="hidden md:block" /> Big Project
            </h1>
            <p className="text-xs md:text-sm py-6 lg:py-10">
              Lorem Ipsum is simply dummy text of the printing and
              <br className="hidden xl:block" /> typesetting industry. Lorem
              Ipsum has been the
              <br className="hidden xl:block" /> industry's standard
            </p>
            <Link
              to=""
              className="inline-flex mx-auto md:m-0 items-center gap-4 md:text-xl xl:text-2xl"
            >
              Get Started
              <svg
                width="59"
                height="63"
                viewBox="0 0 59 63"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 md:w-12 xl:w-14 h-auto aspect-square"
              >
                <rect
                  y="0.744629"
                  width="59"
                  height="61.5106"
                  rx="29.5"
                  fill="#003C95"
                />
                <path
                  d="M39.5677 28.9893H9.41492V34.0106H39.5677V41.5425L49.5851 31.5L39.5677 21.4574V28.9893Z"
                  fill="white"
                />
              </svg>
            </Link>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <img src={landingBanner} alt="" className="w-full" />
          </div>
        </div>
        <div className="bg-[#1C1C1C] py-6 md:py-10 lg:py-14 xl:py-[75px]">
          <div className="container mx-auto px-4">
            <div className="flex justify-between">
              {countDown.map((data, i) => (
                <div key={i} className="text-center">
                  <h3 className="text-2xl md:text-4xl xl:text-5xl 2xl:text-[55px] font-bold mb-1.5 lg:mb-2.5 leading-none">
                    {data.countDownValue}
                  </h3>
                  <span className="lg:text-lg xl:text-xl">
                    {data.countDownName}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="bg-[#000000] py-10 md:py-14 lg:py-20 xl:py-[100px]">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold">
                Rite Advantages
              </h3>
              <p className="mt-4">
                You will get money benefits with us, some of which one are
              </p>
            </div>
            <div className="flex flex-col md:flex-row gap-4 lg:gap-[34px] mt-10 lg:mt-[60px]">
              {riteAdvantages.map((data, i) => (
                <div
                  key={i}
                  className="bg-[#181619] flex-1 p-4 lg:p-6 xl:p-10 2xl:p-14 text-center md:text-left"
                >
                  <div>{data.riteIcon}</div>
                  <h3 className="py-3 lg:py-5 xl:py-7 text-lg lg:text-2xl xl:text-3xl font-bold capitalize">
                    {data.riteTitle}
                  </h3>
                  <p className="md:text-sm lg:text-lg xl:text-xl 2xl:text-2xl text-[#6D6D6D]">
                    {data.riteDisc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="custom-bg">
          <div className="container mx-auto px-4">
            <div className="py-10 md:py-14 lg:py-20 2xl:py-40 flex gap-6 md:gap-12 xl:gap-[100px] items-center lg:items-end justify-center">
              <h2
                className="text-2xl md:text-4xl lg:text-5xl xl:text-[66px] 2xl:text-[85px] font-bold leading-none capitalize"
                style={{ fontFamily: "Monda, serif" }}
              >
                more features as
                <br /> your team grow
              </h2>
              <Link to="">
                <svg
                  width="93"
                  height="98"
                  viewBox="0 0 93 98"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-12 md:w-16 lg:w-16 xl:w-20 2xl:w-[92px] h-auto"
                >
                  <rect
                    y="0.0559692"
                    width="93"
                    height="96.9575"
                    rx="46.5"
                    fill="white"
                  />
                  <path
                    d="M62.3694 44.5772H14.8405V52.4921H62.3694V64.3645L78.1596 48.5347L62.3694 32.7049V44.5772Z"
                    fill="black"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
        <div className="py-10 md:py-14 lg:py-20 xl:py-[100px]">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold">
                Power Collaboration
              </h3>
              <p className="mt-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been
                <br className="hidden lg:block" /> the industry's standard dummy
                text ever since the 1500s,
              </p>
            </div>
            <div className="flex gap-3 md:gap-6 lg:gap-[34px] mt-10 lg:mt-20 xl:mt-24">
              <div>
                <img src={powerColl1} alt="" />
              </div>
              <div>
                <img src={powerColl2} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="py-10 md:py-14 lg:py-[75px]">
          <div className="container mx-auto px-4">
            <ul className="flex flex-col md:gap-6 lg:gap-10 xl:gap-14 2xl:gap-[78px]">
              {enterpriseList.map((data, i) => (
                <li key={i} className="flex items-center justify-between">
                  <h3 className="md:w-[140px] lg:w-[180px] xl:w-[400px] md:text-2xl lg:text-3xl xl:text-4xl font-bold">
                    {data.enterpriseTitle}
                  </h3>
                  <p className="md:px-6 lg:px-12 xl:px-32 flex-1 text-sm lg:text-base">
                    {data.enterpriseDisc}
                  </p>
                  <Link to="">{data.enterpriseIcon}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="custom-bg">
          <div className="container mx-auto px-4">
            <div className="md:py-14 lg:py-20 2xl:py-24 flex gap-12 xl:gap-[100px] items-center justify-center">
              <h2
                className="text-2xl md:text-4xl lg:text-5xl xl:text-[66px] 2xl:text-[85px] font-bold leading-none capitalize"
                style={{ fontFamily: "Monda, serif" }}
              >
                Start and move forward
              </h2>
              <Link to="">
                <svg
                  width="93"
                  height="98"
                  viewBox="0 0 93 98"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-12 md:w-16 lg:w-16 xl:w-20 2xl:w-[92px] h-auto"
                >
                  <rect
                    y="0.534668"
                    width="93"
                    height="96.9575"
                    rx="46.5"
                    fill="white"
                  />
                  <path
                    d="M62.3695 45.0559H14.8406V52.9708H62.3695V64.8432L78.1597 49.0134L62.3695 33.1836V45.0559Z"
                    fill="black"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
        <div className="bg-[#1B1D1C] py-4 lg:py-[25px] px-10 lg:px-[50px] flex items-center justify-between">
          <Link to="">
            <img src={Logo} alt="" />
          </Link>
          <ul className="flex gap-5 lg:gap-10">
            {footerLinks.map((data, i) => (
              <li key={i}>
                <Link to="" className="text-lg lg:text-xl">
                  {data.footerLinkName}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="flex gap-4">
            {footerSocial.map((data, i) => (
              <li key={i}>
                <Link to="">{data.footerSocialIcon}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Landing;
