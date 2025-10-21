import ProfileImage from "../../assets/MahmudulHasan.jpg"
import { PiHandWaving } from "react-icons/pi";
import { MdOutlineFileDownload } from "react-icons/md";
import { LuArrowRight } from "react-icons/lu";
import { useContext } from "react";
import { ThemeProvider } from "../../Utils/ThemContex";
import download from "../../assets/MahmudulHasan.pdf"

const Banner = () => {
  const { themeUser } = useContext(ThemeProvider);

 const whatappNumber = "+8801316625624" // write whatapp number
 const message = `Hi${"!"} How can I Help You ${"?"}` // Write the message
 const encodedMessage = encodeURIComponent(message) // Message encoded

 const whatappLink = `https://wa.me/${whatappNumber}?text=${encodedMessage}`


  return (
    <>
      <div className="bg-mainBg">
        <div className="container">
          <div
            className={`${
              themeUser === "light"
                ? "py-32 bg-bgColor shadow-xl"
                : "py-32 bg-slate-900 shadow-xl"
            }`}
          >
            <div className="flex flex-col items-center justify-center gap-y-3 -z-10">
              <div>
                <img
                  src={ProfileImage}
                  alt={ProfileImage}
                  className="w-56 h-56 rounded-full border-4 border-textColorTwo shadow-xl"
                />
              </div>
              <div className="flex items-center gap-x-1">
                <h2
                  className={`${
                    themeUser === "light"
                      ? "font-JosefinSans text-sm md:text-xl"
                      : "font-JosefinSans text-sm md:text-xl text-textColorTwo"
                  }`}
                >
                  Hi! I am Mahmudul Hasan
                </h2>
                <span className="text-yellow-700 text-3xl">
                  <PiHandWaving />
                </span>
              </div>
              <div className="mt-2 md:mt-4">
                <h1
                  className={`${
                    themeUser === "light"
                      ? "font-JosefinSans font-bold text-xl md:text-5xl text-center"
                      : "font-JosefinSans font-bold text-xl md:text-5xl text-center text-textColorOne"
                  }`}
                >
                  Mern Stack Web Developer <br />
                  based in Bangladesh
                </h1>
              </div>
              <div className="w-full md:w-[600px] px-4 md:px-0">
                <p
                  className={`${
                    themeUser === "light"
                      ? "font-JosefinSans text-xs md:text-sm text-center"
                      : "font-JosefinSans text-xs md:text-sm text-center text-textColorOne"
                  }`}
                >
                  I am a dedicated MERN stack developer with expertise in
                  building full-stack web applications using MongoDB,
                  Express.js, React, and Node.js.
                </p>
              </div>
              <div className="flex items-center gap-x-4 pt-4">
                <a href={whatappLink} target="_blank" rel="noopener noreferrer">
                  <button className="px-2 md:px-8 py-2 bg-textColorTwo rounded-md text-textColorOne font-semibold flex items-center gap-x-2">
                    Contact Whatsapp
                    <span className="font-bold">
                      <LuArrowRight />
                    </span>
                  </button>
                </a>
                <a href={download} download={download}>
                  <button
                    className={`${
                      themeUser === "light"
                        ? "px-2 md:px-8 py-2 border-2 border-textColorThree rounded-md font-semibold flex items-center gap-x-2 hover:bg-textColorThree"
                        : "px-2 md:px-8 py-2 border-2 border-textColorThree text-textColorOne rounded-md font-semibold flex items-center gap-x-2 hover:bg-textColorThree"
                    }`}
                  >
                    my resume
                    <span className="font-bold">
                      <MdOutlineFileDownload />
                    </span>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner
