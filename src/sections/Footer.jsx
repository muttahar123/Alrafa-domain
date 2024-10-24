//? Local imports (icons,images,data to be displayed)
import { copyrightSign } from "../assets/icons";
import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";

//? Main component
const Footer = () => {
  return (
    <footer id="contact-us" className="max-container">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <div className="flex items-center justify-center">
            <a href="/">
              <img src={footerLogo} width={100} height={26} />
            </a>
              <p className="text-dark-c2 text-3xl font-semibold ml-4 font-palanquin">Al Rafa.UAE</p>
          </div>
          <p className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm">
            Get Phones ready for the new term at your neares nike store. Find
            your perfect size in store. Get rewards.
          </p>
          <div className="flex items-center gap-5 mt-8 ">
            {socialMedia.map((icon) => (
              <div
                className="flex justify-center items-center w-12 h-12 bg-white rounded-full"
                key={icon.src}
              > 
              <a
        href={icon.link}
        key={icon.src}
        target="_blank"
        rel="noopener noreferrer"
        className="flex justify-center items-center w-12 h-12 bg-white rounded-full"
      >
                <img src={icon.src} alt={icon.alt} width={24} height={24} /> </a>
              </div>
            ))}
          </div>
        </div>

        <section>
          <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
            {footerLinks.map((section) => (
              <div key={section}>
                <h4 className="text-white font-montserrat text-2xl leading-normal font-medium mb-6">
                  {section.title}
                </h4>
                <ul>
                  {section.links.map((link) => (
                    <li
                      key={link.name}
                      className="mt-3 text-white-400 font-montserrat text-base leading-normal hover:dark-text-p cursor-pointer"
                    >
                      <a href="/">{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>

      <div className="flex justify-between text-white-400 mt-24 max-sm:items-center">
        <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
          <img
            src={copyrightSign}
            alt="copyrightsign"
            width={20}
            height={20}
            className="rounded-full m-0"
          /> <h1>2024</h1>
        </div>
        <p className="font-montserrat cursor-pointer">Terms & Conditions</p>
      </div>
    </footer>
  );
};

export default Footer;
