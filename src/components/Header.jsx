import ThemeToggle from './ThemeToggle';

const Header = () => (
  <div className="flex justify-between items-center p-5 bg-white shadow-md dark:bg-gray-900">
    <h1 className="text-2xl font-bold">Mohit Malaya Nandy</h1>
    
    <ThemeToggle />
  </div>
);

export default Header;