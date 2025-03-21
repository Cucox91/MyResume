import resume from './data/resume.json';

function App() {
  return (
    <div className="min-h-full min-w-full bg-white text-gray-800 w-full justify-center ">
      {/* Sticky Header */}
      <header className="sticky top-0 bg-white z-10 border-b shadow-sm p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">{resume.name}</h1>
        <p className="text-sm text-gray-500">{resume.title}</p>
      </header>

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section className="w-full py-10 flex flex-col md:flex-row items-center gap-8 bg-gray-50 px-4 md:px-6">
          <div>
            <img
              src="/profile.jpg"
              alt="Profile"
              className="w-40 h-40 rounded-full border-4 border-blue-300 shadow-md"
            />
          </div>
          <div className="flex-grow">
            <p className="text-lg md:text-xl">{resume.summary}</p>
          </div>
        </section>

        {/* Skills Section */}
        <section className="w-full py-10 bg-white px-4 md:px-6">
          <h2 className="text-2xl font-semibold mb-4">Skills</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {resume.skills.map((skill) => (
              <div
                key={skill}
                className="bg-blue-100 text-blue-800 px-3 py-2 rounded text-center text-sm font-medium"
              >
                {skill}
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section className="w-full py-10 bg-gray-50 px-4 md:px-6">
          <h2 className="text-2xl font-semibold mb-6">Experience</h2>
          <div className="space-y-6">
            {resume.experience.map((job, index) => (
              <div key={index} className="border-l-4 border-blue-500 pl-4">
                <div className="flex flex-col md:flex-row justify-between">
                  <h3 className="font-bold text-lg">
                    {job.role} @ {job.company}
                  </h3>
                  <span className="text-sm text-gray-500">
                    {job.start} – {job.end}
                  </span>
                </div>
                <ul className="list-disc ml-5 mt-2 text-sm text-gray-700">
                  {job.details.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section className="w-full py-10 bg-white px-4 md:px-6">
          <h2 className="text-2xl font-semibold mb-4">Education</h2>
          <div className="space-y-4">
            {resume.education.map((edu, index) => (
              <div key={index}>
                <p className="font-bold">{edu.degree}</p>
                <p className="text-sm text-gray-600">
                  {edu.institution} ({edu.year})
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-6 bg-gray-100 text-center text-sm text-gray-500 px-4 md:px-6">
        <p>
          © {new Date().getFullYear()} {resume.name} — Built with 💻 React + Tailwind
        </p>
      </footer>
    </div>
  );
}

export default App;