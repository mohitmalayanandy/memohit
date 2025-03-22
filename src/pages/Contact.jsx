import data from '../data/data';

const Contact = () => (
  <div className="p-8">
    <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
    <p>Email: <a href={`mailto:${data.contact.email}`} className="text-blue-500">{data.contact.email}</a></p>
    <p>Phone: <a href={`tel:${data.contact.phone}`} className="text-blue-500">{data.contact.phone}</a></p>
  </div>
);

export default Contact;