import React from "react";

const documents = [
  {
    title: "Recognising and Acting on Pain",
    file: "/files/138_12_38468_1745301668_DTA Course Certificate _C-H.pdf",
  },
  {
    title: "CHC43015 Certificate IV in Ageing Support",
    file: "/files/Muna Oli CHC43015 Certificate IV in Ageing Support 9385.pdf",
  },
  {
    title: "HLTAID009 - Provide cardiopulmonary resuscitation",
    file: "/files/CPR certificate .pdf",
  },
  {
    title: "Basic of Infection Prevention and control",
    file: "/files/basicsofinfectionpreventionandcontrol.pdf",
  },
  {
    title: "ACA - Guide to Safe Medication Management",
    file: "/files/certification-ACA---Guide-to-Safe-Medication-Management-olimuna53-2.pdf",
  },
  {
    title: "ACA - Manual Handling Part 1",
    file: "/files/certification-ACA---Manual-Handling-Part-1-olimuna53 2.pdf",
  },

  {
    title: "New Worker NDIS Induction Module",
    file: "/files/New_Worker__NDIS_Induction_Module_Completion_Certificate.pdf",
  },
  {
    title: "'Quality, Safety and You'",
    file: "/files/qualitysafetyandyou.pdf",
  },
  {
    title: "Supporting Effective Communication Module",
    file: "/files/Supporting_Effective_Communication_Module_Completion_Certificate 3.pdf",
  },
  {
    title: "Supporting Safe and Enjoyable Meals",
    file: "/files/Supporting_Safe_and_Enjoyable_Meals_Certificate_of_Completion.pdf",
  },
];

const Training = () => {
  return (
    <div className="">
      {/* <h1 className="text-3xl font-bold text-center mb-6">Training</h1>
      <p className="text-center text-gray-600 text-sm sm:text-lg  max-w-xl mx-auto mb-12">
        The following is my training, detailing my experience, skills and
        qualifications in nursing and health service management.
      </p> */}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {documents.map((doc, index) => (
          <div
            key={index}
            className="bg-white shadow-sm rounded-lg p-10 w-full gap-5 flex flex-col border"
          >
            <h2 className="font-semibold text-gray-600 text-lg mb-3 text-center">
              {doc.title}
            </h2>
            <div className=" ">
              <iframe
                src={doc.file}
                className="h-[400px] w-full rounded"
                title={doc.title}
              ></iframe>
            </div>
            {/* <div className="text-center">
              <a
                href={doc.file}
                download
                className="bg-blue-600 text-white px-12 py-2 rounded hover:bg-blue-700 transition"
              >
                Download
              </a>
            </div> */}
            <div className="flex justify-center items-center gap-6 mt-4">
              {/* Preview button opens PDF in new tab */}
              <a
                href={doc.file}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 underline text-semibold py-2"
              >
                Preview
              </a>

              {/* Download button */}
              <a
                href={doc.file}
                download
                className="bg-black text-white px-8 text-semibold flex items-center justify-center py-1.5 rounded hover:bg-gray-800 transition"
              >
                Download
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Training;
