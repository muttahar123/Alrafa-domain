//? Hooks imports
import { useContext, useState, useEffect } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Link } from "react-router-dom";

//? Local imports (icons,images,data to be displayed)
import { offer } from "../assets/images";
import { Button } from "../components";
import { arrowRightDark, arrowRightLight } from "../assets/icons";

//? Main component
const SpecialOffers = () => {
  //? State to track dark mode status
  const [isDarkMode, setIsDarkMode] = useState(false);

  //? Check for saved theme on component mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    }
  }, []);

  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img
          src={offer}
          alt="SpecialOffer"
          width={773}
          height={687}
          data-aos="fade-up"
          className="object-contain w-full"
        />

        <div data-aos="fade-up" className="flex flex-col flex-1">
          <h2 className="font-palanquin text-4xl capitalize max-sm:text[72] max-sm:leading[82] font-bold lg:max-w-lg dark-text-p">
            <span className="text-coral-red dark-text-special">Great </span>
            Discounts
          </h2>

          <p className="mt-4 lg:max-w-lg info-text">
            Discover a shopping experience like no other, where unbeatable deals
            meet premier selections. Elevate your journey with us and unlock
            incredible savings that define true value.
          </p>
          <p className="mt-6 lg:max-w-lg info-text">
            Explore a world of endless possibilities tailored to your unique
            needs. We exceed your expectations at every step, ensuring your
            experience with us is nothing short of extraordinary.
          </p>
          <Link to="/products">
            <div className="mt-9 flex flex-wrap gap-4">
              <Button
                label="Shop Now"
                iconURL={isDarkMode ? arrowRightDark : arrowRightLight}
              />
              <Button
                label="Learn More"
                bgColor="bg-white dark-bg"
                borderColor="border-slate-gray"
                textColor="dark-text-p"
              />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
