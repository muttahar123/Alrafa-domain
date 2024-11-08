//? Hooks Import
import { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";

//? Local Imports
import { headerLogoDark, headerLogoLight } from "../assets/images";
import { Button } from "../components";
import { Link } from "react-router-dom";
import { ProductCard } from "../components";
import { allProducts } from "../constants";
import { cartDark, cartLight } from "../assets/icons";

//? Categories Array
const categories = ["All", "Apple", "Samsung", "Laptops", "Watches", "Airpods"];

export default function Products() {
  //? State to track activated mode e.g:dark or light
  const { isDarkMode } = useContext(ThemeContext);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  //? Filtered Products based on selected category and search term
  const filteredProducts = allProducts.filter((product) => {
    const isCategoryMatch =
      selectedCategory === "All" || product.category.toLowerCase() === selectedCategory.toLowerCase();
    const isSearchMatch = product.name.toLowerCase().includes(searchTerm.toLowerCase());

    return isCategoryMatch && isSearchMatch;
  });

  return (
    <section className="px-4">
      <div id="products" className="mt-0">
        <div className="py-4 w-full dark-bg">
          <div className="flex justify-between items-center max-container">
          <Link to={"/"}>
          <img
              src={isDarkMode ? headerLogoDark : headerLogoLight}
              alt="Logo"
              width={60}
              height={10}
              className="dark-text-special"
            />
               </Link>
            <h2 className="text-3xl font-palanquin font-bold text-black dark:text-coral-red">
              Products
            </h2>

            <Link to={"/cart"}>
              <Button
                label={"Cart"}
                iconURL={isDarkMode ? cartLight : cartDark}
                marginPaddings={"m-0 px-7 py-4 max-sm:py-2 max-sm:px-2 max-sm:mt-2"}
                textColor={"text-black dark:text-white max-sm:dark:text-black"}
              />
            </Link>
          </div>
        </div>

        {/* Search Bar */}
        <div className="mt-4">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full px-4 py-2 border rounded-md"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Categories Filter */}
        <div className="mt-4 overflow-x-auto">
          <div className="flex gap-2">
            {categories.map((category) => (
              <button
                key={category}
                className={`flex-shrink-0 min-w-[120px] px-4 py-2 rounded transition-colors duration-200 ${
                  selectedCategory === category
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 hover:bg-gray-300"
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 max-sm:grid-cols-2 place-content-center sm:gap-4 gap-14">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard key={product.id || product.name} {...product} />
            ))
          ) : (
            <p className="text-center text-xl">No products available in this category.</p>
          )}
        </div>
      </div>
    </section>
  );
}
