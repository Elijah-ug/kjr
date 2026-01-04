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
    <section className="relative overflow-x-hidden">
      <Splide
        className="w-full"
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
          <SplideSlide
            key={index}
            className="relative w-full h-[75svh] flex items-center justify-center text-center"
            style={{
              backgroundImage: `url(${slide.img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40" />

            {/* CONTENT WRAPPER (this is where padding lives) */}
            <div className="absolute text-white w-full max-w-sm sm:max-w-5xl  sm:px-6 sm:mx-auto">
              <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold">{slide.title}</h2>
              <p className="text-base sm:text-xl md:text-3xl mt-3 leading-relaxed">{slide.subtitle}</p>
            
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </section>
  );
};
