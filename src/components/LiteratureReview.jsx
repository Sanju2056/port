import React from "react";
import { FiDownload, FiExternalLink } from "react-icons/fi";

const reviews = [
  {
    id: 1,
    title: "Health Literacy Studies",
    description:
      "My experience in the healthcare sector has shown me how critical health literacy is, especially among older adults and individuals from diverse cultural backgrounds. This review of health literacy studies conducted in Australia helped me understand the significant challenges many people face in navigating the healthcare system due to limited knowledge and communication barriers. It made me more aware of how I communicate with patients—using simpler language, confirming understanding, and being culturally sensitive. This resource has played an important role in shaping how I support patient empowerment and ensure individuals are truly informed participants in their care decisions.",
    citation:
      "Khatri, R. B., & Assefa, Y. (2023). Drivers of the Australian Health System towards Health Care for All: A Scoping Review and Qualitative Synthesis. BioMed Research International, 2023(6648138), 1–19. https://doi.org/10.1155/2023/6648138",
    link: "https://onlinelibrary.wiley.com/doi/10.1155/2023/6648138",
    file: "./files/a.pdf",
  },
  {
    id: 2,
    title: "Resilient Healthcare Systems",
    description:
      "One of the most emotionally complex aspects of aged care is supporting residents in the final stages of life. This literature helped me reflect on the importance of communicating end-of-life issues with sensitivity and honesty. The idea that open dialogue can empower both residents and their families gave me a new perspective on palliative care. As a result, I’ve learned to listen more deeply, respect personal choices, and help others navigate this challenging phase with dignity.",
    citation:
      "Lyng, H. B., Macrae, C., Guise, V., Haraldseid-Driftland, C., Fagerdal, B., Schibevaag, L., Alsvik, J. G., & Wiig, S. (2021). Balancing Adaptation and Innovation for Resilience in Healthcare – a Metasynthesis of Narratives. BMC Health Services Research, 21(21), 759. https://doi.org/10.1186/s12913-021-06592-0",
    link: "https://bmchealthservres.biomedcentral.com/articles/10.1186/s12913-021-06592-0",
    file: "./files/b.pdf",
  },
  {
    id: 3,
    title: "Medication Safety Standards",
    description:
      "One of the most emotionally complex aspects of aged care is supporting residents in the final stages of life. This literature helped me reflect on the importance of communicating end-of-life issues with sensitivity and honesty. The idea that open dialogue can empower both residents and their families gave me a new perspective on palliative care. As a result, I’ve learned to listen more deeply, respect personal choices, and help others navigate this challenging phase with dignity.",
    citation:
      "Australian Commission on Safety and Quality in Health Care. (2024). Medication safety standard. Australian Commission on Safety and Quality in Health Care. https://www.safetyandquality.gov.au/standards/nsqhs-standards/medication-safety-standard",
    link: "https://www.safetyandquality.gov.au/standards/nsqhs-standards/medication-safety-standard",
    file: "./files/c.pdf",
  },
  {
    id: 4,
    title: "Healthcare Relationships & Nursing leadership",
    description:
      "One of the most emotionally complex aspects of aged care is supporting residents in the final stages of life. This literature helped me reflect on the importance of communicating end-of-life issues with sensitivity and honesty. The idea that open dialogue can empower both residents and their families gave me a new perspective on palliative care. As a result, I’ve learned to listen more deeply, respect personal choices, and help others navigate this challenging phase with dignity.",
    citation:
      "Hult, M., Terkamo-Moisio, A., Kaakinen, P., Karki, S., Nurmeksela, A., Palonen, M., Peltonen, L.-M., & Häggman-Laitila, A. (2023). Relationships between nursing leadership and organizational, staff and patient outcomes: A systematic review of reviews. Nursing Open, 10(9), 5920–5936. https://doi.org/10.1002/nop2.1876",
    link: "https://onlinelibrary.wiley.com/doi/10.1002/nop2.1876",
    file: "./files/d.pdf",
  },
   {
    id: 5,
    title: "Ethical AI Integration in Healthcare",
    description:
      "One of the most emotionally complex aspects of aged care is supporting residents in the final stages of life. This literature helped me reflect on the importance of communicating end-of-life issues with sensitivity and honesty. The idea that open dialogue can empower both residents and their families gave me a new perspective on palliative care. As a result, I’ve learned to listen more deeply, respect personal choices, and help others navigate this challenging phase with dignity.",
    citation:"Elendu, C., Amaechi, D. C., Elendu, T. C., Jingwa, K. A., Okoye, O. K., John Okah, M., Ladele, J. A., Farah, A. H., & Alimi, H. A. (2023). Ethical implications of AI and robotics in healthcare: A review. Medicine, 102(50), e36671. https://doi.org/10.1097/MD.0000000000036671",
        link: "https://journals.lww.com/md-journal/fulltext/2023/12150/ethical_implications_of_ai_and_robotics_in.101.aspx",
    file: "./files/e.pdf",
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
          These reviews deepened my clinical insight, enhanced critical
          thinking, and guided my approach to patient care and decision-making.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-5 md:gap-10">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="  p-6 flex flex-col justify-between h-full"
          >
            <div className="text-lg md:text-2xl font-semibold   text-indigo-800 font-cardo">
              {review.title}
            </div>
            <hr className=" mb-4" />
            <p className="text-gray-700 text-sm md:text-base mb-4 font-cardo">
              {review.description}
            </p>

            <p className="text-gray-500  text-xs mb-4 font-cardo">
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
        ))}
      </div>
    </div>
  );
};

export default LiteratureReview;
