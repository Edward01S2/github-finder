import React from "react";

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-48 sm:pt-72">
      <div className="text-center">
        <h1 className="font-bold text-3xl mb-3 sm:text-4xl">About</h1>
        <div className="sm:text-lg">
          <p>Application to search for Github users</p>
          <p>
            Created by{" "}
            <a
              href="https://github.com/edward01s2"
              target="_blank"
              className="text-blue-700 hover:text-blue-500"
              rel="noreferrer"
            >
              edward01s2
            </a>
          </p>
          <p>Version: 0.0.1</p>
        </div>
      </div>
    </div>
  );
};

export default About;
