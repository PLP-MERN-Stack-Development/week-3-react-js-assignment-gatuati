const About = () => {
  return (
    <div className="max-w-2xl mx-auto py-6 px-4">
      <h1 className="text-3xl font-bold mb-6">About This Project</h1>
      <div className="space-y-4">
        <p>
          This is a React application demonstrating component architecture, state management, 
          and API integration using modern React practices.
        </p>
        <p>
          Features include:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Task management with localStorage persistence</li>
          <li>API data fetching with pagination</li>
          <li>Dark/light theme switching</li>
          <li>Responsive design with Tailwind CSS</li>
        </ul>
      </div>
    </div>
  );
};

export default About;