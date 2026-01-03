// Slider.jsx
import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";

const slides = [
  {
    img: "https://thumbs.dreamstime.com/b/african-children-studying-learning-working-together-african-classroom-raising-hands-writing-down-notes-looking-177878742.jpg", // Happy kids learning
    title: "Welcome to Kabale Junior School",
    subtitle: "Nurturing Young Hearts with Quality Education & Christian Values",
  },
  {
    img: "https://media.holtinternational.org/wp-content/uploads/2023/12/Favor-web-1024x576.jpg", // Kids playing outdoors
    title: "A Joyful Place to Grow",
    subtitle: "Play-Based Learning in a Safe & Loving Environment",
  },
  {
    img: "https://www.shutterstock.com/image-photo/uganda-june-13-2017-group-260nw-786801310.jpg", // Kids in uniform smiling
    title: "Building Bright Futures",
    subtitle: "From Nursery to Primary – Excellence Starts Here",
  },
];

export const Slider = () => {
  return (
    <section className="relative h-screen max-h-[90vh] overflow-hidden">
      <Splide
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
          <SplideSlide key={index}>
            <div className="relative h-screen max-h-[90vh] mt-16">
              <img src={slide.img} alt={slide.title} className="w-full h-full object-cover" />
              {/* Dark overlay for text readability */}
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/40 to-black/20" />

              {/* Centered Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                <div className="max-w-4xl">
                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-2xl">
                    {slide.title}
                  </h1>
                  <p className="text-xl md:text-3xl text-white mb-10 drop-shadow-lg">{slide.subtitle}</p>
                  <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <Button
                      asChild
                      size="lg"
                      className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-bold text-lg px-8 py-6 shadow-xl"
                    >
                      <NavLink to="/admissions">Enroll Your Child</NavLink>
                    </Button>
                    <Button
                      asChild
                      size="lg"
                      variant="outline"
                      className="border-white text-white hover:bg-white/20 font-bold text-lg px-8 py-6"
                    >
                      <NavLink to="/contact">Book a School Visit</NavLink>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </section>
  );
};
