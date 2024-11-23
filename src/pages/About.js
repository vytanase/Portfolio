import React from "react";

const About = () => {
  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold mb-4">About Me</h1>
      <p className="mb-6">
        I am a passionate developer with expertise in building modern and
        responsive web applications. My focus is on delivering clean code and
        user-friendly designs.
      </p>
      <h2 className="text-2xl font-semibold">Skills</h2>
      <ul className="list-disc pl-6">
        <li>React.js</li>
        <li>Node.js</li>
        <li>Express</li>
        <li>MongoDB</li>
      </ul>
    </div>
  );
};

export default About;
