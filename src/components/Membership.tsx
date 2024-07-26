// import { Link } from "react-router-dom";
// import Button from "../Reusable/Button";
// import MembershipCard from "../Reusable/AboutCard";
import MembershipCard from "./MemberShipCard";
import vol from "../assets/Vol.jpeg";

const Membership = () => {
  return (
    <section>
      <h2 className="text-center text-[#E37619] text-[36px] my-6 font-bold">
        Call For Help
      </h2>
      <article className="grid grid-cols-2 sm:flex sm:flex-col md:flex md:flex-col mx-[4%] gap-12">
        {/* left */}
        <div className="flex flex-col gap-4">
          <img src={vol} alt="membershipImage" className="w-full" />
          <div className="leading-[3rem] my-10">
            <h3 className="font-bold text-2xl">Call For Funding</h3>
            <p className="leading-[2rem] py-[2rem]  text-justify">
              With your donation, we are able to organise more events. Visit the
              regions that are in need and provide them with the basic. Our
              S.H.E.W. events are spreading hope, knowing others care and that
              provides motivation. Donate today through our GOFUNDME campaign,
              Facebook page or directly on the website. Our goal is to raise 100
              000 euros, to deliver and build that ecosystem for children in
              need and take them off the streets. Changing the world is hard,
              but we can contribute making one or two places better at a time.
              Your donation matters. Every dollar, euro, pound is a catalyst and
              helps S.H.E.W. building a better future
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
            text="PProviding them enough food and healthy meals will lower the deaths. Building better immune systems will decrease the risk of being hospitalized and take the burden of nursing homes, clinics and doctors  "
          />
          <MembershipCard
            number="04."
            title="Ecosystem"
            text="Help us, to build this better ecosystem for the poor. The less children and needy living on the streets, the less we face crime and desperation. Help S.H.E.W. to create that ecosystem "
          />
          <MembershipCard
            number="05."
            title="Approval & Welcome"
            text="Our team will review your application and send a welcome packet with full membership details, benefits, and upcoming events within one week. . "
          />
          <MembershipCard
            number="06."
            title="Get Involved"
            text="With confirmation, you’ll gain immediate access to member-exclusive resources and a calendar of events so you can start participating right away. . "
          />
        </div>
      </article>
    </section>
  );
};

export default Membership;
