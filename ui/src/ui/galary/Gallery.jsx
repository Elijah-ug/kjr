import React from "react";

const galleryItems = [
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsdwyDe08u1OpAXMEYKdu1citZ5ZDZyJoH3g&s",
    alt: "Children enjoying recess",
    caption: "Playtime Joy on the Swings",
  },
  {
    src: "https://kasnursery.online/wp-content/uploads/2025/07/Best-Primary-School-Uganda-edited-1.jpg.webp",
    alt: "Students in bright classroom",
    caption: "Engaged Learning in Class",
  },
  {
    src: "https://c8.alamy.com/comp/GHKXXA/african-school-children-in-rural-uganda-take-a-moment-during-morning-GHKXXA.jpg",
    alt: "Morning assembly prayer",
    caption: "Morning Prayer & Assembly",
  },
  {
    src: "https://i0.wp.com/kawowo.com/wp-content/uploads/2023/08/CATCH-ME-IF-YOU-CAN_Young-pupils-of-Shree-Sahajanand-School-Uganda-Kindergarten-in-atheltics-session.jpg?resize=780%2C549&ssl=1",
    alt: "Kids running in sports",
    caption: "Sports Day Energy",
  },
  {
    src: "https://c8.alamy.com/comp/2XMJHRT/elementary-school-in-kabale-town-uganda-2XMJHRT.jpg",
    alt: "School building and playground",
    caption: "Our Beautiful Campus",
  },
  {
    src: "https://c8.alamy.com/comp/AFKYDH/primary-school-children-lined-up-for-morning-assembly-and-prayers-AFKYDH.jpg",
    alt: "Students in uniform assembly",
    caption: "Discipline & Unity in Assembly",
  },
];

export const Gallery = () => {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[60vh] overflow-hidden">
        <img
          src="https://travel.com/wp-content/uploads/2025/11/Scenic-view-of-Kabales-rolling-hills-and-terraced-landscapes-with-mist-rising-in-the-morning.webp"
          alt="Kabale hills"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative flex min-h-[60vh] items-center justify-center px-4 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white max-w-5xl">
            Gallery – Moments at Kabale Junior School
          </h2>
        </div>
      </section>

      {/* GALLERY GRID */}
      <section className="py-16 bg-gray-50 overflow-x-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="text-center text-lg sm:text-xl text-gray-700 mb-12 max-w-3xl mx-auto">
            Capturing the joy, learning, faith, and friendships that make our school special.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center gap-6">
            {galleryItems.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition w-xs sm:w-auto h-full"
              >
                <img src={item.src} alt={item.alt} className="w-full h-60 object-cover" />

                <div className="p-4 text-center">
                  <p className="text-gray-800 font-medium">{item.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
