import React from "react";

const literatureReviews = [
  {
    id: 1,
    title: "Physician Burnout: Systematic Review",
    link: "https://doi.org/10.1016/s0140-6736(16)31279-x",
    summary:
      "This review by West et al. has helped me, as a foreign student studying in Australia, to understand that physician burnout is a complicated problem that may be addressed by organizational and individual measures. I use stress management, mindfulness training, and group discussions, especially when it comes to my personal resilience. This study shows that addressing burnout necessitates a flexible, multifaceted strategy that takes systemic and individual aspects into account. Overall, it implies that to significantly lower physician burnout, healthcare institutions should place a high priority on creating supportive work environments.",
    citation:
      "West, C. P., Dyrbye, L. N., Erwin, P. J., & Shanafelt, T. D. (2016). Interventions to prevent and reduce physician burnout: a systematic review and meta-analysis, The Lancet, 388(10057), pp. 2272–2281. https://doi.org/10.1016/s0140-6736(16)31279-x."
  },
  // Add more reviews as needed
];

const LiteratureReviewCard = ({ review }) => (
  <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col gap-4 border hover:shadow-2xl transition">
    <div className="flex items-center gap-3">
      <div className="bg-blue-100 text-blue-700 rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg">
        {review.id}
      </div>
      <h3 className="text-xl font-semibold font-cardo">{review.title}</h3>
    </div>
    <a
      href={review.link}
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-600 underline text-sm break-all"
    >
      {review.link}
    </a>
    <p className="text-gray-700 text-base font-cardo">{review.summary}</p>
    <p className="text-xs text-gray-500 italic font-cardo">{review.citation}</p>
  </div>
);

const LiteratureReviewList = () => {
  return (
    <div className="my-10 md:my-16 max-w-5xl mx-auto px-4">
      <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center font-cardo">Literature Reviews</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {literatureReviews.map((review) => (
          <LiteratureReviewCard key={review.id} review={review} />
        ))}
      </div>
    </div>
  );
};

export default LiteratureReviewList;
