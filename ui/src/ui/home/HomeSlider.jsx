import * as React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const slides = [
  {
    img: "https://thumbs.dreamstime.com/b/african-children-studying-learning-working-together-african-classroom-raising-hands-writing-down-notes-looking-177878742.jpg",
    title: "Welcome to Kabale Junior School",
    subtitle: "Nurturing Young Hearts with Quality Education & Christian Values",
  },
  {
    img: "https://media.holtinternational.org/wp-content/uploads/2023/12/Favor-web-1024x576.jpg",
    title: "A Joyful Place to Learn",
    subtitle: "Play-based learning in a safe & loving environment",
  },
  {
    img: "https://www.shutterstock.com/image-photo/uganda-june-13-2017-group-260nw-786801310.jpg",
    title: "Building Bright Futures",
    subtitle: "From Nursery to Primary – excellence starts here",
  },
];

export const HomeSlider = () => {
  return (
    <section className="relative w-full overflow-hidden">
      <Carousel opts={{ loop: true }} className="w-full">
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index} className="relative h-[75svh] w-full">
              {/* Background image */}
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${slide.img})` }} />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40" />

              {/* Content */}
              <div className="absolute z-10 flex h-full items-center justify-center px-4 text-center">
                <div className="max-w-5xl text-white">
                  <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold">{slide.title}</h1>
                  <p className="mt-3 text-base sm:text-xl md:text-3xl leading-relaxed">{slide.subtitle}</p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Cute arrows */}
        <CarouselPrevious className="left-4 h-10 w-10 rounded-full bg-white/80 hover:bg-white shadow-md" />
        <CarouselNext className="right-4 h-10 w-10 rounded-full bg-white/80 hover:bg-white shadow-md" />
      </Carousel>
    </section>
  );
};
