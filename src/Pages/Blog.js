import React from "react";
import Header from "../Componant/Header";
import Footer from "../Componant/Footer";
import BlogBanner from "../../src/images/blog-banner.jpg";
import BlogList1 from "../../src/images/blog-list-1.jpg";
import BlogList2 from "../../src/images/blog-list-2.jpg";
import BlogList3 from "../../src/images/blog-list-3.jpg";
import BlogList4 from "../../src/images/blog-list-4.jpg";
import RelatedBlog1 from "../../src/images/related-blog1.jpg";
import RelatedBlog2 from "../../src/images/related-blog2.jpg";
import marketingPic1 from "../../src/images/marketin-article1.svg";
import marketingPic2 from "../../src/images/marketin-article2.svg";
import marketingPic3 from "../../src/images/marketin-article3.svg";
import marketingPic4 from "../../src/images/marketin-article4.svg";
import User from "../../src/images/user.png";
import { Link } from "react-router-dom";
import Slider from "react-slick";

const BlogList = [
  {
    blogListPic: BlogList1,
    blogListTag: "UX/UI",
  },
  {
    blogListPic: BlogList2,
    blogListTag: "React",
  },
  {
    blogListPic: BlogList3,
    blogListTag: "PHP",
  },
  {
    blogListPic: BlogList4,
    blogListTag: "JavaScript",
  },
];

const RelatedBlog = [
  {
    RelatedBlogPic: RelatedBlog1,
    RelatedBlogTitle:
      "Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution",
    RelatedBlogUser: User,
    RelatedBlogUserName: "Lina",
    RelatedBlogDisc:
      "Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...",
    RelatedBlogReadMore: "Read more",
    RelatedBlogView: "251,232",
  },
  {
    RelatedBlogPic: RelatedBlog2,
    RelatedBlogTitle:
      "Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution",
    RelatedBlogUser: User,
    RelatedBlogUserName: "Lina",
    RelatedBlogDisc:
      "Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...",
    RelatedBlogReadMore: "Read more",
    RelatedBlogView: "251,232",
  },
  {
    RelatedBlogPic: RelatedBlog1,
    RelatedBlogTitle:
      "Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution",
    RelatedBlogUser: User,
    RelatedBlogUserName: "Lina",
    RelatedBlogDisc:
      "Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...",
    RelatedBlogReadMore: "Read more",
    RelatedBlogView: "251,232",
  },
  {
    RelatedBlogPic: RelatedBlog2,
    RelatedBlogTitle:
      "Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution",
    RelatedBlogUser: User,
    RelatedBlogUserName: "Lina",
    RelatedBlogDisc:
      "Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...",
    RelatedBlogReadMore: "Read more",
    RelatedBlogView: "251,232",
  },
];

const MarketingArticles = [
  {
    marketingPic: marketingPic1,
    marketingTag: "Design",
    marketingTime: "3 Month",
    marketingTitel: "AWS Certified solutions Architect",
    marketingDisc:
      "Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor",
    marketingUserPic: User,
    marketingUser: "Lina",
    marketingOldPirce: "$100",
    marketingPirce: "$80",
  },
  {
    marketingPic: marketingPic2,
    marketingTag: "Design",
    marketingTime: "3 Month",
    marketingTitel: "AWS Certified solutions Architect",
    marketingDisc:
      "Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor",
    marketingUserPic: User,
    marketingUser: "Lina",
    marketingOldPirce: "$100",
    marketingPirce: "$80",
  },
  {
    marketingPic: marketingPic3,
    marketingTag: "Design",
    marketingTime: "3 Month",
    marketingTitel: "AWS Certified solutions Architect",
    marketingDisc:
      "Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor",
    marketingUserPic: User,
    marketingUser: "Lina",
    marketingOldPirce: "$100",
    marketingPirce: "$80",
  },
  {
    marketingPic: marketingPic4,
    marketingTag: "Design",
    marketingTime: "3 Month",
    marketingTitel: "AWS Certified solutions Architect",
    marketingDisc:
      "Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor",
    marketingUserPic: User,
    marketingUser: "Lina",
    marketingOldPirce: "$100",
    marketingPirce: "$80",
  },
];

