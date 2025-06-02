import React from "react";

const CapabilityStatement = () => {
  return (
    <div className="py-10 lg:py-20  container text-center  flex items-center flex-col gap-8">
      <p className="font-semibold text-3xl md:text-4xl text-[#2e2e2e]">
        Capability Statement
      </p>
      <div className="flex flex-col gap-4 items-start justify-start">
        <p className="  text-base max-w-6xl sm:text-lg text-[#6f6f6f]">
          Having accomplished my studies in becoming a registered nurse in Nepal
          with over two years' clinical and research experience, I have a sound
          foundation in community health, emergency services, and health
          promotion in public health. My migration to Australia and pursuing
          Master of Health Science (Health Service Management) at Western Sydney
          University reflects that I have an aspiration of progressing from
          bedside care to population health and policy. I have acquired
          experience across diverse contexts—ranging from rural health education
          programs and critical care in Nepal to aged care and multicultural
          health services in New South Wales. I engaged in a WHO-endorsed
          rheumatic heart disease prevention project, collaborating with
          international partners to develop sustainable, locally driven
          interventions. In Manav Sewa Ashram, I helped marginalised communities
          of people with homeless and mentally ill backgrounds, providing
          holistic and embracing care in needy environments.
        </p>
        <p className="  text-base max-w-6xl sm:text-lg text-[#6f6f6f]">
          Holistic nursing significantly enhances recovery and dignity among
          marginalised patients, a belief that I have shared in Nepal as well as
          Australia. My practice aligns with the ethical framework of the
          Nursing and Midwifery Board of Australia, which, according to NMBA,
          emphasises respect, honesty, and culturally safe care. In Australia,
          I’ve gained insights into the health needs of culturally and
          linguistically diverse (CALD) groups—essential for equitable service
          delivery. Health services must proactively target CALD communities
          using culturally responsive approaches, which I implement in my work
          in aged care. As part of my postgraduate program, I implemented a
          health promotion program among Aboriginal communities on diabetes
          literacy. The program emphasised stakeholder mapping, culturally
          appropriate education, and policy concordance. To enhance my digital
          competency, I continue to enhance my comprehension of health
          informatics systems, as necessitated by the Australian Digital Health
          Agency.
        </p>
      </div>
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
