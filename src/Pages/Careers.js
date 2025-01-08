import React from "react";
import Header from "../Componant/Header";
import Footer from "../Componant/Footer";

function Careers() {
  return (
    <>
      <Header />
      <div className="pt-[72px] md:pt-[92px] xl:pt-[112px] 2xl:pt-[128px]">
        <div className="container mx-auto px-4">
          <h2 className="text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-medium py-28">
            Careers
          </h2>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Careers;
