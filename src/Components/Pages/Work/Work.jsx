import React, { Fragment, useEffect, useState } from "react";
import { IoIosLink } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { LiaExternalLinkAltSolid } from "react-icons/lia";




let projetsData = [
  {
    categ1: "All",
    img: "./meeting1.webp",
    projectName: "Online Chat System",
    details:
      "This is a live chat system that will be used to communicate with others",
    lang: ["MERN Stack"],
    link: "/work1",
    date : '12 / 08 / 2020'
  },
  {
    categ1: "All",
    categ2: "React",
    img: "./meeting1.webp",
    projectName: "Online Chat System",
    details:
      "This is a live chat system that will be used to communicate with others",
    lang: ["MERN Stack"],
    link: "/work1",
  },
  {
    categ1: "All",
    categ2: "HTML",
    img: "./meeting1.webp",
    projectName: "Online Chat System",
    details:
      "This is a live chat system that will be used to communicate with others",
    lang: ['HTML', 'CSS'],
    link: "/work1",
  },
  {
    categ1: "All",
    categ2: "React",
    img: "./meeting1.webp",
    projectName: "Online Chat System",
    details:
      "This is a live chat system that will be used to communicate with others",
    lang: ["MERN Stack"],
    link: "/work1",
  },
  {
    categ1: "All",
    categ2: "UX",
    img: "./meeting1.webp",
    projectName: "Online Chat System",
    details:
      "This is a live chat system that will be used to communicate with others",
    lang: ['Adobe', 'Figma', 'Sketch', 'Canva'],
    link: "/work1",
  },
  {
    categ1: "All",
    categ2: "React",
    img: "./meeting1.webp",
    projectName: "Online Chat System",
    details:
      "This is a live chat system that will be used to communicate with others",
    lang: ["MERN Stack"],
    link: "/work1",
  },
  {
    categ1: "All",
    img: "./meeting1.webp",
    projectName: "Online Chat System",
    details:
      "This is a live chat system that will be used to communicate with others",
    lang: ["MERN Stack"],
    link: "/work1",
  },
  {
    categ1: "All",
    categ2: "React",
    img: "./meeting1.webp",
    projectName: "Online Chat System",
    details:
      "This is a live chat system that will be used to communicate with others",
    lang: ["MERN Stack"],
    link: "/work1",
  },
  {
    categ1: "All",
    img: "./meeting1.webp",
    projectName: "Online Chat System",
    details:
      "This is a live chat system that will be used to communicate with others",
    lang: ["MERN Stack"],
    link: "/work1",
  },
  {
    categ1: "All",
    categ2: "React",
    img: "./meeting1.webp",
    projectName: "Online Chat System",
    details:
      "This is a live chat system that will be used to communicate with others",
    lang: ["MERN Stack"],
    link: "/work1",
  },
  {
    categ1: "All",
    categ2: "React",
    img: "./meeting1.webp",
    projectName: "Online Chat System",
    details:
      "This is a live chat system that will be used to communicate with others",
    lang: ["MERN Stack"],
    link: "/work1",
  },
  {
    categ1: "All",
    categ2: "Node",
    img: "./meeting1.webp",
    projectName: "Online Chat System",
    details:
      "This is a live chat system that will be used to communicate with others",
    lang: ["MERN Stack"],
    link: "/work1",
  },
];

function Work() {
  const [workSelect, setWorkSelect] = useState("All");
  const [workShow, setWorkShow] = useState(4);
  const [filterData, setFilterData] = useState([]);



  let navigate = useNavigate()

  useEffect(() => {
    let data = projetsData.filter((data) =>
      data.categ1 === workSelect || data.categ2 === workSelect ? data : null
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
      <div className="mt-16" id="works">
        <div
          className="flex flex-col items-center D5 About_Design relative mt-16"
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
          <ul className="flex gap-5">
            <li
              className={`py-2 px-5 rounded-xl cursor-pointer ${
                workSelect === "All"
                  ? "bg-orange-500 text-white"
                  : "bg-gray-200 opacity-50"
              } text-[13px]`}
              onClick={handleAll}
            >
              All
            </li>
            <li
              className={`py-2 px-5 rounded-xl cursor-pointer ${
                workSelect === "UX"
                  ? "bg-orange-500 text-white"
                  : "bg-gray-200 opacity-50"
              } text-[13px]`}
              onClick={handleUX}
            >
              UX/UI
            </li>
            <li
              className={`py-2 px-5 rounded-xl cursor-pointer ${
                workSelect === "HTML"
                  ? "bg-orange-500 text-white"
                  : "bg-gray-200 opacity-50"
              } text-[13px]`}
              onClick={handleHTML}
            >
              HTML & CSS
            </li>
            <li
              className={`py-2 px-5 rounded-xl cursor-pointer ${
                workSelect === "React"
                  ? "bg-orange-500 text-white"
                  : "bg-gray-200 opacity-50"
              } text-[13px]`}
              onClick={handleReact}
            >
              React JS
            </li>
            <li
              className={`py-2 px-5 rounded-xl cursor-pointer ${
                workSelect === "Node"
                  ? "bg-orange-500 text-white"
                  : "bg-gray-200 opacity-50"
              } text-[13px]`}
              onClick={handleNode}
            >
              Node JS
            </li>
          </ul>
        </nav>

        <div className="mt-5 flex  flex-wrap gap-y-2 Skill_Bg w-[80%] mx-auto">
          {filterData.slice(0, workShow).map((elm, ind) => (
            <div key={ind} className="w-[50%] Work_Design">
              <div className="w-[97%] mx-auto Work_Design_Par p-5 BGF border-b-2 border-gray-300">
                <div className="w-full h-[40vh] relative overflow-hidden">
                <img src={elm.img} alt="" className="w-full h-full " />
                <div className="w-full h-full absolute top-0 Work_Link flex justify-center items-center bg-[#7669516f]">
                    <p className="p-3 bg-gray-600 text-white rounded-full cursor-pointer">
                    <IoIosLink onClick={()=>navigate(elm.link)}/>
                    </p>
                </div>
                </div>
                <div className="flex gap-2 py-3">
                    <p className="text-orange-500">{elm.categ2}</p>
                <p className="text-[12px]">{elm.date}</p>
                </div>
                <h2 className="py-3 text-[20px] font-extrabold cursor-pointer text-gray-500" onClick={()=>navigate(elm.link)}>{elm.projectName}</h2>
                <div className="flex justify-between">
                <p className="w-[60%] text-gray-700">{elm.details}</p>
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
                <button className="mt-5 w-[40%] justify-center flex gap-5 rounded-full py-2 border" onClick={()=>navigate(elm.link)}>Check it <span className="p-2 bg-orange-500 rounded-full text-white"><LiaExternalLinkAltSolid/></span></button>
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
