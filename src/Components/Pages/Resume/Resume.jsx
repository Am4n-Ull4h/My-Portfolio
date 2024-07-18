import React, { Fragment, useState } from 'react'
import { MdOutlineCastForEducation } from "react-icons/md";
import { BsSuitcaseLg } from "react-icons/bs";



let EduData = [
  {
    date : '2015 - 2017',
    degree : 'Matriculation',
    schoolName : 'Ajmal Bagh Sadiqabad',
    descrip : 'From 2015 to 2017, I completed my Matriculation at Ajmal Bagh Sadiqabad. During this period, I gained a solid educational foundation, developed critical thinking skills, and actively participated in various academic and extracurricular activities.'
  },
  {
    date : '2017 - 2019',
    degree : 'F.Sc (Pre-Eng)',
    schoolName : 'MTB College SDK',
    descrip : 'From 2017 to 2019, I pursued my F.Sc (Pre-Engineering) at MTB College SDK. This phase focused on strengthening my knowledge in mathematics, physics, and chemistry, laying the groundwork for my technical and analytical skills essential for engineering studies.'
  },
  {
    date : '2020 - 2024',
    degree : 'BS Software Engineering',
    schoolName : 'The Islamia University BWP',
    descrip : 'From 2020 to 2024, I pursued my BS in Software Engineering at The Islamia University, Bahawalpur. This program equipped me with comprehensive knowledge in software development methodologies, programming languages, and systems design, preparing me for a career as a professional software engineer.'
  },

]



let expData = [
  {
    date : 'Feb 2024 - Continue',
    degree : '   Investor App (Web-App + Landing-Page)',
    schoolName : 'Upwork Client',
    descrip : "Developed an Investor Web App + Landing Page using the MERN stack (MongoDB, Express, React, Node.js). This project included features for managing investments, tracking portfolios, and analyzing market trends. Additionally, it incorporated functionalities such as posting jobs, sharing Upwork stories similar to Instagram posts, and creating events. Focused on delivering a responsive and intuitive user interface, secure data handling, and real-time updates to enhance user engagement and investment decisions"
  },
  {
    date : 'Jan 2024 - Feb 2024',
    degree : '  Pricing Plan Landing Page',
    schoolName : 'Upwork Client',
    descrip : "I developed a Pricing Plan Landing Page for an Upwork client using Next.js. This project involved creating a dynamic and responsive landing page that effectively showcases pricing options and encourages user engagement. Leveraging Next.js, I ensured fast performance and seamless navigation, enhancing the client's online presence and conversion rates  "
  },
  {
    date : 'Jan 2023 - Mar 2023',
    degree : '  Clikkle-Web-App / Admin-Panel',
    schoolName : 'Upwork Client',
    descrip : 'Developed the Clikkle-Web-App and Admin-Panel using the MERN stack (MongoDB, Express, React, Node.js). This project included creating a responsive web application and an intuitive admin panel for efficient content management. Focused on user-friendly design, secure data operations, and seamless functionality to support business operations.   '
  },
  {
    date : 'Jun 2022 - Jul 2022',
    degree : ' Online Chat System  ',
    schoolName : 'Fiver Client',
    descrip : 'Developed a real-time Online Chat System using the MERN stack (MongoDB, Express, React, Node.js). This project involved creating a responsive and user-friendly interface for seamless communication. Focused on ensuring reliable message delivery, secure data handling, and optimal performance to enhance user interaction.  '
  },
  {
    date : 'May 2022 - Jun 2022',
    degree : ' Payment Method ',
    schoolName : 'Fiver Client',
    descrip : 'Developed a robust Payment Method system using the MERN stack (MongoDB, Express, React, Node.js). Focused on creating a secure and efficient payment process, ensuring seamless integration with various payment gateways. Emphasized responsive design, user-friendly interfaces, and optimized backend performance for reliable transactions. '
  },
  {
    date : 'Apr 2022 - May 2022',
    degree : 'Payment Card Creation ',
    schoolName : 'Fiver Client',
    descrip : 'Developed a robust Payment Method system using the MERN stack (MongoDB, Express, React, Node.js). Focused on creating a secure and efficient payment process, ensuring seamless integration with various payment gateways. Emphasized responsive design, user-friendly interfaces, and optimized backend performance for reliable transactions.'
  },
  {
    date : 'Dec 2021 - Jan 2022',
    degree : 'React - PHP/Laravel',
    schoolName : ' Online Shop Store - Pakistan',
    descrip : 'I undertook the development of an Online Shop Store as a PHP/Laravel developer. This project aimed to provide a seamless e-commerce experience for users in Pakistan, leveraging the robust capabilities of PHP and Laravel  framework. I led the development efforts to build a fully functional e-commerce platform from scratch using PHP and Laravel. '
  },
  {
    date : 'Aug 2021 - Oct 2021',
    degree : ' MERN Stack Developer (Remote) ',
    schoolName : 'Advocate-Iron.com - Pakistan',
    descrip : "As a MERN Stack Developer for Advocate-Iron.com, I spearheaded the creation of robust web applications utilizing MongoDB, Express.js, React.js, and Node.js technologies. Leveraging these powerful tools, I crafted customized solutions tailored to enhance Advocate-Iron.com's digital presence."
  },
  {
    date : 'Feb 2020 - Jun 2020',
    degree : 'Full Stack Developer (Remote)',
    schoolName : ' Tipanonymous.com - Australia',
    descrip : 'As a Remote Full Stack Developer at Tipanonymous.com, I led the development of a 15-page website using React and Next.js for the front end, ensuring high performance. I utilized Node.js, Express, and MongoDB on the back end for efficient data management, delivering enhanced user engagement and accessibility.'
  },
  {
    date : 'sep 2019 - Nov 2019',
    degree : ' Laravel Developer ( Remote ) ',
    schoolName : 'www.taireglement.fr - USA',
    descrip : "As a Laravel Developer for www.taireglement.fr, I took charge of developing the admin dashboard and its entire backend infrastructure. Leveraging Laravel's robust framework, I meticulously crafted a user-friendly and efficient admin interface tailored to meet the specific needs of the platform. "
  },
  {
    date : 'Jul 2019 - Aug 2019',
    degree : ' Front-end Developer (Remote) ',
    schoolName : 'Jason Rager - Thailand',
    descrip : 'As a Remote Front-end Developer specializing in Responsiveness, I led design efforts to optimize user experiences across websites and apps. Collaborating closely with the CEO and product team. My focus on crafting responsive designs ensured seamless interactions across various platforms, fostering heightened user satisfaction. '
  }

]

