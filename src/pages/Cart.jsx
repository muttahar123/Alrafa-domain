//? Hooks Import
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

//? Local Imports
import { headerLogoDark, headerLogoLight } from "../assets/images";
import { Button } from "../components";
import CartCard from "../components/CartCard";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { arrowRightDark, arrowRightLight } from "../assets/icons";

export const Cart = () => {

  //? State to track activatd mode e.g:dark or light
  const { isDarkMode } = useContext(ThemeContext);

  const { cart } = useContext(CartContext)

  //? const total = cart.map((data) => data.price * data.quantity)
  const total = cart.reduce((acc, data) => acc + data.price * data.quantity, 0);

  return (
    <>
      <div className="padding-x py-8 absolute z-20 w-full dark-bg">
        <div className="flex justify-between items-center max-container">
          <a href="/">
            <img
              src={isDarkMode ? headerLogoDark : headerLogoLight}
              alt="Logo"
              width={60}
              height={10}
              className="dark-text-special"
            />
          </a>

          <h2 className="text-4xl font-palanquin font-bold text-black dark:text-coral-red">
            Cart
          </h2>

          <Link to={"/"}>
            <Button
              label={"Go Back"}
              marginPaddings={
                "m-0 px-7 py-4 max-sm:py-2 max-sm:px-2 max-sm:mt-2"
              }
              textColor={"text-black dark:text-white max-sm:dark:text-black"}
            />
          </Link>
        </div>

        <div className="flex flex-col justify-center items-center">
          {cart.map((item,ind) => (
            <CartCard key={ind} {...item} />
          ))}
        </div>

        {cart.length !== 0 ? (
          <div className="w-full flex flex-col">
          <div className="w-full flex justify-between items-center mt-4 border-t-2 pt-2 border-black dark:border-coral-red">
            <p className="text-3xl max-sm:text-2xl font-palanquin font-bold text-black dark:text-coral-red">
              Total
            </p>
            <p className="text-3xl max-sm:text-2xl font-bold text-black dark:text-coral-red">
              {total} AED
            </p>
            </div>
            <div>
              <Link to={"/checkout"}>
            <Button 
              label={"Checkout"}
              iconURL={isDarkMode ? arrowRightDark : arrowRightLight}
              width={"w-full"}
              marginPaddings={"mt-4 px-7 py-2"}
            />
            </Link>
          </div>
          </div>
        ) : (
          ""
        )}

      </div>
    </>
  );
};
