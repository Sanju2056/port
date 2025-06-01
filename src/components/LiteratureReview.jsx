import Image from "next/image";
import React from "react";
import { FiDownload, FiExternalLink } from "react-icons/fi";
import HealthImage from "../assets/Health.jpeg";
import ResilientImage from "../assets/Resilient.jpeg";
import MedicationImage from "../assets/medication.jpeg";
import HealthcareImage from "../assets/Healthcare.jpeg";
import EthicalImage from "../assets/ethical.jpeg";
const reviews = [
  {
    id: 1,
    title: "Resilient Healthcare Systems",
    description:
      "Resilience is one of the successful models of healthcare systems, especially during crises when there are transitions. Resilience, as defined by  Lyng et al. (2021), refers to balancing change with innovation that helps healthcare organisations adapt to arising issues while ensuring safe and consistent care. This metasynthesis has also progressed my thinking in contrast to professional practice-the need to learn continuously, reflective practice at system levels, and intervention at organisation levels on the basis of staff experience. It lends credence to the notion that good systems are not forced upon but built through engagement and adaptation. I now comprehend the implications of cultivating learning cultures that support frontline staff and system-wide learning.",
    citation:
      "Lyng, H. B., Macrae, C., Guise, V., Haraldseid-Driftland, C., Fagerdal, B., Schibevaag, L., Alsvik, J. G., & Wiig, S. (2021). Balancing Adaptation and Innovation for Resilience in Healthcare – a Metasynthesis of Narratives. BMC Health Services Research, 21(21), 759. https://doi.org/10.1186/s12913-021-06592-0",
    link: "https://bmchealthservres.biomedcentral.com/articles/10.1186/s12913-021-06592-0",
    file: "./files/b.pdf",
    icon: ResilientImage,
    alt: "Resilient Healthcare Systems",
  },
  {
    id: 2,
    title: "Health Literacy Studies",
    description:
      "Health equity is an essential aspect of providing equitable and accessible services to all communities, especially marginalised ones. Khatri and Assefa (2023) state that the Australian healthcare system is progressively mitigating disparities through policy reform efforts aimed at universal access and social determinants of health. This is a highly relevant source for my professional growth because  it underscores the potential of strategic planning and participatory governance in thwarting inequities in healthcare access. It has enhanced my insight into the necessity of having equity ingrained in system-level reforms, which serves as an essential pillar for promoting equitable healthcare delivery to marginalised communities. The literature has encouraged me to evaluate critically the impact of policies on tangible results among marginalised communities.",
    citation:
      "Khatri, R. B., & Assefa, Y. (2023). Drivers of the Australian Health System towards Health Care for All: A Scoping Review and Qualitative Synthesis. BioMed Research International, 2023(6648138), 1–19. https://doi.org/10.1155/2023/6648138",
    link: "https://onlinelibrary.wiley.com/doi/10.1155/2023/6648138",
    file: "./files/a.pdf",
    icon: HealthImage,
    alt: "Health Literacy Studies",
  },

  {
    id: 3,
    title: "Medication Safety Standards",
    description:
      "Medication safety remains a significant concern in the aged care industry, where drug-related harm is possible due to polypharmacy and complexity of care needs. According to the Australian Commission on Safety and Quality in Health Care (2023), the Medication Safety Standard enables ongoing, patient-centered care to reduce medication-related harm. This document is particularly valuable to my clinical practice in geriatric medicine, where safety protocols and comprehensive medication review are paramount to the provision of quality care. It has reinforced my resolve to ensure safe prescribing practices and ongoing monitoring, and has underscored the integral role played by staff training in error prevention. This guideline has also served to enhance my understanding of the importance of interprofessional communication in facilitating medication safety.",
    citation:
      "Australian Commission on Safety and Quality in Health Care. (2024). Medication safety standard. Australian Commission on Safety and Quality in Health Care. https://www.safetyandquality.gov.au/standards/nsqhs-standards/medication-safety-standard",
    link: "https://www.safetyandquality.gov.au/standards/nsqhs-standards/medication-safety-standard",
    file: "./files/c.pdf",
    icon: MedicationImage,
    alt: "Medication Safety Standard",
  },
  {
    id: 4,
    title: "Healthcare Relationships & Nursing leadership",
    description:
      "Leadership in nursing affects care quality, staff engagement, and patient outcomes within healthcare organisations. Successful leadership, particularly of transformational kinds, Hult et al. (2023) argue, creates team solidarity, provokes positive organisational results, and enhances patient satisfaction. This review of reviews confirmed my assumption about the value of quality leadership and its ability to transform workplace culture and quality of services. I selected this literature because it aligns with my aspiration to be a collaborative, mentoring nursing leader who utilises evidence-based practices. The results have encouraged me to consider how my leadership behaviors impact team processes and patient care outcomes.",
    citation:
      "Hult, M., Terkamo-Moisio, A., Kaakinen, P., Karki, S., Nurmeksela, A., Palonen, M., Peltonen, L.-M., & Häggman-Laitila, A. (2023). Relationships between nursing leadership and organizational, staff and patient outcomes: A systematic review of reviews. Nursing Open, 10(9), 5920–5936. https://doi.org/10.1002/nop2.1876",
    link: "https://onlinelibrary.wiley.com/doi/10.1002/nop2.1876",
    file: "./files/d.pdf",
    icon: HealthcareImage,
    alt: "Healthcare Relationships & Nursing leadership",
  },
  {
    id: 5,
    title: "Ethical AI Integration in Healthcare",
    description:
      "Technological innovation in healthcare must be tempered by moral obligation to maintain patient welfare and trust. Elendu et al. (2023) state that artificial intelligence and robotics pose ethical concern in terms of consent, data protection, and human control. This topic is especially important now that AI is being used more in clinical settings. It has led me to understand that ethical literacy is important and reveals why it’s necessary to use technologies with transparency and accountability. In addition, this article has gotten me to think about how technology can help rather than replace caring, human-focused care.",
    citation:
      "Elendu, C., Amaechi, D. C., Elendu, T. C., Jingwa, K. A., Okoye, O. K., John Okah, M., Ladele, J. A., Farah, A. H., & Alimi, H. A. (2023). Ethical implications of AI and robotics in healthcare: A review. Medicine, 102(50), e36671. https://doi.org/10.1097/MD.0000000000036671",
    link: "https://journals.lww.com/md-journal/fulltext/2023/12150/ethical_implications_of_ai_and_robotics_in.101.aspx",
    file: "./files/e.pdf",
    icon: EthicalImage,
    alt: "Ethical AI Integration in Healthcare",
  },
];

