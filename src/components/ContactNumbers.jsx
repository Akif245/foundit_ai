import React from "react";

const team = [
  {
    name: "MOHAN BURGULA",
    role: "Frontend & Backend",
    phone: "9618019112",
    email: "245123733130@mvsrec.edu.in",
    image: "/mohan.jpg",
  },
  {
    name: "KONDOJU SANJANA",
    role: "Frontend Developer",
    phone: "9640616186",
    email: "245123733165@mvsrec.edu.in",
    image: "/sanjana.jpg",
  },
  {
    name: "MOHAMMED ABDUL AKIF",
    role: "Database / Testing",
    phone: "9700186921",
    email: "245123733173@mvsrec.edu.in",
    image: "/akif.jpg",
  },
];

export default function ContactNumbers() {
  return (
    <div className="w-full flex justify-center px-6 py-10 bg-gray-100">
      <div className="w-full max-w-5xl">
        <h2 className="text-3xl font-bold text-center mb-2">Contact Us</h2>
        <p className="text-gray-600 text-center mb-8">
          For support, reporting issues, or updates — contact the team.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition"
            >
              {/* PROFILE IMAGE */}
              {member.image ? (
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-14 h-14 rounded-full object-cover mb-4 border"
                />
              ) : (
                <div className="w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold mb-4">
                  {member.name.charAt(0)}
                </div>
              )}

              <h3 className="text-lg font-semibold">{member.name}</h3>
              <p className="text-blue-600 font-medium text-sm mb-4">
                {member.role}
              </p>

              <p className="text-gray-700 text-sm mb-2">
                📞 <span className="font-semibold">{member.phone}</span>
              </p>

              <p className="text-gray-700 text-sm">
                ✉️ <span className="font-semibold">{member.email}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
