import Image from "next/image";
import PortfolioImage from "../assets/portfolio.jpg";

const Home = () => {
  return (
    <div className="my-16 flex flex-col justify-center items-center gap-10 px-4 sm:px-6 md:px-10">
      {/* Text Section */}
      <div className="flex items-center flex-col gap-4 text-center">
        <p className="font-semibold text-2xl sm:text-3xl">Swastika e-portfolio</p>

        <p className="max-w-3xl text-base sm:text-lg text-gray-700">
          As a final-year Master of Health Service Management student, I bring a
          comprehensive background in nursing and healthcare administration,
          motivated by a genuine passion for serving others. Helping others and
          creating positive changes in their lives is truly fulfilling for me.
        </p>
      </div>

      {/* Image Section */}
      <div className="bg-red-500 rounded-lg w-full max-w-5xl overflow-hidden">
        <Image
          src={PortfolioImage}
          alt="portfolio"
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Quote Section */}
      <div className="bg-black text-white w-full py-12 px-6 sm:px-10 md:px-20 xl:px-36 flex flex-col items-center gap-10 text-center">
        <p className="text-xl sm:text-2xl md:text-3xl max-w-4xl">
          “We cannot lower the mountain, therefore we must elevate ourself.”
        </p>

        <div className="flex flex-col items-center gap-4">
          <Image
            src={PortfolioImage}
            alt="profile"
            className="h-10 w-10 object-cover rounded-full"
          />
          <p className="text-sm">Swastika Parajuli</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
