import React, { Fragment } from 'react'
import { CiLocationArrow1 } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { MdOutlineArrowForward } from "react-icons/md";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';




function Footer() {
  return (
    <Fragment>
      <div className='pb-10'>
      <div className='flex justify-end gap-2 items-center md:mt-16 mt-8'>
            <div className='text-gray-500'>
            <p>Looking to make your mark? I'll help you turn <br /> your project into success story.</p>
            </div>
            <div className='h-[1px] bg-gray-500 w-[20%]'>

            </div>

        </div>
        <h1 className='md:text-[60px] sm:text-[50px] text-[40px] font-extrabold text-center md:mt-10 mt-5 text-gray-700'>Ready to bring your <span className='font-extralight'>ideas to <br className='md:block hidden' /></span> life?</h1>
        <h1 className='md:text-[60px] sm:text-[50px] text-[40px] font-extrabold  text-center text-gray-700'>I'm <span className='font-extralight'>here to help</span></h1>
        <button className='flex items-center lg:w-[20%] sm:w-[50%] w-[70%] md:py-5 py-3 text-[20px] rounded-full mx-auto justify-center gap-5 mt-10 bg-orange-500'>Contact Me <span className='md:p-3 p-2 bg-black text-white rounded-full'><CiLocationArrow1/></span></button>


        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28116.085724614302!2d69.95643589744556!3d28.25252690936838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393715c11d432939%3A0xe472cf3e2de821a5!2sSanjarpur%2C%20Rahim%20Yar%20Khan%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1721201517579!5m2!1sen!2s" title='map' className='w-full h-[70vh] mt-16' allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        <h1 className='text-center text-[40px] font-extrabold text-gray-600 mt-10'>Let's <span className='font-extralight'>Talk</span>
        <MdKeyboardDoubleArrowDown className='block text-orange-600 mx-auto'/></h1>


        <div className='Header_Main mt-10' id='contact'>
           <div className="w-[80%] mx-auto py-20 text-white">
            <div className='flex justify-between  '>
                <input type="text" className='outline-none focus:outline-none py-3 border-b border-gray-300 w-[48%] bg-transparent' name="" id="" placeholder="WHAT'S YOUR NAME?" />
                <input type="email" className='outline-none py-3  focus:outline-none border-b border-gray-300 w-[48%] bg-transparent' placeholder="WHAT'S YOUR EMAIL?" name="" id="" />
            </div>

            <textarea name="" className='w-full h-[50vh] bg-transparent mt-10 focus:outline-none border-b border-gray-300' placeholder='TELL ME ABOUT YOUR PROJECT' id=""></textarea>

            <div className='lg:flex mt-12 justify-between items-center'>
                <p><span className='text-red-600'>*</span> I promise not to disclose your personal information to third parties.</p>
                <button className='flex items-center lg:w-[30%] sm:w-[50%] w-[80%] lg:mx-0 lg:mt-0 mt-5 ms-auto sm:py-3 py-2 text-[20px] rounded-full  justify-center gap-5  bg-orange-500'>Send Message <span className='p-3 bg-black text-white rounded-full'><CiLocationArrow1/></span></button>

            </div>
           </div>




        </div>
            <div className='flex sm:flex-nowrap flex-wrap sm:w-[80%] w-[90%] justify-between mx-auto md:mt-16 mt-8'>
                <div className='sm:w-[30%] w-[68%]'>
                    <a href='#home' className='text-[40px] text-orange-500 font-extrabold'>Aman .</a>

                    <p className='mt-16 mb-6'>Follow for more :</p>
                    <div className='w-full flex bg-gray-200 rounded-full py-4 justify-center'>
                        <input type="text" className='w-[70%] px-2 focus:outline-none bg-transparent' placeholder='Enter your email' name="" id="" />
                        <button className='p-3 bg-orange-500 rounded-full hover:bg-transparent hover:border border-black hover:text-black text-white'><MdOutlineArrowForward /></button>

                    </div>

                </div>
                <div className="sm:w-[20%] w-[30%] flex flex-col">
                    <a href='#home' className='font-extrabold hover:ps-2 text-[23px] my-3 hover:text-orange-500'>Home</a>
                    <a href='#services' className='font-extrabold hover:ps-2 text-[23px] my-3 hover:text-orange-500'>Services</a>
                    <a href='#works' className='font-extrabold hover:ps-2 text-[23px] my-3 hover:text-orange-500'>Works</a>
                    <a href='#about' className='font-extrabold hover:ps-2 text-[23px] my-3 hover:text-orange-500'>About</a>
                    <a href='#contact' className='font-extrabold hover:ps-2 text-[23px] my-3 hover:text-orange-500'>Contact</a>
                </div>
                <div className="sm:w-[30%] w-full sm:justify-start justify-evenly flex sm:flex-col ">
                    <Link to='/' className='hover:ps-2 text-[15px] my-2 hover:text-black text-gray-400'>Privacy Policy</Link>
                    <Link to='/' className='hover:ps-2 text-[15px] my-2 hover:text-black text-gray-400'>Terms and conditions</Link>
                    <Link to='/' className='hover:ps-2 text-[15px] my-2 hover:text-black text-gray-400'>Cookie Policy</Link>
                    <Link to='/' className='hover:ps-2 text-[15px] my-2 hover:text-black text-gray-400'>Careers</Link>
                    
                </div>

            </div>

            <div className='flex sm:flex-nowrap flex-wrap sm:w-[80%] w-[90%] justify-between mx-auto md:mt-16 mt-8'>
                <div className='sm:w-[30%] w-[80%] sm:mx-0 mx-auto '>
                    <div className='flex gap-5'>
                    <div className='text-[20px]  bg-gray-200 h-[30px] flex justify-center items-center w-[30px] rounded-full hover:text-orange-500'>
                    <Link to='https://www.facebook.com/profile.php?id=100061582960084' >
                    <FaFacebook/>
                    </Link>
                    </div>

                    <div className='text-[20px]  bg-gray-200 h-[30px] flex justify-center items-center w-[30px] rounded-full hover:text-orange-500'>
                    <Link to='https://www.instagram.com/amanullah55791/' >
                    <FaInstagram/>
                    </Link>
                    </div>

                    <div className='text-[20px]  bg-gray-200 h-[30px] flex justify-center items-center w-[30px] rounded-full hover:text-orange-500'>
                    <Link to='https://github.com/Am4n-Ull4h' >
                    <FaGithub/>
                    </Link>
                    </div>

                    <div className='text-[20px]  bg-gray-200 h-[30px] flex justify-center items-center w-[30px] rounded-full hover:text-orange-500'>
                    <Link to='https://www.linkedin.com/in/amanullah91/' >
                    <FaLinkedin/>
                    </Link>
                    </div>
                    </div>
                    <p className='mt-10 text-gray-600'>@ 2024 Aman. All Rights Reserved.</p>

                </div>
                <div className="sm:w-[20%] sm:mt-0 mt-8 flex flex-col w-[80%] sm:mx-0 mx-auto ">
                    <p className='text-[20px] font-bold'>PUNJAB</p>
                   <h1 className='text-gray-500 text-[15px] mt-5'>Sanjarpur, Sadiqabad</h1>
                   <h1 className='text-gray-500 text-[15px] mt-5'>+92 309 435579 1</h1>
                </div>
                <div className="sm:w-[30%] sm:mt-0 mt-8 w-[80%] sm:mx-0 mx-auto  flex flex-col ">
                <p className='text-[20px] font-bold'>CONTACT EMAIL</p>
                <h1 className='text-gray-500 text-[15px] mt-5'>engnramanullah@gmail.com</h1>
                <h1 className='text-gray-500 text-[15px] mt-5'>au958062@gmail.com</h1>

                    
                    
                </div>

            </div>
      </div>
    </Fragment>
  )
}

export default Footer
