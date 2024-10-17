import { Nav } from "../components";
import { Hero } from "../sections";
import {PopularProducts} from "../sections";
import {SuperQuality} from "../sections";
import {Services} from "../sections";
import {SpecialOffers} from "../sections";
import {CustomerReviews} from "../sections";
import {Subscribe} from "../sections";
import {Footer} from "../sections";
import { Element } from "react-scroll";

export const Home = () => {
  return (
    <main className="relative overflow-hidden">
      <Nav />
      <section className="xl:padding-l wide:padding-r padding-b">
        <Hero />
      </section>
      <section className="padding sm:!pt-0 max-sm:!pt-[6rem]">
        <PopularProducts />
      </section>
      <Element name="aboutUs">
        <section className="padding sm:!pt-0 max-sm:!pt-[6rem]">
          <SuperQuality />
        </section>
      </Element>
      <section className="padding-x py-10  sm:!pt-0 max-sm:!pt-[6rem]">
        <Services />
      </section>
      <section className="padding  sm:!pt-0 max-sm:!pt-[6rem]">
        <SpecialOffers />
      </section>
      <section className="bg-pale-blue dark-bg padding sm:!pt-0 max-sm:!pt-[6rem]">
        <CustomerReviews />
      </section>
      <section className="padding-x sm:py-32 py-16 w-full sm:!pt-16 max-sm:!pt-[6rem]">
        <Subscribe />
      </section>
      <section className=" bg-black padding-x padding-t pb-8">
        <Element name="contactUs">
          <Footer />
        </Element>
      </section>
    </main>
  );
}
