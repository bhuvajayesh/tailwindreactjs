import React from "react";
import Header from "../Componant/Header";
import Footer from "../Componant/Footer";
import BlogDetailBanner from "../../src/images/blog-detail-banner.jpg";
import RelatedBlog1 from "../../src/images/related-blog1.jpg";
import RelatedBlog2 from "../../src/images/related-blog2.jpg";
import User from "../../src/images/user.png";
import { Link } from "react-router-dom";
import Slider from "react-slick";

const blogTags = [
  {
    blogTagName: "affordable",
  },
  {
    blogTagName: "Stunning",
  },
  {
    blogTagName: "making",
  },
  {
    blogTagName: "madbrawns",
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

function BlogDetail() {
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
        <img src={BlogDetailBanner} alt="" className="w-full" />
        <div className="pt-10 md:pt-16 lg:pt-20 pb-[30px]">
          <div className="container mx-auto px-4">
            <h1 className="text-[#2F327D] text-xl lg:text-2xl xl:text-4xl 2xl:text-[44px] font-semibold !leading-normal mb-5">
              Why Swift UI Should Be on the Radar of Every Mobile Developer
            </h1>
            <p className="md:text-lg lg:text-xl text-[#696984] mb-4 lg:mb-[30px]">
              TOTC is a platform that allows educators to create online classes
              whereby they can store the course materials online; manage
              assignments, quizzes and exams; monitor due dates; grade results
              and provide students with feedback all in one place.
            </p>
            <p className="md:text-lg lg:text-xl text-[#696984] mb-4 lg:mb-[30px]">
              TOTC is a platform that allows educators to create online classes
              whereby they can store the course materials online; manage
              assignments, quizzes and exams; monitor due dates; grade results
              and provide students with feedback all in one place. TOTC is a
              platform that allows educators to create online classes whereby
              they can store the course materials online; manage assignments,
              quizzes and exams; monitor due dates; grade results and provide
              students with feedback all in one place. TOTC is a platform
            </p>
            <p className="md:text-lg lg:text-xl text-[#696984] mb-4 lg:mb-[30px]">
              TOTC is a platform that allows educators to create online classes
              whereby they can store the course materials online; manage
              assignments, quizzes and exams; monitor due dates; grade results
              and provide students with feedback all in one place. TOTC is a
              platform that allows educators to create online classes whereby
              they can store the course materials online; manage
            </p>
            <ul className="flex flex-wrap gap-3 md:gap-6 lg:gap-9">
              {blogTags.map((data, i) => (
                <li key={i}>
                  <Link
                    href="/"
                    className="bg-[#ECF8F8] rounded-[36px] min-w-[136px] py-2.5 md:py-3 text-[#696984] inline-block text-center hover:bg-[#252641] hover:text-white"
                  >
                    {data.blogTagName}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-[30px] pt-[30px] border-t border-[#696984]">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="flex items-center mb-4 md:mb-0 gap-5">
                  <img
                    src={User}
                    alt=""
                    className="w-[77px] aspect-square rounded-md"
                  />
                  <div>
                    <span className="text-xs font-medium text-[#696984]">
                      Written by
                    </span>
                    <h2 className="mt-1.5 text-lg font-medium">Lina</h2>
                  </div>
                </div>
                <Link
                  href=""
                  className="flex-none min-w-[230px] rounded-[10px] border border-[#49BBBD] py-3 text-[#49BBBD] font-bold text-center hover:bg-[#252641] hover:text-white hover:border-[#252641]"
                >
                  Follow
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#EBF5FF] py-10 md:py-12 lg:py-20 xl:pb-[200px]">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between pb-6 md:pb-10">
              <h3 className="text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-medium">
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
                  <h3 className="mt-3 mb-6 md:text-lg xl:text-xl 2xl:text-2xl font-medium text-[#252641] leading-normal">
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
      </div>
      <Footer />
    </>
  );
}

export default BlogDetail;
