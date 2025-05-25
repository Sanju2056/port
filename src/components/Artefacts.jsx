const Artefacts = () => {
  const projects = [
    {
      title: "Project 1",
      projectName:
        "“Health Implementation Plan- PUBH7030 Health Systems Planning and Evaluation”",
      linkLabel: "Cultural SAFETY",
      link: "/files/Health Implementation Plan- PUBH7030 Health Systems Planning and Evaluation.pdf",
      file: "/files/Health Implementation Plan- PUBH7030 Health Systems Planning and Evaluation.pdf",
    },
    {
      title: "Project 2",
      projectName:
        "Project Proposal for Translational Research Grants Scheme - Expression of Interest",
      linkLabel: "Project 1",
      link: "/files/Project Proposal - EOI  (HLTH7027).pdf",
      file: "/files/Project Proposal - EOI  (HLTH7027).pdf",
    },
  ];
  const recommendation = [
    {
      // title: "Inselspital Recommendation ",
      projectName: "Inselspital Recommendation Letter ",
      linkLabel: "Preview",
      link: "/files/recomendation.pdf",
      file: "/files/recomendation.pdf",
    },
     {
      // title: "Manavsewa Ashram",
      projectName: "Manavsewa Ashram Certificate",
      linkLabel: "Preview",
      link: "/files/Manavsewa%20Ashram%20.pdf",
      file: "/files/Manavsewa%20Ashram%20.pdf",
    },
    {
      // title: "Department of Cardiology University Hospital Bern 2",
      projectName: "Department of Cardiology University Hospital Bern ",
      linkLabel: "Preview",
      link: "/files/recomendation2.pdf",
      file: "/files/recomendation2.pdf",
    },
   
  ];
  return (
    <div className="my-10 md:my-16  ">
      <div className="mb-10 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold mb-3">Artefacts</h1>
        <p className="text-base sm:text-lg text-gray-700">
          These are some of the projects I completed during my master's degree,
          where I achieved a High Distinction.
        </p>
      </div>
      <div className="grid lg:grid-cols-2 gap-x-10 border-y">
        {projects.map((project, index) => (
          <div
            key={index}
            className="py-12 flex flex-col md:flex-row sm:items-start gap-6"
          >
            <span className=" text-xl text-gray-500 font-semibold w-32">
              {project.title}
            </span>

            <div className="flex flex-col gap-2">
              <span className="text-sm md:text-base font-medium text-gray-500 mb-2">
                {project.projectName}
              </span>
              <div className="flex flex-wrap items-center gap-4">
                {project.link && (
                  <a
                    href={project.link}
                    className="text-blue-700 underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Preview
                  </a>
                )}
                {project.file && (
                  <a
                    href={project.file}
                    download
                    className="bg-black text-white px-4 py-1.5 rounded hover:bg-gray-800 transition"
                  >
                    Download
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Render recommendation section */}
      <div className="mb-10 mt-16 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold mb-3">
          Letter of recommendation
        </h1>
        <p className="text-base sm:text-lg text-gray-700">
          These letters of recommendation reflect my academic and professional
          achievements, endorsed by mentors and supervisors.
        </p>
      </div>
      {/* {recommendation.map((rec, idx) => (
        <div
          key={idx}
          className="border-y py-12 flex flex-col sm:flex-row sm:items-start gap-6"
        >
          <div className="w-full sm:w-1/4">
            <p className="text-xl font-bold">{rec.title}</p>
          </div>
          <div className="w-full sm:w-3/4">
            <p className="text-lg font-semibold mb-2">{rec.projectName}</p>
            <div className="flex flex-wrap items-center gap-4">
              {rec.link && (
                <a
                  href={rec.link}
                  className="text-blue-700 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Preview
                </a>
              )}
              {rec.file && (
                <a
                  href={rec.file}
                  download
                  className="bg-black text-white px-4 py-1.5 rounded hover:bg-gray-800 transition"
                >
                  Download
                </a>
              )}
            </div>
          </div>
        </div>
      ))} */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 border-y">
        {recommendation.map((project, index) => (
          <div
            key={index}
            className="py-12 flex sm:flex-row sm:items-start gap-6"
          >
            {/* <span className="text-xl text-gray-500 font-semibold w-32">
              {project.title}
            </span> */}

            <div className="flex flex-col gap-2">
              <span className=" font-medium text-gray-500 mb-2">
                {project.projectName}
              </span>
              <div className="flex flex-wrap items-center gap-4">
                {project.link && (
                  <a
                    href={project.link}
                    className="text-blue-700 underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Preview
                  </a>
                )}
                {project.file && (
                  <a
                    href={project.file}
                    download
                    className="bg-black text-white px-4 py-1.5 rounded hover:bg-gray-800 transition"
                  >
                    Download
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Artefacts;
