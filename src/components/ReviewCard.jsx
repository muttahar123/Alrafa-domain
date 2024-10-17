//? Hooks' imports
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

//? Local imports (icons,images,data to be displayed)
import { starLight, starDark } from "../assets/icons";

//? Main Component
const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  //? State to track activatd mode e.g:dark or light
  const { isDarkMode, setIsDarkMode } = useContext(ThemeContext);

  return (
    <div
      data-aos="zoom-in"
      data-aos-duration={2000}
      key={customerName}
      className="flex justify-center items-center flex-col"
    >
      <img
        src={imgURL}
        alt={customerName}
        className="rounded-full object-cover w-[120px] h-[120px]"
      />

      <p className="mt-6 max-w-sm text-center info-text">{feedback}</p>

      <div className="mt-3 flex justify-center items-center gap-2.5">
        <img
          src={isDarkMode ? starDark : starLight}
          alt="star"
          width={24}
          height={24}
          className="object-contain max-sm:mt-0 mt-1"
        />
        <p className="text-xl max-sm:mt-0 mt-2 font-montserrat dark-text-p">
          {rating}
        </p>
        <h3 className="mt-1 font-palanquin max-sm:text-3xl text-2xl font-bold text-center text-dark-c2">
          {customerName}
        </h3>
      </div>
    </div>
  );
};

export default ReviewCard;
