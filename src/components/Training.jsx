import React from "react";

const documents = [
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
    title: "Staff Handbook",
    file: "/files/certification-Staff-Handbook-olimuna53.pdf",
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
    <div className="px-4 my-10 md:my-16 max-w-6xl mx-auto ">
      <h1 className="text-3xl font-bold text-center mb-6">Training</h1>
      <p className="text-center text-gray-600 max-w-xl mx-auto mb-12">
        The following is my training, detailing my experience, skills and
        qualifications in nursing and health service management.
      </p>

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
            <div className="flex justify-center items-center gap-4 mt-4">
              {/* Preview button opens PDF in new tab */}
              <a
                href={doc.file}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-6 font-medium py-2 rounded-md hover:bg-blue-700 transition"
              >
                Preview
              </a>

              {/* Download button */}
              <a
                href={doc.file}
                download
                className="bg-green-600 text-white font-medium px-6 py-2 rounded-md hover:bg-green-700 transition"
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
