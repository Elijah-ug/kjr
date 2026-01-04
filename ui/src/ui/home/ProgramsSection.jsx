// ProgramsSection.jsx
import React from "react";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";
import { ToyBrick, GraduationCap, Heart, Palette, Calculator, Church, BookOpen } from "lucide-react";

export const ProgramsSection = () => {
  return (
    <section className="py-20 px-6 sm:px-10 text-center bg-linear-to-b from-yellow-50 to-blue-50">
      <div className="">
        <h2 className="text-2xl md:text-5xl font-bold mb-6">Our Programs</h2>
        <p className=" mb-12 ">
          From playful beginnings in Nursery to strong academic foundations in Primary — every stage is filled with
          love, faith, and fun.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center gap-12">
          {/* Nursery Program */}
          
          <div className="bg-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 w-xs sm:w-auto h-full">
            <div className="relative h-96">
              <img
                src="https://www.rescue.org/sites/default/files/styles/widescreen_16x9_1280px_wide/public/2024-01/20231006_Uganda_DTaremwa_PlayMatters_Nursery-136-1200x800-5b2df79.jpg?itok=K--pf96M"
                alt="Happy nursery children playing and learning"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <ToyBrick className="w-16 h-16 drop-shadow-lg" />
                <h3 className="text-2xl font-bold mt-4">Nursery</h3>
                <p className="text-lg">Baby Class • Middle • Top Class</p>
              </div>
            </div>

            <div className="p-10 text-left">
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-4 ">
                  <Palette className="w-8 h-8 text-yellow-500" />
                  Play-based learning with colors, shapes & stories
                </li>
                <li className="flex items-center gap-4 ">
                  <Heart className="w-8 h-8 text-pink-500" />
                  Social skills, sharing & making friends
                </li>
                <li className="flex items-center gap-4 ">
                  <Church className="w-8 h-8 text-green-600" />
                  Simple Bible stories & prayer time
                </li>
              </ul>
              <p className="text-gray-600 leading-relaxed">
                Our nursery builds confidence and curiosity through joyful activities in a safe, loving space.
              </p>
            </div>
          </div>

          {/* Primary Program */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 w-xs sm:w-auto h-full">
            <div className="relative h-96">
              <img
                src="https://stireducation.org/wp-content/uploads/2024/07/Uganda-1.jpg"
                alt="Primary students learning in classroom"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <GraduationCap className="w-16 h-16 drop-shadow-lg" />
                <h3 className="text-2xl font-bold mt-4">Primary</h3>
                <p className="text-lg">P1 – P7</p>
              </div>
            </div>

            <div className="p-10 text-left">
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-4 ">
                  <BookOpen className="w-8 h-8 text-blue-600" />
                  Strong foundation in reading, writing & math
                </li>
                <li className="flex items-center gap-4 ">
                  <Calculator className="w-8 h-8 text-purple-600" />
                  Science, social studies & critical thinking
                </li>
                <li className="flex items-center gap-4 ">
                  <Church className="w-8 h-8 text-green-600" />
                  Christian education & moral values
                </li>
              </ul>
              <p className="text-gray-600 leading-relaxed">
                Our primary program prepares students for academic success while nurturing character and faith.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <Button
            asChild
            size="lg"
            className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-bold  px-10 py-6 shadow-xl"
          >
            <NavLink to="/programs">Explore Full Curriculum</NavLink>
          </Button>
        </div>
      </div>
    </section>
  );
};
