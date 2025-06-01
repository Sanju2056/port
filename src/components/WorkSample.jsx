import { link } from "fs";
import React from "react";

// Updated work samples array
export const workSamples = [
  {
    title: "Registered Nurse",
    organization: "College of Medical Sciences",
    location: "Bharatpur, Bagmati, Nepal",
    registrationNo: "Nepal Nursing Council No: 65593",
    role: "ICU Nurse",
    date: "April 2022 – May 2023",
    responsibilities: [
      "Utilized critical thinking to monitor and assess changes in patient conditions, intervening appropriately.",
      "Reported abnormal findings and changes in patients' physical, mental, and emotional health.",
      "Transported patients for procedures and ensured proper coordination across departments.",
      "Maintained optimal stock levels in triage and treatment rooms.",
      "Observed patient care outcomes to support quality improvement.",
      "Administered vaccinations for measles, pneumonia, influenza, and other illnesses.",
      "Educated families on patient care and post-discharge support.",
      "Managed patients recovering from surgeries and critical illnesses.",
      "Worked alongside senior nurses, continuously learning advanced procedures.",
    ],
    link:"/files/nurse.jpeg"
  },
  // {
  //   title: "Assistant in Nursing",
  //   organization: "Mark Moran Little Bay",
  //   location: "Little Bay, NSW",
  //   date: "May 2023 – Present",
  //   responsibilities: [
  //     "Provided bedside care: bathing, grooming, feeding, toileting, and mobility assistance.",
  //     "Offered emotional and physical support during daily routines.",
  //     "Maintained detailed patient records and reported health changes to supervisors.",
  //     "Fostered meaningful patient relationships through empathetic communication.",
  //   ],
  // },
  // {
  //   title: "Assistant in Nursing",
  //   organization: "Anglicare Dorothy Boyt House",
  //   location: "Malabar, NSW",
  //   date: "June 2024 – Present",
  //   responsibilities: [
  //     "Delivered personal care including hygiene, grooming, dressing, and feeding.",
  //     "Supported therapy plans for dementia and behavioral intervention.",
  //     "Promoted high-quality customer service and compassionate communication.",
  //   ],
  // },
  {
    title: "ICU Nurse",
    organization: "Rapti Lifecare Hospital Pvt Ltd",
    location: "Dang, Nepal",
    date: "April 2023 – October 2023",
    responsibilities: [
      "Collaborated with interdisciplinary teams to develop personalized care plans.",
      "Monitored patient conditions and administered appropriate treatments.",
      "Offered emotional and psychological support to patients and families.",
    ],
    link:"/files/rapti.jpeg"
  },
  {
    title: "BSc Nursing Staff",
    organization: "Tulsi Hospital Pvt Ltd",
    location: "Dang, Nepal",
    date: "April 2022 – April 2023",
    responsibilities: [
      "Served in the Emergency Department and worked as a school nurse under a research program.",
      "Participated in the Rheumatic Heart Disease Control Project with the University of Bern.",
      "Organized health workshops, medical screenings, and community awareness programs.",
    ],
        link:"/files/tulsi.jpeg"

  },
  {
    title: "ICU Nurse",
    organization: "Buddha International Hospital",
    location: "Dang, Nepal",
    date: "September 2021 – March 2022",
    responsibilities: [
      "Delivered critical care including life support management, monitoring, and emergency intervention.",
      "Analyzed lab reports and treatment outcomes to adapt care plans accordingly.",
    ],
    link: "/files/buddha.jpeg"
  },
  // {
  //   title: "Professional Experience – Australia",
  //   experiences: [
  //     {
  //       organization: "Advance Care Agency",
  //       location: "NSW, Australia",
  //       date: "February 2024 – Present",
  //     },
  //     {
  //       organization: "Meanville Nursing Home by Hall & Prior",
  //       location: "NSW, Australia",
  //       date: "March 2024 – Present",
  //       role: "Team Leader",
  //       note: "May 2025 – Awarded Employee of the Month",
  //     },
  //     {
  //       organization: "Opal Aged Care – Annandale Grove Care Community",
  //       location: "NSW, Australia",
  //       date: "Completed 120 Hours of Clinical Placement",
  //     },
  //   ],
  // },
];

const WorkSample = () => {
  return (
    <section className="px-6 py-12 md:px-20 bg-white">
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
              <p className="text-sm text-[#6f6f6f]">Role: {sample.role}</p>
            )}

            {sample.registrationNo && (
              <p className="text-sm text-[#6f6f6f]">
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
                href={sample.link }
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 underline text-semibold py-2"
              >
                Preview
              </a>

              {/* Download button */}
              <a
                href={sample.link }
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
