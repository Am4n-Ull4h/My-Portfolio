import React, { Fragment, useRef, useState } from "react";
import { Link } from "react-router-dom";

let icon = true
function Navbar() {

    const [showNav, setShowNav] = useState(false)
    const iconRef = useRef()


    const handleChange = () => {
        setShowNav(!showNav)

        if (icon === true) {
          iconRef.current.innerHTML = '☠'
          icon = false
        }
        else {
          iconRef.current.innerHTML = '㊂'
          icon = true
        }

    }

  return (
    <Fragment>
      <div>
        <Link to="/" className="fixed top-[10vh] left-[8vw] z-50 text-[25px] font-extrabold text-orange-500">Aman.</Link>
          <p  className="fixed top-[10vh] text-[25px] font-extrabold text-orange-500 right-[8vw] z-50" ref={iconRef} onClick={handleChange}>㊂</p>
        {
            showNav && <div className={`bg-black h-full w-full left-0 top-0 fixed z-20`}>
            <div className={`${showNav && 'Navbar'} w-[80%] h-full mx-auto flex items-center `}>
              <ul className="h-[70%] flex flex-col justify-evenly text-white">
                <li>
                  <Link to="/">Homepage</Link>
                </li>{" "}
                <li>
                  <Link to="/portfolio">Portfolios</Link>
                </li>{" "}
                <li>
                  <Link to="/contact">Contact</Link>
                </li>{" "}
                <li>
                  <Link to="/about">About</Link>
                </li>{" "}
                <li>
                  <Link to="/about">About</Link>
                </li>
              </ul>
            </div>
          </div>
        }
      </div>
    </Fragment>
  );
}

export default Navbar;
