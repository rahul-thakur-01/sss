// todo: -> create one component structure for mobile and desktop view
"use client";
import Image from "next/image";
import { MdArrowRightAlt } from "react-icons/md";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import product1 from '../assets/product-001.png';
import product2 from '../assets/product-002.png';
import product3 from '../assets/product-003.png';

import Button from "./Button";
 



const gradientStyle = {
  height: '100%',
  background: 'radial-gradient(circle, rgba(54, 219, 179, 0.50) 0%, rgba(54, 219, 179, 0.00) 70%)', // Increased to 70%
};

const gradientStyle2 = {
  height: '100%',
  background: 'radial-gradient(circle, rgba(54, 179, 219, 0.40) 0%, rgba(54, 179, 219, 0.00) 75%)', // Increased to 75%
};



function goToPreviousPage() {

}

export default function Detail() {
  const [ref1, inView1] = useInView({ triggerOnce: true });
  const [ref2, inView2] = useInView({ triggerOnce: true });
  const [ref3, inView3] = useInView({ triggerOnce: true });
  const [ref4, inView4] = useInView({ triggerOnce: true });
  const [ref5, inView5] = useInView({ triggerOnce: true });
  const [ref6, inView6] = useInView({ triggerOnce: true });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };


  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleWindowSizeChange = () => {
      setIsMobile(window.innerWidth <= 900);
    };

    handleWindowSizeChange();

    window.addEventListener('resize', handleWindowSizeChange);

    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);


  return (
    <div className="w-full h-max bg-white overflow-hidden px-[20px]  md:px-[32px] lg:px-[80px]">
      <div className="h-[200px] py-3 md:p-3 text-center">
        <p className="text-dark text-[24px] md:text-[30px] lg:text-[50px] font-ssp font-bold">Pioneering the Future of Education with AI</p>
        <p className="text-dark text-[14px] md:text-[20px] font-ssp pt-[10px] font-light pb-[20px]">
          Designed to enhance your academic experience, offering innovative tools and resources to help you excel in your studies.
        </p>
      </div>

      <div>
      {isMobile ? 
      <>
          {/* Section 1 for mobile view */}
      <div className="block pt-[32px]  relative ">
        <div className=" flex flex-col p-3 pb-[65px] ">
        <p className="text-[24px] md:text-[32px] pb-6 text-center font-bold font-ssp ">AI Innovation Lab</p>

          <motion.div
            ref={ref1}
            initial="hidden"
            animate={inView1 ? "visible" : "hidden"}
            variants={variants}
            className="w-[100%] md:w-[60%] h-[280px]  pb-[70px] relative z-10 py-10 m-auto"
          >
            <Image src={product1} layout="fill" alt="Image"  className="rounded-lg -z-0 pb-2" style={{mixBlendMode : 'multiply'}} />
          </motion.div>

            <motion.div
              ref={ref2}
              initial="hidden"
              animate={inView2 ? "visible" : "hidden"}
              variants={variants}
              className="text-left flex flex-col justify-center  z-10"

            >
              <div className="relative">

                
                <p className="text-[16px] md:text-[22px]  py-6  text-center   font-ssp  ">
                  Our platform offers smart assessments, AI guidance, and personalized feedback, helping
                  <span className=""> students and educators</span>
                  <span> track progress and master skills, preparing students for </span>
                  <span className="">successful tech careers</span>
                  <span> and attracting top employers.</span>
                </p>

                <div className="w-[171px] m-auto h-[44px]  rounded-lg shadow-md hover:shadow-lg z-10">
                  <a
                    href="#"
                    className=" w-full z-10 h-full text-center bg-[#36DBB3] text-white font-ssp text-[18px] flex items-center justify-center rounded-lg hover:text-[#1485EC] hover:bg-white hover:shadow-lg hover:border-[2px] hover:border-[#1485EC]"
                    onClick={goToPreviousPage}
                  >
                    Know More
                    <span className="pl-[5px]"><MdArrowRightAlt /></span>
                  </a>
                </div>

                {/* Gradeint divs */}
                {/* <div className="absolute -top-[80px] left-0 h-[300px] w-[60vw]  z-10 blur-3xl">
                    <div style={gradientStyle} className="inline-block w-[100%] h-[100%] absolute blur-3xl" ></div>
                    <div style={gradientStyle2} className="inline-block w-[100%] h-[100%] absolute left-[30%] blur-3xl"></div>
                </div> */}

              </div>
              
            </motion.div>


        </div>
        <div className="absolute -top-[20%] -left-[8%] border border-red-500 blur-3xl h-[50%] w-[50%] opacity-70" style={gradientStyle2}></div>
      </div>


      {/* Section 2 Mobile view*/}
      <div className="block pt-[32px]  relative ">
        <div className=" flex flex-col p-3 pb-[65px] ">
        <p className="text-[24px] md:text-[32px] pb-3 text-center font-bold font-ssp ">Smart Assessment Tool</p>

        <motion.div
          ref={ref4}
          initial="hidden"
          animate={inView4 ? "visible" : "hidden"}
          variants={variants}
           className="w-[100%] md:w-[60%] h-[250px] relative z-10 m-auto"
        >
          <Image src={product2} layout="fill" alt="Image" className="rounded-lg -z-0 pb-2" style={{mixBlendMode : 'multiply'}} />
        </motion.div>


        <motion.div
          ref={ref3}
          initial="hidden"
          animate={inView3 ? "visible" : "hidden"}
          variants={variants}
          className="text-left flex flex-col justify-center   z-10"

        >
          <div className="relative">
          
          <p className="text-[16px] md:text-[22px] text-center py-6 font-ssp  ">
            Unlock AI potential with our platform for
            <span> researchers and data scientists</span>. Enjoy powerful CPU/GPU hardware, feature-rich IDEs, and a
            <span> commitment to ethical standards, fairness, and transparency in AI projects</span>.
          </p>
          <div className="w-[171px] m-auto h-[44px]  rounded-lg shadow-md hover:shadow-lg z-10">
                  <a
                    href="#"
                    className=" w-full z-10 h-full text-center bg-[#36DBB3] text-white font-ssp text-[18px] flex items-center justify-center rounded-lg hover:text-[#1485EC] hover:bg-white hover:shadow-lg hover:border-[2px] hover:border-[#1485EC]"
                    onClick={goToPreviousPage}
                  >
                    Know More
                    <span className="pl-[5px]"><MdArrowRightAlt /></span>
                  </a>
                </div>

          {/* Gradeint divs */}
          {/* <div className="absolute -top-[80px] left-0 h-[300px] w-[60vw]  z-10 blur-3xl">
                    <div style={gradientStyle} className="inline-block w-[100%] h-[100%] absolute blur-3xl" ></div>
                    <div style={gradientStyle2} className="inline-block w-[100%] h-[100%] absolute left-[30%] blur-3xl"></div>
                </div> */}
        </div> 

        </motion.div>
        
      </div>
      <div className="absolute -top-[20%] -left-[8%] blur-3xl h-[50%] w-[50%] opacity-70" style={gradientStyle}></div>
      </div>

      {/* Section 3 Mobile view*/}
      <div className="block mb-5 pt-[32px] md:mb-0 relative  ">
        <div className=" flex flex-col p-3 pb-[48px] ">
        <p className="text-[24px] md:text-[32px] pb-3 text-center font-bold font-ssp ">Academic AI Assistant</p>
          <motion.div
            ref={ref5}
            initial="hidden"
            animate={inView5 ? "visible" : "hidden"}
            variants={variants}
            className="w-[100%] md:w-[60%] m-auto h-[250px] relative z-10"
          >
            <Image src={product3} layout="fill" alt="Image" className="rounded-lg pb-2" style={{mixBlendMode : 'multiply'}} />
          </motion.div>
          <motion.div
            ref={ref6}
            initial="hidden"
            animate={inView6 ? "visible" : "hidden"}
            variants={variants}
            className="text-left flex flex-col justify-center   z-10"

          >
            <div className="relative">
              
            <p className="text-[16px] md:text-[22px]  py-6   text-center  font-ssp  ">
                Our academic AI assistant provides
                <span> tailored assessments, personalized guidance, and insightful feedback</span>
                <span> for students and educators. It fosters learning, monitors progress, and</span>
                <span > equips students for academic achievement.</span>
              </p>
              <div className="w-[171px] m-auto h-[44px] rounded-lg shadow-md hover:shadow-lg z-10">
                  <a
                    href="#"
                    className=" w-full z-10 h-full text-center bg-[#36DBB3] text-white font-ssp text-[18px] flex items-center justify-center rounded-lg hover:text-[#1485EC] hover:bg-white hover:shadow-lg hover:border-[2px] hover:border-[#1485EC]"
                    onClick={goToPreviousPage}
                  >
                    Know More
                    <span className="pl-[5px]"><MdArrowRightAlt /></span>
                  </a>
                </div>

              {/* Gradeint divs */}
              {/* <div className="absolute -top-[80px] left-0 h-[300px] w-[60vw]  z-10 blur-3xl">
                    <div style={gradientStyle} className="inline-block w-[100%] h-[100%] absolute blur-3xl" ></div>
                    <div style={gradientStyle2} className="inline-block w-[100%] h-[100%] absolute left-[30%] blur-3xl"></div>
                </div> */}

            </div> 
          </motion.div>
        </div>
        <div className='block md:hidden absolute w-[100vw] right-0 -bottom-10'>
        </div>
        <div className="absolute -top-[20%] -left-[8%] blur-3xl h-[50%] w-[50%] opacity-70" style={gradientStyle2}></div>
      </div>
      </> : 

      <>
      {/* Desktop view */}
      <div className="hidden md:block ">
         {/* Section 1  Desktop view */}
      <div className="hidden md:block md:relative pb-[120px]">
        <div className="grid grid-cols-2 gap-[20px]">
        
          <motion.div
            ref={ref1}
            initial="hidden"
            animate={inView1 ? "visible" : "hidden"}
            variants={variants}
            className="relative max-w-[584px] h-[440px] z-10"
          >
            <Image src={product1} layout="fill" alt="Image" className="rounded-lg" />
            {/* <div className="absolute h-[100%] w-[100%] top-0 left-0 -z-10" style={gradientStyle2}></div> */}
          </motion.div>
            <motion.div
              ref={ref2}
              initial="hidden"
              animate={inView2 ? "visible" : "hidden"}
              variants={variants}
              className="text-left flex flex-col justify-center  z-10 "

            >
              <div className="relative w-[100%] h-[100%]">

                <div className="flex flex-col  justify-around pt-8 py-20 w-[100%] h-[100%]  mb-[50px] ">
                <p className="text-[32px] font-bold font-ssp text-[#1282D4]">AI Innovation Lab</p>
                <p className="text-[18px] text-[#606060] font-bold font-ssp text-justify">
                  Our platform offers smart assessments, AI guidance, and personalized feedback, helping
                  <span className="text-[#0086FF]"> students and educators</span>
                  <span> track progress and master skills, preparing students for </span>
                  <span className="text-[#0086FF]">successful tech careers</span>
                  <span> and attracting top employers.</span>
                </p>

                <Button bgColor={"bg-[#1485EC]"}/>

                </div>

                {/* Gradeint divs */}
                {/* <div className="absolute top-0 left-0 h-[400px] w-[60vw]  z-10 blur-2xl">
                    <div style={gradientStyle} className="inline-block w-[50%] h-[100%] absolute " ></div>
                    <div style={gradientStyle2} className="inline-block w-[50%] h-[100%] absolute left-[30%]"></div>
                </div> */}
              </div>
            </motion.div>

          
        </div>

        <div className="absolute -top-[20%] -left-[8%] blur-3xl h-[50%] w-[50%] " style={gradientStyle2}></div>

      </div>

      {/* Section 2  Desktop view*/}
      <div className="hidden md:block md:relative pb-[120px]">
      <div className="grid grid-cols-2 gap-[30px] ">
        <motion.div
          ref={ref3}
          initial="hidden"
          animate={inView3 ? "visible" : "hidden"}
          variants={variants}
          className="text-left flex flex-col justify-center  z-10"

        >
          <div className="relative">
          <div className="flex flex-col  justify-around pt-8 py-20 w-[100%] h-[100%]  mb-[50px] ">
          <p className="text-[32px] font-bold font-ssp text-[#36DBB3]">Smart Assessment Tool</p>
          <p className="text-[18px] text-[#606060] font-bold font-ssp text-justify mt-[30px]">
            Unlock AI potential with our platform for
            <span className="text-[#36DBB3]"> researchers and data scientists</span>. Enjoy powerful CPU/GPU hardware, feature-rich IDEs, and a
            <span className="text-[#36DBB3]"> commitment to ethical standards, fairness, and transparency in AI projects</span>.
          </p>
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
          <Button bgColor="bg-[#36DBB3]"/>
          </div>

            {/* Gradeint divs */}
            {/* <div className="absolute top-0 left-0 h-[400px] w-[60vw]  z-10 blur-2xl">
              <div style={gradientStyle2} className="inline-block w-[50%] h-[100%] absolute " ></div>
              <div style={gradientStyle} className="inline-block w-[50%] h-[100%] absolute left-[30%]"></div>
            </div> */}

          </div>

        </motion.div>

        <motion.div
          ref={ref4}
          initial="hidden"
          animate={inView4 ? "visible" : "hidden"}
          variants={variants}
          className="max-w-[584px] h-[400px] relative flex justify-end z-10"
        >
          <Image src={product2} layout="fill" alt="Image" className="rounded-lg -z-0" />
        </motion.div>
      </div>
      <div className="absolute -top-[20%] -right-[8%] blur-3xl h-[50%] w-[50%] " style={gradientStyle}></div>
      </div>

      {/* Section 3 Desktop view*/}
      <div  className="md:block md:relative pb-[120px]">
        <div className="grid grid-cols-2 gap-[20px] ">
          <motion.div
            ref={ref5}
            initial="hidden"
            animate={inView5 ? "visible" : "hidden"}
            variants={variants}
            className="max-w-[584px] h-[350px] relative z-10"
          >
            <Image src={product3} layout="fill" alt="Image" className="rounded-lg" style={{mixBlendMode: 'multiply'}}/>
          </motion.div>
          <motion.div
            ref={ref6}
            initial="hidden"
            animate={inView6 ? "visible" : "hidden"}
            variants={variants}
            className="text-left  flex flex-col justify-center  z-10"

          >
            <div className="relative">
            <div className="flex flex-col  justify-around pt-8 py-20 w-[100%] h-[100%]  mb-[50px] ">
              <p className="text-[32px] font-bold font-ssp text-[#1282D4]">Academic AI Assistant</p>
              <p className="text-[18px] text-[#606060] font-bold font-ssp text-justify mt-[30px]">
                Our academic AI assistant provides
                <span className="text-[#0086FF]"> tailored assessments, personalized guidance, and insightful feedback</span>
                <span> for students and educators. It fosters learning, monitors progress, and</span>
                <span className="text-[#0086FF]"> equips students for academic achievement.</span>
              </p>
              {/* <div className="w-[171px] h-[44px] mt-[30px] rounded-lg shadow-md hover:shadow-lg">
                <a
                  href="#"
                  className=" w-full h-full bg-[#1485EC] text-white font-ssp text-[18px] flex items-center justify-center rounded-lg hover:text-[#1485EC] hover:bg-white hover:shadow-lg hover:border-[2px] hover:border-[#1485EC]"
                  onClick={goToPreviousPage}
                >
                  Know More
                  <span className="pl-[5px]"><MdArrowRightAlt /></span>
                </a>
              </div> */}
              <Button bgColor={"bg-[#1485EC]"}/>
              </div>

              {/* Gradeint divs */}
              {/* <div className="absolute top-0 left-0 h-[400px] w-[60vw]  z-10 blur-2xl">
              <div style={gradientStyle} className="inline-block w-[50%] h-[100%] absolute " ></div>
              <div style={gradientStyle2} className="inline-block w-[50%] h-[100%] absolute left-[30%]"></div>
              </div> */}

            </div>
          </motion.div>
        </div>
        <div className="absolute -top-[20%] -left-[8%] opacity-75 blur-3xl h-[50%] w-[50%] " style={gradientStyle2}></div>
      </div>
      </div>

      </>}
    </div>
    </div>
  );
}
