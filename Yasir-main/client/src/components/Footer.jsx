import React from "react";
import { Link } from "react-router-dom";
import { FiGithub, FiTwitter, FiInstagram, FiLinkedin } from "react-icons/fi";

const Footer = () => {
  return (
    <div className="flex justify-center text-center items-center flex-col h-auto p-[15px] sm:min-h-[70px] bg-navy">
      <div className=" w-full sm:mb-[10px] mb-2 text-light_slate flex text-3xl justify-center">
        <Link
          className="mx-4 text-light_slate hover:text-green"
        >
          <FiGithub />
        </Link>
        <Link
          className="mx-4 text-light_slate hover:text-green"
        >
          <FiTwitter />
        </Link>
        <Link
          className="mx-4 text-light_slate hover:text-green"
        >
          <FiInstagram />
        </Link>
        <Link
          className="mx-4 text-light_slate hover:text-green"
        >
          <FiLinkedin />
        </Link>
      </div>
      <div className="text-center items-center text-[13px] text-light_slate">
        <p className="p-2 font-sora">
          Designed and crafted by{" "}
          <Link
            className="text-lightest_slate cursor-pointer"
          >
            Yasir Syed
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Footer;
