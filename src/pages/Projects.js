import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Fetching data from Strapi (replace with your actual Strapi URL)
    axios.get('http://localhost:1337/api/projects')
      .then(response => {
        setProjects(response.data.data);
      })
      .catch(error => {
        console.error('There was an error fetching the projects:', error);
      });
  }, []);

  return (
    <div>
      <h2>My Projects</h2>
      <div>
        {projects.map(project => (
          <div key={project.id}>
            <h3>{project.attributes.title}</h3>
            <p>{project.attributes.description}</p>
            {project.attributes.image && (
              <img src={`http://localhost:1337${project.attributes.image.data.attributes.url}`} alt={project.attributes.title} />
            )}
            <a href={project.attributes.link} target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
