import React from "react";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";
import { CalendarDays, ChevronRight } from "lucide-react";

const events = [
  {
    img: "https://ugandamarathon.com/wp-content/uploads/2018/09/GP-Running-4.jpg", // Ugandan kids running sports day
    date: "Jan 25, 2026",
    title: "Annual Sports Day",
    desc: "Races, games, and house competitions — fun for the whole family!",
  },
  {
    img: "https://c8.alamy.com/comp/GHKXXA/african-school-children-in-rural-uganda-take-a-moment-during-morning-GHKXXA.jpg", // Morning assembly vibe
    date: "Feb 14, 2026",
    title: "Valentine's Day of Love & Sharing",
    desc: "Celebrating kindness and friendship with special activities.",
  },
  {
    img: "https://c8.alamy.com/comp/2Y657Y5/schoolchildren-perform-a-traditional-ugandan-dance-2Y657Y5.jpg", // School kids in traditional Ugandan dance
    date: "Mar 08, 2026",
    title: "Cultural Day Celebration",
    desc: "Traditional dances, music, and food from our beautiful Uganda.",
  },
  {
    img: "https://images.caxton.co.za/wp-content/uploads/sites/45/2024/11/WhatsApp-Image-2024-11-11-at-14.13.05-780x470.jpeg", // Student receiving award (Ugandan context)
    date: "Apr 02, 2026",
    title: "Mid-Term Academic Awards",
    desc: "Recognizing hard work and excellence across all classes.",
  },
];

export const Events = () => {
  return (
    <section className="py-20 bg-linear-to-b from-blue-50 to-green-50 px-6 sm:px-10">
      <div className="">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-5xl font-bold  mb-4">Upcoming Events</h2>
          <p className=" ">Join us for these exciting school activities!</p>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center gap-8">
          {events.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 w-xs sm:w-auto h-full"
            >
              <img src={item.img} alt={item.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <div className="flex items-center gap-2 text-green-600 mb-3">
                  <CalendarDays className="w-6 h-6" />
                  <span className=" font-semibold">{item.date}</span>
                </div>
                <h3 className=" font-bold  mb-3">{item.title}</h3>
                <p className="text-gray-600 mb-6">{item.desc}</p>
                <Button variant="link" asChild className="text-blue-600 p-0 hover:text-green-500">
                  <NavLink to="/events" className="flex items-center gap-2">
                    Learn More <ChevronRight className="w-4 h-4" />
                  </NavLink>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
