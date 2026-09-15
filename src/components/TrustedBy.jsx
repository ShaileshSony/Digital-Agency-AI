import React from "react";
import { company_logos } from "../assets/assets.js";

const TrustedBy = () => {
  return (
    <div className="flex flex-col items-center justify-center px-4 sm:px-12 lg:px-24 xl:px-40 gap-5 text-gray-700 dark:text-white/80">
      <h3 className="font-semibold">Trusted by Leading Companies</h3>
      <div className="flex items-center justify-center flex-wrap gap-10 m-4">
        {company_logos.map((logo, index) => (
          <img
            src={logo}
            alt={`Company Logo ${index + 1}`}
            key={index}
            className="max-h-5 sm:max-h-6 dark:drop-shadow-xl"
          />
        ))}
      </div>
    </div>
  );
};

export default TrustedBy;
