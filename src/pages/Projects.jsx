import profile from '../data/profile';

const Projects = () => {
  return (
    <div className="p-5">
      <h2 className="text-3xl font-bold mb-4">Projects</h2>
      {profile.projects.map((project) => (
        <div key={project.name} className="mb-4">
          <h3 className="text-xl font-semibold">{project.name}</h3>
          <p>{project.description}</p>
          <a
            href={project.link}
            target="_blank"
            className="text-blue-500 hover:underline"
          >
            View Project
          </a>
        </div>
      ))}
    </div>
  );
}
export default Projects;