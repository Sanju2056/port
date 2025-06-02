// // import Image from "next/image";
// // import { a, b, c, d, e } from "../assets"; // Adjust the import path as necessary

// // // Add your image imports here, or use public folder paths
// // const images = [
// //   {
// //     src: a,
// //     title: "Rheumatic Heart Research: Swab collection in Nepal",
// //   },
// //   {
// //     src: b,
// //     title: "Celebrating Mother's Day at Manavsewa Ashram, Nepal",
// //   },

// //   {
// //     src: d,
// //     title:
// //       "Rescue Mission: Rescuing homeless individuals from the streets and providing care at Manavsewa Ashram, Nepal",
// //   },
// //   {
// //     src: e,
// //     title: "Amma Seminar: Manavsewa Ashram's initiative in Sydney, Australia",
// //   },
// //   {
// //     src: c,
// //     title: "Rheumatic Heart Research: Swab collection in Nepal",
// //   },
// // ];

// // const Gallery = () => {
// //   return (
// //     <div className="py-10 md:py-16 xl:py-24 w-full flex justify-center items-center bg-white">
// //       <div className="w-full max-w-6xl px-4">
// //         <p className="font-semibold text-3xl text-center mb-5 text-[#2e2e2e] md:text-4xl">
// //           Gallery
// //         </p>

// //         <p className=" text-base sm:text-lg mb-5 text-[#6f6f6f]">
// //           My gallery showcases meaningful moments from health research,
// //           community celebrations, and outreach efforts. It features snapshots
// //           from swab collection drives in rural areas, festive Mother's Day
// //           events at the ashram, and rescue missions providing care for the
// //           homeless. Also included are glimpses of international initiatives,
// //           such as a seminar held in Sydney, highlighting the ongoing commitment
// //           to compassion and service.
// //         </p>
// //         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
// //           {images.map((img, idx) => (
// //             <div
// //               key={idx}
// //               className="flex flex-col shadow-sm space-y-5 px-4 py-6 items-center"
// //             >
// //               <div className="w-full h-96 overflow-hidden rounded-lg border border-gray-200 shadow-sm">
// //                 <Image
// //                   src={img.src}
// //                   alt={img.title}
// //                   width={650}
// //                   height={550}
// //                   className="w-full h-full object-cover"
// //                 />
// //               </div>
// //               <p className=" text-sm md:text-base font-medium text-center text-gray-700 ">
// //                 {img.title}
// //               </p>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Gallery;
// import Image from "next/image";
// import { a, b, c, d, e } from "../assets"; // Adjust path as needed

// const images = [
//   {
//     src: a,
//     title: "Rheumatic Heart Research: Swab collection in Nepal",
//   },
//   {
//     src: b,
//     title: "Celebrating Mother's Day at Manavsewa Ashram, Nepal",
//   },
//   {
//     src: c,
//     title: "Rheumatic Heart Research: Swab collection in Nepal",
//   },
//   {
//     src: d,
//     title:
//       "Rescue Mission: Rescuing homeless individuals from the streets and providing care at Manavsewa Ashram, Nepal",
//   },
//   {
//     src: e,
//     title: "Amma Seminar: Manavsewa Ashram's initiative in Sydney, Australia",
//   },
// ];

// const Gallery = () => {
//   return (
//     <div className="py-12 px-4 w-full max-w-6xl mx-auto bg-white">
//       <p className="font-semibold text-3xl text-center mb-5 text-[#2e2e2e] md:text-4xl">
//         Gallery{" "}
//       </p>{" "}
//       {/* <p className=" text-base sm:text-lg mb-10 text-[#6f6f6f]">
//          My gallery showcases meaningful moments from health research, 
//         community celebrations, and outreach efforts. It features snapshots 
//         from swab collection drives in rural areas, festive Mother's Day 
//         events at the ashram, and rescue missions providing care for the 
//         homeless. Also included are glimpses of international initiatives, 
//         such as a seminar held in Sydney, highlighting the ongoing commitment 
//         to compassion and service. 
//       </p> */}
//       <div className="flex flex-col md:flex-row gap-9">
//         {/* Left column */}
//         <div className="flex flex-col gap-8 w-full md:w-1/2">
//           <GalleryCard image={images[0]} />
//           <GalleryCard image={images[2]} />
//           <GalleryCard image={images[3]} />
//         </div>

