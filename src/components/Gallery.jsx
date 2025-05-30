import Image from "next/image";
import { a, b, c, d, e } from "../assets"; // Adjust the import path as necessary

// Add your image imports here, or use public folder paths
const images = [
  a,
  b,
  c,
  d,
  e,
  // Example: "/images/image1.jpg",
  // Add more image paths as needed
];

const Gallery = () => {
  return (
    <div className="my-10 md:my-16  ">
      <div className="mb-10 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold mb-3 font-cardo">
          Gallery
        </h1>
        <p className="text-base sm:text-lg text-gray-700 font-cardo">
          A visual journey through my community work, training sessions, and
          outreach efforts—highlighting hands-on experience, collaboration, and
          dedication to health education and social impact.
        </p>
      </div>
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {images.map((src, idx) => (
          <div
            key={idx}
            className="overflow-hidden rounded-lg shadow-lg bg-white flex items-center justify-center"
          >
            <Image
              src={src}
              alt={`Gallery image ${idx + 1}`}
              width={400}
              height={300}
              className="w-full h-48 sm:h-56 md:h-64 object-cover hover:scale-105 transition-transform duration-300 font-cardo"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
