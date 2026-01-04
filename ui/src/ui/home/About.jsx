// AboutSnippet.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import { Heart, Users, Calendar, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

export const About = () => {
  const bgImage =
    "https://travel.com/wp-content/uploads/2025/11/Scenic-view-of-Kabales-rolling-hills-and-terraced-landscapes-with-mist-rising-in-the-morning.webp";
  return (
    <section
      className="flex flex-col items-center justify-center w-full overflow-x-hidden"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Content */}
      <div className=" text-center max-w-7xl">
        <h2 className="text-2xl md:text-5xl font-bold mb-6">Welcome to Kabale Junior School</h2>

        <p className=" leading-relaxed py-3 my-3 sm:max-w-3xl mx-auto bg-white/50">
          Located in the heart of Kabale, we are a Christian nursery and primary school dedicated to providing quality,
          play-based education in a safe, loving, and faith-filled environment. Our mission is to nurture every child's
          spiritual, academic, social, and emotional growth — helping them become confident, compassionate leaders of
          tomorrow.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 place-items-center gap-8 mb-12">
          {[
            { icon: Calendar, num: "15+", description: "Years Serving Kabale Families" },
            { icon: Users, num: "800+", description: "Happy Students Enrolled" },
            { icon: Heart, num: "100%", description: "Committed to Christian Values & Care" },
          ].map((card, i) => (
            <div
              key={i}
              className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl w-full max-w-64 sm:max-w-sm mx-auto"
            >
              <card.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-4xl font-bold">{card.num}</h3>
              <p className="text-lg">{card.description}</p>
            </div>
          ))}
        </div>
        {/* CTA */}
        <div className="flex items-center justify-center">
          <NavLink to="/about" className="flex items-center justify-center p-3 rounded-xl bg-amber-500 ">
            <BookOpen className="w-6 h-6" />
            Learn More About Us
          </NavLink>
        </div>
      </div>
    </section>
  );
};
