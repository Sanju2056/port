import Image from "next/image";
import ProfileImage from "../assets/profileeee.png";
import FooterContactForm from "../components/ContactUs";

// import CapabilityStatement from "../components/CapabilityStatement";
// import Resume from "../components/Resume";
// import Artefacts from "../components/Artefacts";
// import LiteratureReview from "../components/LiteratureReview";
// import Gallery from "../components/Gallery";
// import Training from "../components/Training";

const Home = () => {
  return (
    <div className=" flex flex-col justify-center items-center ">
      {/* Text Section */}
      <div className="flex flex-col lg:flex-row gap-10 xl:gap-20 py-20 px-8 md:px-20">
        <div className=" rounded-lg  overflow-hidden   ">
          <Image
            src={ProfileImage}
            alt="portfolio"
            className="w-[350px] h-[350px]  object-cover"
          />
        </div>
        <div className="flex justify-center flex-col gap-4  ">
          {/* <div className=" rounded-lg  overflow-hidden   ">
            <Image
              src={BackgroundImage}
              alt="background"
              className="w-[350px] h-[350px]  object-cover"
            />
          </div> */}
          <p className="font-semibold  text-xl sm:text-4xl">Hey there,</p>
          <p className="font-semibold  text-xl sm:text-4xl">I'm Muna Oli</p>
          <p className="max-w-3xl text-base sm:text-lg text-gray-700">
            As a final-year Master of Health Service Management student, I bring
            a comprehensive background in nursing and healthcare administration,
            motivated by a genuine passion for serving others. Helping others
            and creating positive changes in their lives is truly fulfilling for
            me.
          </p>
        </div>
      </div>

      {/* Image Section */}

      {/* Quote Section */}
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