function Blog() {
  var settings = {
    dots: false,
    infinite: false,
    arrow: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
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
        <div className="bg-[#EBF5FF] pt-10 md:py-12 lg:py-14 xl:py-[70px]">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="w-auto md:w-1/2 md:pr-12 lg:pr-20 xl:pr-28 2xl:pr-40 text-center md:text-left">
                <h4 className="text-lg xl:text-xl 2xl:text-2xl">
                  By Themadbrains in{" "}
                  <strong className="text-[#49BBBD]">inspiration</strong>
                </h4>
                <h1 className="mt-3.5 md:mt-6 mb-3.5 text-[#2F327D] text-xl md:text-2xl lg:text-4xl xl:text-[44px] font-semibold !leading-normal">
                  Why Swift UI Should Be on the Radar of Every Mobile Developer
                </h1>
                <p className="text-[#696984] lg:text-lg xl:text-xl leading-normal">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempos Lorem ipsum dolor sitamet, consectetur
                  adipiscing elit, sed do eiusmod tempor
                </p>
                <Link
                  to="/blog-detail"
                  className="py-3 xl:py-5 px-6 xl:px-10 inline-block mt-6 rounded-xl bg-[#49BBBD] text-white text-base font-semibold xl:font-bold hover:bg-[#252641] hover:text-white"
                >
                  Start learning now
                </Link>
              </div>
              <div className="w-auto md:w-1/2 mt-8 md:mt-0">
                <img src={BlogBanner} alt="Banner" className="rounded-[20px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-10 md:py-12 lg:py-16 xl:py-20">
        <div className="container mx-auto px-4">
          <h3 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold mb-6">
            Reading blog list
          </h3>
          <ul className="flex flex-wrap md:flex-nowrap gap-6 lg:gap-8 xl:gap-12 2xl:gap-[76px]">
            {BlogList.map((data, i) => (
              <li
                key={i}
                className="relative overflow-hidden rounded-[20px] group w-[calc(50%-12px)] md:w-auto"
              >
                <Link href="">
                  <img
                    src={data.blogListPic}
                    alt="Banner"
                    className="group-hover:scale-105 group-hover:transition group-hover:ease-in-out group-hover:delay-150"
                  />
                  <span className="absolute bottom-4 md:bottom-[24px] xl:bottom-[34px] left-0 right-0 w-[80%] mx-auto bg-white bg-opacity-70 rounded-xl py-2 lg:py-3 xl:py-4 text-center text-base md:text-lg xl:text-xl 2xl:text-2xl font-semibold xl:font-bold">
                    {data.blogListTag}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="bg-[#EBF5FF] py-10 md:py-12 lg:py-20 xl:pt-[93px] xl:pb-[116px]">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between pb-6 md:pb-10">
            <h3 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-medium">
              Related Blog
            </h3>
            <Link
              href=""
              className="text-[#49BBBD] font-semibold text-base lg:text-lg xl:text-xl"
            >
              See all
            </Link>
          </div>
          <Slider {...settings} className="arrowSlider">
            {RelatedBlog.map((data, i) => (
              <div
                key={i}
                className="bg-white rounded-[20px] p-4 md:p-6 xl:pt-[60px] xl:pb-16 xl:px-8 shadow-md"
              >
                <div className="rounded-[20px] overflow-hidden">
                  <img src={data.RelatedBlogPic} alt="" />
                </div>
                <h3 className="mt-3 mb-6 text-lg xl:text-xl 2xl:text-2xl font-medium text-[#252641] leading-normal">
                  {data.RelatedBlogTitle}
                </h3>
                <div className="flex items-center md:px-6">
                  <img
                    src={data.RelatedBlogUser}
                    alt="User"
                    className="rounded-full w-16 aspect-square"
                  />
                  <span className="ml-4 text-lg font-medium">
                    {data.RelatedBlogUserName}
                  </span>
                </div>
                <p className="text-[#696984] text-base xl:text-lg 2xl:text-xl py-6 xl:pt-6 xl:pb-12 leading-normal">
                  {data.RelatedBlogDisc}
                </p>
                <div className="flex items-center justify-between">
                  <Link
                    href=""
                    className="text-base xl:text-xl text-[#696984] underline"
                  >
                    {data.RelatedBlogReadMore}
                  </Link>
                  <div className="flex items-center gap-3 xl:gap-5">
                    <svg
                      width="24"
                      height="16"
                      viewBox="0 0 24 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M23.3008 7.69562C23.3789 7.85187 23.418 8.04718 23.418 8.28156C23.418 8.47687 23.3789 8.67218 23.3008 8.82843C21.1914 12.9691 16.9727 15.7425 12.207 15.7425C7.40234 15.7425 3.18359 12.9691 1.07422 8.82843C0.996094 8.67218 0.957031 8.47687 0.957031 8.24249C0.957031 8.04718 0.996094 7.85187 1.07422 7.69562C3.18359 3.55499 7.40234 0.742493 12.207 0.742493C16.9727 0.742493 21.1914 3.55499 23.3008 7.69562ZM12.207 13.8675V13.9066C15.293 13.9066 17.832 11.3675 17.832 8.28156V8.24249C17.832 5.15656 15.293 2.61749 12.207 2.61749C9.08203 2.61749 6.58203 5.15656 6.58203 8.24249C6.58203 11.3675 9.08203 13.8675 12.207 13.8675ZM12.207 4.49249V4.53156C14.2773 4.53156 15.957 6.17218 15.957 8.24249C15.957 10.3128 14.2773 11.9925 12.207 11.9925C10.1367 11.9925 8.45703 10.3128 8.45703 8.24249C8.45703 7.92999 8.49609 7.57843 8.57422 7.26593C8.88672 7.50031 9.27734 7.61749 9.70703 7.61749C10.7227 7.61749 11.543 6.79718 11.543 5.78156C11.543 5.35187 11.4258 4.96124 11.1914 4.64874C11.5039 4.57062 11.8555 4.53156 12.207 4.49249Z"
                        fill="#49BBBD"
                      />
                    </svg>
                    <span className="text-[#696984] text-base xl:text-xl">
                      {data.RelatedBlogView}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <div className="py-10 md:py-12 lg:py-20 xl:pt-[80px] xl:pb-[170px]">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between pb-6 lg:pb-8 xl:pb-12">
            <h3 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-medium">
              Marketing Articles
            </h3>
            <Link
              href=""
              className="text-[#49BBBD] font-semibold text-base lg:text-lg xl:text-xl"
            >
              See all
            </Link>
          </div>
          <div className="flex flex-wrap lg:flex-nowrap gap-5 lg:gap-6 xl:gap-8 2xl:gap-[50px]">
            {MarketingArticles.map((data, i) => (
              <div
                key={i}
                className="w-full md:w-[calc(50%-10px)] lg:w-auto bg-white drop-shadow-[0_18px_47px_rgba(47,50,125,0.1)] p-4 md:px-5 md:pt-5 md:pb-8 rounded-[20px]"
              >
                <div className="overflow-hidden rounded-[20px]">
                  <img src={data.marketingPic} alt="" className="w-full" />
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
                      {data.marketingTag}
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
                        {data.marketingTime}
                      </span>
                    </div>
                  </div>
                </div>
                <h3 className="text-lg xl:text-xl 2xl:text-2xl font-medium text-[#252641] leading-normal">
                  {data.marketingTitel}
                </h3>
                <p className="my-4 2xl:mt-6 2xl:mb-5">{data.marketingDisc}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <img
                      src={data.marketingUserPic}
                      alt=""
                      className="rounded-full w-[44px] aspect-square"
                    />
                    <span className="text-lg font-medium">
                      {data.marketingUser}
                    </span>
                  </div>
                  <div className="flex items-center gap-3.5">
                    <span className="text-[#808080] text-lg font-light line-through">
                      {data.marketingOldPirce}
                    </span>
                    <span className="text-[#49BBBD] xl:text-xl 2xl:text-2xl font-bold">
                      {data.marketingPirce}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Blog;
