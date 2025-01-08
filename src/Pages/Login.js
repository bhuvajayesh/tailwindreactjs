import React from "react";
import LoginBg from "../../src/images/login-bg.jpg";
import "react-tabs/style/react-tabs.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <>
      <div className="py-10 px-4 md:p-6 gap-5 md:gap-0 flex flex-col md:flex-row items-center md:h-screen">
        <div className="w-full md:w-1/2 relative h-full hidden md:block">
          <img
            src={LoginBg}
            alt=""
            className="rounded-[30px] h-full w-full object-cover"
          />
          <div className="absolute bottom-0 left-0 px-5 md:px-10 lg:px-12 pb-5 md:pb-14 xl:px-16 w-full">
            <h2 className="text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-white font-bold">
              Lorem Ipsum is simply
            </h2>
            <p className="mt-1.5 text-lg xl:text-xl 2xl:text-2xl text-white">
              Lorem Ipsum is simply{" "}
            </p>
          </div>
        </div>
        <div className="w-full md:w-5/12 2xl:w-4/12 md:pl-0 lg:px-12 xl:pr-16 xl:pl-28 mx-auto">
          <h4 className="text-center">Welcome to lorem..!</h4>
          <div className="text-center mt-4 mb-8 md:mt-6 md:mb-12">
            <div className="inline-flex items-center bg-[#49BBBD] bg-opacity-60 rounded-[33px] py-2 md:py-2.5 px-3">
              <Link
                to="/login"
                className="min-w-32 lg:min-w-40 flex-1 bg-[#49BBBD] text-white font-medium py-2 rounded-[33px] text-center"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="min-w-32 lg:min-w-40 flex-1 text-white font-medium py-2 rounded-[33px] text-center"
              >
                Register
              </Link>
            </div>
          </div>
          <p className="text-[#5B5B5B] mb-5 xl:mb-10">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <div className="">
            <label className="mb-3 block">User name</label>
            <input
              type="text"
              placeholder="Enter your User name"
              className="w-full border border-[#49BBBD] rounded-[40px] py-3.5 px-7 placeholder:font-light outline-none"
            />
          </div>
          <div className="mt-5 xl:mt-[30px]">
            <label className="mb-3 block">Password</label>
            <input
              type="password"
              placeholder="Enter your Password"
              className="w-full border border-[#49BBBD] rounded-[40px] py-3.5 px-7 placeholder:font-light outline-none"
            />
          </div>
          <div className="flex items-center justify-between mt-5 mb-10 md:mb-14">
            <div className="flex items-center gap-2.5">
              <input
                type="checkbox"
                id="rememebrMe"
                className="w-[15px] aspect-square cursor-pointer border border-black"
              />
              <label
                htmlFor="rememebrMe"
                className="text-xs font-light cursor-pointer"
              >
                Rememebr me
              </label>
            </div>
            <Link to="/" className="text-xs font-light">
              Forgot Password ?
            </Link>
          </div>
          <div className="flex justify-end">
            <Link
              to="/"
              className="w-1/2 py-3 text-center rounded-[36px] bg-[#49BBBD] text-white hover:bg-[#252641] hover:text-white"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
