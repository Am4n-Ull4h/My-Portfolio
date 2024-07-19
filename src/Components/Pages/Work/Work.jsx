import React, { Fragment, useEffect, useState } from "react";
import { IoIosLink } from "react-icons/io";
import { LiaExternalLinkAltSolid } from "react-icons/lia";




let projetsData = [
  {
    categ1: "All",
    categ2: "React",
    categ3: "Node",
    img: "https://am4n-portfolio.netlify.app/chat.webp",
    projectName: "Online Chat System",
    details:
      "This is a live chat system that will be used to communicate with others",
      lang: ["React", "Node", "Express", "MongoDB"],
    link: "https://github.com/Am4n-Ull4h/Online-Chat-System-Full-Functionality",
    date : '04 / 07 / 2022',
    spec: "mern-stack",

  },
  {
    categ1: "All",
    categ2: "React",
    categ3: "Node",
    img: "https://am4n-portfolio.netlify.app/WebApp.webp",
    projectName: "Investor Web App",
    details:
      "Developed an Investor Web App using the MERN stack (MongoDB, Express, React, Node.js). This project included features for managing investments, tracking portfolios, and analyzing market trends. Additionally, it incorporated functionalities such as posting jobs, sharing Upwork stories similar to Instagram posts, and creating events.",
      lang: ["React", "Node", "Express", "MongoDB"],
      link: "/#PrivateRepo",
    date : '12 / 02 / 2024',
    spec: "mern-stack",


  },
  {
    categ1: "All",
    categ2: "React",
    categ3: "Node",
    img: "https://am4n-portfolio.netlify.app/landing.webp",
    projectName: "Investor App Landing-Page",
    details:
      "Developed an Investor Landing Page using the MERN stack (MongoDB, Express, React, Node.js). This project included features for managing investments, tracking portfolios, and analyzing market trends. Additionally, it incorporated functionalities such as posting jobs, sharing Upwork stories similar to Instagram posts, and creating events.",
    lang: ["React", "Node", "Express", "MongoDB"],
    link: "/#PrivateRepo",
    date : '12 / 02 / 2024',
    spec: "mern-stack",
  },
  {
    categ1: "All",
    categ2: "React",
    categ3: "UX",
    img: "https://am4n-portfolio.netlify.app/pricing.webp",
    projectName: "Pricing Plan Landing Page",
    details:
    "I developed a Pricing Plan Landing Page for an Upwork client using Next.js. This project involved creating a dynamic and responsive landing page that effectively showcases pricing options and encourages user engagement. Leveraging Next.js, I ensured fast performance and seamless navigation, enhancing the client's online presence and conversion rates",
    lang: ["NextJS", "Figma", "Tailwind"],
    link: "https://github.com/Am4n-Ull4h/Pricing-Plan-Landing-Page",
    date : '06 / 02 / 2024',
    spec: "next-js",
  },
  {
    categ1: "All",
    categ2: "React",
    categ3: "Node",
    img: "https://am4n-portfolio.netlify.app/admin.webp",
    projectName: "Clikkle-Web-App / Admin-Panel",
    details:
      "Developed the Clikkle-Web-App and Admin-Panel using the MERN stack (MongoDB, Express, React, Node.js). This project included creating a responsive web application and an intuitive admin panel for efficient content management. Focused on user-friendly design, secure data operations, and seamless functionality to support business operations.",
    lang: ["React", "Node", "Express", "MongoDB"],
    link: "https://github.com/Am4n-Ull4h/Clickkle-WWeb-App-Panels",
    date : '12 / 03 / 2023',
    spec: "mern-stack",
  },
  {
    categ1: "All",
    categ2: "React",
    categ3: "Node",
    img: "https://am4n-portfolio.netlify.app/method.webp",
    projectName: "Payment Method",
    details:
      "Developed a robust Payment Method system using the MERN stack (MongoDB, Express, React, Node.js). Focused on creating a secure and efficient payment process, ensuring seamless integration with various payment gateways. Emphasized responsive design, user-friendly interfaces, and optimized backend performance for reliable transactions.",
    lang: ["React", "Node", "Express", "MongoDB"],
    link: "https://github.com/Am4n-Ull4h/Payment-method-MERN-Stack",
    date : '26 / 06 / 2022',
    spec: "mern-stack",
  },
  
  {
    categ1: "All",
    categ2: "React",
    categ3: "HTML",
    categ4: "UX",
    img: "https://am4n-portfolio.netlify.app/payment.webp",
    projectName: "Payment Card Creation",
    details:
      "Developed a robust Payment Method system using the MERN stack (MongoDB, Express, React, Node.js). Focused on creating a secure and efficient payment process, ensuring seamless integration with various payment gateways. Emphasized responsive design, user-friendly interfaces, and optimized backend performance for reliable transactions.",
    lang: ["React", "Figma", "HTML", "Tailwind"],
    link: "https://github.com/Am4n-Ull4h/payman-card-creation-system",
    date : '15 / 05 / 2022',
    spec: "react",
  },
  {
    categ1: "All",
    categ2: "React",
    categ3: "Node",
    categ4: "UX",
    img: "https://am4n-portfolio.netlify.app/shop.webp",
    projectName: "Online Shop Store",
    details:
      "I undertook the development of an Online Shop Store as a PHP/Laravel developer. This project aimed to provide a seamless e-commerce experience for users in Pakistan, leveraging the robust capabilities of PHP and Laravel framework. I led the development efforts to build a fully functional e-commerce platform from scratch using PHP and Laravel.",
    lang: ["React", "PHP", "MySQL", "Tailwind"],
    link: "/#NotAvailable",
    date : '19 / 01 / 2022',
    spec: "full-stack",
  },
  {
    categ1: "All",
    categ2: "React",
    categ3: "Node",
    categ4: "HTML",
    img: "https://am4n-portfolio.netlify.app/advocate.webp",
    projectName: "Advocate-Iron",
    details:
      "As a MERN Stack Developer for Advocate-Iron.com, I spearheaded the creation of robust web applications utilizing MongoDB, Express.js, React.js, and Node.js technologies. Leveraging these powerful tools, I crafted customized solutions tailored to enhance Advocate-Iron.com's digital presence.",
    lang: ["React", "Node", "MongoDB", "Tailwind"],
    link: "https://advocateiron.tech/",
    date : '03 / 10 / 2021',
    spec: "mern-stack",
  },
  {
    categ1: "All",
    categ2: "React",
    categ3: "Node",
    categ4: "HTML",
    img: "https://am4n-portfolio.netlify.app/tip.webp",
    projectName: "Tipanonymous",
    details:
      "As a Remote Full Stack Developer at Tipanonymous.com, I led the development of a 15-page website using React and Next.js for the front end, ensuring high performance. I utilized Node.js, Express, and MongoDB on the back end for efficient data management, delivering enhanced user engagement and accessibility.",
    lang: ["React", "Node", "MongoDB", "Tailwind"],
    link: "/#NotAvailable",
    date : '21 / 06 / 2020',
    spec: "full-stack",
  },
  {
    categ1: "All",
    categ2: "React",
    categ4: "HTML",
    img: "https://am4n-portfolio.netlify.app/tai.webp",
    projectName: "taireglement.fr",
    details:
      "As a Laravel Developer for www.taireglement.fr, I took charge of developing the admin dashboard and its entire backend infrastructure. Leveraging Laravel's robust framework, I meticulously crafted a user-friendly and efficient admin interface tailored to meet the specific needs of the platform.",
    lang: ["React", "PHP", "Laravel", "Tailwind","MySQL"],
    link: "/#NotAvailable",
    date : '27 / 11 / 2019',
    spec: "mern-stack",
  },
  {
    categ1: "All",
    categ2: "React",
    categ3: "UX",
    categ4: "HTML",
    img: "https://am4n-portfolio.netlify.app/front.png",
    projectName: "Jason Rager",
    details:
      "As a Remote Front-end Developer specializing in Responsiveness, I led design efforts to optimize user experiences across websites and apps. Collaborating closely with the CEO and product team. My focus on crafting responsive designs ensured seamless interactions across various platforms, fostering heightened user satisfaction.",
    lang: ["React", "HTML", "CSS", "Tailwind"],
    link: "/#NotAvailable",
    date : '07 / 06 / 2019',
    spec: "frontend",
  },
];

