import { motion } from 'framer-motion';
import profile from '../data/profile';

const Hero = () => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center text-center min-h-screen overflow-y-hidden p-5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: 'easeInOut' }}
    >
      <h1 className="text-5xl font-bold">{profile.name}</h1>
      <p className="text-2xl text-gray-600 mt-2">{profile.title}</p>
      <a
        href={`mailto:${profile.email}`}
        className="mt-4 text-blue-500 hover:underline"
      >
        {profile.email}
      </a>
    </motion.div>
  );
};

export default Hero;