function Resume() {


  const [exp,setExp] = useState(4)
  const [skillElips, setSkillElips] = useState(true)
  const [skillElips2, setSkillElips2] = useState(true)

  return (
    <Fragment>
      <div className='Header_Main HM2 md:py-7 py-3 overflow-x-hidden'>
      <div className="flex flex-col items-center text-white D4 About_Design relative" data-aos='fade-up'>
          <h1 className="text-[30px] font-extrabold relative">MY RESUME</h1>
          <div className="Div_Design w-[20%] h-[5px] rounded-full relative ">
            <div className="Div_Design_item h-[100%] w-[20%] rounded-full bg-orange-500"></div>
          </div>
        </div>
        <div className="mt-10 justify-between flex md:flex-nowrap flex-wrap w-[95%] mx-auto">
          <div className="md:w-[48%] w-[95%] md:mx-0 mx-auto" data-aos='fade-right'>
            <h1 className='text-white  py-5 flex gap-5 items-center text-[20px] font-extrabold'><MdOutlineCastForEducation className='text-orange-500'/> Educational Experience</h1>
            <div className='text-white'>
            {
                EduData.slice(0,exp).map((edu, index) => (
                  <div key={index} className='flex gap-5'>
                    <p className='text-nowrap mt-5 bg-[#8080806d] h-[30px]  md:w-[25%] w-[20%] px-3 rounded-full flex justify-center items-center text-[10px]'>{edu.date}</p>
                    <div className='w-[15%]  flex relative justify-center'>
                        <div className='h-full w-[3px] bg-gray-400 rounded-full'></div>
                        <div className='w-full h-[3px] bg-gray-400 absolute mt-8 rounded-full'></div>
                        <div className='w-[20px] h-[20px] bg-black absolute mt-6 rounded-full border-2 border-gray-400'></div>
                    </div>
                    <div className='pt-5 md:w-[60%] w-[65%]'>
                      <h1 className='text-[20px] text-orange-500 font-light'>{edu.degree}</h1>
                      <h2 className='text-[13px] font-extrabold'>{edu.schoolName}</h2>
                      <p className={`text-[14px] text-gray-400 ${skillElips ? "collapsed4" : 'expanded4'}`}>{edu.descrip}</p>
                      <span className="hid4 cursor-pointer text-blue-600 text-[12px]" onClick={()=>setSkillElips(!skillElips)}>{skillElips ? 'See more' : 'See less'}</span>
                    </div>
                  </div>
                ))
              }
            </div>

          </div>
          <div className="md:w-[48%] w-[95%] md:mx-0 mx-auto md:mt-0 mt-10"  data-aos='fade-left'>
          <h1 className='text-white py-5 flex gap-5 items-center text-[20px] font-extrabold'><BsSuitcaseLg className='text-orange-500'/> Work Experience</h1>
            <div className='text-white h-[100vh] overflow-y-scroll overScroll relative'>
              {
                expData.slice(0,exp).map((edu, index) => (
                  <div key={index} className='flex gap-5'>
                    <p className='text-nowrap mt-5 bg-[#8080806d] h-[30px] md:w-[25%] w-[20%] sm:px-3 rounded-full flex justify-center items-center text-[7px] sm:text-[10px]'>{edu.date}</p>
                    <div className='w-[15%]  flex relative justify-center'>
                        <div className='h-full w-[3px] bg-gray-400 rounded-full'></div>
                        <div className='w-full h-[3px] bg-gray-400 absolute mt-8 rounded-full'></div>
                        <div className='w-[20px] h-[20px] bg-black absolute mt-6 rounded-full border-2 border-gray-400'></div>
                    </div>
                    <div className='pt-5 md:w-[60%] w-[65%]'>
                      <h1 className='text-[20px] text-orange-500 font-light'>{edu.degree}</h1>
                      <h2 className='text-[13px] font-extrabold'>{edu.schoolName}</h2>
                      <p className={`text-[14px] text-gray-400 ${skillElips2 ? "collapsed4" : 'expanded4'}`}>{edu.descrip}</p>
                      <span className="hid4 cursor-pointer text-blue-600 text-[12px]" onClick={()=>setSkillElips2(!skillElips2)}>{skillElips2 ? 'See more' : 'See less'}</span>
                    </div>
                  </div>
                ))
              }

              <button className={`h-[8vh] block mx-auto w-[50%] bg-orange-500 rounded-full mt-5 text-white hover:text-white hover:bg-transparent  hover:border hover:border-white ${
            exp >= expData.length ? "hidden" : "block"
          }`} onClick={()=>setExp(exp + 4)}>See more</button>
            </div>

          </div>
        </div>
        
      </div>
    </Fragment>
  )
}

export default Resume
