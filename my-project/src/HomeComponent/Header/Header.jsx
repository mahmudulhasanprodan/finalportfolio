
// import { FaCodeBranch } from "react-icons/fa6";
import { FaBarsStaggered } from "react-icons/fa6";
import{ useState,useContext, useRef, useEffect } from "react";
import { SiLintcode } from "react-icons/si";
import { ImBrightnessContrast } from "react-icons/im";
import {ThemeProvider} from "../../Utils/ThemContex"
import { gsap } from "gsap"

const Header = () => {

const[menuOpem,setmenuOpem] = useState(false);
const { themeUser, modeChanger } = useContext(ThemeProvider);
const menuref = useRef(null);

  

// HandleMenu Function is start Here
const HandleMenu = () => {
    setmenuOpem(!menuOpem)
};

//HandleCloseMenu Funcito is here
const HandleCloseMenu = () => {
    setmenuOpem(false);
};

// animation use GSAP

   useEffect(() => {
    if (menuOpem) {
      // Animate open
      gsap.fromTo(
        menuref.current,
        { x: "100%", opacity: 0, duration: 0.5, delay: 1, ease: "power3.out"},
        { x: 0, opacity: 1, duration: 0.5}
      );

      // Animate list items
      gsap.fromTo(
        menuref.current.querySelectorAll("li"),
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, stagger: 0.1, delay: 0.5 }
      );
    } else {
      // Animate close
      gsap.to(menuref.current, {
        x: "100%",
        opacity: 0,
        duration: 0.4,
        delay: 1,
        ease: "power2.in",
      });
    }
  }, [menuOpem]);


  return (
    <>
      <div className="bg-mainBg">
        <div className="container m-auto">
          <div
            className={`${
              themeUser === "light"
                ? "flex items-center fixed  w-full md:w-[100%] md:static justify-between py-2 bg-bgColor  shadow-xl px-2 md:px-4 pt-2"
                : "flex items-center fixed  w-full md:w-[100%] md:static justify-between py-2 bg-slate-900 shadow-xl px-2 md:px-4 pt-2"
            }`}
          >
            <div className="flex items-center cursor-pointer">
              <span className="text-3xl font-bold text-yellow-500">
                <SiLintcode />
              </span>
              <h2 className="font-JosefinSans leading-5 md:leading-6 text-xl md:text-2xl font-semibold text-textColorTwo">
                Mahmudul <br /> Hasan 
              </h2>
            </div>
            <div className="md:hidden">
              <span
                className={`${
                  themeUser === "light"
                    ? "font-bold text-xl cursor-pointer"
                    : "font-bold text-xl cursor-pointer text-textColorOne"
                }`}
                onClick={HandleMenu}
              >
                <FaBarsStaggered />
              </span>
            </div>
            <div className="hidden md:block">
              <ul className="flex items-center gap-x-10">
                <li
                  className={`${
                    themeUser === "light"
                      ? "font-JosefinSans text-md cursor-pointer"
                      : "font-JosefinSans text-md cursor-pointer text-textColorOne"
                  }`}
                >
                  <a href="#home">Home</a>
                </li>

                <li
                  className={`${
                    themeUser === "light"
                      ? "font-JosefinSans text-md cursor-pointer"
                      : "font-JosefinSans text-md cursor-pointer text-textColorOne"
                  }`}
                >
                  <a href="#about">About</a>
                </li>

                <li
                  className={`${
                    themeUser === "light"
                      ? "font-JosefinSans text-md cursor-pointer"
                      : "font-JosefinSans text-md cursor-pointer text-textColorOne"
                  }`}
                >
                  <a href="#blog">Blog</a>
                </li>
                <li
                  className={`${
                    themeUser === "light"
                      ? "font-JosefinSans text-md cursor-pointer"
                      : "font-JosefinSans text-md cursor-pointer text-textColorOne"
                  }`}
                >
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>
            <div className="absolute md:static right-10">
              <button
                className="font-JosefinSans px-4 py-2 rounded-md font-bold md:bg-textColorTwo flex  gap-x-2 text-textColorOne"
                onClick={modeChanger}
              >
                <span
                  className={`${
                    themeUser === "light"
                      ? "font-bold text-xl text-black md:text-textColorOne"
                      : "font-bold text-xl text-yellow-300"
                  }`}
                >
                  <ImBrightnessContrast />
                </span>
              </button>
            </div>
          </div>

          {/* Mobile menu bar is here */}
          {menuOpem && (
            <div className="md:hidden top-0 right-0 fixed w-full h-[100vh] bg-textColorThree z-50 " ref={menuref}>
              <div>
                <span
                  className="font-bold text-xl cursor-pointer flex z-50 px-4 text-textColorOne justify-end pt-3"
                  onClick={HandleCloseMenu}
                >
                  X
                </span>
              </div>
              <div className="pt-10">
                <ul className="flex flex-col items-center  gap-y-6 -z-20">
                  <li
                    className="font-JosefinSans text-md cursor-pointer text-textColorOne"
                    onClick={HandleCloseMenu}
                  >
                    <a href="#home">Home</a>
                  </li>
                  <li
                    className="font-JosefinSans text-md cursor-pointer text-textColorOne"
                    onClick={HandleCloseMenu}
                  >
                    <a href="#about">About</a>
                  </li>
                  <li
                    className="font-JosefinSans text-md cursor-pointer text-textColorOne"
                    onClick={HandleCloseMenu}
                  >
                    <a href="#blog">Blog</a>
                  </li>
                  <li
                    className="font-JosefinSans text-md cursor-pointer text-textColorOne"
                    onClick={HandleCloseMenu}
                  >
                    <a href="#contact">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Header
