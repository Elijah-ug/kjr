// About.jsx
import React from "react";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";
import { Church, Heart } from "lucide-react";

export const About = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      {/* Hero Banner */}
      <section className="relative h-screen max-h-[80vh] overflow-hidden w-full">
        <img
          src="https://thumbs.dreamstime.com/b/lush-green-hills-kabale-uganda-minimalist-landscape-photography-showcase-experience-breathtaking-beauty-373600921.jpg"
          alt="Beautiful terraced hills of Kabale, Uganda"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/50 to-black/30" />
        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-2xl">
              About Kabale Junior School
            </h1>
            <p className="text-2xl md:text-3xl text-white drop-shadow-lg">
              Nurturing Young Hearts & Minds in the Heart of Kabale Since [Year]
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-linear-to-b from-blue-50 to-green-50 w-full">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          <div className="bg-white rounded-3xl p-10 shadow-2xl text-center">
            <Church className="w-16 h-16 text-green-600 mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Mission</h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              To provide quality Christian nursery and primary education that develops each child's spiritual,
              academic, social, and emotional potential in a safe, joyful, and loving environment.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-10 shadow-2xl text-center">
            <Heart className="w-16 h-16 text-yellow-500 mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Vision</h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              To raise confident, compassionate, and God-fearing leaders who will positively impact their families,
              communities, and the nation of Uganda.
            </p>
          </div>
        </div>
      </section>

      {/* History */}
      <section className="py-20 bg-white w-full">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-12">
            Our Journey
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img
                src="https://assets.arlingtonmagazine.com/2024/05/reach-uganda.jpg"
                alt="Happy children learning together"
                className="rounded-3xl shadow-2xl"
              />
            </div>
            <div className="order-1 md:order-2 text-left">
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                Founded in [2010], Kabale Junior School began as a small nursery with a big dream: to give every child
                in Kabale access to quality Christian education.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                Over the years, we've grown into a thriving nursery and primary school, serving hundreds of families
                with dedicated teachers, modern facilities, and a curriculum that balances academic excellence with
                character development.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed">
                Today, we continue that legacy — surrounded by Kabale's breathtaking hills, raising the next generation
                in faith, love, and knowledge.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Teaching Staff */}
      <section className="py-20 bg-white w-full">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Our Teaching Staff
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-4xl mx-auto">
            Our qualified, passionate, and caring teachers are committed to nurturing
            every child academically, spiritually, and socially.
          </p>

          <div className="relative">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMogH8ZxAoniKQk21Nh3oiQwVAPtazB2a8WQ&s"
              alt="Kabale Junior School teaching staff"
              className="w-full rounded-3xl shadow-2xl object-cover"
            />
            <div className="absolute inset-0 bg-black/40 rounded-3xl flex items-end">
              <p className="text-white text-lg md:text-xl p-6 max-w-3xl text-left">
                Dedicated teaching staff of Kabale Junior School united by professionalism,
                faith, and a deep love for children.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Non Teaching Staff */}
      <section className="py-20 bg-gray-50 w-full">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Our Non-Teaching Staff
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-4xl mx-auto">
            Our support staff ensure a safe, clean, organized, and welcoming school environment every day.
          </p>

          <div className="relative">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEbnm_YSzv3dXH4F8pvMjnC7v94I4NXkd5dQ&s"
              alt="Kabale Junior School non teaching staff"
              className="w-full rounded-3xl shadow-2xl object-cover"
            />
            <div className="absolute  inset-0 bg-black/40 rounded-3xl flex items-end">
              <p className="text-white text-lg md:text-xl p-6 max-w-3xl text-left ">
                Administrators, caretakers, and support workers working together
                to keep Kabale Junior School running smoothly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Life at School */}
      <section className="py-20 bg-gray-50 w-full">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-12">
            Life at Kabale Junior School
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                src: "https://www.wvi.org/sites/default/files/inline-images/881A6415%20copy.jpg",
                caption: "Interactive classroom learning that encourages curiosity and confidence.",
              },
              {
                src: "https://micdsweb.s3.us-east-2.amazonaws.com/micdsweb/wp-content/uploads/2022/08/IMG_20220715_100113253.jpg",
                caption: "Teachers providing personal guidance and care to every learner.",
              },
              {
                src: "https://c8.alamy.com/comp/GHKXXA/african-school-children-in-rural-uganda-take-a-moment-during-morning-GHKXXA.jpg",
                caption: "Morning assemblies that strengthen faith, discipline, and unity.",
              },
              {
                src: "https://www.hrw.org/sites/default/files/styles/embed_xxl/public/media_2024/05/202406africa_uganda_BobiNurserySchool.jpg",
                caption: "Safe and joyful play environments that support physical development.",
              },
              {
                src: "https://amazima.org/wp-content/uploads/2019/05/qualified-primary-teachers-classroom-job-opportunity-image.jpg",
                caption: "Engaged students learning in a supportive and inspiring classroom.",
              },
              {
                src: "https://c8.alamy.com/comp/2YAGR4F/terraced-mountainous-landscape-of-kisoro-and-kabale-2YAGR4F.jpg",
                caption: "Our beautiful Kabale surroundings that enrich learning and growth.",
              },
            ].map((item, index) => (
              <figure
                key={index}
                className="relative group overflow-hidden rounded-2xl shadow-xl"
              >
                <img
                  src={item.src}
                  alt={item.caption}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <figcaption className="absolute inset-0 bg-black/50 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                  <p className="text-white text-base p-4">
                    {item.caption}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-linear-to-r from-blue-600 to-green-600 text-white w-full">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Ready to Join Our Family?
          </h2>
          <p className="text-xl mb-12">
            Come see why parents across Kabale trust us with their children's future.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-bold text-lg px-10 py-6"
            >
              <NavLink to="/admissions">Apply Now</NavLink>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/20 font-bold text-lg px-10 py-6"
            >
              <NavLink to="/contact">Book a Visit</NavLink>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
