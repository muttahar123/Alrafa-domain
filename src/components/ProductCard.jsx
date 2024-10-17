//? Hooks' imports
import { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";

//? Local imports (icons,images,data to be displayed)
import Button from "./Button";
import { starDark, starLight } from "../assets/icons";
import { cartDark, cartLight } from "../assets/icons";
import { CartContext } from "../context/CartContext";
import { allProducts } from "../constants";
import { Link } from "react-router-dom";

//? Main component
const ProductCard = ({ image, name, price, id }) => {
  //? Add to cart logic
  const [btnLabel, setBtnLabel] = useState("Add to cart");
  const { cart, addToCart } = useContext(CartContext);
  const handleClick = () => {
    addToCart(allProducts[id]);
    setBtnLabel("Added");
  };

  //? State to track activatd mode e.g:dark or light
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
      <Link to={`/products/${id}`}>
      <img
        src={image}
        alt={name}
        className="w-[200px] h-[160px] rounded-xl border-coral-red border-2"
      />

      <div className="max-sm:mt-8 mt-2 flex justify-start gap-2.5">
        <img
          src={isDarkMode ? starDark : starLight}
          alt="rating"
          width={24}
          height={24}
        />
        <p className="font-montserrat text-xl leading-normal dark-text-p">
          (4.5)
        </p>
      </div>

      <h3 className="mt-2 text-xl max-sm:text-2xl leading-normal font-semibold font-palanquin dark-text-p">
        {name}
      </h3>
      <p className="mt-2 font-semibold font-montserrat text-coral-red text-xl max-sm:text-2xl leading-normal dark-text-special">
        {price} AED
      </p>
        </Link>

      <div onClick={handleClick}>
        <Button
          iconURL={
            btnLabel === "Add to cart"
              ? isDarkMode
                ? cartLight
                : cartDark
              : ""
          }
          label={btnLabel}
          marginPaddings={"py-1 mt-2"}
          width={"w-full"}
          textColor={`${
            btnLabel === "Add to cart"
              ? "text-white text-lg max-sm:text-sm max-sm:gap-0"
              : "text-white text-lg"
          }`}
        />
      </div>
    </div>
  );
};

export default ProductCard;
