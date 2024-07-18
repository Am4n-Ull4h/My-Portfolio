import React, { Fragment, lazy, useEffect } from "react";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";
// import Autoplay from "embla-carousel-autoplay";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { SiPingdom } from "react-icons/si";
import { TbBrandAlpineJs } from "react-icons/tb";
const Rotate = lazy(()=> import('../Rotate/Rotate'));



// let sliderImgs = [
//     {
//         img : './aman2.png'
//     },
//     {
//         img : './aman4.png'
//     },
//     {
//         img : './aman5.png'
//     }
// ]


let aboutData = [
    {
        title : 'Title',
        ans : 'Software Engineer || MERN Stack Developer'
    },
    {
        title: 'Father Name',
        ans : 'Imdad Ullah'
    },
    {
        title: 'Age',
        ans : '25'
    },
    {
        title: 'Nationality',
        ans : 'Pakistan'
    },
    {
        title: 'Language',
        ans : 'English, Urdu, Hindi'
    },
    {
        title: 'Address',
        ans : 'Sanjarpur, Sadiqabad'
    }
]

function About() {

    
    
    useEffect(() => {
        AOS.init({
          duration: 1000, // Animation duration
          once: true, // Whether animation should happen only once - while scrolling down
        });
      }, []);


      const handleDownload = () => {
        const link = document.createElement('a');
        link.href = process.env.PUBLIC_URL + './Aman Ullah.pdf'; // Path to your PDF file
        link.download = 'Aman Ullah.pdf'; // Desired file name for download
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };

      
     


  return (
    <Fragment>
      <div className="md:mt-16 mt-8 relative Skill_Bg" id="about">
        
        <div className="flex flex-col items-center About_Design relative" data-aos='fade-up'>
          <h1 className="text-[30px] font-extrabold relative">ABOUT ME</h1>
          <div className="Div_Design w-[20%] h-[5px] rounded-full relative ">
            <div className="Div_Design_item h-[100%] w-[20%] rounded-full bg-orange-500"></div>
          </div>
        </div>
        <div className="flex md:flex-nowrap flex-wrap md:justify-evenly md:mt-10 mt-4 py-5" >
          <div className="lg:w-[30%] sm:w-[50%] w-[70%] md:mx-0 mx-auto flex justify-center relative   items-center">
          <div className="w-[98%] h-[98%] relative bg-white z-10">
            <img src="./aman2.webp" alt="" />
            {/* <Carousel
              className="w-full"
              plugins={[
                Autoplay({
                  delay: 3000,
                }),
              ]}
            >
              <CarouselContent className="pt-3 w-full bg-blue-300 h-[70vh] overflow-y-hidden">
                {
                    sliderImgs.map((elm,ind) =><CarouselItem key={ind} className='h-full w-full'><img src={elm.img} className="w-full " alt={`img ${ind}`} /></CarouselItem>)
                }
                
                
              </CarouselContent>
              <CarouselPrevious className="right-[20%] -top-2 left-auto hover:bg-orange-500 hover:text-white" />
              <CarouselNext className="right-0 -top-2 bg-orange-500 hover:bg-transparent text-white hover:text-black" />
            </Carousel> */}
          </div>
          </div>
          <div className="md:w-[50%] sm:w-[80%] w-[90%] md:mx-0 mx-auto" data-aos="fade-left" data-aos-offset='0'>
            <Rotate/>
            <h1 className="font-extrabold py-4 relative"><span className="text-orange-500 text-[40px]">Aman Ullah</span></h1>
            {
                aboutData.map((elm,ind)=><div key={ind} className="flex relative justify-between opacity-60 py-2 border-b border-gray-200">
                    <h2 className="flex gap-2 items-center"><SiPingdom/> {elm.title}</h2>
                    <p className="w-[60%] flex gap-2 items-center"><TbBrandAlpineJs/> {elm.ans}</p>
                </div>)
            }
          <button className="py-2 relative md:mx-0 mx-auto block w-[50%] bg-orange-500 rounded-full mt-5 text-white hover:text-black hover:bg-transparent border hover:border hover:border-black" onClick={handleDownload}>Download CV</button>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default About;
