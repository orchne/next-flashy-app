import PreviewCard from "@components/card/preview/PreviewCard";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { mockCards } from "./CardCarousel.mock";

const CardCarousel = ({ cards = mockCards }) => {
  return (
    <section>
      <div className="max-w-8xl flex justify-center items-center mx-5 sm:mx-20 lg:mx-20">
        <div className="swiper">
          <Swiper
            modules={[Pagination]}
            loop={true}
            slidesPerView="auto"
            centeredSlides={true}
            pagination={{
              type: "progressbar",
              el: ".swiper-pagination",
            }}
            centerInsufficientSlides={true}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
              1536: {
                slidesPerView: 4,
              },
            }}
            autoplay={true}
          >
            {cards.map((card, i) => (
              <SwiperSlide
                key={i}
                card={card}
                className="swiper-slide items-center flex justify-center "
              >
                <PreviewCard />
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="max-w-4xl rounded-md bg-orange-400 mx-auto mt-8 swiper-pagination bottom-0 relative"></div>
        </div>
      </div>
    </section>
  );
};

export default CardCarousel;
