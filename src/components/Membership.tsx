// import { Link } from "react-router-dom";
// import Button from "../Reusable/Button";
// import MembershipCard from "../Reusable/AboutCard";
import MembershipCard from "./MemberShipCard";
import vol from "../assets/Vol.jpeg";

const Membership = () => {
  return (
    <section id="donation" className="md:mt-[30rem] sm:mt-[3rem] lg:my-[3rem]">
      <h2 className="text-center text-[#E37619] text-[36px] my-6 font-bold">
        Call For Help
      </h2>
      <article className="grid grid-cols-2 sm:flex sm:flex-col md:flex md:flex-col mx-[4%] gap-12">
        {/* left */}
        <div className="flex flex-col gap-4">
          <img src={vol} alt="membershipImage" className="w-full" />
          <div className="leading-[3rem] my-10">
            <h3 className="font-bold text-2xl md:text-center sm:text-center">
              Support S.H.E.W Foundation: Your Donation Makes a Difference
            </h3>
            <p className="leading-[2rem] py-[2rem]  text-justify">
              With your generous support, we can organize more impactful events,
              reach regions in need, and provide essential resources to those
              who require them most. Our S.H.E.W. Foundation events are designed
              to spread hope and inspire motivation, showing that others care
              and are willing to make a difference. Donate today through our
              GoFundMe campaign, Facebook page, or directly on our website. We
              aim to raise €100,000 to build a sustainable ecosystem for
              children in need and help take them off the streets. While
              changing the world is challenging, every contribution helps us
              improve one community at a time. Your donation is invaluable.
              Every dollar, euro, or pound serves as a catalyst for change,
              helping the S.H.E.W. Foundation build a brighter future for those
              in need. Join us in making a meaningful impact—your support truly
              matters.
            </p>
            <a href="reg">
              <button className="bg-[#E37619] border text-white rounded-lg py-[12px] px-[24px] my-[2rem] text-[16px] cursor-pointer">
                Get in Touch
              </button>
            </a>
          </div>
        </div>
        {/* right */}
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-3 py-2">
            <h4 className="font-bold text-lg">HOW CAN WE HELP THEM? </h4>
            <p></p>
          </div>
          <MembershipCard
            number="01."
            title="Education"
            text="Help us give a child a fighting chance. Good education is an
              investment to rebuild their region. Giving children that become
              adults the ability and the tools to sustain themselves "
          />
          <MembershipCard
            number="02."
            title="Infrastructure"
            text="With education and food, people will be able to build a better infrastructure and supply chain for essentials. That includes a better agriculture and producing the much needed basics. "
          />
          <MembershipCard
            number="03."
            title="Nutrition  "
            text="Providing them enough food and healthy meals will lower the deaths. Building better immune systems will decrease the risk of being hospitalized and take the burden of nursing homes, clinics and doctors  "
          />
          <MembershipCard
            number="04."
            title="Ecosystem"
            text="Help us, to build this better ecosystem for the poor. The less children and needy living on the streets, the less we face crime and desperation. Help S.H.E.W. to create that ecosystem "
          />
          <MembershipCard
            number="05."
            title="Combat Hunger"
            text="The S.H.E.W Foundation is dedicated to helping children, the elderly, and widows living on the streets, in villages, and in orphanages. We provide essential food and supplies, offering hope and demonstrating our commitment to those in need. "
          />
          <MembershipCard
            number="06."
            title="Transforming Lives"
            text="With your support, we can provide essential supplies and support to caretakers in need. A simple smile and knowing that others are contributing make a significant difference. Every act of kindness is a step forward in our shared journey towards progress and improvement. "
          />
        </div>
      </article>
    </section>
  );
};

export default Membership;
