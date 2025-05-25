import React from "react";

const Resume = () => {
  return (
    <div className=" my-10 md:my-16 flex flex-col justify-center items-center text-center gap-6 px-4">
      <p className="font-semibold text-2xl sm:text-4xl">Resume</p>

      <p className="max-w-3xl text-base sm:text-lg text-gray-700">
        Below is my resume, outlining my qualifications and experience in
        nursing and health service management.
      </p>

      {/* Preview & Download Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mt-6">
        {/* Preview button opens PDF in new tab */}
        <a
          href="/files/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 text-white px-6 font-medium py-2 rounded-md hover:bg-blue-700 transition"
        >
          Preview
        </a>

        {/* Download button */}
        <a
          href="/files/resume.pdf"
          download
          className="bg-green-600 text-white font-medium px-6 py-2 rounded-md hover:bg-green-700 transition"
        >
          Download
        </a>
      </div>
      <div className="    mt-6">
        <iframe
          src="/files/resume.pdf"
          className="md:w-[600px] h-[800px] lg:w-[900px] rounded"
          // title={doc.title}
        ></iframe>
      </div>
    </div>
  );
};

export default Resume;
