import React, { Fragment, useEffect, useState } from "react";
import { MdOutlineSegment } from "react-icons/md";
import { GiCrossMark } from "react-icons/gi";
import { RiArrowDropUpLine } from "react-icons/ri";




function Navbar() {

    const [showNav, setShowNav] = useState(false)

    const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > window.innerHeight) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  

  return (
    <Fragment>
      <div>
        <a href="#home" className="fixed top-[10vh] left-[6vw] z-50 text-[25px] font-extrabold text-orange-500">Aman.</a>
          <p  className="fixed top-[10vh] text-[25px] cursor-pointer font-extrabold text-orange-500 right-[6vw] z-50"  onClick={()=>setShowNav(!showNav)}>{showNav ? <GiCrossMark/> : <MdOutlineSegment/>}</p>
          {isVisible && (
        <div className="fixed z-30 rounded-full cursor-pointer right-3 text-white bottom-5 h-[30px] w-[30px] bg-orange-500 hover:bg-transparent hover:text-black hover:border border-black flex justify-center items-center">
          <a href="#home"><RiArrowDropUpLine className="text-[25px]" /></a>
        </div>
      )}
        {
            showNav && <div className={`bg-black h-full w-full left-0 top-0 fixed z-40`}>
            <div className={`${showNav && 'Navbar'} w-[80%] h-full mx-auto flex items-center `}>
              <ul className="h-[70%] flex flex-col justify-evenly text-white ">
                <li className="text-[20px] font-extrabold hover:text-orange-500 hover:ps-3 cursor-pointer" onClick={()=>setShowNav(false)}>
                  <a href="#home">Homepage</a>
                </li>{" "}
                <li className="text-[20px] font-extrabold hover:text-orange-500 hover:ps-3 cursor-pointer" onClick={()=>setShowNav(false)}>
                  <a href="#services">Services</a>
                </li>{" "}
                <li className="text-[20px] font-extrabold hover:text-orange-500 hover:ps-3 cursor-pointer" onClick={()=>setShowNav(false)}>
                  <a href="#about">About</a>
                </li>
                <li className="text-[20px] font-extrabold hover:text-orange-500 hover:ps-3 cursor-pointer" onClick={()=>setShowNav(false)}>
                  <a href="#work">Work</a>
                </li>{" "}
                <li className="text-[20px] font-extrabold hover:text-orange-500 hover:ps-3 cursor-pointer" onClick={()=>setShowNav(false)}>
                  <a href="#contact">Contact</a>
                </li>{" "}
              </ul>
            </div>
          </div>
        }
      </div>
    </Fragment>
  );
}

export default Navbar;
