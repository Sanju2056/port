import Image from "next/image";
import ProfileImage from "../assets/profileeee.png";
import FooterContactForm from "../components/ContactUs";
import MissonVison from "../components/MissonVison";
// import CapabilityStatement from "../components/CapabilityStatement";
// import Resume from "../components/Resume";
// import Artefacts from "../components/Artefacts";
// import LiteratureReview from "../components/LiteratureReview";
// import Gallery from "../components/Gallery";
// import Training from "../components/Training";

const Home = () => {
  return (
    <div className="bg-white w-full flex flex-col items-center justify-center pt-10 pb-0">
      {/* Top Section */}
      <div className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0 px-4 md:px-10 lg:px-0 pt-10 lg:pt-20 pb-8 border-b border-gray-200">
        {/* Left: Text */}
        <div className="flex-1 flex flex-col gap-2 md:gap-4 items-start md:items-start">
          <div>
            <h1 className="text-2xl  font-cardo font-semibold leading-tight text-[#2e2e2e] mb-2">
              Hey There !
            </h1>
            <h2 className="text-xl md:text-5xl font-cardo font-bold leading-tight text-[#2e2e2e] ">
              I'm Muna Oli
            </h2>
            
          </div>

          <p className="text-gray-600 text-base md:text-lg max-w-lg mb-2">
            As an experienced nurse transitioning into health leadership through
            my Master of Health Service Management, I merge clinical expertise
            from Nepal’s ICUs with aged care leadership in NSW. Passionate about
            implementing evidence-based improvements, I specialize in medication
            safety, culturally inclusive care, and workforce resilience
            strategies. My goal is to optimise healthcare systems while
            preserving the human connection that is at the heart of quality
            care.
          </p>
         
        </div>
        {/* Right: Profile Image + Asterisk */}
        <div className="flex flex-col items-center gap-2">
          <div className="relative">
            <Image
              src={ProfileImage}
              alt="portfolio"
              className="w-[220px] h-[220px] md:w-[360px] md:h-[360px] rounded-full object-cover border-4 border-gray-200 shadow-lg"
            />
            {/* <span className="absolute -top-4 -right-4 text-red-600 text-5xl font-bold select-none">
              *
            </span> */}
          </div>
          <div className="flex gap-2 mt-2 text-gray-500 text-lg">
            <span className="hover:text-black cursor-pointer">&#8226;</span>
            <span className="hover:text-black cursor-pointer">&#8226;</span>
            <span className="hover:text-black cursor-pointer">&#8226;</span>
          </div>
        </div>
      </div>
      {/* Experience Section */}
     <MissonVison />
      {/* Mission, Vision & Objectives Section - Cleaned Up */}
     
      <div className="bg-black text-white w-full py-20 px-6 sm:px-10 md:px-20 xl:px-36 flex flex-col items-center gap-10 text-center">
        <p className="text-xl sm:text-2xl md:text-3xl max-w-6xl">
          “In a system that cannot always change overnight, I choose to be the
          part that evolves—with knowledge, compassion, and purpose.”
        </p>

        <div className="flex flex-col items-center gap-4">
          <Image
            src={ProfileImage}
            alt="profile"
            className="h-20 w-20 object-cover rounded-full"
          />
          <p className="text-sm">- Muna Oli</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
