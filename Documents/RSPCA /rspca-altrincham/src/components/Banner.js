import React from "react";
import Logo from "../RSPCA_Logo.png";
import Navbar from "./Navbar";

function Banner() {


  
  return (
    <div>
      <div className="grid grid-cols-5 pt-3 px-3">
        <img
          className="h-15 w-20 lg:h-30 lg:w-40 lg:p-5 col-span-1"
          alt="RSPCA Logo"
          src={Logo}
        />
        <div className="col-span-3 justify-self-center ">
          <div className="grid grid-cols-1 p-2 font-bold">
            <h1 className="text-center raleway text-[20px] lg:text-[35px]">
              Cheshire (Altrincham) Branch
            </h1>
            <h2 className="text-center text-[#FF6B00] font-bold raleway  text-[15px] lg:text-[25px]">
              National RSPCA Cruelty Line 0300 1234 999
            </h2>
            <button className="bg-[#FF6B00] rounded-lg mt-3 p-3 w-[50] justify-self-center raleway sm:hidden">
              Donate
            </button>
          </div>
        </div>
        <div className="col-span-1 justify-self-center p-5 ">
          {/* <div className="sm:hidden md:hidden lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              width="16"
              height="16"
            >
              <path d="M1 2.75A.75.75 0 0 1 1.75 2h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 2.75Zm0 5A.75.75 0 0 1 1.75 7h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 7.75ZM1.75 12h12.5a.75.75 0 0 1 0 1.5H1.75a.75.75 0 0 1 0-1.5Z"></path>
            </svg>
          </div> */}
          <Navbar />
          <div>
            <button className="bg-[#FF6B00] rounded-lg mt-3 p-3 w-[50] justify-self-center raleway hidden sm:inline">
              Donate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
