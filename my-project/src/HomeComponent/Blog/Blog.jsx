import { BlogProduct } from "../../Utils/Utils";
import { useContext } from "react";
import { ThemeProvider } from "../../Utils/ThemContex";

const Blog = () => {
 
  const { themeUser } = useContext(ThemeProvider);



  return (
    <>
      <div className="bg-mainBg" id="blog">
        <div className="container">
          <div
            className={`${
              themeUser === "light"
                ? "bg-bgColor shadow-xl md:px-4 py-20"
                : "bg-slate-900 shadow-xl md:px-4 py-20"
            }`}
          >
            <div className="flex item center justify-center py-10 pb-10">
              <h2
                className={`${
                  themeUser === "light"
                    ? "font-JosefinSans font-bold text-3xl"
                    : "font-JosefinSans font-bold text-3xl text-textColorTwo"
                }`}
              >
                Blogs
              </h2>
            </div>
            <div className="flex flex-wrap gap-x-10 justify-center gap-y-10 cursor-pointer">
              {BlogProduct?.map((item) => (
                <div key={item.id}>
                  <div className="w-full sm:w-[650px] md:w-[450px] h-[450px] md:h-[400px] bg-textColorOne rounded-md shadow-md p-2 px-4">
                    <div>
                      <picture>
                        <img
                          src={item.blogImg}
                          alt={item.blogImg}
                          className="w-full h-48 shadow-md"
                        />
                      </picture>
                    </div>
                    <div className="flex flex-col gap-y-2">
                      <div className="h-32">
                        <h3 className="font-JosefinSans font-bold text-sm pt-2 text-textColorThree">
                          {item.date ? item.date : "30-Sep,2025"}
                        </h3>
                        <h2 className="font-JosefinSans font-bold text-md pt-1">
                          {item.title ? item.title : "no Title"}
                        </h2>
                        <p className="font-JosefinSans text-sm text-justify mt-2">
                          {item.description}
                        </p>
                      </div>
                      <div className="mt-6 md:mt-0">
                        <a
                          href={item.button}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <button className="px-4 py-2 bg-textColorTwo rounded-md text-textColorOne font-JosefinSans font-bold mt-3">
                            Read More
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Blog
