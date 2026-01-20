import React from "react";
import { ActivityIcon, Bell, Image, Mail, Menu, Newspaper, User } from "lucide-react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { useGetAdminQuery } from "../state/features/admin";
import { PostEvents } from "./PostEvents";
import { PostNews } from "./PostNews";

/* =========================
   Navigation config (DRY)
========================= */
const navItems = [
  { icon: Newspaper, to: "post-news", label: "Post News" },
  { icon: ActivityIcon, to: "post-event", label: "Post Events" },
  // { icon: Image, to: "add-image", label: "Images" },
  { icon: Mail, to: "messages", label: "Messages" },
  { icon: Bell, to: "notifications", label: "Notifications" },
  { icon: User, to: "profile", label: "Profile" },
];

export const AdminDashboard = () => {
  const navigate = useNavigate();
  const {
    data: admin,
    isLoading,
    error,
  } = useGetAdminQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });
  console.log("admin hereee==>", admin);
  /* =========================
     Loading state
  ========================= */
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="animate-pulse text-muted-foreground">Checking authentication…</span>
      </div>
    );
  }

  /* =========================
     Unauthorized state
  ========================= */
  if (error || !admin) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card className="max-w-md w-full text-center">
          <CardHeader>
            <CardTitle>Unauthorized</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">You must login to access the admin dashboard.</p>
            <Button onClick={() => navigate("/login")}>Go to Login</Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  /* =========================
     Main layout
  ========================= */
  return (
    <div className="min-h-screen flex bg-muted/40 mt-27">
      {/* =========================
          Desktop Sidebar
      ========================= */}
      <aside className="hidden lg:flex flex-col w-64 bg-gray-900 text-white p-6 h-screen">
        <h2 className="text-xl font-semibold mb-8">Admin Panel</h2>

        <nav className="flex flex-col gap-2 ">
          {navItems.map((item, i) => (
            <NavLink
              key={i}
              to={item.to}
              className={({ isActive }) =>
                `flex items-center gap-4 px-4 py-2 rounded-xl transition-all 
                 ${isActive ? " text-white shadow-lg bg-white/10" : "text-gray-300 hover:bg-white/10 hover:text-white"}`
              }
            >
              <item.icon className="size-5 text-white font-semibold" />
              <span className="text-white font-semibold">{item.label}</span>
            </NavLink>
          ))}
        </nav>
      </aside>

      {/* =========================
          Main Content Area
      ========================= */}
      <div className="flex-1 flex flex-col">
        {/* =========================
            Top Bar
        ========================= */}
        <header className="flex items-center justify-between px-6 py-4 border-b bg-background">
          <div className="flex items-center gap-7">
            {/* Mobile menu */}
            <div className="lg:hidden ">
              <Sheet className="">
                <SheetTrigger asChild>
                  <Menu />
                </SheetTrigger>

                <SheetContent side="left" className="w-72">
                  <SheetHeader>
                    <SheetTitle>Admin Dashboard</SheetTitle>
                  </SheetHeader>

                  <nav className="mt-6 flex flex-col gap-3 px-5">
                    {navItems.map((item, i) => (
                      <SheetClose asChild key={i}>
                        <NavLink
                          to={item.to}
                          className={`flex items-center gap-3 hover:bg-gray-300 p-1 rounded-lg ${({ isActive }) => (isActive ? "bg-gray-400 uppercase" : "")} `}
                        >
                          <item.icon className="size-5" />
                          <span>{item.label}</span>
                        </NavLink>
                      </SheetClose>
                    ))}
                  </nav>
                </SheetContent>
              </Sheet>
            </div>

            <h3 className="text-xl font-semibold text-center ">Dashboard</h3>
          </div>

          <div className="flex items-center gap-4">
            <div className="rounded-full bg-gray-200 p-2 opacity-70 hover:opacity-100 transition relative">
              <User className="cursor-pointer" />
              <span className="absolute bottom-0 right-1 inline-flex rounded-full h-3 w-3 bg-green-400  "></span>{" "}
            </div>
            <span className="text-sm text-green-500">{admin ? "Online" : ""}</span>
          </div>
        </header>

        {/* =========================
            Page Content
        ========================= */}
        <main className="flex-1 p-6 lg:p-10">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
