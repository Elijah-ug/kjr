import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { NavBar } from "./ui/home/NavBar";
import { Route, Routes } from "react-router-dom";
import { Home } from "./ui/home/Home";
import { About } from "./ui/about/About";
import { Footer } from "./ui/footer/Footer";
import { Gallery } from "./ui/galary/Gallery";
import { ContactUs } from "./ui/contact/ContactUs";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />

      {/* Page Content */}
      <main className="flex-1 mt-24  ">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="contact" element={<ContactUs />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
