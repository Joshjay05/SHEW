"use client";
import Slider from "react-slick";
import { PiCaretLeftLight, PiCaretRightLight } from "react-icons/pi";
import bannertwo from "../assets/BannerTwo.jpeg";
import bannerthree from "../assets/bannerThree.jpeg";
import BannerText from "./BannerText";

const Banner: React.FC = () => {
  const NextArrow: React.FC<{ onClick?: () => void }> = ({ onClick }) => (
    <div
      className="p-3 bg-slate-100 hover:text-orange-600 hover:bg-white cursor-pointer duration-200 rounded-full text-2xl flex items-center justify-center z-20 absolute md:left-4 lg:left-6 xl:left-8 top-1/2 transform -translate-y-1/2"
      onClick={onClick}
    >
      <PiCaretLeftLight />
    </div>
  );

  const PrevArrow: React.FC<{ onClick?: () => void }> = ({ onClick }) => (
    <div
      className="p-3 bg-slate-100 hover:text-orange-600 hover:bg-white cursor-pointer duration-200 rounded-full text-2xl flex items-center justify-center z-20 absolute md:right-4 lg:right-6 xl:right-8 top-1/2 transform -translate-y-1/2"
      onClick={onClick}
    >
      <PiCaretRightLight />
    </div>
  );

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <section className="relative w-full">
      <Slider {...settings}>
        <div className="w-full relative">
          <img
            src={bannertwo}
            alt="Study Offers"
            className="w-full h-auto object-cover"
          />
          <BannerText title="Study Offers" />
        </div>
        <div className="w-full relative">
          <img
            src={bannerthree}
            alt="Tourism"
            className="w-full h-auto object-cover"
          />
          <BannerText title="Tourism" />
        </div>
      </Slider>
      <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-gray-100 to-transparent z-10" />
    </section>
  );
};

export default Banner;
