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
  {
    src: "https://www.globalgiving.org/pfil/21609/ph_21609_78579.jpg",
    alt: "Teacher helping young students",
    caption: "Our Dedicated & Caring Teachers",
  },
  {
    src: "https://i0.wp.com/kawowo.com/wp-content/uploads/2025/07/Childrens-games-at-Kampala-Quality-School.jpg?fit=679%2C453&ssl=1",
    alt: "Kids playing group games",
    caption: "Team Games & Friendship",
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj5KAZIATJ9Rx0DVn7a6okI7a-yY1OkjQrWQ&s",
    alt: "Graduation ceremony",
    caption: "Graduation Day Celebrations",
  },
  {
    src: "https://c8.alamy.com/comp/2JBFN5E/ugandan-school-children-in-classroom-2JBFN5E.jpg",
    alt: "Students raising hands in class",
    caption: "Active Participation in Lessons",
  },
  {
    src: "https://www.unicef.org/uganda/sites/unicef.org.uganda/files/styles/hero_extended/public/UGDA-Education-6179.JPG.webp?itok=mNixZkhl",
    alt: "Happy nursery kids",
    caption: "Nursery Smiles & Curiosity",
  },
  {
    src: "https://c8.alamy.com/comp/J55CAR/terraced-fields-as-seen-from-the-road-kisoro-kabale-uganda-J55CAR.jpg",
    alt: "View of Kabale hills",
    caption: "Learning Amidst Nature's Beauty",
  },
];

export const Gallery = () => {
  return (
    <>
      {/* Hero - Untouched as requested */}
      <section className="relative h-screen max-h-[70vh] overflow-hidden">
        <img
          src="https://travel.com/wp-content/uploads/2025/11/Scenic-view-of-Kabales-rolling-hills-and-terraced-landscapes-with-mist-rising-in-the-morning.webp"
          alt="Beautiful Kabale hills surrounding our school"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/70 to-black/50" />
        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
          <h2 className="text-2xl md:text-7xl font-bold text-white drop-shadow-2xl">
            Gallery – Moments at Kabale Junior School
          </h2>
        </div>
      </section>

      {/* Organized Photo Cards */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto p-6">
          <p className=" md:text-2xl text-center text-gray-700 mb-16 max-w-4xl mx-auto">
            Capturing the joy, learning, faith, and friendships that make our school special every day.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center gap-8">
            {galleryItems.map((item, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col w-xs sm:w-auto"
              >
                <div className="overflow-hidden">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 flex-1 flex items-center">
                  <p className="text-center text-gray-800 font-medium ">{item.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
