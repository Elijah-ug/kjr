// WhyChooseUs.jsx
import React from "react";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";
import { Heart, Users, Church, Home, BookOpen } from "lucide-react";

const reasons = [
  {
    img: "https://cdn.prod.website-files.com/676edabad54db088e2f58312/676f212c058ff5f9a40225b1_Larson-Company-Project-Gallery-Playgrounds-10.jpg", // Playground fun
    title: "Joyful & Safe Playground",
    desc: "Modern play equipment where children laugh, learn social skills, and stay active in a secure environment.",
    icon: Heart,
    color: "text-yellow-600",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThYU0PitqX4XIjJv36W6qZ6GwWuVVPWuKtIg&s", // Bright classroom
    title: "Colorful Learning Spaces",
    desc: "Bright, engaging classrooms designed for curiosity and hands-on play-based education.",
    icon: BookOpen,
    color: "text-blue-600",
  },
  {
    img: "https://myersparkpres.org/wp-content/uploads/2018/02/IMG_0678.jpg", // Caring teacher with kids
    title: "Dedicated & Loving Teachers",
    desc: "Qualified, compassionate staff who nurture each child like family with individual attention.",
    icon: Users,
    color: "text-green-600",
  },
  {
    img: "https://www.hrw.org/sites/default/files/styles/embed_xxl/public/media_2024/05/202406africa_uganda_BobiNurserySchool.jpg?itok=Gd2vHv8x", // Safe facilities
    title: "Modern & Secure Facilities",
    desc: "Clean buildings, safe grounds, and everything needed for happy, healthy growth.",
    icon: Home,
    color: "text-purple-600",
  },
  {
    img: "https://c8.alamy.com/comp/G84JP1/group-of-ugandan-school-children-in-a-rural-african-school-gather-G84JP1.jpg", // Prayer assembly
    title: "Strong Christian Foundation",
    desc: "Daily prayer and Bible teachings that build faith, morals, and character from an early age.",
    icon: Church,
    color: "text-pink-600",
  },
];

export const WhyChooseUs = () => {
  return (
    <section className="flex flex-col items-center justify-center  sm:px-10">
      <div className="text-center">
        <h2 className="text-xl md:text-5xl font-bold  mb-6">Why Parents Choose Kabale Junior School</h2>
        <p className=" leading-relaxed py-3">
          More than just a school — we're a second home where your child thrives in faith, fun, and learning.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center xl:grid-cols-5 gap-8">
        {reasons.map((reason, index) => (
          <div
            key={index}
            className="group relative bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 w-full max-w-64 sm:max-w-sm h-full"
          >
            <div className="relative h-64 overflow-hidden">
              <img
                src={reason.img}
                alt={reason.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
            </div>

            <div className="p-6 text-center">
              <reason.icon className={`w-12 h-12 ${reason.color} mx-auto mb-4 drop-shadow-md`} />
              <h3 className=" font-bold mb-3">{reason.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{reason.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 flex items-center justify-center">
        <Button asChild size="lg" className="bg-yellow-500 hover:bg-yellow-400 font-bold text-lg px-10 py-6 shadow-xl">
          <NavLink to="/admissions">Start Your Child's Journey Today</NavLink>
        </Button>
      </div>
    </section>
  );
};
