"use client";
import { NAV_LINKS } from "../constants";

import { useState } from "react";
// import { CgLogIn } from "react-icons/cg";
import logo from "../assets/logo.jpeg";
import { IoCloseCircleOutline } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
// import { Link } from "react-router-dom";
import Button from "./Button";
import { FcCallTransfer } from "react-icons/fc";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <nav className="flexBetween bg-slate-100 max-container px-12 z-30 py-2 shadow-xl rounded-full ring-1 ring-slate-100 fixed w-[95%] left-[50%] top-1 translate-x-[-50%]">
      {/* <Link to={"/"} className="bold-20 rounded-full"> */}
      <img
        src={logo}
        alt="logo"
        width={50}
        height={50}
        className="rounded-full"
      />
      {/* </Link> */}
      {/* desktop */}

      <ul className="hidden lg:flex h-full">
        {NAV_LINKS.map((link) => (
          <a
            href={link.href}
            // to={link.href}
            key={link.key}
            className="flex items-center mx-8 relative gap-2 text-gray-50 group"
          >
            <span>
              <link.icon />
            </span>
            {link?.label}
            <span className="inline-block absolute h-[2px] w-0 bg-black -bottom-2 transition-all duration-500  group-hover:w-full"></span>
          </a>
        ))}
      </ul>
      <div className="hidden lg:block">
        <Button
          type="button"
          variant="btn_dark_rounded"
          title="Get in touch"
          icon={FcCallTransfer}
        />
      </div>
      {/* mobile */}
      {!showMenu ? (
        <div className="lg:hidden inline-block  cursor-pointer bg-slate-10">
          <GiHamburgerMenu className="h-6 w-6" onClick={toggleMenu} />
        </div>
      ) : (
        <div
          className="lg:hidden inline-block  cursor-pointer"
          onClick={toggleMenu}
        >
          <IoCloseCircleOutline className="h-5 w-5" />
        </div>
      )}

      <ul
        className={
          showMenu
            ? "flex flex-col justify-center p-12 fixed top-14 right-0 bg-slate-100 rounded-lg transition-all duration-500 shadow-md"
            : "hidden  flex-col justify-center p-12 fixed top-14 right-[100%] bg-slate-100 rounded-lg transition-all duration-500 shadow-md"
        }
      >
        {NAV_LINKS.map((link) => (
          <a
            href={link.href}
            key={link.key}
            className="flex items-center gap-1 m-6 relative text-gray-50 group"
          >
            <span>
              <link.icon />
            </span>
            {link?.label}
            <span className="inline-block absolute h-[2px] w-0 bg-black -bottom-2 transition-all duration-500  group-hover:w-full"></span>
          </a>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
