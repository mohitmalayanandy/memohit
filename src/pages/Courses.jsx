import data from '../data/data';

const Courses = () => (
  <div className="p-8">
    <h2 className="text-2xl font-bold mb-4">Courses</h2>
    <ul className="list-disc pl-4 space-y-2">
      {data.courses.map((course, index) => (
        <li key={index} className="text-gray-600 dark:text-gray-400">
          {course}
        </li>
      ))}
    </ul>
  </div>
);

export default Courses;