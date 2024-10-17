//? Hooks' imports
import { createContext, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

//? Local imports (icons,images,data to be displayed)
import Button from "./Button";
import { minusDark, minusLight, plusDark, plusLight, starDark, starLight } from "../assets/icons";
import { cartDark, cartLight } from "../assets/icons";
import { CartContext } from "../context/CartContext";

//? Main component
const CartCard = ({ image, name, price, id, quantity }) => {

  //? Cart logic
  const { decreaseQuantity, increaseQuantity } = useContext(CartContext);

  const handleDecrease = () => {
    decreaseQuantity(id);
  }

  const handleIncrease = () => {
    increaseQuantity(id)
  }

  //? State to track activatd mode e.g:dark or light
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <div className="w-full flex justify-around items-center mt-2 max-sm:mt-4 max-sm:py-5 max-sm:w-full border-2 border-black dark:border-dark-c2 rounded-2xl">
      <div className="w-1/4 flex items-center justify-center ">
        <img
          src={image}
          alt={name}
          className="w-[140px] h-[100px] max-sm:h-full max-sm:w-full rounded-xl"
        />
      </div>

      <div className="w-1/4 flex items-center justify-center ">
        <h3 className="text-base max-sm:text-base leading-normal font-semibold font-palanquin dark-text-p">
          {name}
        </h3>
      </div>

      <div className="w-1/4 flex items-center justify-center">
        <p className="text-lg font-semibold font-montserrat text-coral-red max-sm:text-base leading-normal dark-text-special">
          {price}
        </p>
      </div>

      <div className="w-1/4 flex items-center justify-center">
        <img
          src={isDarkMode ? minusDark : minusLight}
          onClick={handleDecrease}
          className="w-8 h-8 max-sm:w-4 max-sm:h-6 cursor-pointer"
        />
        <p className="mt-0 mx-2 max-sm:mx-1 max-sm:mt-[-6px] text-3xl max-sm:text-xl font-medium font-palanquin dark-text-p">
          {quantity}
        </p>
        <img
          src={isDarkMode ? plusDark : plusLight}
          onClick={handleIncrease}
          className="w-8 h-8 max-sm:w-4 max-sm:h-6 max-sm:mr-4 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default CartCard;
