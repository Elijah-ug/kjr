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
import { Admission } from "./ui/applications/Admission";
import { Login } from "./ui/admin/Login";
import { RegisterAdmin } from "./ui/admin/RegisterAdmin";
import { AdminDashboard } from "./ui/admin/AdminDashboard";
import { Bio } from "./ui/admin/Bio";
import { PostEvents } from "./ui/admin/PostEvents";
import { PostNews } from "./ui/admin/PostNews";
import { PostGalary } from "./ui/admin/PostGalary";
import { Messages } from "./ui/admin/Messages";
import { ToastContainer } from "react-toastify";
import { Notifications } from "./ui/admin/Notifications";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <div className="flex-1">
        <NavBar />

        {/* Page Content */}

        <main className=" mt-24 bg-gray-100 ">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="contact" element={<ContactUs />} />
            <Route path="admission" element={<Admission />} />
            <Route path="login" element={<Login />} />
            <Route path="add-admin" element={<RegisterAdmin />} />
            <Route path="dashboard" element={<AdminDashboard />}>
              <Route path="profile" element={<Bio />} />
              <Route path="post-event" element={<PostEvents />} />
              <Route path="post-news" element={<PostNews />} />
              <Route path="notifications" element={<Notifications />} />
              <Route path="messages" element={<Messages />} />
            </Route>
          </Routes>
        </main>
      </div>

      <Footer />

      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="colored"
      />
    </div>
  );
}

export default App;
