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
    <div className="py-5 md:py-10 lg:py-20 container w-full  flex justify-center items-center  ">
      <div className="w-full">
        <h1 className="  text-xl md:text-4xl font-semibold mb-5 md:mb-10 font-cardo">
          Gallery
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {images.map((src, idx) => (
            <div
              key={idx}
              className="overflow-hidden flex items-center justify-center"
            >
              <Image
                src={src}
                alt={`Gallery image ${idx + 1}`}
                width={650}
                height={450}
                className="w-full h-96 object-cover rounded-lg border border-gray-200"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
