import React, { Fragment, useState } from "react";

let skillData = [
  {
    img: "./react.png",
    name: "React",
    perc: "90%",
  },
  {
    img: "./node-js.png",
    name: "Node",
    perc: "85%",
  },
  {
    img: "./php.png",
    name: "PHP",
    perc: "75%",
  },
  {
    img: "./python.png",
    name: "Python",
    perc: "70%",
  },
  {
    img: "./sql-server.png",
    name: "SQL",
    perc: "90%",
  },
  {
    img: "./mongo.png",
    name: "MongoDB",
    perc: "93%",
  },
  {
    img: "./js.png",
    name: "JavaScript",
    perc: "93%",
  },
  {
    img: "./figma.png",
    name: "Figma",
    perc: "83%",
  },
  {
    img: "./bootstrap.png",
    name: "Bootstrap",
    perc: "99%",
  },
  {
    img: "./html-5.png",
    name: "HTML",
    perc: "100%",
  },
  {
    img: "./css-3.png",
    name: "CSS",
    perc: "98%",
  },
  {
    img: "./seo.png",
    name: "SEO",
    perc: "91%",
  },
  {
    img: "./aws.png",
    name: "AWS",
    perc: "90%",
  },
  {
    img: "./github.png",
    name: "GitHub",
    perc: "95%",
  },
  {
    img: "./typescript.png",
    name: "TypeScript",
    perc: "85%",
  },
  {
    img: "./wordpress.png",
    name: "WordPress",
    perc: "90%",
  },
  {
    img: "./material.png",
    name: "Material UI",
    perc: "96%",
  },
  {
    img: "./shad.png",
    name: "Shadcn UI",
    perc: "95%",
  },
  {
    img: "./three.png",
    name: "ThreeJS",
    perc: "94%",
  },
  {
    img: "./cloud.png",
    name: "CloudFlare",
    perc: "90%",
  },
];

function Skills() {

  const [visibleItems, setVisibleItems] = useState(4); // Initial number of items to show




  return (
    <Fragment>
      <div
        className="flex flex-col items-center D3 About_Design relative mt-16" 
        data-aos="fade-up"
      >
        <h1 className="text-[30px] font-extrabold relative">MY SKILLS</h1>
        <div className="Div_Design w-[20%] h-[5px] rounded-full relative ">
          <div className="Div_Design_item h-[100%] w-[20%] rounded-full bg-orange-500"></div>
        </div>
      </div>
      <div className="mt-16 flex Skill_Bg pb-10">
        <div className="w-[45%]">
          <img src="./Skillimg.webp" className="w-full dropShadow" alt="" />
        </div>
        <div className="w-[55%] ">
          <p className="w-[80%] text-gray-500">
          Web design and development professionals combine HTML, CSS, JavaScript, and WordPress for responsive websites, integrating UX/UI principles and managing backend functionality with Node.js. They optimize SEO, implement security measures, leverage analytics for user-centric improvements, and collaborate effectively to meet business objectives.
          </p>
          <div className="flex justify-evenly flex-wrap pb-3 w-[90%] gap-y-3 mt-7 overflow-y-scroll h-[82vh] overScroll">
      {skillData.slice(0, visibleItems).map((elm, ind) => (
        <div key={ind} className="flex w-[47%] shadow-2xl border bg-[#8080805b] p-5 items-center justify-evenly rounded-2xl hover:bg-orange-500 hover:text-white text-gray-500 skills_skill"
        style={{backdropFilter:'blur(2px)'}}>
          <div className="p-4 bg-gray-300 rounded-full">
            <img src={elm.img} className="h-[10vh] w-full rounded-full" alt="" />
          </div>
          <div>
            <p>{elm.name}</p>
            <p className="stroke text-[30px] font-extrabold">
              {elm.perc}
            </p>
          </div>
        </div>
      ))}
      <button className={`h-[8vh] block mx-auto w-[50%] bg-orange-500 rounded-full mt-5 text-white hover:text-black hover:bg-transparent border hover:border hover:border-black ${
            visibleItems >= skillData.length ? "hidden" : "block"
          }`} onClick={()=>setVisibleItems(visibleItems + 4)}>
        Load More
      </button>
    </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Skills;
