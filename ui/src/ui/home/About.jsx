// AboutSnippet.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import { Heart, Users, Calendar, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

export const About = () => {
  return (
    <section className="relative    text-center py-20 overflow-hidden  ">
      {/* Background Image - Beautiful Kabale hills */}
      <div className="absolute inset-0">
        <img
          src="https://travel.com/wp-content/uploads/2025/11/Scenic-view-of-Kabales-rolling-hills-and-terraced-landscapes-with-mist-rising-in-the-morning.webp"
          alt="Beautiful Kabale hills landscape"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white/80" /> {/* Light overlay for text */}
      </div>

      <div className="relative px-6">
        <h2 className="text-2xl md:text-5xl font-bold  mb-6">Welcome to Kabale Junior School</h2>

        <p className=" md:text-xl mb-12 sm:max-w-4xl text-center mx-auto leading-relaxed">
          Located in the heart of Kabale, we are a Christian nursery and primary school dedicated to providing quality,
          play-based education in a safe, loving, and faith-filled environment. Our mission is to nurture every child's
          spiritual, academic, social, and emotional growth — helping them become confident, compassionate leaders of
          tomorrow.
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 place-items-center gap-8 max-w-4xl mx-auto mb-12">
          {[
            { icon: Calendar, num: "15+", description: "Years Serving Kabale Families" },
            { icon: Users, num: "800+", description: "Happy Students Enrolled" },
            { icon: Heart, num: "100%", description: "Committed to Christian Values & Care" },
          ].map((card) => (
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl w-xs sm:w-auto h-full">
              <card.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-4xl font-bold ">{card.num}</h3>
              <p className="text-lg ">{card.description}</p>
            </div>
          ))}
        </div>
        <button size="lg" className="bg-blue-600 hover:bg-blue-700  font-bold text-lg px-10 py-6 shadow-xl">
          <NavLink to="/about" className="flex items-center gap-3">
            <BookOpen className="w-6 h-6" />
            Learn More About Us
          </NavLink>
        </button>
      </div>
    </section>
  );
};
