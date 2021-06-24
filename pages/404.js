import React from "react";

const NotFound = () => {
  return (
    <div className="flex justify-center items-top sm:items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-48 sm:pt-72">
        <div className="flex items-center justify-center divide-x-2 divide-gray-400 text-xl font-bold md:text-2xl">
          <div className="px-6">404</div>
          <div className="px-6">NOT FOUND</div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
