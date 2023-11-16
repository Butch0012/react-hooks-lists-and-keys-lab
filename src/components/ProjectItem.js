
import React from 'react';

function ProjectItem({ technologies }) {
  return (
    <div className="project-item">
      <h3>Project Title</h3>
      <div className="technologies">
        {technologies.map((tech, index) => (
          <span key={index}>{tech}</span>
        ))}
      </div>
    </div>
  );
}

export default ProjectItem;
