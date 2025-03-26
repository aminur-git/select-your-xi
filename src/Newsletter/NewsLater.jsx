import React from "react";
import background from "../assets/banner-white.png";
import overlay from "../assets/bg-shadow.png";
import btn_bg from "../assets/btn-bg.jpg";

const NewsLater = () => {
  return (
    <div className="">
      <div
        style={{
          backgroundImage: `url(${overlay}), url(${background}) `,
          backgroundRepeat: "no-repeat, no-repeat",
          backgroundSize: "cover, cover",
        }}
        className="flex flex-col justify-center items-center text-center max-w-2xl mx-auto shadow px-2 md:px-20 py-10 space-y-8 rounded-md"
      >
        <div className="space-y-2">
          <h1 className="text-2xl md:text-3xl font-bold ">Subscribe to our Newsletter</h1>
          <p className="text-xs md:text-base font-medium text-[#131313B3]">
            Get the latest updates and news right in your inbox!
          </p>
        </div>
        <form action="">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <input
              className="border-1 border-gray-200  pl-4 pr-20 sm:pr-28 py-3 rounded-md "
              placeholder="Enter your email"
              type="email"
              name=""
              id=""
            />
            <button
              type="submit"
              style={{
                backgroundImage: `url(${btn_bg}) `,
                backgroundRepeat: "no-repeat, no-repeat",
                backgroundSize: "cover, cover",
              }}
              className=" px-6 py-3 rounded-md border-1 border-gray-100 cursor-pointer hover:shadow font-medium "
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewsLater;
