import data from '../data/data';

const Education = () => (
  <div className="p-8">
    <h2 className="text-2xl font-bold mb-4">Education</h2>
    {data.education.map((edu, index) => (
      <div key={index} className="border-b py-4">
        <h3 className="font-semibold">{edu.degree}</h3>
        <p className="text-gray-600 dark:text-gray-400">{edu.institute} - {edu.year}</p>
      </div>
    ))}
  </div>
);

export default Education;
