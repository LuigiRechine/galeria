
"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import { slideData } from "../data/dataCarousel";
import BlogCard from "./BlogCard";

export default function Carousel() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="min-h-screen bg-[#f7f8fa] px-5 py-10 fundo">
      <div className="mx-auto max-w-5xl">
        <header className="mb-9 text-center">
          <h1 className="text-3xl font-normal text-[#222]">
            Blog
          </h1>

          <p className="mt-3 text-sm text-gray-600">
            Stay tuned and updated by the latest updates from our blog.
          </p>

          <div className="mx-auto mt-7 h-px w-44 bg-gray-200" />
        </header>

        {mounted && (
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            loop
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
            }}
            className="blog-swiper !pb-12"
          >
            {slideData.map((slide) => (
              <SwiperSlide key={slide.id}>
                <BlogCard
                  category={slide.category}
                  title={slide.title}
                  date={slide.date}
                  comments={slide.comments}
                  image={slide.image}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </section>
  );
}
