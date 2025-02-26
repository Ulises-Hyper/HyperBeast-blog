import React, { useState } from "react";

const ToggleSwitch = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div
      className={`relative w-12 h-6 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ${
        isActive ? "bg-blue-500" : "bg-gray-300"
      }`}
      onClick={() => setIsActive(!isActive)}
    >
      <div
        className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
          isActive ? "translate-x-6" : "translate-x-0"
        }`}
      ></div>
    </div>
  );
};

export default ToggleSwitch;
