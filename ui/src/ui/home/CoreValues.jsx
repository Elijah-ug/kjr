// CoreValues.jsx
import React from "react";
import { HeartHandshake, BookOpen, Shield, Users, Church, Trophy } from "lucide-react";

const values = [
  {
    icon: BookOpen,
    color: "text-blue-600",
    title: "Excellence in Education",
    desc: "We strive for academic excellence through quality teaching and play-based learning tailored for young minds.",
  },
  {
    icon: Church,
    color: "text-green-600",
    title: "God-Fearing",
    desc: "Rooted in Christian values, we teach children to love God, pray daily, and live with faith and moral integrity.",
  },
  {
    icon: Shield,
    color: "text-yellow-600",
    title: "Discipline & Responsibility",
    desc: "We instill self-discipline, respect, and personal responsibility to prepare children for life's challenges.",
  },
  {
    icon: Users,
    color: "text-purple-600",
    title: "Teamwork & Community",
    desc: "Fostering friendship, cooperation, and a strong sense of belonging in our school family.",
  },
  {
    icon: HeartHandshake,
    color: "text-pink-600",
    title: "Love & Compassion",
    desc: "Every child is valued and cared for with kindness, empathy, and unconditional support.",
  },
  {
    icon: Trophy,
    color: "text-orange-600",
    title: "Holistic Growth",
    desc: "Developing spiritual, intellectual, physical, and social potential for well-rounded leaders.",
  },
];

export const CoreValues = () => {
  return (
    <section className="py-20 bg-linear-to-b from-blue-50 to-green-50 relative overflow-hidden">
      {/* Background image - happy kids praying/assembly */}
      <div className="absolute inset-0 opacity-20">
        <img
          src="https://c8.alamy.com/comp/GHKXXA/african-school-children-in-rural-uganda-take-a-moment-during-morning-GHKXXA.jpg"
          alt="Children in prayer"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Our Core Values</h2>
        <p className="text-xl text-gray-700 mb-12 max-w-3xl mx-auto">
          At Kabale Junior School, we build character on a strong Christian foundation, guiding every child to grow in
          faith, wisdom, and love.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100"
            >
              <value.icon className={`w-16 h-16 ${value.color} mx-auto mb-6 drop-shadow-md`} />
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{value.title}</h3>
              <p className="text-gray-600 leading-relaxed">{value.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
