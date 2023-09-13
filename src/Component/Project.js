import React from "react";

const Project = ({ pic, name }) => {
  return (
    <div className="project">
      <div style={{ backgroundImage: `url(${pic})` }}></div>
      <h3>{name}</h3>
    </div>
  );
};

export default Project;
