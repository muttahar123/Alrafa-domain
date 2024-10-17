import { useContext, useState } from "react";
import { useParams } from "react-router";
import { allProducts } from "../constants";
import { Button } from "../components";
import { CartContext } from "../context/CartContext";
import { cartDark, cartLight } from "../assets/icons";
import { headerLogoDark, headerLogoLight } from "../assets/images";
import { ThemeContext } from "../context/ThemeContext";
import { Link } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams();
    const { name, price, description, category, image, rating } = allProducts[id]

//? State to track activatd mode e.g:dark or light
  const { isDarkMode } = useContext(ThemeContext);

    //? Render Stars Based On Rating
   const renderStars = (rating) => {
     const fullStars = Math.floor(rating);
     const halfStar = rating % 1 !== 0;
     const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

     return (
       <>
         {/* Full Stars */}
         {[...Array(fullStars)].map((_, index) => (
           <svg
             key={index}
             fill="#ffffff" // White color
             stroke="#ffffff"
             strokeLinecap="round"
             strokeLinejoin="round"
             strokeWidth={2}
             className="w-4 h-4"
             viewBox="0 0 24 24"
           >
             <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
           </svg>
         ))}

         {/* Half Star */}
         {halfStar && (
           <svg
             fill="currentColor"
             stroke="#ffffff" // White color
             strokeLinecap="round"
             strokeLinejoin="round"
             strokeWidth={2}
             className="w-4 h-4"
             viewBox="0 0 24 24"
           >
             <defs>
               <mask id="half-star">
                 <rect x="0" y="0" width="12" height="24" fill="white" />
               </mask>
             </defs>
             <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
             <g mask="url(#half-star)">
               <path
                 fill="#ffffff" // White color
                 d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
               />
             </g>
           </svg>
         )}

         {/* Empty Stars */}
         {[...Array(emptyStars)].map((_, index) => (
           <svg
             key={index}
             fill="none"
             stroke="#ffffff" // White color
             strokeLinecap="round"
             strokeLinejoin="round"
             strokeWidth={2}
             className="w-4 h-4"
             viewBox="0 0 24 24"
           >
             <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
           </svg>
         ))}
       </>
     );
   };

    const {addToCart} = useContext(CartContext)
    const [status, setStatus] = useState("Add To Cart")

    const handleClick = () => {
      addToCart(allProducts[id])
      setStatus("Added")
      
    }


  return (
    <>
      <section className="text-white body-font overflow-hidden bg-black">
        <div className="padding-x py-8 z-20 w-full dark-bg">
          <div className="flex justify-between items-center max-container ">
            <a href="/">
              <img
                src={isDarkMode ? headerLogoDark : headerLogoLight}
                alt="Logo"
                width={60}
                height={10}
                className="dark-text-special"
              />
            </a>

            <h2 className="text-3xl font-palanquin font-bold text-black dark:text-coral-red">
              Details
            </h2>

            <Link to={"/cart"}>
              <Button
                label={"Cart"}
                iconURL={isDarkMode ? cartLight : cartDark}
                marginPaddings={
                  "m-0 px-7 py-4 max-sm:py-2 max-sm:px-2 max-sm:mt-2"
                }
                textColor={"text-black dark:text-white max-sm:dark:text-black"}
              />
            </Link>
          </div>
        </div>

        <div className="container px-5 py-12 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
              src={image}
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-white tracking-widest">
                {category}
              </h2>
              <h1 className="text-dark-c2 text-3xl title-font font-medium mb-1">
                {name}
              </h1>
              <div className="flex mb-4">
                <span className="flex items-center">
                  {renderStars(rating?.rate || 0)}
                  <span className="text-dark-c2 ml-3">
                    {rating.rate} Rating
                  </span>
                </span>
                <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                  <a className="text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                    </svg>
                  </a>
                  <a className="text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                    </svg>
                  </a>
                  <a className="text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                    </svg>
                  </a>
                </span>
              </div>
              <p className="leading-relaxed">{description}</p>
              <div className="flex mt-2 items-center pb-2 border-b-2 border-gray-100 mb-5"></div>
              <div className="flex">
                <span className="title-font font-medium text-2xl text-dark-c2">
                  {price} AED
                </span>

                <span
                  className="ml-auto my-auto px-0 py-0"
                  onClick={handleClick}
                >
                  <Button
                    label={status}
                    marginPaddings={"px-2 py-2"}
                    iconURL={isDarkMode ? cartLight : cartDark}
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProductDetails;
