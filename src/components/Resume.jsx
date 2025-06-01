import React from "react";

const Resume = () => {
  return (
    <div className="flex flex-col gap-4">
      <p className="font-semibold text-2xl text-[#2e2e2e] sm:text-4xl">Resume</p>

      <p className=" text-base sm:text-lg  text-[#6f6f6f]">
        Below is my resume, outlining my qualifications and experience in
        nursing and health service management.
      </p>

      {/* Preview & Download Buttons */}
      <div className="flex flex-row gap-4 items-center">
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
      {/* <div className="  ">
        <iframe
          src="/files/resume.pdf"
          className="md:w-[600px] h-[800px] lg:w-[900px] rounded"
          // title={doc.title}
        ></iframe>
      </div> */}
    </div>
  );
};

export default Resume;
