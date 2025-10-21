import { useState } from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { useContext } from "react";
import { ThemeProvider } from "../../Utils/ThemContex";


const Footer = () => {



  const[contactModal,setcontactModal] = useState(false);
  const { themeUser } = useContext(ThemeProvider);
  const [contactData,setcontactData] = useState({
       name : "",
       email : "",
       message: "",
  })
const [storeData,setstoreData] = useState("")
  // HandleContact function is start here
  const HandleContact = () => {
      setcontactModal(!contactModal);
      document.body.style.overflow = "hidden"
  };

  // HandleCloseModal Function is here
  const HandleCloseModal = () => {
     setcontactModal(false);
     document.body.style.overflow = "auto";
  };

// Handlechange Function is start here
const Handlechange = (e) => {
   setcontactData({
    ...contactData,
    [e.target.id] : e.target.value,
   
   })
};


// Handlesubmit Function is here
   const Handlesubmit = async (e) => {
    e.preventDefault();
      try {
         const res = await fetch("https://finalportfolio-server.onrender.com/usersms", {
           method: "POST",
           headers: {
             "Content-Type": "application/json",
           },
           body: JSON.stringify({name, email , message}),
         
        });
          // Read response as text first
        const text = await res.text();

        let data;
      try {
      data = JSON.parse(text); // try parsing JSON
      } catch {
      // if not JSON, just log the raw text
      console.error("Backend did not return valid JSON:", text);
      data = { error: text };
    };
        
        if(res.ok){
          alert(data.msg)
          setcontactModal(false);
        }else{       
          console.log(data.error) 
          setcontactModal(false);
        }
          
      } catch (error) {
        console.log(error)
      }
       
   };


  
  return (
    <>
      <div className="bg-mainBg">
        <div className="container">
          <div
            className={`${
              themeUser === "light"
                ? "bg-bgColor shadow-xl pt-32"
                : "bg-slate-900 shadow-xl pt-32"
            }`}
          >
            <div
              className={`${
                themeUser === "light"
                  ? "bg-slate-900 w-full h-80 relative pt-24"
                  : "bg-slate-700 w-full h-80 relative pt-24"
              }`}
            >
              <div className="flex items-center justify-center">
                <div
                  className="w-full md:w-[750px] h-24 bg-textColorTwo absolute -top-12 flex items-center justify-between px-4 shadow-xl"
                  id="contact"
                >
                  <div>
                    <h2 className="font-JosefinSans text-sm md:text-md text-textColorOne font-bold">
                      Ready for a next projects?
                    </h2>
                    <p className="font-JosefinSans text-xs md:text-sm text-textColorOne">
                      Let{"'"}s get started!
                    </p>
                  </div>
                  <div>
                    <button
                      className="px-2 md:px-6 py-2 bg-slate-900 rounded-md text-textColorOne font-JosefinSans font-bold"
                      onClick={HandleContact}
                    >
                      Contact Me!
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col item-center justify-center gap-y-4 pt-6">
                <div>
                  <h2 className="font-JosefinSans font-bold text-2xl text-textColorOne text-center">
                    Mahmudul Hasan
                  </h2>
                  <h3
                    className={`${
                      themeUser === "light"
                        ? "font-JosefinSans font-bold text-md text-textColorOne text-center"
                        : "font-JosefinSans font-bold text-md text-textColorThree text-center"
                    }`}
                  >
                    Gazipur,Dhaka
                  </h3>
                </div>
                <div className="flex flex-col items-center justify-center gap-y-3">
                  <h2 className="font-JosefinSans font-bold text-xl text-textColorTwo">
                    Get In Touch
                  </h2>
                  <div className="flex items-center gap-x-3">
                    <span className="font-bold text-xl text-textColorOne cursor-pointer">
                      <a
                        href="https://www.facebook.com/share/1ZLABKt7ru/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {" "}
                        <FaFacebookSquare />
                      </a>
                    </span>
                    <span className="font-bold text-xl text-textColorOne cursor-pointer">
                      <a
                        href="http://www.linkedin.com/in/mahmudul-hasan"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaLinkedin />
                      </a>
                    </span>
                    <span className="font-bold text-xl text-textColorOne cursor-pointer">
                      <a
                        href="https://github.com/mahmudulhasanprodan"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaSquareGithub />
                      </a>
                    </span>
                  </div>
                </div>
                <div>
                  <p className="font-JosefinSans text-gray-500 text-center border-t-2 pt-4">
                    &copy;Mahmudul Hasan.All right reserved.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact madal is here */}
      </div>
      {/* Contact Modal is Here */}
      {contactModal && (
        <div className="w-full h-full md:w-[100vw] md:h-[100vh] inset-0 fixed z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-gray-600 opacity-60"></div>
          <div className="w-full md:w-[500px] bg-white z-50 relative shadow-lg rounded-md py-10">
            <div className="flex items-center justify-end pr-4">
              <p
                className="absolute font-bold text-2xl cursor-pointer text-red-600 top-2"
                onClick={HandleCloseModal}
              >
                X
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-JosefinSans font-bold mb-4 text-center text-textColorTwo">
                Contact Me
              </h2>
              <form className="flex flex-col gap-3 items-center justify-center" onSubmit={Handlesubmit} method="POST">
                <div className="flex flex-col gap-y-3">
                  <label htmlFor="" className="font-JosefinSans font-semibold">
                    Full Name*
                  </label>
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="border px-3 py-2 rounded-lg w-[300px] md:w-[400px]"
                    id="name"
                    onChange={Handlechange}
                  />
                   {storeData && <p className="font-JosefinSans text-red-700">{storeData.name.msg}</p>}
                </div>
                <div className="flex flex-col gap-y-3">
                  <label
                    htmlFor="Email"
                    className="font-JosefinSans font-semibold"
                  >
                    Email*
                  </label>
                  <input
                    type="email"
                    placeholder="Email"
                    id="email"
                    className="border px-3 py-2 rounded-lg w-[300px] md:w-[400px]"
                     onChange={Handlechange}
                  />
                   {storeData  && <p className="font-JosefinSans text-red-700">{storeData.email.msg}</p>}
                </div>
                <div className="flex flex-col gap-y-3">
                  <label htmlFor="" className="font-JosefinSans font-semibold">
                    Message*
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    className="w-[300px] md:w-[400px] min-h-24 border px-3 py-2 rounded-lg"
                    onChange={Handlechange}           
                  >
                  </textarea>
                  {storeData  && <p className="font-JosefinSans text-red-700">{storeData.message.msg}</p>}
                </div>
                <button className="bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 w-72 pt-3" type="submit">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Footer
