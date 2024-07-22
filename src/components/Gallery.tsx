import React from "react";
import image1 from "../img/R17.png";
import image2 from "../img/R18.png";
import image3 from "../img/R19.png";
import image4 from "../img/R24.png";
import image5 from "../img/R25.png";

const Image: React.FC = () => {
  return (
    <section className="w-full py-10 mb-20">
      <article className="flex flex-col items-center">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-blue-400">
            A Collection of our Students in Class
          </h1>
          <p className="font-bold text-base text-gray-600 mt-5">
            Conducive environment
            <br />
            With us, you learn with comfort. You learn in a conducive
            environment with all basic amenities at your disposal.
          </p>
        </div>

        <section className="grid grid-cols-1 gap-4 md:grid-cols-4 lg:grid-cols-7 max-w-4xl mx-auto">
          <div
            className="md:col-span-3 md:row-span-2"
            data-aos="zoom-in"
            data-aos-duration="2000"
          >
            <img
              src={image1}
              alt="Student 1"
              className="w-full h-full object-cover"
            />
          </div>
          <div
            className="md:col-span-3 md:row-span-2"
            data-aos="zoom-in"
            data-aos-duration="2000"
          >
            <img
              src={image3}
              alt="Student 3"
              className="w-full h-full object-cover"
            />
          </div>
          <div
            className="md:col-span-3 md:row-span-4"
            data-aos="zoom-in"
            data-aos-duration="2000"
          >
            <img
              src={image5}
              alt="Student 5"
              className="w-full h-full object-cover"
            />
          </div>
          <div
            className="md:col-span-3 md:row-span-2"
            data-aos="zoom-in"
            data-aos-duration="2000"
          >
            <img
              src={image2}
              alt="Student 2"
              className="w-full h-full object-cover"
            />
          </div>
          <div
            className="md:col-span-3 md:row-span-2"
            data-aos="zoom-in"
            data-aos-duration="2000"
          >
            <img
              src={image4}
              alt="Student 4"
              className="w-full h-full object-cover"
            />
          </div>
        </section>
      </article>
    </section>
  );
};

export default Image;
