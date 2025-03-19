import profile from '../data/profile';

const Contact = () => {
    return (
        <div className="p-5">
            <h2 className="text-3xl font-bold">Contact Me</h2>
            <p>Email: {profile.email}</p>
            <p>Phone: {profile.phone}</p>
            <a href={profile.linkedin} className="text-blue-500 hover:underline">
                LinkedIn
            </a>
        </div>
    );
}
export default Contact;