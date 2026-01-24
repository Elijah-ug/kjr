import React from "react";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";
import { Calendar, ChevronRight } from "lucide-react";
import { useGetAllNewsQuery } from "../state/features/news";

const news = [
  {
    img: "https://www.weareteachers.com/wp-content/uploads/black-history-bulletin-boards.png", // School newsletter board vibe
    date: "Dec 20, 2025",
    title: "End of Year Celebrations & Awards",
    desc: "Our students shone bright at the annual prize-giving ceremony!",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj5KAZIATJ9Rx0DVn7a6okI7a-yY1OkjQrWQ&s", // Graduation joy
    date: "Nov 15, 2025",
    title: "Top Class Graduation Success",
    desc: "Congratulations to our 2025 graduates — ready for the next chapter!",
  },
  {
    img: "https://www.weareteachers.com/wp-content/uploads/herstory-scaled.jpg", // Inspirational board
    date: "Oct 10, 2025",
    title: "New Term Kickoff with Excitement",
    desc: "Welcome back! New books, new friends, and big dreams ahead.",
  },
  {
    img: "https://www.weareteachers.com/wp-content/uploads/herstory-scaled.jpg", // Duplicate for demo
    date: "Oct 10, 2025",
    title: "New Term Kickoff with Excitement",
    desc: "Welcome back! New books, new friends, and big dreams ahead.",
  },
];

export const NewsPosts = () => {
  const { data, isLoading, error } = useGetAllNewsQuery();
  console.log("news posts ==>", data);

  const dummyImg = "https://www.weareteachers.com/wp-content/uploads/black-history-bulletin-boards.png";
  const len = data?.news.length;
  return (
    <section className=" flex flex-col items-center justify-center py-20 bg-gray-50 px-6 sm:px-10">
      <div className="">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-5xl font-bold  mb-4">Latest School News</h2>
          <p className="">Stay updated with what's happening at Kabale Junior</p>
        </div>

        {/* Responsive Grid */}
        <div
          className={`grid grid-cols-1 ${len === 2 ? "sm:grid-cols-2" : len === 3 ? "sm:grid-cols-3" : len >= 4 && "lg:grid-cols-4"} place-items-center gap-7`}
        >
          {data &&
            data.news.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 w-full max-w-xs sm:w-auto h-full"
              >
                <img
                  src={item.picurl ? item.picurl.url : dummyImg}
                  alt={item.title}
                  className="w-xs h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center gap-2 text-yellow-600 mb-3">
                    <Calendar className="w-5 h-5" />
                    <span className="text-sm font-medium">{item.date}</span>
                  </div>
                  <h3 className="font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-600 mb-6">{item.desc}</p>
                  <Button variant="link" asChild className="text-blue-600 p-0 hover:text-yellow-500">
                    <NavLink to="/news" className="flex items-center gap-2">
                      Read More <ChevronRight className="w-4 h-4" />
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
