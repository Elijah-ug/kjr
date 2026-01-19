import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ActivityIcon, Mail, Newspaper } from "lucide-react";
import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useGetAdminQuery } from "../state/features/admin";

export const AdminDashboard = () => {
  const navigate = useNavigate();
  const { data, isLoading: loginLoading, error } = useGetAdminQuery(undefined, { refetchOnMountOrArgChange: true });

 

  return (
    <div className="min-h-screen flex flex-col justify-center gap-5 ">
    
      <div className="">
        {data ? (
          <div className="flex items-center gap-7">
            <div className="h-full min-h-screen bg-gray-400 px-7 py-5 ">
              {[
                { icon: Newspaper, to: "post-news", desc: "post news" },
                { icon: ActivityIcon, to: "post-event", desc: "post events" },
                { icon: Image, to: "add-image", desc: "add images" },
                { icon: Mail, to: "messages", desc: "Messages" },
              ].map((item, i) => (
                <Link key={i} to={item.to} className="flex items-center gap-7 text-white">
                  <item.icon className="text-white" />
                  <span className="text-white">{item.desc}</span>
                </Link>
              ))}
            </div>
            <h3 className="font-semibold text-lg text-center">Admin Control Space</h3>
          </div>
        ) : (
          <div className="">You're not authorized! Login first</div>
        )}
        {/* message controls */}
      </div>
    </div>
  );
};
