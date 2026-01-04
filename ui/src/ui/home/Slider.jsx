// Slider.jsx
import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";

const slides = [
  {
    img: "https://thumbs.dreamstime.com/b/african-children-studying-learning-working-together-african-classroom-raising-hands-writing-down-notes-looking-177878742.jpg",
    title: "Welcome to Kabale Junior School",
    subtitle: "Nurturing Young Hearts with Quality Education & Christian Values",
  },
  {
    img: "https://media.holtinternational.org/wp-content/uploads/2023/12/Favor-web-1024x576.jpg",
    title: "A Joyful Place to Grow",
    subtitle: "Play-Based Learning in a Safe & Loving Environment",
  },
  {
    img: "https://www.shutterstock.com/image-photo/uganda-june-13-2017-group-260nw-786801310.jpg",
    title: "Building Bright Futures",
    subtitle: "From Nursery to Primary – Excellence Starts Here",
  },
];

export const Slider = () => {
  return (
    <section className="relative max-w-full overflow-x-hidden">
      <Splide
        className="max-w-full overflow-x-hidden"
        options={{
          type: "fade",
          rewind: true,
          perPage: 1,
          autoplay: true,
          interval: 6000,
          speed: 1200,
          easing: "ease-in-out",
          arrows: false,
          pagination: true,
          pauseOnHover: true,
        }}
        aria-label="Kabale Junior School Hero Slider"
      >
        {slides.map((slide, index) => (
          <SplideSlide key={index} className="max-w-full overflow-hidden">
            <div className="relative h-[90vh] max-w-full overflow-hidden">
              {/* Background Image */}
              <img src={slide.img} alt={slide.title} className="absolute inset-0 w-full h-full object-cover" />

              {/* Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/40 to-black/20" />

              {/* Content */}
              <div className="relative flex h-full items-center justify-center text-center px-4">
                <div className=" absolute bottom-7 sm:max-w-4xl mx-auto">
                  <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-6">{slide.title}</h1>
                  <p className="text-lg sm:text-xl md:text-3xl text-white">{slide.subtitle}</p>
                </div>
              </div>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </section>
  );
};
