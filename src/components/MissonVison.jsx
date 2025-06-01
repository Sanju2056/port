import React from "react";
import { FaBullseye, FaEye, FaCheckCircle } from "react-icons/fa";
import { GiProgression } from "react-icons/gi";
import { MdGroups2 } from "react-icons/md";

const MissionVisionObjectives = () => {
  return (
    <section className="w-full max-w-6xl mx-auto flex flex-col  gap-8 md:gap-12 py-12 px-4 md:px-0">
      {/* Mission & Vision Cards */}
      <div className="flex flex-col max-w-6xl md:flex-row gap-6 md:gap-12 items-start">

      <div className="flex-1 flex flex-col gap-6">
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl shadow p-6 min-h-[180px]">
          <h3 className="text-blue-800 font-bold text-lg mb-2 tracking-wide">
            MISSION
          </h3>
          <p className="text-gray-700 text-base leading-relaxed">
            “To deliver compassionate, equitable, and evidence-based healthcare
            that empowers individuals and supports communities through ethical
            and culturally safe nursing practice.”
          </p>
          <span className="block mt-2 text-xs text-gray-500">
            This mission reflects my commitment to being a nurse who leads with
            empathy, professionalism, and purpose—someone who listens,
            advocates, and acts for the wellbeing of every patient.
          </span>
        </div>
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl shadow p-6 min-h-[180px]">
          <h3 className="text-blue-800 font-bold text-lg mb-2 tracking-wide">
            VISION
          </h3>
          <p className="text-gray-700 text-base leading-relaxed">
            “To grow as a healthcare leader who drives positive change in
            nursing practice, inspires teamwork, and advances systems that
            prioritise patient safety, inclusivity, and innovation.”
          </p>
          <span className="block mt-2 text-xs text-gray-500">
            My long-term vision is to influence not only the care I provide but
            also the healthcare environment around me, encouraging collaboration
            and resilience.
          </span>
        </div>
      </div>
      {/* Objectives Card */}
      <div className="flex-1 flex flex-col gap-6 justify-between">
        <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl shadow p-6 min-h-[180px] flex flex-col">
          <h3 className="text-green-800 font-bold text-lg mb-2 tracking-wide">
            OBJECTIVES
          </h3>
          <ul className="list-disc pl-5 text-gray-700 text-base space-y-2">
            <li>
              Enhance Clinical Competence: Continuously develop advanced
              clinical skills to deliver safe, high-quality patient care.
            </li>
            <li>
              Promote Health Equity: Advocate for underserved populations and
              address barriers to access and outcomes in diverse communities.
            </li>
            <li>
              Develop Leadership Skills: Engage in professional development that
              fosters transformational leadership and mentorship in nursing.
            </li>
            <li>
              Practice Ethical Care: Uphold ethical standards in all aspects of
              care, with a focus on informed consent, patient dignity, and
              AI/technology integration.
            </li>
            <li>
              Contribute to Interprofessional Teams: Collaborate effectively
              with multidisciplinary teams to ensure holistic and coordinated
              care.
            </li>
          </ul>
        </div>
        
      </div>
      </div>
      <div className="bg-white rounded-xl shadow p-6 mt-4">
          <h4 className="text-gray-800 font-semibold mb-2">Where This Leads</h4>
          <p className="text-gray-600 text-sm">
            By outlining my mission, vision, and goals, I hope to not only
            communicate who I am as a professional, but also to hold myself
            accountable as I grow within the healthcare sector. These principles
            guide every academic decision, clinical action, and reflective
            moment shared throughout this portfolio.
          </p>
        </div>
    </section>
  );
};

export default MissionVisionObjectives;
