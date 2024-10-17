//? Local imports
import { Button } from "../components";
import { Phone12 } from "../assets/images";

//? Hooks imports
import { useEffect } from "react";

//? Main component
const SuperQuality = () => {
  return (
    <section
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div data-aos="fade-right" className="flex flex-col flex-1">
        <h2 className="font-palanquin text-4xl capitalize max-sm:text[72] max-sm:leading[82] font-bold lg:max-w-lg dark-text-p">
          We Provide You
          <br />
          <span className="text-coral-red dark-text-special">The </span>
          <span className="text-coral-red dark-text-special">Best </span>
          Products
        </h2>

        <p className="mt-4 lg:max-w-lg info-text">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation and a touch of elegance.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Our dedication to detail and excellence ensures your satisfaction.
        </p>

        <div className="mt-9">
          <Button label="View Details" />
        </div>
      </div>

      <div className="flex flex-1 justify-center items-center">
        <img
          data-aos="fade-left"
          src={Phone12}
          alt="Phone8"
          width={570}
          height={522}
          className="object-contain "
        />
      </div>
    </section>
  );
};

export default SuperQuality;
