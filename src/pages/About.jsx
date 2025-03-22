import data from '../data/data';

const About = () => (
  <div className="p-8">
    <h2 className="text-2xl font-bold mb-4">About Me</h2>
    <p>{data.about}</p>
  </div>
);

export default About;