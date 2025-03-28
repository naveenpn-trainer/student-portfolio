import { useEffect, useState } from 'react';

function Projects() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/projects')
            .then((res) => res.json())
            .then((data) => setProjects(data))
            .catch((err) => console.error('Error fetching projects:', err));
    }, []);

    return (
        <section id="projects">
            <h2>Projects</h2>
            {projects.length === 0 ? (
                <p>Loading projects...</p>
            ) : (
                <ul>
                    {projects.map((proj) => (
                        <li key={proj.id}>
                            <h3>{proj.title}</h3>
                            <p>{proj.description}</p>
                        </li>
                    ))}
                </ul>
            )}
        </section>
    );
}

export default Projects;
