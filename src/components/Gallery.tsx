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
        <div className="course-description">
          <h1>A COLLECTION OF OUR OUTREACHES</h1>
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
