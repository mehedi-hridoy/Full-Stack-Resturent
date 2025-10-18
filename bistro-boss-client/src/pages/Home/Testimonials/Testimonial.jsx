import React, { useEffect, useState } from "react";
// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

// Rating component
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Testimonial = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch('/reviews.json')
      .then(res => res.json())
      .then(data => setReviews(data))
      .catch(err => console.error('Failed to load reviews.json', err));
  }, []);

  return (
    <section className="my-20">
      <SectionTitle subHeading={'---What Our Clients Say---'} heading={'TESTIMONIALS'} />

      

      <Swiper navigation={true} modules={[Navigation]} className="mySwiper max-w-6xl mx-auto">
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="py-12 px-6">
              <div className="text-center">
                <div className="inline-block mb-6">
                  <Rating style={{ maxWidth: 120 }} value={review.rating} readOnly />
                </div>

                <div className="text-6xl text-gray-800 my-6">“”</div>

                <p className="text-gray-600 max-w-3xl mx-auto leading-8">
                  {review.details}
                </p>

                <h4 className="text-xl text-yellow-600 font-semibold mt-8">{review.name}</h4>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonial;
