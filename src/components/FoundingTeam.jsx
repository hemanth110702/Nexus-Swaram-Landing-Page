import React from "react";

const teamMembers = [
  {
    name: "Deepak Sreeram",
    role: "Founder",
    description: "Visionary leader driving Nexus Swarm's mission.",
    image: "path/to/deepak-image.jpg", // Replace with actual image path
  },
  {
    name: "Shweta Evangeline",
    role: "Co-Founder",
    description: "Passionate advocate for student empowerment.",
    image: "path/to/shweta-image.jpg", // Replace with actual image path
  },
  {
    name: "Amarnath Siliveri",
    role: "Community Manager",
    description: "Fostering connections within our community.",
    image: "path/to/amarnath-image.jpg", // Replace with actual image path
  },
  {
    name: "Navya Kalamadi",
    role: "Community Manager",
    description: "Dedicated to enhancing user engagement.",
    image: "path/to/navya-image.jpg", // Replace with actual image path
  },
];

const FoundingTeam = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
          Meet Our Founding Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="bg-white rounded-lg shadow-md p-4"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-48 object-cover rounded-t-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">
                {member.name}
              </h3>
              <p className="text-gray-600">{member.role}</p>
              <p className="text-gray-500 mt-2">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FoundingTeam;
