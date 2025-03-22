import data from '../data/data';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="w-64 h-full bg-gray-50 dark:bg-gray-900 p-4">
      <div>
        <img
          src={data.profileImage}
          alt="Profile"
          className="w-24 h-24 rounded-full mx-auto"
        />
        <h2 className="mt-4 text-center font-bold">{data.name}</h2>
      </div>

      <div className="justify-between items-center p-5 bg-white shadow-md dark:bg-gray-900">
      <div className="flex flex-col  gap-4">
        <Link to="/about" className="hover:text-blue-500">About</Link>
        <Link to="/projects" className="hover:text-blue-500">Projects</Link>
        <Link to="/skills" className="hover:text-blue-500">Skills</Link>
        <Link to="/experience" className="hover:text-blue-500">Experience</Link>
        <Link to="/education" className="hover:text-blue-500">Education</Link>
        <Link to="/courses" className="hover:text-blue-500">Courses</Link>
        <Link to="/resume" className="hover:text-blue-500">Resume</Link>
        <Link to="/contact" className="hover:text-blue-500">Contact</Link>
      </div>
      </div>
    </div>
  );
};

export default Dashboard;
