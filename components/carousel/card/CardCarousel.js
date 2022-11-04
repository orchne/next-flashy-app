import PreviewCard from "@components/card/preview/PreviewCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { mockCards } from "./CardCarousel.mock";

const CardCarousel = ({ cards = mockCards }) => {
  return (
    <section>
      <div className="max-w-8xl flex justify-center items-center mx-5 lg:mx-20">
        <div className="swiper">
          <Swiper
            loop={true}
            slidesPerView="auto"
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              640: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 5,
              },
            }}
            spaceBetween={20}
            autoplay={true}
          >
            {cards.map((card, i) => (
              <SwiperSlide key={i} card={card} className="swiper-slide">
                <PreviewCard />
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="max-w-3xl rounded-md bg-primary-400 mx-auto mt-8 swiper-pagination bottom-0 relative"></div>
        </div>
      </div>
    </section>
  );
};

export default CardCarousel;
