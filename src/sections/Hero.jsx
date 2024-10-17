//? Hooks' and libraries' imports
import Typed from "typed.js";
import { useContext,useState, useEffect } from "react";
import { ThemeContext } from "../context/ThemeContext";

//? Local imports (icons, images, data to be displayed)
import Button from "../components/Button";
import { electronics, statistics } from "../constants";
import { bigPhone1 } from "../assets/images";
import { arrowRightDark, arrowRightLight } from "../assets/icons";
import ProductPreviewCard from "../components/ProductPreviewCard";
import { Link } from "react-router-dom";


//? Main component
const Hero = () => {

  //? State to track activatd mode e.g:dark or light
  const { isDarkMode, setIsDarkMode } = useContext(ThemeContext);

  //? State to manage main image of hero section
  const [bigProductImage, setBigProductImage] = useState(bigPhone1);

  //? Typed JS Library
  useEffect(() => {
    let options = {
      typeSpeed: 70,
      showCursor: false,
    };

    let option1 = {
      strings: ["Latest Laptops,"],
      ...options,
    };
    let option2 = {
      strings: ["iPhones&nbsp"],
      ...options,
    };
    let option3 = {
      strings: ["and iPads"],
      ...options,
    };

    let backSpaceOptions = {
      strings: [""],
      typeSpeed: 50,
      backSpeed: 50,
      showCursor: false,
      backDelay: 1000,
      startDelay: 100,
      loop: false,
    };

    function typing() {
      const typed1 = new Typed(".typedText1", {
        ...option1,
        onComplete: () => {
          const typed2 = new Typed(".typedText2", {
            ...option2,
            onComplete: () => {
              const typed3 = new Typed(".typedText3", {
                ...option3,
                onComplete: () => {
                  const typedBackSpace3 = new Typed(".typedText3", {
                    ...backSpaceOptions,
                    onComplete: () => {
                      const typedBackSpace2 = new Typed(".typedText2", {
                        ...backSpaceOptions,
                        onComplete: () => {
                          const typedBackSpace1 = new Typed(".typedText1", {
                            ...backSpaceOptions,
                            onComplete: () => {
                              typing();
                            },
                          });
                        },
                      });
                    },
                  });
                },
              });
            },
          });
        },
      });
    }
    typing();
  }, []);

  return (
    <section
      id="home"
      className="w-full flex flex-col justify-center min-h-screen gap-10 max-container"
    >
      <div className="relative xl:w-2/5 min-h-screen flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="text-xl font-montserrat text-dark-c2 z-20">
          The Best Place For
        </p>

        <div className="bg-transparent lg:h-[50dvh] h-[80dvh] w-full">
          <h1 className="bg-transparent mt-0 font-palanquin text-8xl max-sm:text-[72px] font-bold text-black dark:text-white">
            <span className="typedText1 bg-transparent xl:whitespace-nowrap relative z-10 pr-10"></span>
            <br className="sm:hidden" />
            <span className="typedText2 bg-transparent text-coral-red inline-block mt-3 dark:text-coral-red"></span>{" "}
            {/* Gold text remains unchanged */}
            <br className="sm:hidden" />
            <span className="typedText3 bg-transparent whitespace-pre xl:whitespace-nowrap relative z-10 pr-10"></span>
          </h1>
        </div>

        <p className="animate__animated animate__fadeIn animate__slower font-montserrat text-lg text-black dark:text-white leading-8 mt-6 max-sm:mb-14 max-sm:mt-0 sm:max-w-sm">
          Discover the latest iPhones, iPads, and laptops, beautiful and
          durable, by design. Serious power, serious value!
        </p>
      </div>

      <Link to="/products">
        <div className="sm:ml-16  xl:ml-0 ml-8 mt-0">
          <Button
            label="Shop Now"
            iconURL={isDarkMode ? arrowRightDark : arrowRightLight}
          />
        </div>
      </Link>

      <div
        data-aos="fade-up"
        className="relative max-xl:padding-x flex justify-start items-start flex-wrap w-full xl:mt-20 gap-16"
      >
        {statistics.map((stat, ind) => (
          <div key={ind}>
            <p className="text-4xl font-palanquin font-bold text-black dark:text-dark-c2">
              {stat.value}
            </p>
            <p className="font-montserrat text-black dark:text-white leading-7">
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      <div className="relative flex flex-1 justify-center items-center xl:min-h-screen max-xl:py-40 sm:py-28 bg-black">
        <img
          src={bigProductImage}
          alt="Product Collection"
          className="object-contain relative z-10 max-sm:w-[610px] max-sm:h-[500px] w-[400px] h-[400px]"
        />

        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {electronics.map((image, index) => (
            <div
              data-aos="fade-left"
              data-aos-delay={index * 50}
              data-aos-easing="ease-out"
              key={index}
            >
              <ProductPreviewCard
                index={index}
                img={image}
                setBigProductImage={setBigProductImage}
                bigProductImage={bigProductImage}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
