import React, { Fragment, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { CiLocationArrow1 } from "react-icons/ci";
import { LiaNetworkWiredSolid } from "react-icons/lia";



const skillsData = [
    {
        skillName : 'UX / UI ',
        skillDescr : 'I specialize in UI/UX design, creating intuitive and visually appealing interfaces that enhance user experience. My approach focuses on user-centered design principles to ensure seamless interaction and satisfaction.',
        link : '/service1'
    },
    {
        skillName : 'Web Designing',
        skillDescr : 'I offer expert web design services, crafting responsive and aesthetically pleasing websites. My designs prioritize functionality and user engagement, ensuring a seamless online experience.',
        link : '/service2'
    },
    {
        skillName : 'Web Development',
        skillDescr : 'I provide comprehensive web development services, building robust and scalable websites. My expertise includes front-end and back-end development to deliver high-performance and secure web solutions.',
        link : '/service3'
    },
    {
        skillName : 'Wordpress',
        skillDescr : 'I specialize in WordPress development, creating custom themes and plugins to meet unique needs. My services ensure a user-friendly, secure, and optimized website tailored to your business goals.',
        link : '/service4'
    }
]

function Services() {

    const [isExpanded, setIsExpanded] = useState(false);

    let navigate = useNavigate()



  return (
    <Fragment>
      <div className='mt-10 Header_Main py-8 ' id='services'>
      <div className="flex flex-col items-center text-white D2 About_Design relative" data-aos='fade-up'>
          <h1 className="text-[30px] font-extrabold relative">MY SERVICES</h1>
          <div className="Div_Design w-[20%] h-[5px] rounded-full relative ">
            <div className="Div_Design_item h-[100%] w-[20%] rounded-full bg-orange-500"></div>
          </div>
        </div>
        <div className='flex justify-end gap-2 items-center mt-16'>
            <div className='text-gray-500'>
            <p>Professional focused on helping your brand <br /> grow and move forward.</p>
            </div>
            <div className='h-[1px] bg-gray-500 w-[20%]'>

            </div>

        </div>
        <div className='sm:w-[80%] w-[90%] mx-auto flex flex-col items-center text-white'>
            <div className='md:w-[90%] w-full mx-auto flex items-center gap-3'>
                <div className='md:w-[30%] w-[20%] md:h-[15vh] h-[9vh] rounded-full bg-black' style={{background:'url(./meeting1.webp', backgroundSize:'cover',backgroundPosition:'center'}}>

                </div>
                <p className='md:text-[50px] text-[40px] font-extralight'>Turn your <span className=' font-extrabold stroke'>Ideas</span></p>
            </div>
            <div className='w-[100%] mx-auto flex items-center  justify-end  gap-3'>
                <p className='md:text-[50px] text-[40px] font-extrabold'><span className='stroke'>Into</span> <span className=' font-extralight'>Reality</span></p>
                <div className='md:w-[20%] sm:w-[30%] w-[35%] cursor-pointer md:h-[10vh] h-[7vh] flex justify-center items-center rounded-full bg-orange-500'>
                    <p className='flex gap-3'>What I Do <span className='p-2 rounded-full bg-black text-white'><LiaNetworkWiredSolid/></span></p>
                </div>
            </div>
        </div>
        <div className='flex lg:flex-nowrap flex-wrap sm:w-[80%] w-[90%] mx-auto mt-10'>
            {
                skillsData.map((skill, index) => (
                    <div key={index} className='py-5 px-4 text-white border  border-gray-600 relative lg:w-[25%] md:w-[50%] w-[90%] md:mx-0 mx-auto Skill_Design'>
                        <div className=''>
                            <p className='text-lg font-bold'>{skill.skillName}</p>
                        </div>
                        <div className='Skill_Para pb-16 text-gray-500'>
                            <span className={`aman ${isExpanded ? 'expanded' : 'collapsed'}`}>{skill.skillDescr} </span><span className='text-blue-300 text-[13px] cursor-pointer' onClick={()=>setIsExpanded(!isExpanded)}>{isExpanded ? 'See Less' : 'See More'}</span>
                        </div>
                        <div className='absolute bottom-4 cursor-pointer p-2 bg-gray-500 rounded-full Skill_Btn'  onClick={()=>navigate(skill.link)}>
                            <p><CiLocationArrow1 />                            </p>
                        </div>
                    </div>
                ))
            }
        </div>
      </div>
    </Fragment>
  )
}

export default Services
