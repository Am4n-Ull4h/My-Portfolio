import React, { Fragment } from "react";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { HiOutlinePlayCircle } from "react-icons/hi2";
import { MdDialpad, MdKeyboardDoubleArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import ReactTypingEffect from "react-typing-effect";

function Header() {
  return (
    <Fragment>
      <div id="home" className="w-full h-screen bg-blue-400 Header_Main flex overflow-hidden  items-end relative text-white">
        <div className="rotate-[90deg] ml-[-60px] top-[30%] flex items-center gap-5 absolute" >
          <MdDialpad className="rotate-[-90deg]" />
          <p>( +92 ) 309 435579 1</p>
        </div>
        <div className="rotate-[90deg] ml-[-40px] absolute bottom-[20%] flex items-center gap-5">
          <p>SCROLL DOWN</p>
          <MdKeyboardDoubleArrowRight className="text-orange-500" />
        </div>

        <div className="rotate-[90deg] right-0 ml-[-40px] absolute top-[30%] flex items-center gap-5">
          <p>FOLLOW ME</p>
          <MdKeyboardDoubleArrowRight className="text-orange-500" />
        </div>

        <div className=" right-[3.5%] z-40 absolute bottom-[20%] flex flex-col items-center gap-5">
         
        <Link to='https://www.facebook.com/profile.php?id=100061582960084' className="p-2 rounded-full cursor-pointer hover:text-orange-500 bg-[#80808062]">
            <FaFacebook/>
        </Link>
        <Link to='' className="p-2 rounded-full cursor-pointer hover:text-orange-500 bg-[#80808062]">
            <FaInstagram/>
        </Link>
        <Link to='https://www.linkedin.com/in/amanullah91/' className="p-2 rounded-full cursor-pointer hover:text-orange-500 bg-[#80808062]">
            <FaLinkedin/>
        </Link>
        <Link to='https://github.com/Am4n-Ull4h' className="p-2 rounded-full cursor-pointer hover:text-orange-500 bg-[#80808062]">
            <FaGithub/>
        </Link>
        </div>

        <div className="flex w-[70%] mx-auto" >
          <div className="w-[70%]" data-aos='zoom-in'>
            <div className="text-[25px] border-b border-gray-400 pb-4 w-[60%]">
              <Link
                to="https://www.upwork.com/freelancers/~01bf32c6f95db869a1"
                className=" hover:text-orange-500 "
              >
                Currently Available for Freelance Worldwide ↗
              </Link>
            </div>

            <h1 className="text-[30px] mt-4">Hi, I'm</h1>
            <div className="relative h-[15vh] flex">
              <h1 className="text-[50px] absolute Words_Stroke">Aman Ullah</h1>
              <h1 className="text-[50px] absolute Words_Animation text-orange-500 ">
                Aman Ullah
              </h1>
            </div>
            <h1>
              <span className="text-orange-500"> Expert In : </span>
              <ReactTypingEffect
                text={[
                  "React Js",
                  "Next Js",
                  "Node Js",
                  "Express Js",
                  "MongoDB",
                  "DevOps",
                ]}
                speed={100}
                eraseSpeed={20}
                eraseDelay={2000}
                typingDelay={1000}
              />
            </h1>
            <p className="text-gray-400 mt-4 w-[70%]">
              As a Full-Stack Web Developer, I craft dynamic, user-friendly
              applications by blending front-end design with back-end
              functionality, leveraging modern frameworks and cloud integration
            </p>
            <button className="flex items-center gap-4 mt-3 py-3 w-[30%] mb-4 justify-center text-[20px] rounded-full bg-orange-500">
              Intro{" "}
              <span className="bg-black text-orange-500 p-2 rounded-full">
                <HiOutlinePlayCircle />
              </span>
            </button>
          </div>
          <img src="./aman3.webp" className="w-[50%] absolute top-0 right-3" alt="" data-aos='zoom-in' />
        </div>
        
      </div>
      
    </Fragment>
  );
}

export default Header;
