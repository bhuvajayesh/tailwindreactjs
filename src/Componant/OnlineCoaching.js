import React from "react";
import { Link } from "react-router-dom";

function OnlineCoaching() {
  return (
    <>
      <h2 className="text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-white font-semibold">
        Online coaching lessons for remote learning.
      </h2>
      <p className="mt-5 mb-7 md:mt-[30px] md:mb-12 2xl:mb-16 lg:text-lg xl:text-xl 2xl:text-2xl text-white leading-normal">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempos Lorem ipsum dolor <br className="hidden lg:block" /> sitamet,
        consectetur adipiscing elit, sed do eiusmod tempor
      </p>
      <Link
        to="/"
        className="py-3 xl:py-5 px-6 xl:px-10 inline-block rounded-xl bg-[#49BBBD] text-white text-base font-semibold xl:font-bold hover:bg-white hover:text-[#252641]"
      >
        Start learning now
      </Link>
    </>
  );
}

export default OnlineCoaching;
