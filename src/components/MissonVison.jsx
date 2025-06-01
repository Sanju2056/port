import React from "react";
import { FaBullseye, FaEye, FaCheckCircle } from "react-icons/fa";
import { GiProgression } from "react-icons/gi";
import { MdGroups2 } from "react-icons/md";

const objectives = [
  {
    title: "Enhance Clinical Competence",
    // description:
    //   "Continuously develop advanced clinical skills to deliver safe, high-quality patient care.",
    icon: "🩺",
    color: "#FF6B6B",
  },
  {
    title: "Promote Health Equity",
    // description:
    //   "Advocate for underserved populations and address barriers to access and outcomes in diverse communities.",
    icon: "⚖️",
    color: "#4ECDC4",
  },
  {
    title: "Develop Leadership Skills",
    // description:
    //   "Engage in professional development that fosters transformational leadership and mentorship in nursing.",
    icon: "🧭",
    color: "#2e2e2e",
  },
  {
    title: "Practice Ethical Care",
    // description:
    //   "Uphold ethical standards in all aspects of care, with a focus on informed consent, patient dignity, and AI/technology integration.",
    icon: "🧠",
    color: "#1A535C",
  },
  {
    title: "Contribute to Interprofessional Teams",
    // description:
    //   "Collaborate effectively with multidisciplinary teams to ensure holistic and coordinated care.",
    icon: "🤝",
    color: "#FF6B6B",
  },
];
const MissionVisionObjectives = () => {
  return (
    <section className="w-full max-w-6xl  flex flex-col px-6 gap-8 md:gap-6 py-12 ">
      {/* Mission & Vision Cards */}
      <div className="grid lg:grid-cols-2 max-w-6xl lg:flex-row gap-6  md:gap-12 items-start">
        <div className="flex-1 flex flex-col gap-8">
          <div className="bg-gradient-to-br from-[#D0E7FF] to-[#A0C4FF] rounded-xl shadow p-6 ">
            <h3 className="text-[#1E3A8A] font-bold text-lg mb-2 tracking-wide">
              MISSION
            </h3>
            <p className="text-gray-700 text-base leading-relaxed">
              “To deliver compassionate, equitable, and evidence-based
              healthcare that empowers individuals and supports communities
              through ethical and culturally safe nursing practice.”
            </p>
          </div>
          <div className="bg-gradient-to-br from-[#FFE0E9] to-[#FFCCD5] rounded-xl shadow p-6 ">
            <h3 className="text-[#A4133C] font-bold text-lg mb-2 tracking-wide">
              VISION
            </h3>
            <p className="text-gray-700 text-base leading-relaxed">
              “To grow as a healthcare leader who drives positive change in
              nursing practice, inspires teamwork, and advances systems that
              prioritise patient safety, inclusivity, and innovation.”
            </p>
          </div>
          <div className="bg-gradient-to-br max-w-6xl from-[#FFF4DB] to-[#FFE8B3] rounded-xl shadow  p-6  ">
            <h3 className="text-[#7C4700] font-bold text-lg mb-2 ">
              Where This Leads
            </h3>
            <p className="text-gray-600 text-base">
              “ By outlining my mission, vision, and goals, I hope to not only
              communicate who I am as a professional, but also to hold myself
              accountable as I grow within the healthcare sector. These
              principles guide every academic decision, clinical action, and
              reflective moment shared throughout this portfolio.”
            </p>
          </div>
        </div>
        {/* Objectives Card */}
        <div className=" h-full flex flex-col gap-6 justify-between">
          <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl shadow p-6 h-full flex flex-col">
            <h3 className="text-green-800 font-bold text-lg mb-6 tracking-wide">
              OBJECTIVES
            </h3>
            {/* <ul className="list-disc pl-5 text-gray-700 text-base space-y-2">
              <li>
                Enhance Clinical Competence: Continuously develop advanced
                clinical skills to deliver safe, high-quality patient care.
              </li>
              <li>
                Promote Health Equity: Advocate for underserved populations and
                address barriers to access and outcomes in diverse communities.
              </li>
              <li>
                Develop Leadership Skills: Engage in professional development
                that fosters transformational leadership and mentorship in
                nursing.
              </li>
              <li>
                Practice Ethical Care: Uphold ethical standards in all aspects
                of care, with a focus on informed consent, patient dignity, and
                AI/technology integration.
              </li>
              <li>
                Contribute to Interprofessional Teams: Collaborate effectively
                with multidisciplinary teams to ensure holistic and coordinated
                care.
              </li>
            </ul> */}

          
            <div className="grid grid-cols-1  gap-6">
              {objectives.map((obj, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-gray-200 rounded-2xl p-3  flex items-center justify-start gap-4"
                >
                  <div className="text-3xl" style={{ color: obj.color }}>
                    {obj.icon}
                  </div>
                  <div>
                    <h2 className=" font-semibold" style={{ color: obj.color }}>
                      {obj.title}
                    </h2>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionObjectives;
