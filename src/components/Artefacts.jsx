import Image from "next/image";
import CapabilityStatement from "./CapabilityStatement";
import Resume from "./Resume";
import Training from "./Training";
import WorkSample from "./WorkSample";

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
      {/* <div className="flex flex-col text-center gap-5">
        <h1 className="text-2xl sm:text-4xl font-semibold  text-[#2e2e2e]">
          My Works
        </h1>
        <p className="text-base  sm:text-lg text-[#6f6f6f]">
          “This section showcases a curated collection of my educational and
          professional experiences—beginning with my Curriculum Vitae (CV),
          followed by a capability statement, selected assessment artefacts, and
          concluding with relevant certificates.”
        </p>
      </div> */}
      <div>
        
        <div className="flex flex-col md:flex-row w-full gap-10  rounded-lg">
          {/* Left Section: Nurse Info */}
          <div className="flex-1 flex justify-center flex-col items-center rounded-lg ">
            <h1 className="text-3xl sm:text-3xl font-semibold mb-3 text-[#2e2e2e]">
          Registration
        </h1>
            <p className="text-gray-600 text-base sm:text-lg ">
              Registered Nurse
            </p>
            <p className="text-gray-600 text-base sm:text-lg">
              Registration: Nepal Nursing Council
            </p>
            <p className="text-gray-600 text-base sm:text-lg">
              Registration Number: 65593
            </p>
            <p className="text-gray-600 text-base sm:text-lg">
              Date: 5th September, 2021
            </p>
          </div>

          {/* Right Section: Preview and Download */}
          <div className="w-full flex-1 flex-col justify-center items-center ">
            <div className="w-full max-w-[500px] rounded overflow-hidden border border-gray-300 shadow-md">
              <Image
                src="/files/nurse.jpeg" // or "/images/nurse.jpeg" depending on your structure
                alt="Nursing Certificate"
                width={1000}
                height={1400}
                className="w-full h-auto object-contain"
              />
            </div>
            <div className="flex justify-center   items-center gap-4 mt-5">
              <a
                href="/files/nurse.jpeg"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 underline text-semibold py-2"
              >
                Preview
              </a>
              <a
                href="/files/nurse.jpeg"
                download
                className="bg-black text-white px-8 text-semibold flex items-center justify-center py-1.5 rounded hover:bg-gray-800 transition"
              >
                Download
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <Resume />
      <CapabilityStatement /> */}
      <div>
        <div className="flex flex-col">
          <h1 className="text-3xl sm:text-3xl font-semibold mb-3 text-[#2e2e2e]">
            Assignments
          </h1>
          <p className="text-base  sm:text-lg text-[#6f6f6f]">
            The assignments show the major projects I carried out as part of my
            master’s degree, representing my use of critical thinking, research
            and knowledge of healthcare. All of these projects were graded High
            Distinction, indicating both quality in schoolwork and benefit in
            the workplace. I demonstrate in these documents my analytical
            skills, my communication abilities and how I use research-based
            techniques.
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
            Recommendations
          </h1>
          <p className="text-base sm:text-lg text-[#6f6f6f]">
            The letters of recommendation show my academic progress and prove my
            competence at work, personally confirmed by people who have worked
            with me. The letters I receive confirm my skills, how hard I work
            and how deeply committed I am to doing my best.
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
      {/* <div className="flex flex-col gap-5">
        <p className="font-semibold text-2xl sm:text-3xl text-[#2e2e2e]">
          Certifications
        </p>
      </div> */}
      <div className="  space-y-5">
        <h1 className="text-3xl sm:text-3xl text-[#2e2e2e] font-semibold mb-3">
          Training and Certifications
        </h1>
        <p className="text-base sm:text-lg text-[#6f6f6f]">
          I have achieved several professional training programs that support me
          in offering safe, patient-centered and evidence-based practice. These
          certifications improved my competencies in infection control,
          medication safety, manual handling, communication, and caring for
          patients with various needs. Each program reflects my commitment to
          ongoing learning and my willingness to respond to contemporary
          healthcare demands with confidence and capability.
        </p>
        <Training />
      </div>
      <WorkSample />
      <div className="  space-y-5">
        <h1 className="text-3xl sm:text-3xl text-[#2e2e2e] font-semibold mb-3">
          Technical Competencies
        </h1>
        <p className="text-base sm:text-lg text-[#6f6f6f]">
          I possess strong presentation skills and experience in developing and
          presenting concise, engaging content for both academic and
          professional settings. I can utilise tools like PowerPoint, Canva, and
          Google Slides to create engaging slides. My communication is
          organised, assertive, and responsive to different groups of people. I
          have used these skills in seminars, health education workshops, and
          group project presentations.
        </p>
        <div className="flex flex-row gap-4 items-center">
          {/* Preview button opens PDF in new tab */}
          <a
            href="/files/Final Presentation of leadership.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 underline text-semibold py-2"
          >
            Preview
          </a>

          {/* Download button */}
          <a
            href="/files/Final Presentation of leadership.pdf"
            download
            className="bg-black text-white px-8 text-semibold flex items-center justify-center py-1.5 rounded hover:bg-gray-800 transition"
          >
            Download
          </a>
        </div>
        <div className=" mt-5 ">
          <iframe
            src="/files/Final Presentation of leadership.pdf"
            className="md:w-[600px] h-[800px] lg:w-[900px] rounded"
            // title={doc.title}
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Artefacts;
