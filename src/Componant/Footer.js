import React from "react";
import Logo from "../../src/images/logo.svg";
import { Link } from "react-router-dom";

const footerLinks = [
  {
    footerlink: "Careers",
  },
  {
    footerlink: "Privacy Policy",
  },
  {
    footerlink: "Terms & Conditions",
  },
];

function Footer() {
  return (
    <>
      <div className="bg-[#252641] py-10 md:py-12 lg:pt-[74px] lg:pb-10">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center">
            <Link href="">
              <img
                src={Logo}
                alt=""
                className="max-h-12 lg:max-h-14 xl:max-h-16 2xl:max-h-20 align-middle"
              />
            </Link>
            <h3 className="text-xl xl:text-[22px] font-semibold text-white pl-6 xl:pl-10 ml-6 xl:ml-[77px] border-l border-[#626381] text-left">
              Virtual Class
              <br /> for Zoom
            </h3>
          </div>
          <div className="my-10 md:my-16 xl:my-24">
            <h3 className="text-lg md:text-xl xl:text-[26px] text-[#B2B3CF] font-medium">
              Subscribe to get our Newsletter
            </h3>
            <div className="inline-flex flex-col md:flex-row items-center gap-4 md:gap-5 mt-4 md:mt-5">
              <input
                type="text"
                name=""
                id=""
                placeholder="Your Email"
                className="md:min-w-[400px] rounded-full outline-none h-14 md:h-[60px] bg-transparent border border-[#83839A] px-[30px] text-[#83839A] text-xl placeholder-[#83839A]"
              />
              <Link
                to="/"
                className="min-h-14 md:min-h-[60px] min-w-[180px] flex items-center justify-center rounded-full bg-[#49BBBD] text-white text-xl md:text-[22px] font-medium hover:bg-white hover:text-[#252641]"
              >
                Subscribe
              </Link>
            </div>
          </div>
          <ul className="inline-flex flex-wrap md:flex-nowrap items-center justify-center gap-2">
            {footerLinks.map((data, i) => (
              <li
                key={i}
                className="border-r border-[#626381] pr-2 md:pr-5 md:mr-5 last:border-none last:pr-0 last:mr-0"
              >
                <Link
                  to="/"
                  className="text-base md:text-xl xl:text-[22px] text-[#B2B3CF] leading-none"
                >
                  {data.footerlink}
                </Link>
              </li>
            ))}
          </ul>
          <p className="text-base md:text-xl xl:text-[22px] text-[#B2B3CF] mt-2 md:mt-4 xl:mt-5">
            © 2021 Class Technologies Inc.
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
