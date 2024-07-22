import Slider, { Settings } from "react-slick";
// import Image from "next/image";
import { PiCaretLeftLight, PiCaretRightLight } from "react-icons/pi";
import bannerone from "@/public/hero.jpg";
import bannertwo from "@/public/herobg.jpg";
import bannerthree from "@/public/Herobgnew.jpg";
import BannerText from "./BannerText";

const NextArrow: React.FC<{ onClick?: () => void }> = ({ onClick }) => {
  return (
    <div
      className="p-3 bg-slate-100 hover:text-orange-600 hover:bg-white cursor-pointer duration-200 rounded-full text-2xl flex items-center justify-center z-20 absolute left-2 top-1/2"
      onClick={onClick}
    >
      <PiCaretLeftLight />
    </div>
  );
};

const PrevArrow: React.FC<{ onClick?: () => void }> = ({ onClick }) => {
  return (
    <div
      className="p-3 bg-slate-100 hover:text-orange-600 hover:bg-white cursor-pointer duration-200 rounded-full text-2xl flex items-center justify-center z-20 absolute right-2 top-1/2"
      onClick={onClick}
    >
      <PiCaretRightLight />
    </div>
  );
};

const Banner: React.FC = () => {
  const settings: Settings = {
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
    <section className="relative">
      <Slider {...settings}>
        <div className="w-full h-full relative">
          <img
            src={bannerone}
            alt="bannerone"
            className="w-full h-full relative"
            // priority
          />
          <BannerText title="Work and Travel" />
        </div>
        <div className="w-full h-full relative">
          <img
            src={bannertwo}
            alt="bannertwo"
            className="w-full h-full relative"
          />
          <BannerText title="Study Offers" />
        </div>
        <div className="w-full h-full relative">
          <img
            src={bannerthree}
            alt="bannerthree"
            className="w-full h-full relative"
          />
          <BannerText title="Tourism" />
        </div>
      </Slider>
      <div className="absolute w-full h-44 bg-gradient-to-t from-gray-100 to-transparent bottom-0 left-0 z-10" />
    </section>
  );
};

export default Banner;
