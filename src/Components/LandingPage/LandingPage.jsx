import React, { Fragment } from 'react'
import ScrollAmount from '../Pages/ScrollAmount/ScrollAmount'
import Navbar from '../Pages/Navbar/Navbar'
import Header from '../Pages/Header/Header'
import About from '../Pages/About/About'
import Skills from 'Components/Skills/Skills'

function LandingPage() {

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
        {/* <div  onMouseMove={handleDiv} onMouseLeave={handleLeave} className='relative'>  */}
        <ScrollAmount/>
        <Navbar/>
        <Header/>
        <About/>
        <Skills/>
      
        {/* <div className="absolute hidden h-[20px] w-[20px] opacity-30 bg-black rounded-full z-30" ref={divRef}></div>
        </div> */}
    </Fragment>
  )
}

export default LandingPage
