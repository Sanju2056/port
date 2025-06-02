import React from "react";
import Profile from "./Profile";
const profile = {
  name: "Muna Oli",
  contact: {
    mobile: "0426611152",
    email: "olimuna53@gmail.com",
    address: "301, 11-17 Woodville Street, Hurstville NSW 2220",
    registrationNo: "Nepal Nursing Registration No: 65593",
  },
  objective:
    "Experienced and compassionate nurse with a bachelor's degree in nursing and two years of valuable experience in patient care and medical research. I possess a diverse skill set in providing exceptional healthcare services, including monitoring patients, administering medications, and offering emotional support. Committed to upholding a safe and nurturing environment, ensuring optimal patient outcomes while adhering to established medical protocols and ethical standards. Motivated by my clinical expertise and passion for healthcare, I am eager to contribute to a dynamic healthcare team and medical research community.",
  certifications: [
    "First Aid Training",
    "CPR Training",
    "First Aid Certificate",
    "Police Certification",
    "Certificate IV in Ageing Support (Australian Community and Management College)",
  ],
  strengths: [
    "Strong organizational skills",
    "Ability to work under pressure and multitask.",
    "Prompt and effective communicator",
    "Collaborative and team-oriented approach",
    "Knowledge of medical terminology and infection control standards",
  ],
  education: [
    {
      degree: "Master of Health Science (Health Service Management)",
      institution: "Western Sydney University",
      date: "10/2023 - Present",
    },
    {
      degree: "Bachelor of Science in Nursing",
      institution: "Yeti Health Science Academy, Kathmandu, Nepal",
      date: "2016 - 2020",
    },
  ],
  projects: {
    title: "Manav Sewa Ashram, Dang, Nepal",
    objective:
      "Part-time volunteer providing medical and living support to orphans and senior citizens lacking financial means.",
    duties: [
      "Assisted vulnerable populations, including the disabled, homeless, or mentally disadvantaged.",
      "Coordinated with volunteers and staff to support the organization's operations.",
      "Improved quality of life through medical support, education, routine awareness, and check-up programs.",
    ],
    outcome:
      "Contributed to the mission of making Nepal a 'street people free country,' providing shelter and economic development.",
  },
  experience: [
    {
      title: "ICU Nurse",
      location: "Rapti Lifecare Hospital Pvt Ltd, Dang, Nepal",
      date: "04/2023 - 10/2023",
      responsibilities: [
        "Collaborated with the interdisciplinary team to develop and implement individualized patient care plans.",
        "Evaluated patient conditions, administered treatment, and provided emotional and mental support during recovery.",
      ],
    },
    {
      title: "BSC Nursing Staff",
      location: "Tulsi Hospital Pvt Ltd, Dang, Nepal",
      date: "04/2022 - 04/2023",
      responsibilities: [
        "Served in the Emergency Department and as a school nurse at Tulsi Higher Secondary School under a research project.",
        "Worked on the Rheumatic Heart Disease Control Project in collaboration with Tulsi Hospital and the University of Bern, Switzerland.",
        "Performed nursing duties, including counselling, health camps, health workshops, and screening examinations.",
      ],
    },
    {
      title: "ICU Nurse",
      location: "Buddha International Hospital, Dang, Nepal",
      date: "09/2021 - 03/2022",
      responsibilities: [
        "Provided direct patient care in the ICU, including monitoring vital signs, administering medications, and managing life support equipment.",
        "Monitored and assessed patients' conditions, including lab results and treatment responses.",
      ],
    },
  ],
  affiliations: [
    {
      place: "Opal Aged Care - Annandale Grove Care Community, NSW, Australia",
      detail: "Completed 120 Hours",
    },
    {
      place: "Advance Care Agency, NSW, Australia",
      detail: "February 2024 – Present",
    },
    {
      place: "Meanville Nursing Home by Hall and Prior, NSW, Australia",
      detail: "March 2024 – Present (Team leader)",
      achievement:
        "May 2025 – Awarded Employee of the Month in recognition of outstanding performance, dedication to quality care, and leadership excellence",
    },
  ],
  references: "Available upon request",
};

const Resume = () => {
  return (
    <div className="flex container py-10 lg:py-20 flex-col justify-center text-center px-10  items-center gap-4">
      
      <p className="font-semibold text-3xl text-[#2e2e2e] md:text-4xl">
        Resume
      </p>

      <p className=" text-base max-w-6xl sm:text-lg  text-[#6f6f6f]">
        In addition to my educational credentials and clinical experience, my
        curriculum vitae gives an account of specialised training and
        certification relevant to modern healthcare requirements. These
        certificates attest to my dedication towards continuing professional
        development and a commitment to the provision of safe, ethical, and
        patient-centered care. They supplement my practice experience and
        further strengthen my competence in working across a variety of
        healthcare environments.
      </p>

      {/* Preview & Download Buttons */}
      <div className="flex flex-row gap-4 mb-4 items-center">
        {/* Preview button opens PDF in new tab */}
        <a
          href="/files/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 underline text-semibold py-2"
        >
          Preview
        </a>

        {/* Download button */}
        <a
          href="/files/resume.pdf"
          download
          className="bg-black text-white px-8 text-semibold flex items-center justify-center py-1.5 rounded hover:bg-gray-800 transition"
        >
          Download
        </a>
      </div>
      {/* <div className=" mt-5 ">
        <iframe
          src="/files/resume.pdf"
          className="md:w-[600px] h-[800px] lg:w-[900px] rounded"
          // title={doc.title}
        ></iframe>
      </div> */}
      <div>
        <Profile data={profile} />
      </div>
    </div>
  );
};

export default Resume;
