import headerImage from "../assets/bannerThree.jpeg";
// import Button from "";

import useMediaQuery from "../constants/useMediaQuery";
import { Link } from "react-router-dom";

const Header = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  return (
    <header className="bg-[#2d2735] relative  md:h-100vh md:pb-10 md:pt-2 sm:pb-6 z-10  ">
      {isAboveMediumScreens ? (
        <section className="flex flex-row justify-between pb-10  pt-[8rem] relative ">
          <article className="text-white absolute inset-y-[38%] left-[5.6%]  w-[90%] md:w-auto ">
            <h4 className="text-2xl md:text-lg lg:text-4xl  font-bold w-[60%]">
              Embrace <span className="bg-[#E37619] px-1 ">Humanity ,</span>{" "}
              Combat Hunger, Enrich Numerous Lives
            </h4>
            <p className="text-xs md:text-base lg:text-lg leading-normal md:leading-[1.5em] tracking-normal py-3">
              Transform lives with us. Give talent a chance
            </p>
            <div className="flex flex-row gap-3 items-center">
              <a
                href="#donation"
                className="border-2 border-white-400 rounded-lg py-2 px-4 md:py-3 md:px-6  sm:shadow cursor-pointer"
              >
                Discover How
              </a>
              <a href="#footer">
                <button className="bg-[#E37619] rounded-lg py-3 px-4 md:py-3 md:px-6 text-base shadow border-0 cursor-pointer">
                  {" "}
                  Join Us Today
                </button>
              </a>
            </div>
          </article>
          <div
            className="w-[90%] h-[70%] "
            style={{ marginInlineStart: "27%" }}
          >
            <img
              src={headerImage}
              alt="header-image"
              className="h-[70%] w-full self-end"
            />
          </div>
        </section>
      ) : (
        <section className="flex flex-row justify-between pb-6 relative">
          <article className="flex flex-col justify-evenly text-white-400 absolute top-[20%]  md:top-[28%] sm:top-[5vh] sm:left-[7] left-[14.6%] justify-items-center ">
            <h4 className="md:text-xl w-[60%] font-bold sm:text-sm sm:pb-2">
              Embrace Your{" "}
              <span className="bg-[#E37619] px-1 sm:leading-6  ">
                Heritage,
              </span>{" "}
              Enrich Your Connections
            </h4>
            <p className="md:text-base leading-[1.5em]  md:py-2 sm:text-xs sm:leading-3">
              Journey through Time, Tradition, and <br />
              Triumphs in the Heart of Itsekiri Culture.
            </p>
            <div className="flex flex-row gap-3 md:my-auto sm:mt-4">
              <a
                href=""
                className="border-2 border-white-400 rounded-lg  shadow text-sm p-1 sm:p-1 cursor-pointer "
              >
                Discover Your Roots
              </a>

              <a
                href=""
                className="bg-[#E37619] rounded-lg py-[2%] px-[5%] text-[14px] shadow border-0 sm:p-1 sm:text-xs cursor-pointer "
              >
                {" "}
                <Link to="reg">Join Us Today</Link>
              </a>
            </div>
          </article>
          <div
            className="w-[60%] h-[70%] "
            style={{ marginInlineStart: "40%" }}
          >
            <img
              src={headerImage}
              alt="header-image"
              className="h-[70%] w-full self-end"
            />
          </div>
        </section>
      )}
    </header>
  );
};

export default Header;
