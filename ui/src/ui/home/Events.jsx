import React from "react";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";
import { CalendarDays, ChevronRight } from "lucide-react";
import { useGetEventsQuery } from "../state/features/events";



export const Events = () => {
  const { data, isLoading, error } = useGetEventsQuery();
  console.log("events posts ==>", data);
  const len = data?.events.length;
  const dummyImg =
    "https://images.caxton.co.za/wp-content/uploads/sites/45/2024/11/WhatsApp-Image-2024-11-11-at-14.13.05-780x470.jpeg";
  return (
    <section className="flex flex-col items-center justify-center py-20 bg-linear-to-b from-blue-50 to-green-50 px-6 sm:px-10">
      <div className="">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-5xl font-bold  mb-4">Upcoming Events</h2>
          <p className=" ">Join us for these exciting school activities!</p>
        </div>

        {/* Responsive Grid */}
        <div
          className={`grid grid-cols-1 ${len === 2 ? "sm:grid-cols-2" : len === 3 ? "sm:grid-cols-3" : len >= 4 && "lg:grid-cols-4 sm:grid-cols-2"}  place-items-center gap-8`}
        >
          {data &&
            data.events.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 w-xs h-full"
              >
                <img
                  src={item.picurl ? item.picurl.url : dummyImg}
                  alt={item.title}
                  className="w-full h-[44%] object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center gap-2 text-green-600 mb-3">
                    <CalendarDays className="w-6 h-6" />
                    <span className=" font-semibold">{new Date(item.date).toLocaleDateString()}</span>
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
