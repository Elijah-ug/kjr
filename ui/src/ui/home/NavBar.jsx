// NavBar.jsx
import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetHeader,
  SheetDescription,
  SheetFooter,
  SheetClose,
} from "@/components/ui/sheet";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      setIsOpen(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", to: "/" },
    { name: "About Us", to: "/about" },
    { name: "Programs", to: "/programs" },
    { name: "Admissions", to: "/admissions" },
    { name: "Gallery", to: "/gallery" },
    { name: "Contact", to: "/contact" },
  ];

  const activeClass = "text-yellow-500 font-semibold";
  const inactiveClass = scrolled ? "text-gray-700 hover:text-yellow-500" : "text-white hover:text-yellow-400";

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300
        ${scrolled ? "bg-white/80 backdrop-blur-md shadow-lg" : "bg-transparent"}`}
    >
      {/* Top Contact Bar */}
      <div className="hidden md:block">
        <div className="mx-auto max-w-7xl px-6 py-1 flex justify-end gap-8 text-sm">
          <Link to="tel:+256123456789" className="flex items-center gap-2">
            <Phone className="w-4 h-4" /> +256 123 456 789
          </Link>
          <Link to="mailto:info@kabalejunior.sc.ug" className="flex items-center gap-2">
            <Mail className="w-4 h-4" /> info@kabalejunior.sc.ug
          </Link>
        </div>
      </div>

      {/* Main Navbar */}
      <div
        className={`mx-auto max-w-7xl px-6
          ${scrolled ? "py-3" : "py-4"}
          flex items-center justify-between
          bg-green-400 lg:rounded-md
          ${scrolled ? "text-gray-800" : "text-white"}`}
      >
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className="p-3 bg-gradient-to-br from-blue-500 to-green-500 rounded-full font-bold text-xl text-white">
            KJ
          </div>
          <div>
            <h2 className="font-bold text-lg sm:text-xl">Kabale Junior School</h2>
            <p className={`text-sm ${scrolled ? "text-gray-600" : "text-gray-300"}`}>
              Nurturing Young Hearts in Faith & Learning
            </p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.to}
              className={({ isActive }) =>
                isActive
                  ? `${activeClass} bg-violet-300 px-3 py-1 rounded-full`
                  : `${inactiveClass} px-3 py-1 rounded-full hover:bg-violet-300`
              }
            >
              {item.name}
            </NavLink>
          ))}

          <Button asChild className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-bold">
            <NavLink to="/admissions">Enroll Now</NavLink>
          </Button>
        </ul>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="lg:hidden">
            {isOpen ? (
              <X className={`w-8 h-8 ${scrolled ? "text-gray-800" : "text-white"}`} />
            ) : (
              <Menu className={`w-8 h-8 ${scrolled ? "text-gray-800" : "text-white"}`} />
            )}
          </SheetTrigger>

          <SheetContent side="right" className="w-80 bg-white">
            <nav className="flex flex-col gap-4 mt-10">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.to}
                  onClick={() => setIsOpen(false)}
                  className="text-lg text-gray-700 hover:text-blue-600"
                >
                  {item.name}
                </NavLink>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};
