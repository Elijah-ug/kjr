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
      setIsOpen(false); // auto-close mobile menu on scroll
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

  // 🔒 UNTOUCHED
  const activeClass = "text-yellow-500 font-semibold";
  const inactiveClass = scrolled ? "text-gray-700 hover:text-yellow-500" : "text-white hover:text-yellow-400";

  return (
    <nav
      aria-label="Main Navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/80 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      {/* Top Contact Bar */}
      <div className="py-1 hidden md:block">
        <div className="max-w-7xl mx-auto px-6 flex justify-end gap-8 text-sm">
          <Link to="tel:+256123456789" className="flex items-center gap-2 hover:text-yellow-300 transition">
            <Phone className="w-4 h-4" /> +256 123 456 789
          </Link>
          <Link
            to="mailto:info@kabalejunior.sc.ug"
            className="flex items-center gap-2 hover:text-yellow-300 transition"
          >
            <Mail className="w-4 h-4" /> info@kabalejunior.sc.ug
          </Link>
        </div>
      </div>

      {/* Centering Wrapper (KEY FIX) */}
      <div className="w-full flex justify-center">
        {/* Main Navbar */}
        <div
          className={`w-full max-w-7xl px-6 transition-all duration-300
            ${scrolled ? "py-3" : "py-4"}
            bg-green-400 lg:rounded-md flex items-center justify-between ${scrolled ? "text-gray-800" : "text-white"}`}
        >
          {/* Logo & School Name */}
          <Link to="/" className="flex items-center gap-3">
            <div className="p-3 bg-linear-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
              KJ
            </div>
            <div>
              <h2 className="font-bold text-lg sm:text-xl">Kabale Junior School</h2>
              <p className={`text-sm ${scrolled ? "text-gray-600" : "text-gray-400"} opacity-90`}>
                Nurturing Young Hearts in Faith & Learning
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    isActive
                      ? `${activeClass} transition bg-violet-300 py-1 px-3 rounded-full`
                      : `${inactiveClass} font-medium transition hover:bg-violet-300 py-1 px-3 rounded-full`
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}

            <li>
              <Button asChild size="lg" className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-bold shadow-lg">
                <NavLink to="/admissions">Enroll Now</NavLink>
              </Button>
            </li>
          </ul>

          {/* Mobile Menu */}

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger as asChild aria-label="Open Menu" className="lg:hidden text-white bg-none">
              {isOpen ? <X className="w-8 h-8 bg-none" /> : <Menu className="w-8 h-8" />}
            </SheetTrigger>

            <SheetContent side="right" className="w-80 sm:w-80 bg-white">
              <SheetTitle className="flex items-center justify-between px-3 font-bold text-blue-600 mb-8 mt-5">
                <h3>Kabale Junior School</h3>
                <SheetClose asChild>
                  <X className="w-5 h-5  right-4 top-3" />
                </SheetClose>
              </SheetTitle>

              <nav className="flex flex-col gap-4 pl-7">
                {navItems.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.to}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      isActive
                        ? "text-lg font-semibold uppercase bg-gray-300 py-1 px-3 rounded-full"
                        : "text-lg text-gray-700 hover:text-blue-600"
                    }
                  >
                    {item.name}
                  </NavLink>
                ))}
              </nav>

              <SheetFooter>
                <Button asChild size="lg" className="mt-6 bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-bold">
                  <NavLink to="/admissions" onClick={() => setIsOpen(false)}>
                    Enroll Now
                  </NavLink>
                </Button>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};
