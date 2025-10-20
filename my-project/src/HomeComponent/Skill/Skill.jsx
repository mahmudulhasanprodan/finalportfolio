import { IoLogoHtml5 } from "react-icons/io5";
import { IoLogoCss3 } from "react-icons/io5";
import { IoLogoNodejs } from "react-icons/io5";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { TbBrandRedux } from "react-icons/tb";
import { FaNodeJs } from "react-icons/fa";
import { SiAxios } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiAdobephotoshop } from "react-icons/si";
import { useContext } from "react";
import { ThemeProvider } from "../../Utils/ThemContex";

const Skill = () => {
const { themeUser } = useContext(ThemeProvider);

  return (
    <>
      <div className="bg-mainBg">
        <div className="container">
          <div
            className={`${
              themeUser === "light"
                ? "py-10 bg-bgColor shadow-xl md:px-4"
                : "py-10  bg-slate-900 shadow-xl md:px-4"
            }`}
          >
            <div className="">
              <div className="w-full pt-10 md:flex md:flex-col md:items-center md:justify-center">
                <h2
                  className={`${
                    themeUser === "light"
                      ? "font-JosefinSans font-bold text-3xl text-center md:text-start"
                      : "font-JosefinSans font-bold text-3xl text-textColorTwo text-center md:text-start"
                  }`}
                >
                  My Expertise Area
                </h2>
                <p
                  className={`${
                    themeUser === "light"
                      ? "font-JosefinSans font-normal text-sm text-center mt-3 md:px-48"
                      : "font-JosefinSans font-normal text-sm text-center mt-3 text-textColorOne"
                  }`}
                >
                  I am a Jr. MERN Stack Developer with experience in building
                  full-stack web applications using MongoDB, Express.js,
                  React.js, and Node.js.
                </p>
              </div>
              {/* skill part is here */}
              <div className="mt-10">
                <div className="w-full px-4 rounded-md md:p-6 md:px-10 flex items-center justify-center m-auto gap-x-4 gap-y-4 flex-wrap py-10 cursor-pointer">
                  <div className="bg-bgColortwo py-1 w-24 flex items-center rounded-md gap-x-1 px-1">
                    <span className="text-textColorOne font-bold">
                      <IoLogoHtml5 />
                    </span>
                    <h2 className="font-JosefinSans font-bold text-sm">HTML</h2>
                  </div>
                  <div className="bg-bgColortwo py-1 flex items-center rounded-md gap-x-1 px-3">
                    <span className="text-textColorOne font-bold">
                      <IoLogoCss3 />
                    </span>
                    <h2 className="font-JosefinSans font-bold text-sm">CSS</h2>
                  </div>
                  <div className="bg-bgColortwo py-1 flex items-center rounded-md gap-x-2 px-3">
                    <span className="text-textColorOne font-bold">
                      <IoLogoNodejs />
                    </span>
                    <h2 className="font-JosefinSans font-bold text-sm">
                      JavaScript
                    </h2>
                  </div>
                  <div className="bg-bgColortwo py-1 flex items-center rounded-md gap-x-2 px-3">
                    <span className="text-textColorOne font-bold">
                      <RiReactjsLine />
                    </span>
                    <h2 className="font-JosefinSans font-bold text-sm">
                      Reactjs
                    </h2>
                  </div>
                  <div className="bg-bgColortwo py-1 flex items-center rounded-md gap-x-2 px-3">
                    <span className="text-textColorOne font-bold">
                      <TbBrandNextjs />
                    </span>
                    <h2 className="font-JosefinSans font-bold text-sm">
                      Nextjs
                    </h2>
                  </div>
                  <div className="bg-bgColortwo py-1 flex items-center rounded-md gap-x-2 px-3">
                    <span className="text-textColorOne font-bold">
                      <SiTailwindcss />
                    </span>
                    <h2 className="font-JosefinSans font-bold text-sm">
                      TwailwindCss
                    </h2>
                  </div>
                  <div className="bg-bgColortwo py-1 px-3 flex items-center rounded-md gap-x-2 ">
                    <span className="text-textColorOne font-bold">
                      <IoLogoFirebase />
                    </span>
                    <h2 className="font-JosefinSans font-bold text-sm">
                      Firebase
                    </h2>
                  </div>
                  <div className="bg-bgColortwo py-1 px-3 flex items-center rounded-md gap-x-2">
                    <span className="text-textColorOne font-bold">
                      <TbBrandRedux />
                    </span>
                    <h2 className="font-JosefinSans font-bold text-sm">
                      Redux/Redux Toolkit
                    </h2>
                  </div>
                  <div className="bg-bgColortwo py-1 flex items-center rounded-md gap-x-2 px-3">
                    <span className="text-textColorOne font-bold">
                      <SiAxios />
                    </span>
                    <h2 className="font-JosefinSans font-bold text-sm">
                      Axios
                    </h2>
                  </div>
                  <div className="bg-bgColortwo py-1 flex items-center rounded-md gap-x-2 px-3">
                    <span className="text-textColorOne font-bold">
                      <FaNodeJs />
                    </span>
                    <h2 className="font-JosefinSans font-bold text-sm">
                      Nodejs
                    </h2>
                  </div>
                  <div className="bg-bgColortwo py-1 flex items-center rounded-md gap-x-2 px-3">
                    <span className="text-textColorOne font-bold">
                      <SiExpress />
                    </span>
                    <h2 className="font-JosefinSans font-bold text-sm">
                      Expressjs
                    </h2>
                  </div>
                  <div className="bg-bgColortwo py-1 flex items-center rounded-md gap-x-2 px-3">
                    <span className="text-textColorOne font-bold">
                      <SiMongodb />
                    </span>
                    <h2 className="font-JosefinSans font-bold text-sm">
                      MongoDB
                    </h2>
                  </div>
                  <div className="bg-bgColortwo py-1 flex items-center rounded-md gap-x-2 px-3">
                    <span className="text-textColorOne font-bold">
                      <SiAdobephotoshop />
                    </span>
                    <h2 className="font-JosefinSans font-bold text-sm">
                      Photoshop
                    </h2>
                  </div>
                </div>
              </div>
              {/* skill part is here */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skill
