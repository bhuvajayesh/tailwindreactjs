import React from "react";
import Logo from "../../src/images/logo-dark.svg";
import User from "../../src/images/user.png";
import { Link } from "react-router-dom";

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

function Header() {
  return (
    <>
      <div className="fixed top-0 left-0 w-full bg-white z-10 shadow-md">
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
              <ul className="hidden md:flex gap-8 lg:gap-10 2xl:gap-16">
                {Menu.map((data, i) => (
                  <li key={i}>
                    <Link
                      to={data.link}
                      className="lg:text-lg xl:text-xl text-[#5B5B5B] hover:text-black"
                    >
                      {data.menuName}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="flex items-center gap-[15px]">
                <div className="bg-[#D9D9D9] rounded-full overflow-hidden w-12 md:w-[60px] aspect-square">
                  <img src={User} alt="User" />
                </div>
                <label className="text-lg font-medium">Lina</label>
                <svg
                  width="13"
                  height="8"
                  viewBox="0 0 13 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.02734 7.66016C6.34375 7.97656 6.87109 7.97656 7.1875 7.66016L11.9688 2.87891C12.3203 2.52734 12.3203 2 11.9688 1.68359L11.1953 0.875C10.8438 0.558594 10.3164 0.558594 10 0.875L6.58984 4.28516L3.21484 0.875C2.89844 0.558594 2.37109 0.558594 2.01953 0.875L1.24609 1.68359C0.894531 2 0.894531 2.52734 1.24609 2.87891L6.02734 7.66016Z"
                    fill="black"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
