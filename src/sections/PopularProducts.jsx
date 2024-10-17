//? Hooks Imports
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

//? Local imports (icons,images,data to be displayed)
import { arrowRightDark,arrowRightLight } from "../assets/icons";
import { Button, PopularProductCard } from "../components";
import { allProducts } from "../constants";
import { Link } from "react-router-dom";

//? Main component
const PopularProducts = () => {

  //? State to track activatd mode e.g:dark or light
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <section
      id="products"
      data-aos="fade-up"
      data-aos-duration={2000}
      className="max-container max-sm:mt-12 sm:mt-0"
    >
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-palanquin font-bold dark-text-p">
          Our
          <span className="text-coral-red"> Popular </span>
          Products
        </h2>
        <p className="lg:max-w-lg mt-2 font-montserrat dark-text-p">
          Experience top-notch quality and style with our sought-after
          selections. Discover a world of comfort, design and value.
        </p>
      </div>

      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 max-sm:grid-cols-2 place-content-center sm:gap-4 gap-14">
        {allProducts.map((product,ind) => {
          if(ind < 8) {
            console.log(ind);
            
            return(<PopularProductCard key={product.name} {...product} />)
          }
        }   
        )}
      </div>

      <div className="w-full mt-8">
        <Link to={"/products"}>
          <Button
            label={"See All Products"}
            iconURL={isDarkMode ? arrowRightDark : arrowRightLight}
            width={"w-full"}
          />
        </Link>
      </div>
    </section>
  );
};

export default PopularProducts;
