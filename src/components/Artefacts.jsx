import CapabilityStatement from "./CapabilityStatement";
import Resume from "./Resume";
import Training from "./Training";

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
      projectName: "“Online Game Addiction Among Adolescents ”",
      linkLabel: "Project 2",
      link: "/files/RESEARCH FINAL REPORT.pdf",
      file: "/files/RESEARCH FINAL REPORT.pdf",
    },
    {
      title: "Project 3",
      projectName:
        "“Project Proposal for Translational Research Grants Scheme - Expression of Interest”",
      linkLabel: "Project 1",
      link: "/files/Project Proposal - EOI  (HLTH7027).pdf",
      file: "/files/Project Proposal - EOI  (HLTH7027).pdf",
    },
  ];
  const recommendation = [
    {
      // title: "Inselspital Recommendation ",
      projectName: "“Inselspital Recommendation Letter ”",
      linkLabel: "Preview",
      link: "/files/recomendation.pdf",
      file: "/files/recomendation.pdf",
    },
    {
      // title: "Manavsewa Ashram",
      projectName: "“Manavsewa Ashram Certificate”",
      linkLabel: "Preview",
      link: "/files/Manavsewa%20Ashram%20.pdf",
      file: "/files/Manavsewa%20Ashram%20.pdf",
    },
    {
      // title: "Department of Cardiology University Hospital Bern 2",
      projectName: "“Department of Cardiology University Hospital Bern” ",
      linkLabel: "Preview",
      link: "/files/recomendation2.pdf",
      file: "/files/recomendation2.pdf",
    },
  ];
  return (
    <div className="py-20 flex flex-col gap-14  md:gap-24 container ">
      <div className="flex flex-col text-center gap-5">
        <h1 className="text-2xl sm:text-4xl font-semibold  text-[#2e2e2e]">
          My Works
        </h1>
        <p className="text-base  sm:text-lg text-[#6f6f6f]">
          “This section showcases a curated collection of my educational and
          professional experiences—beginning with my Curriculum Vitae (CV),
          followed by a capability statement, selected assessment artefacts, and
          concluding with relevant certificates.”
        </p>
      </div>
      {/* <Resume />
      <CapabilityStatement /> */}
      <div>
        <div className="flex flex-col">
          <h1 className="text-3xl sm:text-3xl font-semibold mb-3 text-[#2e2e2e]">
            Projects
          </h1>
          <p className="text-base  sm:text-lg text-[#6f6f6f]">
            These are some of the projects I completed during my master's
            degree, where I achieved a High Distinction.
          </p>
        </div>
        <div className="grid xl:grid-cols-2 mt-5 gap-x-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row sm:items-start py-5 gap-6"
            >
              <div className="flex flex-col gap-2">
                <span className="text-sm md:text-base font-medium text-gray-500 mb-2">
                  {project.projectName}
                </span>
                <div className="flex flex-wrap items-center gap-4">
                  {project.link && (
                    <a
                      href={project.link}
                      className="text-blue-700 underline text-semibold py-2"
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
                      className="bg-black text-white px-8 text-semibold flex items-center justify-center py-1.5 rounded hover:bg-gray-800 transition"
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

      {/* Render recommendation section */}
      <div>
        <div className="  ">
          <h1 className="text-3xl sm:text-3xl text-[#2e2e2e] font-semibold mb-3">
            Letter of recommendation
          </h1>
          <p className="text-base sm:text-lg text-[#6f6f6f]">
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
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 py-5 gap-10 mt-5">
          {recommendation.map((project, index) => (
            <div
              key={index}
              className={`flex sm:flex-row sm:items-start gap-6 pb-4 ${
                index !== recommendation.length - 1
                  ? "border-r border-gray-200"
                  : ""
              }`}
            >
              <div className="flex flex-col gap-2 w-full">
                <span className="font-medium text-gray-500 mb-2">
                  {project.projectName}
                </span>
                <div className="flex flex-wrap items-center gap-4">
                  {project.link && (
                    <a
                      href={project.link}
                      className="text-blue-700 underline text-semibold py-2"
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
                      className="bg-black text-white px-8 text-semibold flex items-center justify-center py-1.5 rounded hover:bg-gray-800 transition"
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
      <div className="flex flex-col gap-5">
        <p className="font-semibold text-2xl sm:text-3xl text-[#2e2e2e]">
          Certifications
        </p>
        <Training />
      </div>
    </div>
  );
};

export default Artefacts;
