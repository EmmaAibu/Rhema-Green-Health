import React from "react";

const ProfileSection = () => {
  // Mock user info — replace with real user data from context or API
  const user = {
    name: "Emma Aibu",
    email: "emmaaibu40@gmail.com",
    phone: "+233 553006521",
  };

  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-xl font-bold text-green-700 mb-4">👤 User Profile</h2>
      <p>
        <strong>Name:</strong> {user.name}
      </p>
      <p className="mt-2">
        <strong>Email:</strong> {user.email}
      </p>
      <p className="mt-2">
        <strong>Phone:</strong> {user.phone}
      </p>
    </div>
  );
};

export default ProfileSection;
