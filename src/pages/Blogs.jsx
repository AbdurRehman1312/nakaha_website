import React, { useRef, useState, useEffect } from "react";
import BlogCard from "../components/BlogCard";
import { Swiper, SwiperSlide } from "swiper/react";
import * as images from "../assets";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Breadcrumb from "../components/Breadcrumb";
import { useTranslation } from "react-i18next";

const Blogs = () => {
  const { t, i18n } = useTranslation("global");
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [totalSlides, setTotalSlides] = useState(0);
  const isRTL = i18n.dir() === 'rtl';

  const navigateToNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  const navigateToPrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  useEffect(() => {
    document.body.dir = i18n.dir();  // Ensure the body direction is updated
  }, [i18n, i18n.language]);

  return (
    <>
      <Breadcrumb styles="bg_blog" title={t("blogs.heading")} />
      <section className="container m-auto px-2 my-10">
        <div className="relative">
          <Swiper
            key={isRTL ? 'rtl' : 'ltr'}  // Reinitialize Swiper when direction changes
            rtl={isRTL}  // Enable RTL in Swiper based on i18n direction
            slidesPerView={4}
            spaceBetween={10}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
              setTotalSlides(swiper.slides.length);
            }}
            onSlideChange={(swiper) => {
              setActiveIndex(swiper.activeIndex);
            }}
            navigation={false} // Custom navigation is handled externally
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 10,
              },
            }}
            modules={[Navigation]}
            className="mySwiper flex justify-evenly gap-8 w-full my-24"
          >
             <SwiperSlide>
              <BlogCard
                img="service5"
                name={t("blogCard1.name")}
                desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae numquam aliquid fugiat aut necessitatibus, adipisci aperiam assumenda sequi enim, dicta, libero reiciendis hic explicabo eos optio corporis exercitationem accusamus illo!"
                date="28 May, 2024"
              />
            </SwiperSlide>
            <SwiperSlide>
              <BlogCard
                img="hero1"
                name={t("blogCard2.name")}
                desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae numquam aliquid fugiat aut necessitatibus, adipisci aperiam assumenda sequi enim, dicta, libero reiciendis hic explicabo eos optio corporis exercitationem accusamus illo!"
                date="28 May, 2024"
              />
            </SwiperSlide>
            <SwiperSlide>
              <BlogCard
                img="hero2"
                name={t("blogCard4.name")}
                desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae numquam aliquid fugiat aut necessitatibus, adipisci aperiam assumenda sequi enim, dicta, libero reiciendis hic explicabo eos optio corporis exercitationem accusamus illo!"
                date="28 May, 2024"
              />
            </SwiperSlide>
            <SwiperSlide>
              <BlogCard
                img="hero3"
                name={t("blogCard3.name")}
                desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae numquam aliquid fugiat aut necessitatibus, adipisci aperiam assumenda sequi enim, dicta, libero reiciendis hic explicabo eos optio corporis exercitationem accusamus illo!"
                date="28 May, 2024"
              />
            </SwiperSlide>
            <SwiperSlide>
              <BlogCard
                img="service3"
                name={t("blogCard5.name")}
                desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae numquam aliquid fugiat aut necessitatibus, adipisci aperiam assumenda sequi enim, dicta, libero reiciendis hic explicabo eos optio corporis exercitationem accusamus illo!"
                date="28 May, 2024"
              />
            </SwiperSlide>
            <SwiperSlide>
              <BlogCard
                img="aboutus"
                name={t("blogCard6.name")}
                desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae numquam aliquid fugiat aut necessitatibus, adipisci aperiam assumenda sequi enim, dicta, libero reiciendis hic explicabo eos optio corporis exercitationem accusamus illo!"
                date="28 May, 2024"
              />
            </SwiperSlide>
            <SwiperSlide>
              <BlogCard
                img="service1"
                name={t("blogCard7.name")}
                desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae numquam aliquid fugiat aut necessitatibus, adipisci aperiam assumenda sequi enim, dicta, libero reiciendis hic explicabo eos optio corporis exercitationem accusamus illo!"
                date="28 May, 2024"
              />
            </SwiperSlide>
          </Swiper>
          <div className={`flex items-center gap-2 absolute top-[-20%] my-6 ${isRTL ? 'left-[0.5rem]' : 'right-[0.5rem]'} z-30`}>
            <button
              onClick={navigateToPrev}
              className="custom-prev h-[40px] w-[40px] rounded-full flex justify-center items-center border border-gray-800"
              style={{ opacity: activeIndex === 0 ? 0.5 : 1 }}
            >
              <img src={isRTL ? images.next : images.prev} alt="Prev" className="w-[80%] h-[80%]" />
            </button>
            <button
              onClick={navigateToNext}
              className="custom-next h-[40px] w-[40px] rounded-full flex justify-center items-center border border-gray-800"
              style={{ opacity: activeIndex === totalSlides - 1 ? 0.5 : 1 }}
            >
              <img src={isRTL ? images.prev : images.next} alt="Next" className="w-[80%] h-[80%]" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blogs;
