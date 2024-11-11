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
import { navLinks, allProducts } from "../constants"; // Import the list of products
import { Link as ScrollLink } from "react-scroll";

// Importing the search icon from React Icons
import { FaSearch } from "react-icons/fa";

const Nav = () => {
  //? State to track activated mode e.g: dark or light
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
  const [searchQuery, setSearchQuery] = useState(""); // State for search input
  const [filteredProducts, setFilteredProducts] = useState([]); // State to store filtered products

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

  useEffect(() => {
    // Filter products based on the search query whenever it changes
    const filtered = allProducts.filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchQuery]); // Trigger effect on searchQuery change

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value); // Update search query
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    // You can handle form submission here (e.g., redirect to a page or log the search term)
    console.log("Searching for:", searchQuery);
  };

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

        {/* Search Bar */}
        <div className="relative flex items-center mr-4"> {/* Added right margin for space */}
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            onKeyDown={(e) => e.key === "Enter" && handleSearchSubmit(e)} // Search on Enter
            placeholder="Search..."
            className="dark:bg-[#2c2c2c] dark:text-white p-2 rounded-full w-[200px] sm:w-[250px] text-sm border-2 border-black dark:border-dark-c2" // Lighter black background for dark mode
          />
          <button
            onClick={handleSearchSubmit}
            className="absolute right-2 top-1/2 transform -translate-y-1/2"
          >
            <FaSearch className="w-[20px] h-[20px] text-dark-c2 dark:text-white" />
          </button>

          {/* Dropdown for filtered products */}
          {searchQuery && filteredProducts.length > 0 && (
            <div className="absolute top-[50px] left-0 w-full bg-white dark:bg-[#333] border-2 border-gray-300 dark:border-dark-c2 rounded-md max-h-[200px] overflow-y-auto z-10">
              {filteredProducts.map((product) => (
                <Link
                  to={`/products/${product.id}`}
                  key={product.id}
                  className="block px-4 py-2 text-sm text-black dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
                >
                  {product.name}
                </Link>
              ))}
            </div>
          )}
        </div>

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
