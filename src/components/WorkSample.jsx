import React from "react";
// data/workSamples.js
export const workSamples = [
  {
    title: "RHD Screening & School Health Workshop (Nepal)",
    description:
      "Organized school-based screening and awareness campaigns targeting rheumatic heart disease in rural Nepal, in collaboration with Tulsi Hospital and the University of Bern.",
    tags: ["Field Report", "Event Photos"],
    // links: {
    //   report: "#", // replace with actual link
    //   photos: "#", // replace with actual link
    // },
  },
  {
    title: "Health Literacy Project – Diabetes Prevention (Australia)",
    description:
      "Designed a culturally safe diabetes education intervention for Aboriginal communities. Included stakeholder maps, logic models, and a comprehensive budget.",
    tags: ["Project Brief", "Stakeholder Map"],
    link: "/files/Project Proposal - EOI  (HLTH7027).pdf",
  },
  {
    title: "Health Promotion Posters & Campaigns",
    description:
      "Created educational materials on hygiene and infectious disease prevention while volunteering at Manav Sewa Ashram and Tulsi Hospital.",
    tags: ["Posters", "Photos"],
    link: "/files/Manavsewa%20Ashram%20.pdf",
  },
  {
    title: "Undergraduate Research – Online Game Addiction Among Adolescents",
    description:
      "For my final-year nursing project, I conducted a descriptive cross-sectional study on the impact of online game addiction among secondary school students in the Dang District. I designed the questionnaire, collected and analysed data, and compiled a research report. Attached are the research abstract and methodology summary.",
    tags: ["Abstract", "Methodology"],
    link: "/files/RESEARCH FINAL REPORT.pdf",
  },
  {
    title: "Clinical Leadership Presentation",
    description:
      "Presented on authentic leadership in nursing as part of my master’s program, with references to aged care experiences.",
    link: "/files/Final Presentation of leadership.pptx",
  },
];

const WorkSample = () => {
  return (
    <section className="px-6 py-12 md:px-20 bg-white">
      <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center text-[#2e2e2e] font-cardo">
        Work Samples
      </h2>
      <div className="grid  mt-5 gap-y-10">
        {workSamples.map((project, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row sm:items-start py-5 gap-6"
          >
            <div className="flex flex-col gap-2">
              <span className="text-lg font-medium text-[#2e2e2e] mb-2">
                {project.title}
              </span>
              <p className="text-base text-[#6f6f6f]">{project.description}</p>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={project.link}
                  className="text-blue-700 underline text-semibold py-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Preview
                </a>

                <a
                  href={project.link}
                  download
                  className="bg-black text-white px-8 text-semibold flex items-center justify-center py-1.5 rounded hover:bg-gray-800 transition"
                >
                  Download
                </a>
                {/* {project.file 
                  } */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkSample;
