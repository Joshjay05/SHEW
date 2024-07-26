import React from "react";
import image1 from "../assets/Prison.jpeg";
import image2 from "../assets/WhatsApp Image 2024-07-22 at 20.15.38.jpeg";
import image3 from "../assets/WhatsApp Image 2024-07-22 at 20.15.37 (1).jpeg";
import image4 from "../assets/Pri.jpeg";
import image5 from "../assets/foo.jpeg";
import "./gallery.css";

const Image: React.FC = () => {
  return (
    <section className="image-pic">
      <article className="courses">
        <div className="">
          <h1 className="text-[#E37619]">S.H.E.W Past Events</h1>
          <p className="text-left px-4">
            <b>Combat Hunger:</b> Helping children, elderly and widows on the
            street in Nigeria. Providing them food and essentials. Giving them
            hope that S.H.E.W Foundation is doing their best to keep helping the
            ones in need
            <p>
              <b>Transforming Lives:</b> S.H.E.W Foundation made a visit to Ay
              Isigi Nursing Home in Cyprus. Donating essentials and supporting
              the caretakers. A smile and letting them know others are helping
              is a massive step forward for progress
            </p>
            w 23 ]\
          </p>
        </div>

        <section id="content">
          <div className="one" data-aos="zoom-in" data-aos-duration="2000">
            <img src={image1} alt="Student 1" />
          </div>
          <div className="two" data-aos="zoom-in" data-aos-duration="2000">
            <img src={image3} alt="Student 2" />
          </div>
          <div className="three" data-aos="zoom-in" data-aos-duration="2000">
            <img src={image5} className="three" alt="Student 3" />
          </div>
          <div className="four" data-aos="zoom-in" data-aos-duration="2000">
            <img src={image2} alt="Student 4" />
          </div>
          <div className="five" data-aos="zoom-in" data-aos-duration="2000">
            <img src={image4} alt="Student 5" />
          </div>
        </section>

        {/* <div>
          <img src={image} className="student-image" alt="" />
        </div> */}
      </article>
    </section>
  );
};

export default Image;
