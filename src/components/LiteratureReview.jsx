import React from "react";

const reviews = [
  {
    id: 1,
    title: "Cultural Competence in Aged Care",
    description:
      "As someone working in a multicultural aged care setting, I often face communication challenges rooted in cultural misunderstandings. Learning how healthcare systems can improve cultural competence has been pivotal in shaping my ability to offer respectful and inclusive care. I began to appreciate the importance of recognising cultural values, beliefs, and expectations, especially when interacting with residents from Indigenous and CALD (Culturally and Linguistically Diverse) backgrounds. The insights gained have improved my ability to build trust and reduce potential conflicts, both of which are essential in the caregiving profession.",
    citation:
      "Truong, M., Paradies, Y., & Priest, N. (2014). Interventions to improve cultural competency in healthcare. BMC Health Services Research, 14(1), 99.",
    link: "https://bmchealthservres.biomedcentral.com/articles/10.1186/1472-6963-14-99",
    file: "./files/CulturalCompetanceInAgeCare.pdf",
  },
  {
    id: 2,
    title: "Loneliness and Social Isolation in Aged Care",
    description:
      "Coming from a close-knit family background, I found it emotionally challenging to see elderly residents go weeks without visitors. Exploring this literature gave me a deeper appreciation of the psychological harm caused by prolonged social isolation and loneliness among older people. What stood out to me was how simple, low-cost interventions like group engagement, storytelling, or digital connections can make a meaningful difference. It encouraged me to become more proactive in organising activities and facilitating social interaction as part of holistic care.",
    citation:
      "Gardiner, C., Geldenhuys, G., & Gott, M. (2018). Interventions to reduce social isolation among older people. Health & Social Care in the Community, 26(2), 147–157.",
    link: "https://onlinelibrary.wiley.com/doi/10.1111/hsc.12367",
    file: "./files/2.pdf",
  },
  {
    id: 3,
    title: "Health Literacy Studies",
    description:
      "My experience in the healthcare sector has shown me how critical health literacy is, especially among older adults and individuals from diverse cultural backgrounds. This review of health literacy studies conducted in Australia helped me understand the significant challenges many people face in navigating the healthcare system due to limited knowledge and communication barriers. It made me more aware of how I communicate with patients—using simpler language, confirming understanding, and being culturally sensitive. This resource has played an important role in shaping how I support patient empowerment and ensure individuals are truly informed participants in their care decisions.",
    citation:
      "Choudhry, F. R., et al. (2019). Health Literacy Studies in Australia: A Scoping Review. IJERPH, 16(7), 1112.",
    link: "https://www.mdpi.com/1660-4601/16/7/1112",
    file: "./files/5.pdf",
  },
  {
    id: 4,
    title: "Nutrition and Elderly Wellbeing",
    description:
      "Working closely with elderly residents has shown me firsthand how critical nutrition is to their physical health, emotional stability, and overall quality of life. I found this review particularly eye-opening because it highlights how poor dietary intake among older adults contributes not just to frailty and illness but also to depression and cognitive decline. The article reinforced the idea that nutrition isn’t just about food—it’s about dignity, autonomy, and social connection. I now place greater importance on observing eating patterns, understanding individual preferences, and encouraging social mealtimes. It also influenced me to collaborate more actively with dietitians and care staff to ensure residents' nutritional needs are met holistically.",
    citation:
      "Volkert, D., et al. (2019). ESPEN guideline on clinical nutrition and hydration in geriatrics. Clinical Nutrition, 38(1), 10–47.",
    link: "https://www.clinicalnutritionjournal.com/article/S0261-5614(18)30210-3/fulltext",
    file: "./files/4.pdf",
  },
  {
    id: 5,
    title: "End-of-Life Care and Communication",
    description:
      "One of the most emotionally complex aspects of aged care is supporting residents in the final stages of life. This literature helped me reflect on the importance of communicating end-of-life issues with sensitivity and honesty. The idea that open dialogue can empower both residents and their families gave me a new perspective on palliative care. As a result, I’ve learned to listen more deeply, respect personal choices, and help others navigate this challenging phase with dignity.",
    citation:
      "Clayton, J. M., et al. (2007). Clinical practice guidelines for end-of-life communication. MJA, 186(12), S77–S105.",
    link: "https://onlinelibrary.wiley.com/doi/abs/10.5694/j.1326-5377.2007.tb01100.x",
    file: "./files/3.pdf",
  },
];

const LiteratureReview = () => {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-12">
      <div className="text-center mb-12 max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
          Literature Reviews
        </h2>
        <p className="text-gray-600 text-base sm:text-lg">
          These reviews deepened my clinical insight, enhanced critical
          thinking, and guided my approach to patient care and healthcare
          decision-making.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="bg-white border border-gray-200 rounded-xl shadow hover:shadow-md transition-shadow p-6"
          >
            <h3 className="text-lg font-semibold text-indigo-700 mb-2">
              {review.id}. {review.title}
            </h3>
            <p className="text-gray-700 mb-3 text-sm">{review.description}</p>
            <p className="text-gray-500 italic text-xs mb-3">
              {review.citation}
            </p>
            <a
              href={review.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-blue-600 hover:underline"
            >
              View full paper →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LiteratureReview;
