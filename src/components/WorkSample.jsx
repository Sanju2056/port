import { link } from "fs";
import React from "react";

// Updated work samples array
export const workSamples = [
  // {
  //   title: "Registered Nurse",
  //   organization: "Nepal Nursing Council",
  //   location: "Nepal",
  //   registrationNo: "Registration Number: 65593",
  //   date: "5th September, 2021",
  //   link: "/files/nurse.jpeg",
  //   role: "Registered Nurse",
  //   responsibilities: [
  //     "Licensed by the Nepal Nursing Council with Registration Number 65593.",
  //   ],
  // },
  {
    title: "ICU Nurse",
    organization: "Rapti Lifecare Hospital Private Limited",
    location: "Dang, Nepal",
    date: "April 2023 – October 2023",
    link: "/files/rapti.jpeg",
    responsibilities: [
      "Collaborated in close association with cross-functional teams to develop and execute personalised patient care plans.",
      "Monitored and documented patient condition, administering treatments as per clinical protocol.",
      "Provided compassionate emotional and psychological support to relatives and patients during periods of critical care.",
      "Applied critical thinking abilities to constantly observe and evaluate patients' physical, mental, and emotional condition, intervening promptly when circumstances altered.",
      "Communicated abnormal findings efficiently to multidisciplinary teams to facilitate prompt clinical decisions.",
      "Provided ample education and discharge teaching to patients and families, enhancing home care and recuperation.",
    ],
  },
  {
    title: "BSc Nursing Staff",
    organization: "Tulsi Hospital Pvt Ltd",
    location: "Dang, Nepal",
    date: "April 2022 – April 2023",
    link: "/files/tulsi.jpeg",
    responsibilities: [
      "Worked as a school nurse and in the Emergency Department participating in community health programs.",
      "Participated in the Rheumatic Heart Disease Control Project in liaison with the University of Bern.",
      "Planned and implemented health workshops, medical screening, and public sensitisation campaigns to ensure the community remained healthy.",
      "Organised patient transport for procedures, facilitating smooth communication among departments.",
      "Maintained ideal levels of inventory in treatment and triage areas to facilitate continuous care provision.",
      "Evaluated patient outcomes in order to facilitate continuous quality improvement activities.",
      "Administered immunisations including measles, pneumonia, and flu, promoting preventive health measures.",
    ],
  },
  {
    title: "ICU Nurse",
    organization: "Buddha International Hospital",
    location: "Dang, Nepal",
    date: "September 2021 – March 2022",
    link: "/files/buddha.jpeg",
    responsibilities: [
      "Provided critical care including life support, monitoring of patients, and emergency intervention.",
      "Evaluated laboratory results and response to therapy to modify care plans for best patient outcomes.",
      "Managed postoperative and critically ill patients with scrupulous attention.",
      "Worked in liaison with senior nursing staff to achieve increased clinical competencies and knowledge.",
    ],
  },
];


const WorkSample = () => {
  return (
    <section className="  bg-white">
      <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center text-[#2e2e2e] font-cardo">
        Work Samples
      </h2>

      <div className="grid gap-y-10">
        {workSamples.map((sample, index) => (
          <div key={index} className="border-b pb-8">
            <h3 className="text-xl font-semibold text-[#2e2e2e]">
              {sample.title}
            </h3>

            {sample.organization && (
              <p className="text-base text-[#6f6f6f]">
                {sample.organization} — {sample.location}
              </p>
            )}

            {sample.date && (
              <p className="text-sm text-[#6f6f6f] italic">{sample.date}</p>
            )}

            {sample.role && (
              <p className=" text-[#2e2e2e] ">Role: {sample.role}</p>
            )}

            {sample.registrationNo && (
              <p className=" text-[#2e2e2e] ">
                Registration: {sample.registrationNo}
              </p>
            )}

            {/* If responsibilities exist */}
            {sample.responsibilities && (
              <ul className="list-disc pl-5 mt-3 text-[#444] space-y-1">
                {sample.responsibilities.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )}

            {/* If experiences exist (for grouped experience section) */}
            {sample.experiences && (
              <div className="mt-4">
                {sample.experiences.map((exp, i) => (
                  <div key={i} className="mb-4">
                    <p className="font-medium text-[#2e2e2e]">
                      {exp.organization}
                    </p>
                    <p className="text-sm text-[#6f6f6f]">{exp.location}</p>
                    <p className="text-sm italic text-[#6f6f6f]">{exp.date}</p>
                    {exp.role && (
                      <p className="text-sm text-[#6f6f6f]">Role: {exp.role}</p>
                    )}
                    {exp.note && (
                      <p className="text-sm text-[#444] mt-1">{exp.note}</p>
                    )}
                  </div>
                ))}
              </div>
            )}
            <div className="flex flex-row gap-4 mt-3 items-center">
              {/* Preview button opens PDF in new tab */}
              <a
                href={sample.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 underline text-semibold py-2"
              >
                Preview
              </a>

              {/* Download button */}
              <a
                href={sample.link}
                download
                className="bg-black text-white px-8 text-semibold flex items-center justify-center py-1.5 rounded hover:bg-gray-800 transition"
              >
                Download
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkSample;
