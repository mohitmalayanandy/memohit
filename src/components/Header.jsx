import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="flex justify-between items-center p-5 bg-white shadow-md">
      <h1 className="text-2xl font-bold">Mohit Malaya Nandy</h1>
      <div className="flex gap-4">
        <Link to="/" className="hover:text-blue-500">Home</Link>
        <Link to="/about" className="hover:text-blue-500">About</Link>
        <Link to="/projects" className="hover:text-blue-500">Projects</Link>
        <Link to="/contact" className="hover:text-blue-500">Contact</Link>
      </div>
    </div>
  );
}
export default Header;