//         {/* Right column */}
//         <div className="flex flex-col gap-8 w-full md:w-1/2">
//           <GalleryCard image={images[1]} />
//           <div className="flex-1 flex items-center    justify-center">
//           <p className=" text-base  lg:text-xl font-medium   text-[#3a3a3a]">
//             “ My gallery showcases meaningful moments from health research,
//             community celebrations, and outreach efforts. It features snapshots
//             from swab collection drives in rural areas, festive Mother's Day
//             events at the ashram, and rescue missions providing care for the
//             homeless. Also included are glimpses of international initiatives,
//             such as a seminar held in Sydney, highlighting the ongoing
//             commitment to compassion and service. ”
//           </p>
//             </div>
//           <GalleryCard image={images[4]} />
//         </div>
//       </div>
//     </div>
//   );
// };

// const GalleryCard = ({ image }) => (
//   <div className="flex flex-col  py-5 shadow-sm space-y-4 items-center">
//     <div className="w-full  h-96 overflow-hidden rounded-lg">
//       <Image
//         src={image.src}
//         alt={image.title}
//         width={650}
//         height={550}
//         className="w-full h-full object-cover"
//       />
//     </div>
//     <p className="text-sm md:text-lg font-medium text-center text-gray-700">
//       {image.title}
//     </p>
//   </div>
// );

// export default Gallery;
"use client";
import Image from "next/image";
import { useState } from "react";
import { a, b, c, d, e } from "../assets"; // Adjust path

const images = [
  {
    src: a,
    title: "Rheumatic Heart Research: Swab collection in Nepal",
  },
  {
    src: b,
    title: "Celebrating Mother's Day at Manavsewa Ashram, Nepal",
  },
  {
    src: c,
    title: "Rheumatic Heart Research: Swab collection in Nepal",
  },
  {
    src: d,
    title:
      "Rescue Mission: Rescuing homeless individuals from the streets and providing care at Manavsewa Ashram, Nepal",
  },
  {
    src: e,
    title: "Amma Seminar: Manavsewa Ashram's initiative in Sydney, Australia",
  },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="py-12 px-4 w-full max-w-6xl mx-auto bg-white">
      <p className="font-semibold text-3xl text-center mb-5 text-[#2e2e2e] md:text-4xl">
        Gallery
      </p>

      {/* Description for small screens */}
      <div className="block md:hidden mb-8">
        <p className="text-base font-medium text-[#3a3a3a] text-center">
          “ My gallery showcases meaningful moments from health research,
          community celebrations, and outreach efforts. It features
          snapshots from swab collection drives in rural areas, festive
          Mother's Day events at the ashram, and rescue missions providing
          care for the homeless. Also included are glimpses of international
          initiatives, such as a seminar held in Sydney, highlighting the
          ongoing commitment to compassion and service. ”
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-9">
        {/* Left column */}
        <div className="flex flex-col gap-8 w-full md:w-1/2">
          <GalleryCard
            image={images[0]}
            onClick={() => setSelectedImage(images[0])}
          />
          <GalleryCard
            image={images[2]}
            onClick={() => setSelectedImage(images[2])}
          />
          <GalleryCard
            image={images[3]}
            onClick={() => setSelectedImage(images[3])}
          />
        </div>

        {/* Right column */}
        <div className="flex flex-col gap-8 w-full md:w-1/2">
          <GalleryCard
            image={images[1]}
            onClick={() => setSelectedImage(images[1])}
          />

          {/* Description for medium and up */}
          <div className="hidden md:flex flex-1 items-center justify-center">
            <p className="text-base lg:text-xl font-medium text-[#3a3a3a] text-left">
              “ My gallery showcases meaningful moments from health research,
              community celebrations, and outreach efforts. It features
              snapshots from swab collection drives in rural areas, festive
              Mother's Day events at the ashram, and rescue missions providing
              care for the homeless. Also included are glimpses of international
              initiatives, such as a seminar held in Sydney, highlighting the
              ongoing commitment to compassion and service. ”
            </p>
          </div>

          <GalleryCard
            image={images[4]}
            onClick={() => setSelectedImage(images[4])}
          />
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative w-11/12 md:w-3/4 lg:w-1/2"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-white text-xl font-bold z-10"
              onClick={() => setSelectedImage(null)}
            >
              &times;
            </button>
            <Image
              src={selectedImage.src}
              alt={selectedImage.title}
              width={1000}
              height={800}
              className="w-full h-auto object-contain rounded-lg"
            />
            <p className="text-white text-center mt-4 text-lg">
              {selectedImage.title}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

const GalleryCard = ({ image, onClick }) => (
  <div
    className="flex flex-col py-5 shadow-sm space-y-4 items-center cursor-pointer"
    onClick={onClick}
  >
    <div className="w-full h-96 overflow-hidden rounded-lg">
      <Image
        src={image.src}
        alt={image.title}
        width={650}
        height={550}
        className="w-full h-full object-cover"
      />
    </div>
    <p className="text-sm md:text-lg font-medium text-center text-gray-700">
      {image.title}
    </p>
  </div>
);

export default Gallery;
