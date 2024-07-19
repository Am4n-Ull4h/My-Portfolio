import React, { Fragment, useState } from "react";

let skillData = [
  {
    img: "https://am4n-portfolio.netlify.app/react.png",
    name: "React",
  },
  {
    img: "https://am4n-portfolio.netlify.app/node-js.png",
    name: "Node",
  },
  {
    img: "https://am4n-portfolio.netlify.app/php.png",
    name: "PHP",
  },
  {
    img: "https://am4n-portfolio.netlify.app/python.png",
    name: "Python",
  },
  {
    img: "https://am4n-portfolio.netlify.app/sql-server.png",
    name: "SQL",
  },
  {
    img: "https://am4n-portfolio.netlify.app/mongo.png",
    name: "MongoDB",
  },
  {
    img: "https://am4n-portfolio.netlify.app/js.png",
    name: "JavaScript",
  },
  {
    img: "https://am4n-portfolio.netlify.app/figma.png",
    name: "Figma",
  },
  {
    img: "https://am4n-portfolio.netlify.app/bootstrap.png",
    name: "Bootstrap",
  },
  {
    img: "https://am4n-portfolio.netlify.app/html-5.png",
    name: "HTML",
  },
  {
    img: "https://am4n-portfolio.netlify.app/css-3.png",
    name: "CSS",
  },
  {
    img: "https://am4n-portfolio.netlify.app/seo.png",
    name: "SEO",
  },
  {
    img: "https://am4n-portfolio.netlify.app/aws.png",
    name: "AWS",
  },
  {
    img: "https://am4n-portfolio.netlify.app/github.png",
    name: "GitHub",
  },
  {
    img: "https://am4n-portfolio.netlify.app/typescript.png",
    name: "TypeScript",
  },
  {
    img: "https://am4n-portfolio.netlify.app/wordpress.png",
    name: "WordPress",
  },
  {
    img: "https://am4n-portfolio.netlify.app/material.png",
    name: "Material UI",
  },
  {
    img: "https://am4n-portfolio.netlify.app/shad.png",
    name: "Shadcn UI",
  },
  {
    img: "https://am4n-portfolio.netlify.app/three.png",
    name: "ThreeJS",
  },
  {
    img: "https://am4n-portfolio.netlify.app/cloud.png",
    name: "CloudFlare",
  },
];

function Skills() {

  const [visibleItems, setVisibleItems] = useState(4); // Initial number of items to show
  const [skillElips, setSkillElips] = useState(true)



  return (
    <Fragment>
      <div
        className="flex flex-col items-center D3 About_Design relative md:mt-16 mt-7" 
        data-aos="fade-up"
      >
        <h1 className="text-[30px] font-extrabold relative">MY SKILLS</h1>
        <div className="Div_Design w-[20%] h-[5px] rounded-full relative ">
          <div className="Div_Design_item h-[100%] w-[20%] rounded-full bg-orange-500"></div>
        </div>
      </div>
      <div className="md:mt-16 mt-10 flex md:flex-nowrap flex-wrap Skill_Bg pb-10">
        <div className="md:w-[45%] sm:w-[60%] w-[80%] md:mx-0 mx-auto">
          <img src="https://am4n-portfolio.netlify.app/Skillimg.webp" className="w-full dropShadow" alt="" />
        </div>
        <div className="md:w-[55%] sm:w-[80%] w-[90%] md:mx-0 mx-auto">
          <p className={`md:w-[80%] text-gray-500 ${skillElips ? "collapsed2" : 'expanded2'}`}>
          Web design and development professionals combine HTML, CSS, JavaScript, and WordPress for responsive websites, integrating UX/UI principles and managing backend functionality with Node.js. They optimize SEO, implement security measures, leverage analytics for user-centric improvements, and collaborate effectively to meet business objectives.
          </p>
          <span className="hid cursor-pointer text-blue-600 text-[12px]" onClick={()=>setSkillElips(!skillElips)}>{skillElips ? 'See more' : 'See less'}</span>
          <div className="flex justify-evenly flex-wrap pb-3 md:w-[90%] gap-y-3 mt-7 overflow-y-scroll h-[82vh] overScroll">
      {skillData.slice(0, visibleItems).map((elm, ind) => (
        <div key={ind} className="flex w-[47%] SingleSkill shadow-2xl border bg-[#8080805b] p-5 items-center justify-evenly rounded-2xl hover:bg-orange-500 hover:text-white text-gray-500 skills_skill"
        style={{backdropFilter:'blur(2px)'}}>
          <div className="p-4 bg-gray-300 rounded-full">
            <img src={elm.img} className="h-[10vh] w-full rounded-full" alt="" />
          </div>
          <div>
            <p>{elm.name}</p>
            
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
