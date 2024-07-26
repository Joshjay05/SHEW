// import { Link } from "react-router-dom";

interface AboutProps {}

const About: React.FC<AboutProps> = () => {
  return (
    <section className="flex flex-col lg:flex md:flex-row bg-[#e9f8ff] mt-12 md:mt-0">
      <article className="flex-1 p-4 md:p-8">
        <h1 className="text-center md:text-left text-[#61d0ff] text-2xl md:text-4xl font-semibold mb-4">
          About SHEW Foundation
        </h1>

        <div className=" flex flex-col gap-4">
          <p className="leading-6">
            SPREADING HOPE EVERYWHERE FOUNDATION (S.H.E.W.) is a non-profit
            organisation and charity organisation. Started by Rosaline
            Alexander, in 2018 as she is so torn apart by seeing so many
            vulnerable children living on the streets without basic needs nor
            proper education. The charity was approved in 2019 by the CAC
            (Corporate Affairs Commission) in Nigeria. Certificate number
            CAC/RC-128677 The records can be found on
            https://publicsearch.cac.gov.ng/ With Registration name Spreading
            Hope Everywhere Foundation Rose and her team of trustees are aiming
            to build a better world for everyone, and that is why they need your
            help. S.H.E.W. Foundation started small in 2018 and is now growing
            to make an impact. Help S.H.E.W. All donations go towards food,
            essentials, clothing and a better online presence to make others
            aware about our charity.
          </p>
          <h4 className="font-bold text-xl">Our Mission </h4>
          <p>
            Building a better world for the ones living in vulnerable places.
            Nurturing growth and sustainability by educating young children,
            taking them off the streets. We combat hunger and inequality in food
            supply.
          </p>
          <h4>Our Vision</h4>
          <p>
            {" "}
            Raising a child takes a village. By helping those in need, we aim
            for regions that lack the tools and food. Providing them the much
            needed capital to build a solid ecosystem in education,
            self-development and nutrition.
          </p>
        </div>

        {/* <a
          href="/about-us"
          className="inline-block bg-[#61d0ff] text-white font-bold text-lg py-2 px-4 rounded-md"
        >
          Read More
        </a> */}
      </article>
      {/* <article className="relative flex-1 p-4 md:p-8">
        <img
          src=""
          alt="About TM30 Academy"
          className="w-full h-auto rounded-lg mb-4"
        />
        <img
          src=""
          alt="Half Circle"
          className="absolute bottom-2 right-0 w-32 md:w-80"
        />
      </article> */}
    </section>
  );
};

export default About;
