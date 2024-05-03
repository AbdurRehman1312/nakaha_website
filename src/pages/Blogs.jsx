import React, { useRef, useState } from "react";
import BlogCard from "../components/BlogCard";
import { Swiper, SwiperSlide } from "swiper/react";
import * as images from "../assets";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const Blogs = () => {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);  // Track the active slide index
  const [totalSlides, setTotalSlides] = useState(0);  // Total number of slides

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

  return (
    <section className="container m-auto px-2 my-10 ">
      <h1 className="text-secondary my-12 text-8xl text-center font-poppins">
        News And Blogs
      </h1>
      <div className="relative">
        <Swiper
          slidesPerView={4}
          spaceBetween={10}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            setTotalSlides(swiper.slides.length);
          }}
          onSlideChange={(swiper) => {
            setActiveIndex(swiper.activeIndex);
          }}
          navigation={false} // Disable default navigation
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
              spaceBetween: 50,
            },
          }}
          modules={[Navigation]}
          className="mySwiper flex justify-evenly gap-8 w-full my-24"
        >
                    <SwiperSlide>
            <BlogCard
              img="aboutus"
              name="Hospital-acquired muscle weakness"
              desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae numquam aliquid fugiat aut necessitatibus, adipisci aperiam assumenda sequi enim, dicta, libero reiciendis hic explicabo eos optio corporis exercitationem accusamus illo!"
              date="28 May, 2024"
            />
          </SwiperSlide>
          <SwiperSlide>
            <BlogCard
              img="hero1"
              name="Healthy Nutrition post discharge"
              desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae numquam aliquid fugiat aut necessitatibus, adipisci aperiam assumenda sequi enim, dicta, libero reiciendis hic explicabo eos optio corporis exercitationem accusamus illo!"
              date="28 May, 2024"
            />
          </SwiperSlide>
          <SwiperSlide>
            <BlogCard
              img="hero2"
              name="Concept of medication management"
              desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae numquam aliquid fugiat aut necessitatibus, adipisci aperiam assumenda sequi enim, dicta, libero reiciendis hic explicabo eos optio corporis exercitationem accusamus illo!"
              date="28 May, 2024"
            />
          </SwiperSlide>
          <SwiperSlide>
            <BlogCard
              img="hero3"
              name="Stroke care"
              desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae numquam aliquid fugiat aut necessitatibus, adipisci aperiam assumenda sequi enim, dicta, libero reiciendis hic explicabo eos optio corporis exercitationem accusamus illo!"
              date="28 May, 2024"
            />
          </SwiperSlide>
          <SwiperSlide>
            <BlogCard
              img="aboutus"
              name="Oncology care"
              desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae numquam aliquid fugiat aut necessitatibus, adipisci aperiam assumenda sequi enim, dicta, libero reiciendis hic explicabo eos optio corporis exercitationem accusamus illo!"
              date="28 May, 2024"
            />
          </SwiperSlide>
          <SwiperSlide>
            <BlogCard
              img="aboutus"
              name="Nursing at home"
              desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae numquam aliquid fugiat aut necessitatibus, adipisci aperiam assumenda sequi enim, dicta, libero reiciendis hic explicabo eos optio corporis exercitationem accusamus illo!"
              date="28 May, 2024"
            />
          </SwiperSlide>
          <SwiperSlide>
            <BlogCard
              img="aboutus"
              name="Red Flags"
              desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae numquam aliquid fugiat aut necessitatibus, adipisci aperiam assumenda sequi enim, dicta, libero reiciendis hic explicabo eos optio corporis exercitationem accusamus illo!"
              date="28 May, 2024"
            />
          </SwiperSlide>
        </Swiper>
        <div className="flex items-center gap-2 absolute top-[-20%] my-6 right-[0.5rem] z-30">
          <button
            onClick={navigateToPrev}
            className="custom-prev h-[40px] w-[40px] rounded-full flex justify-center items-center border border-gray-800"
            style={{ opacity: activeIndex === 0 ? 0.5 : 1 }} // Opacity for the prev button
          >
            <img src={images.prev} alt="Prev" className="w-[80%] h-[80%]" />
          </button>
          <button
            onClick={navigateToNext}
            className="custom-next h-[40px] w-[40px] rounded-full flex justify-center items-center border border-gray-800"
            style={{ opacity: activeIndex === totalSlides - 1 ? 0.5 : 1 }}
          >
            <img src={images.next} alt="Next" className="w-[80%] h-[80%]" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
