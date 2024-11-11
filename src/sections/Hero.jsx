import { useContext, useState, useEffect } from "react";
import { ThemeContext } from "../context/ThemeContext";
import Button from "../components/Button";
import { electronics, statistics } from "../constants";
import { bigPhone1 } from "../assets/images";
import { arrowRightDark, arrowRightLight } from "../assets/icons";
import ProductPreviewCard from "../components/ProductPreviewCard";
import { Link } from "react-router-dom";

const ImageCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const banners = [
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/iphone%20alrafa%20banner%201-2hNDUskmXLthgWExHw0uhyQGpWDSCf.webp",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/iphone%20alrafa%20banner%202-iha6zR3dmPiPGhSau5hw9H4g4NYIjC.webp",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202024-11-11%2016.04.39%20-%20A%20high-quality%20website%20carousel%20banner%20featuring%20the%20latest%20tech%20products_%20an%20iPhone%2016,%20iPads,%20AirPods,%20headphones,%20and%20smartwatches,%20showcased%20with%20-xy3jEClPbMYQo7MdKBLA1rZNpzl7gX.webp"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % banners.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [banners.length]);

  return (
    <div className="relative w-full h-[600px] overflow-hidden rounded-lg">
      {banners.map((banner, index) => (
        <div
          key={index}
          className={`absolute w-full h-full transition-opacity duration-1000 ${
            index === activeIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={banner}
            alt={`Banner ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 bg-black bg-opacity-50 rounded-full p-2 z-10">
        {banners.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === activeIndex ? 'bg-white' : 'bg-gray-400'
            }`}
            onClick={() => setActiveIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

const Hero = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const [bigProductImage, setBigProductImage] = useState(bigPhone1);

  return (
    <section
      id="home"
      className="w-full flex flex-col justify-center min-h-screen gap-10 max-container"
    >
      <div className="relative xl:w-full min-h-screen flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <ImageCarousel />

        <p className="animate__animated animate__fadeIn animate__slower font-montserrat text-lg text-black dark:text-white leading-8 mt-6 max-sm:mb-14 max-sm:mt-0 sm:max-w-sm">
          Discover the latest iPhones, iPads, and laptops, beautiful and
          durable, by design. Serious power, serious value!
        </p>
      </div>

      <Link to="/products">
        <div className="sm:ml-16 xl:ml-0 ml-8 mt-0">
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
        {statistics.map((stat, index) => (
          <div key={index}>
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