function Work() {
  const [workSelect, setWorkSelect] = useState("All");
  const [workShow, setWorkShow] = useState(4);
  const [filterData, setFilterData] = useState([]);


  useEffect(() => {
    let data = projetsData.filter((data) =>
      data.categ1 === workSelect || data.categ2 === workSelect || data.categ3 === workSelect ||  data.categ4 === workSelect ? data : null
    );

    setFilterData(data);
  }, [workSelect]);

  const handleAll = () => {
    setWorkSelect("All");
  };
  const handleUX = () => {
    setWorkSelect("UX");
  };
  const handleHTML = () => {
    setWorkSelect("HTML");
  };
  const handleReact = () => {
    setWorkSelect("React");
  };
  const handleNode = () => {
    setWorkSelect("Node");
  };




  return (
    <Fragment>
      <div className="md:mt-16 mt-7" id="works">
        <div
          className="flex flex-col items-center D5 About_Design relative"
          data-aos="fade-up"
        >
          <h1 className="text-[30px] font-extrabold relative">
            RECENT PROJECTS
          </h1>
          <div className="Div_Design w-[20%] h-[5px] rounded-full relative ">
            <div className="Div_Design_item h-[100%] w-[20%] rounded-full bg-orange-500"></div>
          </div>
        </div>
        <nav className="mt-10 flex justify-center">
          <ul className="flex md:gap-5 gap-2">
            <li
              className={`py-2 md:px-5 px-3 rounded-xl cursor-pointer ${
                workSelect === "All"
                  ? "bg-orange-500 text-white"
                  : "bg-gray-200 opacity-50"
              } md:text-[13px] text-[11px] `}
              onClick={handleAll}
            >
              All
            </li>
            <li
              className={`py-2 md:px-5 px-3 rounded-xl cursor-pointer ${
                workSelect === "UX"
                  ? "bg-orange-500 text-white"
                  : "bg-gray-200 opacity-50"
              } md:text-[13px] text-[11px] `}
              onClick={handleUX}
            >
              UX/UI
            </li>
            <li
              className={`py-2 md:px-5 px-3 rounded-xl cursor-pointer ${
                workSelect === "HTML"
                  ? "bg-orange-500 text-white"
                  : "bg-gray-200 opacity-50"
              } md:text-[13px] text-[11px] `}
              onClick={handleHTML}
            >
              HTML & CSS
            </li>
            <li
              className={`py-2 md:px-5 px-3 rounded-xl cursor-pointer ${
                workSelect === "React"
                  ? "bg-orange-500 text-white"
                  : "bg-gray-200 opacity-50"
              } md:text-[13px] text-[11px] `}
              onClick={handleReact}
            >
              Frontend
            </li>
            <li
              className={`py-2 md:px-5 px-3 rounded-xl cursor-pointer ${
                workSelect === "Node"
                  ? "bg-orange-500 text-white"
                  : "bg-gray-200 opacity-50"
              } md:text-[13px] text-[11px] `}
              onClick={handleNode}
            >
              Backend
            </li>
          </ul>
        </nav>

        <div className="mt-5 flex  flex-wrap gap-y-2 Skill_Bg sm:w-[80%] w-[90%] mx-auto">
          {filterData.slice(0, workShow).map((elm, ind) => (
            <div key={ind} className="md:w-[50%] w-full md:mx-0 mx-auto Work_Design">
              <div className="w-[97%] mx-auto Work_Design_Par p-5 BGF border-b-2 border-gray-300">
                <div className="w-full h-[40vh] relative overflow-hidden">
                <img src={elm.img} alt="" className="object-cover" />
                <div className="w-full h-full absolute top-0 Work_Link flex justify-center items-center bg-[#7669516f]">
                    <p className="p-3 bg-gray-600 text-white rounded-full cursor-pointer">
                    <IoIosLink onClick={()=>window.location.href = elm.link}/>
                    </p>
                </div>
                </div>
                <div className="flex items-center gap-2 py-3">
                    <p className="text-orange-500">{elm.spec}</p>
                <p className="text-[12px]">{elm.date}</p>
                </div>
                <h2 className="py-3 text-[20px] font-extrabold cursor-pointer text-gray-500" onClick={()=>window.location.href = elm.link}>{elm.projectName}</h2>
                <div className="flex justify-between">
                <p className="w-[60%] text-gray-700 Work_Ellipsis">{elm.details}</p>
                <div>
                {
                    elm.lang.map((lang,ind2) => (
                      <span
                        key={ind2}
                        className="text-orange-500 text-[12px] block bg-gray-200 mt-1 px-3"
                      >
                        {lang}
                      </span>
                    ))
  
                }
                </div>

                </div>
                <button className="mt-5 md:w-[40%] w-[55%] justify-center flex gap-5 rounded-full py-2 border" onClick={()=>window.location.href = elm.link}>Check it <span className="p-2 bg-orange-500 rounded-full text-white"><LiaExternalLinkAltSolid/></span></button>
              </div>
            </div>
          ))}
        </div>
        <button
          className={`h-[8vh] mx-auto w-[50%] bg-orange-500 rounded-full mt-5 text-white hover:text-black hover:bg-transparent border hover:border hover:border-black ${
            workShow >= filterData.length ? "hidden" : "block"
          }`}
          onClick={() => setWorkShow(workShow + 2)}
        >
          Load more
        </button>
      </div>
    </Fragment>
  );
}

export default Work;
