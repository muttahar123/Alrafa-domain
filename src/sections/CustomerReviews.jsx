//? Local imports (icons,images,data to be displayed)
import { ReviewCard } from "../components";
import { reviews } from "../constants";

//? Main component
const CustomerReviews = () => {
  return (
    <section id="CusromerReviews" className="max-container">
      <h3
        key={1}
        data-aos="fade-up"
        data-aos-duration={1000}
        className="font-palanquin text-center text-4xl font-bold text-black dark-text-p"
      >
        What our
        <span className="text-coral-red dark-text-special"> customers </span>
        say?
      </h3>
      <p
        data-aos="fade-up"
        data-aos-duration={1000}
        className="info-text m-auto mt-4 max-w-lg text-center"
      >
        Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.
      </p>

      <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
        {reviews.map((review,ind) => (
          <ReviewCard
            key={ind}
            imgURL={review.imgURL}
            customerName={review.customerName}
            rating={review.rating}
            feedback={review.feedback}
          />
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
