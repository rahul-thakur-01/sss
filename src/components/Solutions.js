'use client';
import React, { useState, useEffect } from 'react';
import { MdArrowRightAlt, MdArrowBack, MdArrowForward } from "react-icons/md";
import Image from "next/image";
import {slidesData,gradientStyle1,gradientStyle2} from '../utils/solutionData.js';
import { RxDotFilled } from 'react-icons/rx';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Button from './Button';


export default function Solution() {
  const [router, setRouter] = useState(null);
  const [ref, inView] = useInView();

  useEffect(() => {
    import('next/router').then(router => setRouter(router));
  }, []);

  const goToPreviousPage = () => {
    if (router) {
      router.default.back();
    }
  };

  const slides = slidesData;

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(()=>{
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  })

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const goToPreviousSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  return (
    <>
      <div ref={ref} className="relative w-full overflow-hidden md:h-max px-[20px] md:px-[30px] lg:px-[50px] py-[48px]  md:py-[100px]">
        <motion.p 
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="text-[24px] md:text-[36px] lg:text-[48px] text-dark font-bold font-ssp text-center pb-[20px]"
        >
          AI-Powered Solutions for Industry
        </motion.p>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[16px] md:text-[18px] text-dark font-ssp text-center pb-[30px]"
        >
          Explore our range of AI-driven solutions designed to optimize performance across various industries
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className='w-full h-auto md:h-[350px] m-auto relative px-0 md:px-[40px]'
        >
          <div className='w-full rounded-2xl bg-center bg-cover duration-500 relative'>
            <div className='w-full h-max flex flex-col md:flex-row items-center'>
              {/* <div className='w-[400px] h-[300px] md:w-[391px] md:h-[391px] relative md:basis-1/3'>
                <Image src={slides[currentIndex].url} layout='fill' alt="Image"></Image>
              </div> */}

          <div className='w-[290px]  h-[280px] md:w-[290px] md:h-[250px] lg:w-[391px] p-3 lg:p-12 lg:h-[391px] relative md:basis-1/3'>
            <div className="relative w-full h-full shadow-2xl ">
              <Image src={slides[currentIndex].url} layout='fill' alt="Image" className="object-cover rounded-2xl" />
            </div>
          </div>


              
              <div className='basis-2/3 px-6 md:px-[40px]'>
                <p className='text-[20px] md:text-[24px] lg:text-[32px] font-bold font-ssp pb-[20px]'>{slides[currentIndex].title}</p>
                <p className='text-[14px] md:text-[18px] font-ssp text-dark text-justify pb-[20px]'>{slides[currentIndex].description}</p>
              
                {/* <div className="w-[171px] h-[44px] mt-[30px] rounded-lg shadow-md hover:shadow-lg">
                  <a
                    href="#"
                    className=" w-full h-full bg-[#36DBB3] text-white font-ssp text-[18px] flex items-center justify-center rounded-lg hover:text-[#36DBB3] hover:bg-white hover:shadow-lg hover:border-[2px] hover:border-[#36DBB3]"
                    onClick={goToPreviousPage}
                  >
                    Know More
                    <span className="pl-[5px]"><MdArrowRightAlt /></span>
                  </a>
                </div> */}
                <div className="my-5">
                  <Button bgColor="bg-[#36DBB3]" />
                </div>
                


              </div>
            </div>
            <div className='flex justify-between items-center absolute top-1/2 w-full px-4 transform -translate-y-1/2'>
              <button onClick={goToPreviousSlide} className='md:text-3xl text-white bg-black -ml-[30px] md:-ml-[50px] bg-opacity-50 rounded-full p-2'>
                <MdArrowBack />
              </button>
              <button onClick={goToNextSlide} className='md:text-3xl text-white bg-black bg-opacity-50 -mr-[30px] md:-mr-[50px] rounded-full p-2'>
                <MdArrowForward />
              </button>
            </div>
            <div className='flex px-[25px] justify-start bottom-5 gap-2 md:justify-center py-2'>
              {slides.map((slide, slideIndex) => (
                <div
                  key={slideIndex}
                  onClick={() => goToSlide(slideIndex)}
                  className={`flex  items-center text-2xl cursor-pointer`}
                >
                  {
                    currentIndex !== slideIndex ? 
                    <div className="h-[12px] w-[12px] rounded-lg bg-customGreen-light "></div> : 
                    <div className="relative rounded-lg overflow-hidden w-[138px] h-[12px] bg-customGreen-light">
                      <div className="absolute -left-[100%] h-[12px] w-[100%]  bg-customGreen border rounded-full animate-moveLeft "></div>
                    </div>

                  } 
                  </div>

              ))}
            </div>
          </div>
        </motion.div>
     
        <div className="absolute top-[15%] left-0 w-full h-[70%] -z-10 ">
          <div className="relative  w-full h-full  ">
            <div className="absolute blur-3xl opacity-30 z-10  top-[5%] left-[0%] h-full w-[30%]" style={gradientStyle1}></div>
            <div className="absolute blur-3xl opacity-35 z-10   right-[0%] h-full w-[70%]" style={gradientStyle2}></div>
          </div>
        </div>
      </div>
    </>
  )
}
