import React from "react";

export const Staff = () => {
  return (
    <div >
      {/* Our Dedicated Team */}
      <section className="py-20 bg-linear-to-b from-green-50 to-blue-200 w-full">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-5xl font-bold text-gray-600 mb-12">Meet Our Dedicated Team</h2>
          <p className=" text-gray-700 mb-12 max-w-3xl mx-auto">
            Our qualified and passionate teachers are the heart of Kabale Junior School — committed to nurturing every
            child with care, faith, and excellence.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center gap-8">
            {/* Example Staff Cards - Replace with real photos/names */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 w-xs sm:w-auto">
              <img
                src="https://c8.alamy.com/comp/3DBB514/middle-aged-black-man-sitting-at-desk-reading-documents-working-with-laptop-and-tablet-in-modern-office-appearing-focused-and-professional-school-principal-performing-administrative-tasks-3DBB514.jpg"
                alt="Mr. Declan Rice"
                className="w-full h-80 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800">Mrs. Grace Namara</h3>
                <p className="text-yellow-600 font-semibold mb-2">Headteacher</p>
                <p className="text-gray-600">20+ years experience in Christian education</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-30 w-xs sm:w-auto0">
              <img
                src="https://img.freepik.com/free-photo/technology-business-occupation-concept_343059-3306.jpg?semt=ais_hybrid&w=740&q=80"
                alt="Mr. John Mugisha - Deputy Head"
                className="w-full h-80 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800">Mr. Gabriel Marghez</h3>
                <p className="text-yellow-600 font-semibold mb-2">Deputy Headteacher</p>
                <p className="text-gray-600">Passionate about primary curriculum development</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 w-xs sm:w-auto">
              <img
                src="https://media.gettyimages.com/id/2225770859/photo/confident-professional-leading-team-meeting-with-presentation-in-modern-office.jpg?s=612x612&w=gi&k=20&c=cWV_R_CP8WPMIpOi2Z3EMzOyF1_A-8riE5cNIEyW84k="
                alt="Ms. Sarah Atuhaire - Nursery Coordinator"
                className="w-full h-80 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800">Ms. Sarah Atuhaire</h3>
                <p className="text-yellow-600 font-semibold mb-2">Nursery Coordinator</p>
                <p className="text-gray-600">Expert in play-based early learning</p>
              </div>
            </div>

            {/* Add more cards as needed */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 w-xs sm:w-auto">
              <img
                src="https://thumbs.dreamstime.com/b/portrait-middle-aged-black-man-smiling-sitting-office-desk-confidently-hands-clasped-wearing-glasses-appearing-as-424195571.jpg"
                alt="Mr. Emmanuel Twesigye - Class Teacher"
                className="w-full h-80 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800">Mr. Emmanuel Twesigye</h3>
                <p className="text-yellow-600 font-semibold mb-2">P4 Class Teacher</p>
                <p className="text-gray-600">Dedicated to building strong foundations</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
