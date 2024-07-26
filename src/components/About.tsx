// import { Link } from "react-router-dom";
import abt from "../assets/abt.jpeg";
interface AboutProps {}

const About: React.FC<AboutProps> = () => {
  return (
    <section
      id="about"
      className="flex sm:flex-col md:grid items-center lg:flex md:flex-row bg-[#e9f8ff] mt-12 md:mt-0"
    >
      <article className="flex-1 p-4 md:p-8">
        <h1 className="text-center md:text-left text-[#61d0ff] text-2xl md:text-4xl font-semibold mb-4">
          About SHEW Foundation
        </h1>

        <div className=" flex flex-col gap-4">
          <p className="leading-[2.5rem]">
            Spreading Hope Everywhere Foundation (S.H.E.W.) is a non-profit and
            charitable organization established in 2018 with a mission to
            support vulnerable children living on the streets who lack basic
            needs and proper education. Officially registered in Nigeria in 2019
            under the Corporate Affairs Commission (CAC) with certificate number
            CAC/RC-128677, S.H.E.W. Foundation is committed to creating a
            positive impact in communities. Our foundation, which started as a
            small initiative, has grown significantly, driven by a dedicated
            team of trustees and supporters. Our collective goal is to build a
            better world for those in need. We focus on providing food,
            essentials, clothing, and enhancing our online presence to raise
            awareness about our mission. We invite you to join us in our
            efforts. Your donations play a crucial role in sustaining our
            programs and expanding our reach. Together, we can make a difference
            and bring hope to many. For more information, you can verify our
            registration details at CAC Public Search, under the name Spreading
            Hope Everywhere Foundation.
          </p>
          <h4 className="font-bold text-xl">Our Mission </h4>
          <p>
            Building a better world for the ones living in vulnerable places.
            Nurturing growth and sustainability by educating young children,
            taking them off the streets. We combat hunger and inequality in food
            supply.
          </p>
          <h4 className="font-bold text-xl">Our Vision</h4>
          <p>
            {" "}
            Raising a child takes a village. By helping those in need, we aim
            for regions that lack the tools and food. Providing them the much
            needed capital to build a solid ecosystem in education,
            self-development and nutrition.
          </p>
        </div>
      </article>
      <article className="relative flex-1 p-4 md:p-8">
        <img
          src={abt}
          alt="About SHEW"
          className="w-full h-auto rounded-lg mb-4"
        />
      </article>
    </section>
  );
};

export default About;
