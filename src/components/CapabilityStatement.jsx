import React from "react";

const CapabilityStatement = () => {
  return (
    <div className="my-16  flex flex-col  justify-center items-center text-center gap-10 px-4 sm:px-6 md:px-10">
      <p className="font-semibold text-2xl sm:text-3xl">Capability statement</p>
      <p className=" max-w-4xl text-base sm:text-lg text-gray-700">
        Having clinical skills and a Master of Health Service Management, I am
        actively looking for a Health Promotion Officer role with NSW Health. My
        training is a combination of direct nursing exposure in Nepal—like
        critical care, education on community health, and WHO-recommended
        research—and current NSW aged care leadership. The combination equips me
        to bridge policy and practice, providing culturally appropriate,
        evidence-based health programs. Postgraduate study, including a diabetes
        literacy initiative for Aboriginal communities, enhanced my skills in
        program development, stakeholder engagement, and equity solutions.
        Committed to the NMBA Code of Conduct, I bring clinical knowledge,
        intensity of research, and cross-cultural ability to create NSW Health's
        preventive health agenda.
      </p>
      <div className="flex  max-w-3xl   gap-5">
        <div className="flex flex-col sm:flex-row gap-4 ">
          {/* Preview button opens PDF in new tab */}
          <a
            href="/files/A Capability Statement 2 (Muna Oli).pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 underline  py-2"
          >
            Capability Statement
          </a>

          {/* Download button */}
          <a
            href="/files/A Capability Statement 2 (Muna Oli).pdf"
            download
            className="bg-black text-white px-8 flex items-center justify-center py-1.5 rounded hover:bg-gray-800 transition"
          >
            Download
          </a>
        </div>
      </div>
    </div>
  );
};

export default CapabilityStatement;
