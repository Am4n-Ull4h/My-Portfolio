import React, { Fragment, lazy, Suspense } from "react";
import { trefoil } from "ldrs";

trefoil.register();
// import ScrollAmount from '../Pages/ScrollAmount/ScrollAmount'
// import Navbar from '../Pages/Navbar/Navbar'
// import Header from '../Pages/Header/Header'
// import About from '../Pages/About/About'
// import Services from 'Components/Pages/Services/Services'
// import Skills from 'Components/Pages/Skills/Skills'
// import Rotate from '../Pages/Rotate/Rotate'
// import Resume from 'Components/Pages/Resume/Resume'
// import Work from 'Components/Pages/Work/Work'
// import Footer from 'Components/Pages/Footer/Footer'
// import Rotate2 from '../Pages/Rotate/Rotate2'

const ScrollAmount = lazy(() => import("../Pages/ScrollAmount/ScrollAmount"));
const Navbar = lazy(() => import("../Pages/Navbar/Navbar"));
const Header = lazy(() => import("../Pages/Header/Header"));
const About = lazy(() => import("../Pages/About/About"));
const Services = lazy(() => import("../Pages/Services/Services"));
const Skills = lazy(() => import("../Pages/Skills/Skills"));
const Resume = lazy(() => import("../Pages/Resume/Resume"));
const Work = lazy(() => import("../Pages/Work/Work"));
const Footer = lazy(() => import("../Pages/Footer/Footer"));

function LandingPage() {
  // Default values shown

  // let divRef = useRef()
  // const handleDiv = (e)=>{
  //   let x = e.clientX
  //   let y = e.clientY

  //   console.log(y)

  //   divRef.current.style.display = 'block'
  //   divRef.current.style.transition ='.1s'
  //   divRef.current.style.top = y  +'px'
  //   divRef.current.style.left = x + 'px'
  // }

  // const handleLeave = ()=>{
  //   divRef.current.style.display = 'none'
  // }

  return (
    <Fragment>
      <Suspense
        fallback={
          <div className="h-screen w-screen flex justify-center items-center bg-gray-800">
            <l-trefoil
            size="40"
            stroke="4"
            stroke-length="0.15"
            bg-opacity="0.5"
            speed="1.4"
            color="orange"
          ></l-trefoil>
          </div>
        }
      >
        {/* <div  onMouseMove={handleDiv} onMouseLeave={handleLeave} className='relative'>  */}
        <ScrollAmount />
        <Navbar />
        <Header />
        {/* <Rotate/> */}
        <About />
        <Services />
        <Skills />
        {/* <Rotate2/> */}
        <Resume />
        <Work />
        <Footer />

        {/* <div className="absolute hidden h-[20px] w-[20px] opacity-30 bg-black rounded-full z-30" ref={divRef}></div>
        </div> */}
      </Suspense>
    </Fragment>
  );
}

export default LandingPage;
