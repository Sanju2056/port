import React from "react";

const CapabilityStatement = () => {
  return (
    <div className="py-10 lg:py-20 text-center container  flex items-center flex-col gap-8">
      <p className="font-semibold text-3xl md:text-4xl text-[#2e2e2e]">
        Capability Statement
      </p>
      <p className="  text-base max-w-6xl px-3 sm:text-lg text-[#6f6f6f]">
        I am Muna Oli, a dedicated registered nurse with over two years of
        critical care experience in Nepal's ICUs and emergency departments, now
        transferring my clinical expertise and caring approach to Australia's
        aged care sector. Currently building my leadership capacity through a
        Master of Health Science in Health Service Management at Western Sydney
        University, I am well positioned to integrate hands-on patient care with
        healthcare system improvement. My experience in heading the World Health
        Organisation-approving Rheumatic Heart Disease Prevention Project and
        managing aged care teams has also developed my expertise in
        evidence-based practice, intercultural communication, and health program
        development. With certification in emergency response and aged care
        support, I combine clinical accuracy with strategic insight to provide
        quality care while working to create systemic change. My intention is to
        utilise my global experience and increasing knowledge in health
        management to contribute to better patient outcomes and efficiency of
        healthcare delivery systems, in line with the NMBA Code of Conduct and a
        strong commitment to equitable, person-centered care
      </p>
      <div className="flex     gap-5">
        <div className="flex flex-row gap-4 ">
          {/* Preview button opens PDF in new tab */}
          <a
            href="/files/A Capability Statement 2 (Muna Oli).pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 underline text-semibold py-2"
          >
            Capability Statement
          </a>

          {/* Download button */}
          <a
            href="/files/A Capability Statement 2 (Muna Oli).pdf"
            download
            className="bg-black text-white px-8 text-semibold flex items-center justify-center py-1.5 rounded hover:bg-gray-800 transition"
          >
            Download
          </a>
        </div>
      </div>
    </div>
  );
};

export default CapabilityStatement;
