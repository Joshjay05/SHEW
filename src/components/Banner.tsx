import useMediaQuery from "../constants/useMediaQuery";
import headerImage from "../assets/bannerThree.jpeg";

const Header = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <header className="bg-[#2d2735] relative md:h-100vh md:pb-10 md:pt-2 sm:pb-6 z-10 py-[80px]">
      {isAboveMediumScreens ? (
        <section className="relative flex flex-row justify-between pb-10 pt-[8rem]">
          <article className="z-30 text-white absolute inset-y-[38%] left-[5.6%] w-[90%] md:w-auto">
            <h4 className="text-2xl md:text-lg lg:text-4xl font-bold w-[60%]">
              Embrace <span className="bg-[#E37619] px-1">Humanity,</span>{" "}
              Combat Hunger, Enrich Numerous Lives
            </h4>
            <p className="text-xs md:text-base lg:text-lg leading-normal md:leading-[1.5em] tracking-normal py-3">
              Transform lives with us. Give talent a chance
            </p>
            <div className="flex flex-row gap-3 items-center">
              <a
                href="#donation"
                className="border-2 border-white rounded-lg py-2 px-4 md:py-3 md:px-6 sm:shadow cursor-pointer"
              >
                Discover How
              </a>
              <a href="mailto:info@shewfoundation.com">
                <button className="bg-[#E37619] rounded-lg py-3 px-4 md:py-3 md:px-6 text-base shadow border-0 cursor-pointer">
                  Join Us Today
                </button>
              </a>
            </div>
          </article>
          <div
            className="relative w-[90%] h-[70%]"
            style={{ marginInlineStart: "27%" }}
          >
            <img
              src={headerImage}
              alt="header-image"
              className="h-[70%] w-full object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-50 z-10" />
          </div>
        </section>
      ) : (
        <section className="relative flex flex-row justify-between pb-6">
          <article className="flex flex-col text-white justify-evenly gap-[20px] absolute top-[20%] md:top-[28%] sm:top-[5vh] sm:left-[7%] left-[14.6%] justify-items-center z-30">
            <h4 className="md:text-3xl  font-bold sm:text-sm sm:pb-2 leading-[2em]">
              Embrace{" "}
              <span className="bg-[#E37619] px-1 sm:leading-6">Humanity</span>{" "}
              Combat Hunger, Enrich Numerous Lives
            </h4>
            <p className="md:text-2xl leading-[1.5em] md:py-2 sm:text-xs sm:leading-3">
              Transform lives with us. Give talent a chance
            </p>
            <div className="flex flex-row gap-3 md:my-auto sm:mt-4">
              <a
                href="#donation"
                className="border-2 border-white rounded-lg shadow text-sm p-1 sm:p-1 cursor-pointer"
              >
                Discover How
              </a>
              <a
                href="mailto:info@shewfoundation.com"
                className="bg-[#E37619] rounded-lg py-[2%] px-[5%] text-[14px] shadow border-0 sm:p-1 sm:text-xs cursor-pointer"
              >
                Join Us Today
              </a>
            </div>
          </article>
          <div
            className="relative w-[60%] h-[70%]"
            style={{ marginInlineStart: "40%" }}
          >
            <img
              src={headerImage}
              alt="header-image"
              className="h-[70%] w-full object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-50 z-10" />
          </div>
        </section>
      )}
    </header>
  );
};

export default Header;
