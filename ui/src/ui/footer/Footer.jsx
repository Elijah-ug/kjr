import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, MessageCircle, ChevronRight } from "lucide-react";
import { FaXTwitter, FaFacebookF, FaTiktok, FaInstagram } from "react-icons/fa6";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white text-sm ">
      {/* Subtle Kabale hills overlay */}
      {/* <div className="absolute inset-0 opacity-10 pointer-events-none">
        <img
          src="https://c8.alamy.com/comp/FBC81H/morning-fog-in-the-mountains-on-lake-bunyonyi-kabale-district-uganda-FBC81H.jpg"
          alt="Kabale hills"
          className="w-full h-full object-cover"
        />
      </div> */}

      <div className=" mx-auto max-w-7xl px-6 sm:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo & About */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-linear-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-xl">
                KJ
              </div>
              <div>
                <h3 className="text-xl font-bold">Kabale Junior School</h3>
                <p className=" text-gray-400">Nurturing Young Hearts in Faith & Learning</p>
              </div>
            </div>
            <p className="text-gray-400">
              A Christian nursery and primary school in Kabale, providing quality education in a safe, joyful, and
              faith-filled environment.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-yellow-400">Quick Links</h4>
            <ul className="space-y-4">
              {["Home", "About Us", "Programs", "Admissions", "Gallery", "Contact"].map((link) => (
                <li key={link}>
                  <Link
                    to={link === "Home" ? "/" : `/${link.toLowerCase().replace(" ", "-")}`}
                    className="flex items-center gap-2 text-gray-100 hover:text-yellow-400 transition-colors duration-200 cursor-pointer no-underline"
                  >
                    <ChevronRight className="w-4 h-4" />
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info + Socials */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-yellow-400">Contact Us</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-yellow-400" />
                <span>Kabale Town, Near [Landmark], Kabale, Uganda</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-yellow-400" />
                <a href="tel:+256123456789" className="hover:text-yellow-400 transition">
                  +256 123 456 789
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-yellow-400" />
                <a href="mailto:info@kabalejunior.sc.ug" className="hover:text-yellow-400 transition">
                  info@kabalejunior.sc.ug
                </a>
              </li>
            </ul>

            {/* Socials */}
            <div className="flex gap-4 mt-8">
              {[
                { href: "/", icon: FaFacebookF },
                { href: "/", icon: FaXTwitter },
                { href: "/", icon: FaTiktok },
                { href: "/", icon: FaInstagram },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  aria-label="Facebook"
                  className="bg-white/10 p-3 rounded-full hover:bg-yellow-400 hover:text-gray-900 transition"
                >
                  <social.icon className="sm:w-6 sm:h-6 text-white" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/30 mt-12 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Kabale Junior School. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
