import { useState } from 'react';

const Banner = ({ onSubmit }) => {
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    if (email) onSubmit();
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-800">
      <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
      <input
        type="email"
        placeholder="Enter your email"
        className="p-2 border rounded"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button
        onClick={handleSubmit}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Enter
      </button>
    </div>
  );
};

export default Banner;
