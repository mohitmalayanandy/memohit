import profile from '../data/profile';

const About = () => {
  return (
    <div className="p-5">
      <h2 className="text-3xl font-bold">About Me</h2>
      <p className="mt-2">{profile.title}</p>
      <p>{profile.location}</p>
    </div>
  );
}
export default About;