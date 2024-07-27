import React from "react";
import { FOOTER_LINKS, SOCIALS, SOCIALS_LINKS } from "../constants";
import logo from "../assets/logo.jpeg";

const Footer = () => {
  return (
    <footer
      id="footer"
      className="bg-slate-300 py-8 px-4 md:px-8 lg:px-16 mt-10"
    >
      <div className=" flex sm:flex-col justify-between items-start mx-6 md:mx-2 md:gap-[20px]">
        {/* Logo Section */}
        <div className="mb-6 md:mb-0 flex justify-center md:justify-start lg:px-5">
          <a href="/" className="flex items-center">
            <img
              src={logo}
              alt="logo"
              className=" lg:w-[160px] w-[100px] rounded-full"
            />
          </a>
        </div>

        {/* Footer Links */}
        <div className="flex sm:flex-col justify-start md:flex-row gap-8 mb-6 md:mb-0">
          {FOOTER_LINKS.map((col) => (
            <div className="flex flex-col gap-7">
              <h4 className="font-bold sm:text-left text-center">
                {col.title}
              </h4>
              <ul className="space-y-2 text-gray-700 ">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="/" className="hover:text-blue-500">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social Links */}
        <div className="mb-6 md:mb-0">
          <FooterColumn title={SOCIALS_LINKS.title}>
            {SOCIALS_LINKS.links.map((link) => (
              <div className="flex  md:flex-row  mb-2" key={link.label}>
                <p className="font-medium">{link.label}:</p>
                <p className="text-gray-700 text-wrap">{link.value}</p>
              </div>
            ))}
          </FooterColumn>
        </div>

        {/* Social Icons */}
        <div>
          <FooterColumn title={SOCIALS.title}>
            <ul className="flex gap-4">
              {SOCIALS.links.map((link) => (
                <li key={link?.id}>
                  <a
                    href={link.href}
                    className="text-2xl text-gray-700 hover:text-blue-500"
                  >
                    <link.icon />
                  </a>
                </li>
              ))}
            </ul>
          </FooterColumn>
        </div>
      </div>
    </footer>
  );
};

type FooterColumnProps = {
  title: string;
  children: React.ReactNode;
};

const FooterColumn = ({ title, children }: FooterColumnProps) => {
  return (
    <div className="flex flex-col gap-4">
      <h4 className="text-lg font-semibold">{title}</h4>
      {children}
    </div>
  );
};

export default Footer;
