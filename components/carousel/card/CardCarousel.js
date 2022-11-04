import PreviewCard from "@components/card/preview/PreviewCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { mockCards } from "./CardCarousel.mock";

const CardCarousel = ({ cards = mockCards }) => {
  return (
    <section>
      <div className="max-w-8xl flex justify-center items-center mx-5 sm:mx-20 lg:mx-20">
        <div className="swiper">
          <Swiper
            loop={true}
            slidesPerView="auto"
            spaceBetween={15}
            centeredSlides={true}
            centerInsufficientSlides={true}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              820: {
                slidesPerView: 2,
              },
              1152: {
                slidesPerView: 3,
              },
              1440: {
                slidesPerView: 4,
              },
              1720: {
                slidesPerView: 5,
              },
              2560: {
                slidesPerView: 6,
              },
            }}
            autoplay={true}
          >
            {cards.map((card, i) => (
              <SwiperSlide
                key={i}
                card={card}
                className="swiper-slide items-center flex justify-center"
              >
                <PreviewCard />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* <div className="max-w-3xl rounded-md bg-primary-400 mx-auto mt-8 swiper-pagination bottom-0 relative"></div> */}
        </div>
      </div>
    </section>
  );
};

export default CardCarousel;
