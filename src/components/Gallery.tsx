import React from "react";
import image1 from "../assets/Prison.jpeg";
import image2 from "../assets/WhatsApp Image 2024-07-22 at 20.15.38.jpeg";
import image3 from "../assets/WhatsApp Image 2024-07-22 at 20.15.37 (1).jpeg";
import image4 from "../assets/Pri.jpeg";
import image5 from "../assets/foo.jpeg";
import "./gallery.css";

const Image: React.FC = () => {
  return (
    <section className="image-pic " style={{ marginBlock: "4rem" }}>
      <article className="courses">
        <div className="">
          <h1 className="text-[#E37619] text-center">S.H.E.W Past Events</h1>
          <p className="text-left px-4 leading-9">
            S.H.E.W Foundation: Transforming Lives and Combating Hunger At the
            S.H.E.W Foundation, our mission extends across borders to make a
            tangible difference in the lives of those in need. In Nigeria, we
            are dedicated to combating hunger by providing essential food and
            necessities to children, the elderly, and widows living on the
            streets. Our efforts aim to offer hope and support, demonstrating
            our commitment to uplifting those who are struggling. Our work also
            reaches beyond Nigeria. Recently, we had the privilege of visiting
            the Ay Isigi Nursing Home in Cyprus, where we donated essential
            supplies and supported the hardworking caretakers. By bringing
            smiles and encouragement, we are fostering progress and letting
            people know that they are not alone. Every act of kindness and
            support from S.H.E.W Foundation is a step toward a brighter future
            for those we serve.
            {/* </p> */}
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
