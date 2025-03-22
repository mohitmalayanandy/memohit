import data from '../data/data';

const Skills = () => (
  <div className="p-8">
    <h2 className="text-2xl font-bold mb-4">Skills</h2>
    <div className="flex flex-wrap gap-4">
      {data.skills.map((skill, index) => (
        <span key={index} className="bg-blue-100 dark:bg-blue-800 text-blue-600 dark:text-blue-200 px-3 py-1 rounded-full">
          {skill}
        </span>
      ))}
    </div>
  </div>
);

export default Skills;