const LiteratureReview = () => {
  return (
    <div className="py-12 lg:py-20 flex flex-col gap-10  xl:gap-24 container ">
      {" "}
      <div className="text-center mb-5 max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 mb-4 font-cardo">
          Literature Review
        </h2>
        <p className="text-gray-600 px-6 text-sm sm:text-lg font-cardo">
          This literature review identifies seminal studies that have guided
          both my professional practice and academic progression. It illustrates
          my interaction with evidence-based healthcare, such as systemic
          equity, resilience, leadership, and ethical innovation.
        </p>
      </div>
      {/* <div className="grid grid-cols-1 gap-5 md:gap-14">
        {reviews.map((review, index) => {
          const isImageFirst = index % 2 !== 0; // Alternate: true for odd index

          const ImageComponent = (
            <Image
              src={review?.icon}
              alt={review?.alt}
              height={224}
              width={350}
              className="h-56 w-[350px] object-contain rounded"
            />
          );

          const ContentComponent = (
            <div className="flex-1">
              <div className="text-lg md:text-2xl font-semibold text-indigo-800 font-cardo">
                {review.title}
              </div>
              <hr className="mb-4" />
              <p className="text-gray-700 text-sm md:text-base mb-4 font-cardo">
                {review.description}
              </p>
              <p className="text-gray-500 text-xs mb-4 font-cardo">
                {review.citation}
              </p>
              <div className="flex items-center space-x-4 text-sm font-medium">
                <a
                  href={review.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-blue-600 hover:underline"
                >
                  <FiExternalLink className="mr-1" />
                  View Article
                </a>
                <a
                  href={review.file}
                  download
                  className="flex items-center text-green-600 hover:underline"
                >
                  <FiDownload className="mr-1" />
                  Download PDF
                </a>
              </div>
            </div>
          );

          return (
            <div
              key={review.id}
              className="p-6 bg-white  rounded-lg flex flex-col lg:flex-row gap-8 items-center justify-between"
            >
              {isImageFirst ? (
                <>
                  {ImageComponent}
                  {ContentComponent}
                </>
              ) : (
                <>
                  {ContentComponent}
                  {ImageComponent}
                </>
              )}
            </div>
          );
        })}
      </div> */}
      <div className="grid grid-cols-1 gap-8 md:gap-10">
        {reviews.map((review, index) => {
          const isImageFirstOnMobile = index % 2 !== 0; // Only used on small screens

          return (
            <div
              key={review.id}
              className={`
          p-6 bg-white shadow rounded-lg flex flex-col 
          lg:flex-row gap-8 items-center justify-between
         }
        `}
            >
              {/* Text content */}
              <div className="flex-1">
                <div className="text-lg md:text-2xl font-semibold text-indigo-800 font-cardo">
                  {review.title}
                </div>
                <hr className="mb-4" />
                <p className="text-gray-700 text-sm md:text-base mb-4 font-cardo">
                  {review.description}
                </p>
                <p className="text-gray-500 text-xs mb-4 font-cardo">
                  {review.citation}
                </p>
                <div className="flex items-center space-x-4 text-sm font-medium">
                  <a
                    href={review.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-600 hover:underline"
                  >
                    <FiExternalLink className="mr-1" />
                    View Article
                  </a>
                  <a
                    href={review.file}
                    download
                    className="flex items-center text-green-600 hover:underline"
                  >
                    <FiDownload className="mr-1" />
                    Download PDF
                  </a>
                </div>
              </div>

              {/* Image */}
              <Image
                src={review?.icon}
                alt={review?.alt}
                height={224}
                width={350}
                className="h-56 w-[350px] object-contain rounded"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LiteratureReview;
