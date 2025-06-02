const Profile = ({ data }) => {
  return (
    <div className="max-w-6xl  text-[#2e2e2e] text-left">
      {/* Header */}
      <h1 className="text-3xl font-bold mb-2">{data.name}</h1>
      <p className="mb-1">📞 {data.contact.mobile}</p>
      <p className="mb-1">✉️ {data.contact.email}</p>
      <p className="mb-1">🏠 {data.contact.address}</p>
      <p className="mb-6 italic">{data.contact.registrationNo}</p>

      {/* Career Objective */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-1">Career Objective</h2>
        <p>{data.objective}</p>
      </section>

      {/* Certifications */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-1">Certifications and Training</h2>
        <ul className="list-disc pl-6">
          {data.certifications.map((cert, i) => (
            <li key={i}>{cert}</li>
          ))}
        </ul>
      </section>

      {/* Strengths */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-1">Key Strengths</h2>
        <ul className="list-disc pl-6">
          {data.strengths.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </section>

      {/* Education */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-1">Education</h2>
        {data.education.map((edu, i) => (
          <div key={i} className="mb-2">
            <p className="font-medium">{edu.degree}</p>
            <p>{edu.institution}</p>
            <p className="text-sm text-gray-600">{edu.date}</p>
          </div>
        ))}
      </section>

      {/* Projects */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-1">Academic Projects</h2>
        <p className="font-medium">{data.projects.title}</p>
        <p className="italic mb-1">{data.projects.objective}</p>
        <ul className="list-disc pl-6 mb-2">
          {data.projects.duties.map((duty, i) => (
            <li key={i}>{duty}</li>
          ))}
        </ul>
        <p>{data.projects.outcome}</p>
      </section>

      {/* Work Experience */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-1">Work Experience</h2>
        {data.experience.map((job, i) => (
          <div key={i} className="mb-4">
            <p className="font-medium">{job.title}</p>
            <p>{job.location}</p>
            <p className="text-sm text-gray-600 mb-1">{job.date}</p>
            <ul className="list-disc pl-6">
              {job.responsibilities.map((task, j) => (
                <li key={j}>{task}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* Affiliations */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-1">Professional Affiliations</h2>
        {data.affiliations.map((aff, i) => (
          <div key={i} className="mb-2">
            <p className="font-medium">{aff.place}</p>
            <p>{aff.detail}</p>
            {aff.achievement && (
              <p className="text-green-700 font-medium">{aff.achievement}</p>
            )}
          </div>
        ))}
      </section>

      {/* References */}
      <section>
        <h2 className="text-xl font-semibold mb-1">References</h2>
        <p>{data.references}</p>
      </section>
    </div>
  );
};
export default Profile;