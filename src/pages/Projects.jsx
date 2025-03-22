import data from '../data/data';

const Projects = () => (
  <div className="p-8">
    <h2 className="text-2xl font-bold mb-4">Projects</h2>
    <div className="space-y-4">
      {data.projects.map((project) => (
        <div key={project.id} className="p-4 border rounded shadow-md">
          <h3 className="font-semibold">{project.title}</h3>
          <p className="text-gray-600 dark:text-gray-400">{project.description}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Projects;
