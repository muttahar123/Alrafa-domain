//? Hooks' imports
import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";

//? Local imports (icons,images,data to be displayed);
import {
  cartDark,
  cartLight,
  closeMenuDark,
  closeMenuLight,
  darkToggle,
  lightToggle,
  menuDark,
  menuLight,
} from "../assets/icons";
import { headerLogoDark, headerLogoLight } from "../assets/images";
import { navLinks } from "../constants";
import { Link as ScrollLink } from "react-scroll";



//? Main component
const Nav = () => {

  //? State to track activatd mode e.g:dark or light
  const { isDarkMode, setIsDarkMode } = useContext(ThemeContext);

  //? Function to toggle/turn on dark mode
  const handleToggle = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  //? State to manage the visibility of the menu/navbar for mobile screens
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  //? Function to toggle the menu/navbar visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMenuOpen]);

  return (
    <header className="padding-x py-8 absolute z-20 w-full dark-bg">
      {/* Navbar start */}
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img
            src={isDarkMode ? headerLogoDark : headerLogoLight}
            alt="Logo"
            width={60}
            height={10}
            className="dark-text-special"
          />
        </a>

        <ul className="flex flex-1 justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              {item.scroll ? (
                <ScrollLink
                  to={item.href}
                  className="font-montserrat leading-normal text-lg dark-text-p hover:text-dark-c2 cursor-pointer"
                >
                  {item.label}
                </ScrollLink>
              ) : (
                <Link
                  to={item.href}
                  className="font-montserrat leading-normal text-lg dark-text-p hover:text-dark-c2"
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        <a
          href="/"
          onClick={handleToggle}
          className="rounded-full border-2 border-black p-2 sm:mt-[-8px] mt-[-4px] sm:mr-4 mr-2 dark:border-dark-c2"
        >
          <img
            id="darkToggle"
            src={isDarkMode ? lightToggle : darkToggle}
            alt="Logo"
            className="sm:w-[30px] sm:h-[30px] w-[20px] h-[20px]"
          />
        </a>

        <Link
          to={"/cart"}
          className="rounded-full border-2 border-black p-2 sm:mt-[-8px] mt-[-4px] sm:mr-4 mr-2 dark:border-dark-c2"
        >
          <img
            id="darkToggle"
            src={isDarkMode ? cartLight : cartDark}
            alt="Logo"
            className="sm:w-[30px] sm:h-[30px] w-[20px] h-[20px]"
          />
        </Link>

        <div onClick={toggleMenu} className="cursor-pointer">
          <img
            className="hidden max-lg:block"
            src={isDarkMode ? menuDark : menuLight}
            alt="menu-icon"
            width={25}
            height={25}
          />
        </div>
      </nav>
      {/* Navbar end */}

      {/* Full screen navbar menu for mobile screens */}
      {isMenuOpen && (
        <div className="fixed inset-0 backdrop-blur-md z-30 flex flex-col justify-center items-center fixed inset-0 backdrop-blur-md z-30 flex flex-col justify-center items-center ">
          <button onClick={toggleMenu} className="absolute top-8 right-8">
            <img
              src={isDarkMode ? closeMenuDark : closeMenuLight}
              alt="Close menu"
              width={30}
              height={30}
            />
          </button>

          <ul className="flex flex-col items-center justify-center gap-8">
            {navLinks.map((item) => (
              <li key={item.label}>
                {item.scroll ? (
                  <ScrollLink
                    to={item.href}
                    data-aos="fade-up"
                    onClick={toggleMenu}
                    className="font-montserrat leading-normal text-2xl dark-text-p dark-text cursor-pointer"
                  >
                    {item.label}
                  </ScrollLink>
                ) : (
                  <Link
                    to={item.href}
                    data-aos="fade-up"
                    onClick={toggleMenu}
                    className="font-montserrat leading-normal text-2xl dark-text-p dark-text cursor-pointer"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
      {/* Full screen navbar menu for mobile screens end*/}
    </header>
  );
};

export default Nav;
