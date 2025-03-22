import data from '../data/data';

const Experience = () => (
  <div className="p-8">
    <h2 className="text-2xl font-bold mb-4">Experience</h2>
    {data.experience.map((exp, index) => (
      <div key={index} className="border-b py-4">
        <h3 className="font-semibold">{exp.role} at {exp.company}</h3>
        <p className="text-gray-600 dark:text-gray-400">{exp.year}</p>
      </div>
    ))}
  </div>
);

export default Experience;
