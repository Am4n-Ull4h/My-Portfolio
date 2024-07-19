import React, { Fragment, useState } from "react";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { HiOutlinePlayCircle } from "react-icons/hi2";
import { MdDialpad, MdKeyboardDoubleArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import ReactTypingEffect from "react-typing-effect";

function Header() {
  const [skillElips, setSkillElips] = useState(true)

  return (
    <Fragment>
      <div id="home" className="w-full md:h-screen bg-blue-400 Header_Main flex overflow-hidden  items-end relative text-white">
        <div className="rotate-[90deg] sm:ml-[-60px] ml-[-75px] top-[30%] flex items-center gap-5 absolute" >
          <MdDialpad className="rotate-[-90deg]" />
          <p>( +92 ) 309 435579 1</p>
        </div>
        <div className="rotate-[90deg] sm:ml-[-40px] ml-[-60px] absolute bottom-[20%] flex items-center gap-5">
          <p>SCROLL DOWN</p>
          <MdKeyboardDoubleArrowRight className="text-orange-500" />
        </div>

        <div className="rotate-[90deg] right-0 lg:-mr-[5px] sm:mr-[-15px] mr-[-40px] absolute top-[30%] flex items-center gap-5">
          <p>FOLLOW ME</p>
          <MdKeyboardDoubleArrowRight className="text-orange-500" />
        </div>

        <div className=" sm:right-[3.5%] right-[2%] z-30 absolute bottom-[10%] lg:bottom-[20%] flex flex-col items-center gap-5">
         
        <Link to='https://www.facebook.com/profile.php?id=100061582960084' className="p-2 rounded-full cursor-pointer hover:text-orange-500 bg-[#80808062]">
            <FaFacebook/>
        </Link>
        <Link to='https://www.instagram.com/amanullah55791/' className="p-2 rounded-full cursor-pointer hover:text-orange-500 bg-[#80808062]">
            <FaInstagram/>
        </Link>
        <Link to='https://www.linkedin.com/in/amanullah91/' className="p-2 rounded-full cursor-pointer hover:text-orange-500 bg-[#80808062]">
            <FaLinkedin/>
        </Link>
        <Link to='https://github.com/Am4n-Ull4h' className="p-2 rounded-full cursor-pointer hover:text-orange-500 bg-[#80808062]">
            <FaGithub/>
        </Link>
        </div>

        <div className="flex md:flex-nowrap gap-y-5 flex-wrap-reverse w-[90%] md:w-[70%] mx-auto" >
          <div className="md:w-[70%] w-[90%] md:mx-0 mx-auto" data-aos='zoom-in'>
            <div className="text-[25px] border-b border-gray-400 pb-4 sm:w-[80%] lg:w-[60%]">
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
            <p className={`text-gray-400 mt-4 w-full md:w-[90%] lg:w-[70%] ${skillElips ? "collapsed2 collapsed3" : 'expanded2'}`}>
              As a Full-Stack Web Developer, I craft dynamic, user-friendly
              applications by blending front-end design with back-end
              functionality, leveraging modern frameworks and cloud integration
            </p>
            <span className="hid cursor-pointer text-blue-600 text-[12px]" onClick={()=>setSkillElips(!skillElips)}>{skillElips ? 'See more' : 'See less'}</span>
            <button className="flex items-center gap-4 mt-3 py-2 md:py-3 w-[50%] md:w-[30%] mb-4 justify-center text-[20px] rounded-full bg-orange-500">
              Intro{" "}
              <span className="bg-black text-orange-500 p-2 rounded-full">
                <HiOutlinePlayCircle />
              </span>
            </button>
          </div>
          <img src="https://am4n-portfolio.netlify.app/aman3.webp" className="md:w-[50%] w-[80%] block mx-auto md:absolute lg:top-0 bottom-0 right-3" alt="" data-aos='zoom-in' />
        </div>
        
      </div>
      
    </Fragment>
  );
}

export default Header;
