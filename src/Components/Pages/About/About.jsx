import React, { Fragment, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { SiPingdom } from "react-icons/si";
import { TbBrandAlpineJs } from "react-icons/tb";


let sliderImgs = [
    {
        img : './Aman.png'
    },
    {
        img : './Aman.png'
    },
    {
        img : './Aman.png'
    }
]


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

      
     


  return (
    <Fragment>
      <div className="mt-16 relative">
        
        <div className="flex flex-col items-center About_Design relative" data-aos='fade-up'>
          <h1 className="text-[30px] font-extrabold relative">ABOUT ME</h1>
          <div className="Div_Design w-[20%] h-[5px] rounded-full relative ">
            <div className="Div_Design_item h-[100%] w-[20%] rounded-full bg-orange-500"></div>
          </div>
        </div>
        <div className="flex justify-evenly mt-10 overflow-x-hidden py-5" >
          <div className="w-[30%] flex justify-center relative   items-center">
          <div className="w-[98%] h-[98%] relative bg-white z-10">
            <Carousel
              className="w-full"
              plugins={[
                Autoplay({
                  delay: 3000,
                }),
              ]}
            >
              <CarouselContent className="pt-3">
                {
                    sliderImgs.map((elm,ind) =><CarouselItem key={ind}><img src={elm.img} className="w-full block mx-auto" alt="" /></CarouselItem>)
                }
                
                
              </CarouselContent>
              <CarouselPrevious className="right-[20%] top-4 left-auto" />
              <CarouselNext className="right-0 top-4" />
            </Carousel>
          </div>
          </div>
          <div className="w-[50%] " data-aos="fade-left" data-aos-offset='0'>
            <h1 className="font-extrabold py-4">My Name is : <span className="text-orange-500 text-[20px]">Aman Ullah</span></h1>
            {
                aboutData.map((elm,ind)=><div key={ind} className="flex justify-between opacity-60 py-2 border-b border-gray-200">
                    <h2 className="flex gap-2 items-center"><SiPingdom/> {elm.title}</h2>
                    <p className="w-[60%] flex gap-2 items-center"><TbBrandAlpineJs/> {elm.ans}</p>
                </div>)
            }
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default About;
