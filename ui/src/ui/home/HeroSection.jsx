// Slider.jsx
import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";
import { Calendar, Phone } from "lucide-react"; // Lucide icons for CTAs

const slides = [
  {
    img: "https://www.shutterstock.com/image-photo/uganda-june-13-2017-smiling-260nw-786805522.jpg", // Smiling kids in uniform
    title: "Welcome to Kabale Junior School",
    subtitle: "A Loving Christian Environment for Nursery & Primary Education",
  },
  {
    img: "https://c8.alamy.com/comp/2TCTGTW/school-kids-swinging-in-the-school-yard-ziwa-uganda-2TCTGTW.jpg", // Kids playing on swings
    title: "Joyful Learning Every Day",
    subtitle: "Play-Based Education in a Safe & Happy Playground",
  },
  {
    img: "https://c8.alamy.com/comp/GHKXXA/african-school-children-in-rural-uganda-take-a-moment-during-morning-GHKXXA.jpg", // Kids praying/assembly
    title: "Rooted in Faith & Excellence",
    subtitle: "Building Character with Strong Christian Values",
  },
  {
    img: "https://lookaside.fbsbx.com/lookaside/crawler/media/?media_id=3850947531794744", // Beautiful Kabale hills view from school
    title: "Set in the Heart of Kabale",
    subtitle: "Modern Facilities Surrounded by Nature's Beauty",
  },
];

export const Slider = () => {
  return (
    <section className="relative h-screen max-h-[90vh] overflow-hidden -mt-20">
      {" "}
      {/* Adjust if navbar height changes */}
      <Splide
        options={{
          type: "fade",
          rewind: true,
          perPage: 1,
          autoplay: true,
          interval: 6000,
          speed: 1400,
          easing: "ease-in-out",
          arrows: false,
          pagination: true,
          pauseOnHover: true,
        }}
        aria-label="Kabale Junior School Hero Slider"
      >
        {slides.map((slide, index) => (
          <SplideSlide key={index}>
            <div className="relative h-screen max-h-[90vh]">
              <img src={slide.img} alt={slide.title} className="w-full h-full object-cover" />
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/50 to-black/30" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                <div className="max-w-5xl">
                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-2xl">
                    {slide.title}
                  </h1>
                  <p className="text-xl md:text-3xl text-white mb-12 drop-shadow-lg max-w-3xl mx-auto">
                    {slide.subtitle}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <Button
                      asChild
                      size="lg"
                      className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-bold text-lg px-10 py-7 shadow-2xl"
                    >
                      <NavLink to="/admissions" className="flex items-center gap-3">
                        <Calendar className="w-6 h-6" />
                        Enroll Your Child Today
                      </NavLink>
                    </Button>
                    <Button
                      asChild
                      size="lg"
                      variant="outline"
                      className="border-2 border-white text-white hover:bg-white/20 font-bold text-lg px-10 py-7"
                    >
                      <NavLink to="/contact" className="flex items-center gap-3">
                        <Phone className="w-6 h-6" />
                        Book a School Visit
                      </NavLink>
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
