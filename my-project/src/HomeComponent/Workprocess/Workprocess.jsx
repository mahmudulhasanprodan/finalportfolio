import { useContext } from "react";
import { ThemeProvider } from "../../Utils/ThemContex";

const Workprocess = () => {
const { themeUser } = useContext(ThemeProvider);

  return (
    <>
      <div className="bg-mainBg">
        <div className="container">
          <div
            className={`${
              themeUser === "light"
                ? "bg-bgColor px-4 py-20"
                : "bg-slate-900 px-4 py-20"
            }`}
          >
            <div className="w-full md:w-[750px] flex flex-col justify-end md:pl-20">
              <h2
                className={`${
                  themeUser === "light"
                    ? "w-full font-JosefinSans text-3xl font-bold text-center md:text-start"
                    : "w-full font-JosefinSans text-3xl font-bold text-center md:text-start text-textColorTwo"
                }`}
              >
                Work Process
              </h2>
              <p
                className={`${
                  themeUser === "light"
                    ? "font-JosefinSans text-sm text-justify pt-4 hidden md:block"
                    : "font-JosefinSans text-sm text-justify pt-4 hidden md:block text-textColorOne"
                }`}
              >
                My process combines technical precision with creative
                problem-solving to ensure every project runs smoothly from idea
                to deployment..I build RESTful APIs using Node.js and Express,
                integrating with MongoDB for robust data management and
                implementing secure authentication with JWT. I connect the
                frontend with backend APIs, debug efficiently, and perform
                testing to ensure stability and reliability.
              </p>
            </div>
            <div className="flex items-center md:justify-end md:gap-x-6 md:pr-20 mt-16">
              <div className="w-full md:w-1/2 flex flex-col gap-y-4">
                <div className="w-full h-10 bg-textColorTwo rounded-md hover:shadow-lg cursor-pointer">
                  <div className="w-full h-10 bg-gray-200 hover:ml-1 rounded-md shadow-sm">
                    <h2 className="font-JosefinSans flex items-center h-full pl-3 text-sm font-bold text-textColorTwo">
                      1. First of all Requirement Analysis
                    </h2>
                  </div>
                </div>
                <div className="w-full h-10 bg-textColorTwo rounded-md hover:shadow-lg cursor-pointer">
                  <div className="w-full h-10 bg-gray-200 hover:ml-1 rounded-md shadow-sm">
                    <h2 className="font-JosefinSans flex items-center h-full pl-3 text-sm font-bold text-textColorTwo">
                      2. Development Environment Setup{" "}
                    </h2>
                  </div>
                </div>
                <div className="w-full h-10 bg-textColorTwo rounded-md hover:shadow-lg cursor-pointer">
                  <div className="w-full h-10 bg-gray-200 hover:ml-1 rounded-md shadow-sm">
                    <h2 className="font-JosefinSans flex items-center h-full pl-3 text-sm font-bold text-textColorTwo">
                      3. UI/UX Design Plan and Research
                    </h2>
                  </div>
                </div>
                <div className="w-full h-10 bg-textColorTwo rounded-md hover:shadow-lg cursor-pointer">
                  <div className="w-full h-10 bg-gray-200 hover:ml-1 rounded-md shadow-sm">
                    <h2 className="font-JosefinSans flex items-center h-full pl-3 text-sm font-bold text-textColorTwo">
                      4. Determining what the Folder Structure & Code
                      Architecture will be like
                    </h2>
                  </div>
                </div>
                <div className="w-full h-10 bg-textColorTwo rounded-md hover:shadow-lg cursor-pointer">
                  <div className="w-full h-10 bg-gray-200 hover:ml-1 rounded-md shadow-sm">
                    <h2 className="font-JosefinSans flex items-center h-full pl-3 text-sm font-bold text-textColorTwo">
                      5. Security ও Authentication
                    </h2>
                  </div>
                </div>
                <div className="w-full h-10 bg-textColorTwo rounded-md hover:shadow-lg cursor-pointer">
                  <div className="w-full h-10 bg-gray-200 hover:ml-1 rounded-md shadow-sm">
                    <h2 className="font-JosefinSans flex items-center h-full pl-3 text-sm font-bold text-textColorTwo">
                      6. Database Design / Schema Planning
                    </h2>
                  </div>
                </div>
                <div className="w-full h-10 bg-textColorTwo rounded-md hover:shadow-lg cursor-pointer">
                  <div className="w-full h-10 bg-gray-200 hover:ml-1 rounded-md shadow-sm">
                    <h2 className="font-JosefinSans flex items-center h-full pl-3 text-sm font-bold text-textColorTwo">
                      7. API Design / Backend Route Plan
                    </h2>
                  </div>
                </div>
                <div className="w-full h-10 bg-textColorTwo rounded-md hover:shadow-lg cursor-pointer">
                  <div className="w-full h-10 bg-gray-200 hover:ml-1 rounded-md shadow-sm">
                    <h2 className="font-JosefinSans flex items-center h-full pl-3 text-sm font-bold text-textColorTwo">
                      8. Testing Plan
                    </h2>
                  </div>
                </div>
                <div className="w-full h-10 bg-textColorTwo rounded-md hover:shadow-lg cursor-pointer">
                  <div className="w-full h-10 bg-gray-200 hover:ml-1 rounded-md shadow-sm">
                    <h2 className="font-JosefinSans flex items-center h-full pl-3 text-sm font-bold text-textColorTwo">
                      9. Deployment & Maintenance Plan
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Workprocess
