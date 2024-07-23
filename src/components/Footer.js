"use client";
import React, { useRef } from "react";
import Logo from "../assets/logo1.png";
import Image from "next/image";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter, FaLinkedin, FaFacebook, FaYoutube } from "react-icons/fa";
import { motion, useInView } from "framer-motion";

export default function Footer() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const isInView1 = useInView(ref1, { once: true });
  const isInView2 = useInView(ref2, { once: true });

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <>

    <div> 
      {/*  primary footer */}
      <motion.div
        ref={ref1}
        className="w-full h-max px-6 md:px-[30px] lg:px-[150px] py-[32px] md:py-[80px] bg-[#008080]"
        initial="hidden"
        animate={isInView1 ? "visible" : "hidden"}
        transition={{ duration: 1 }}
        variants={variants}
      >
        <div className="w-[120px] h-[36px] md:w-[193px] md:h-[58px] relative mb-[32px]">
              <Image src={Logo} layout="fill" alt="Image" className="-translate-y-[25%]"></Image>
        </div>

        <div className="md:hidden -mt-4 pb-[32px]">
            <p className="text-[16px] font-ssp text-white font-semibold mb-[12px]">Contact Us</p>
            <p className="text-[14px] font-ssp text-white mb-[5px]">navigatelab@gmail.com</p>
            <p className="text-[14px] font-ssp text-white">+91 996 78X XXXX</p>

          </div>


        <div className="flex flex-col justify-between gap-6 md:flex-row">

          <div className="md:hidden pb-5 basis-1/2">
            <p className="text-[16px] font-ssp text-white font-semibold mb-[15px]">Follows us on</p>

            {/* icons */}
            <div className=" max-w-[300px] flex gap-[20px] md:grid  md:grid-cols-5 md:gap-[10px]">
              <div className="w-[28px]  h-[28px] md:w-[44px] md:h-[44px] bg-[#36DBB3] rounded-md text-white flex items-center justify-center hover:shadow-lg">
                <AiFillInstagram size={30} className="p-[5px] md:p-0"/>
              </div>
              <div className="w-[28px] h-[28px] md:w-[44px] md:h-[44px] bg-[#36DBB3] rounded-md text-white flex items-center justify-center hover:shadow-lg">
                <FaTwitter size={30} className="p-[5px] md:p-0"/>
              </div>
              <div className="w-[28px] h-[28px] md:w-[44px] md:h-[44px] bg-[#36DBB3] rounded-md text-white flex items-center justify-center hover:shadow-lg">
                <FaLinkedin size={30} className="p-[5px] md:p-0"/>
              </div>
              <div className="w-[28px] h-[28px] md:w-[44px] md:h-[44px] bg-[#36DBB3] rounded-md text-white flex items-center justify-center hover:shadow-lg">
                <FaFacebook size={30} className="p-[5px] md:p-0"/>
              </div>
              <div className="w-[28px] h-[28px] md:w-[44px] md:h-[44px] bg-[#36DBB3] rounded-md text-white flex items-center justify-center hover:shadow-lg">
                <FaYoutube size={30} className="p-[5px] md:p-0" />
              </div>
            </div>
          </div>
          

          

          {/* basis 2 */}
          <div className="basis-2/10 mb-10 md:mb-0">
            <p className="text-[16px] md:text-[20px] font-ssp text-white font-semibold mb-[20px]">Company</p>
            <p className="text-[14px] md:text-[16px] font-ssp text-white mb-[15px]">About Our Company</p>
            <p className="text-[14px] md:text-[16px] font-ssp text-white mb-[15px]">Services</p>
            <p className="text-[14px] md:text-[16px] font-ssp text-white mb-[15px]">Products</p>
            <p className="text-[14px] md:text-[16px] font-ssp text-white">Contact Us</p>
          </div>

          {/* basis 3 */}
          <div className="basis-2/10 mb-10 md:mb-0">
            <p className="text-[16px] md:text-[20px] font-ssp text-white font-semibold mb-[20px]">Services</p>
            <p className="text-[14px] md:text-[16px] font-ssp text-white mb-[15px]">AI for Universities</p>
            <p className="text-[14px] md:text-[16px] font-ssp text-white mb-[15px]">AI for Corporate</p>
            <p className="text-[14px] md:text-[16px] font-ssp text-white mb-[15px]">AI for Schools</p>
            <p className="text-[14px] md:text-[16px] font-ssp text-white">AI for Everyone</p>
          </div>

          


          {/* basis 4 */}
          <div className="basis-3/10 mb-[32px] md:mb-0">
            <p className="text-[16px] md:text-[20px] font-ssp text-white font-semibold mb-[20px]">Products</p>
            <p className="text-[14px] md:text-[16px] font-ssp text-white mb-[15px]">AI Innovation Lab</p>
            <p className="text-[14px] md:text-[16px] font-ssp text-white mb-[15px]">Smart Assessment Tool (Quest AI)</p>
            <p className="text-[14px] md:text-[16px] font-ssp text-white mb-[15px]">Academic AI Assistant (Insightmatics)</p>
          </div>


          <div className="basis-3/10  flex flex-col mb-[32px]  md:mb-0">
          <div>
            <p className="text-[16px] md:text-[20px] font-ssp text-white font-semibold mb-[20px]">Solutions</p>
            <p className="text-[14px] md:text-[16px] font-ssp text-white mb-[15px]">AI based precision farming Agriculture</p>
            <p className="text-[14px] md:text-[16px] font-ssp text-white mb-[15px]">Healthcare Analytics Life Science</p>
            <p className="text-[14px] md:text-[16px] font-ssp text-white mb-[15px]">Personalized designer wear fashion Industry</p>
            <p className="text-[14px] md:text-[16px] font-ssp text-white mb-[15px]">Predictive analytics finance</p>
          </div>
          </div>

        </div>

        {/* flex 2 */}
        <div className="hidden md:flex gap-10  lg:gap-16  flex-col md:flex-row  mt-[50px]">
          <div className=" basis-1/6 ">
            <p className="text-[16px] md:text-[20px] font-ssp text-white font-semibold mb-[20px]">Contact Us</p>
            <p className="text-[16px] font-ssp text-white mb-[15px]">navigatelab@gmail.com</p>
            <p className="text-[16px] font-ssp text-white">+91 996 78X XXXX</p>

          </div>


          {/* basis 1 */}
          

          {/* <div className="basis-1/4 ">

          </div> */}
          <div className="hidden md:block basis-2/4 lg:basis-2/6">
            <p className="text-[16px] md:text-[20px] font-ssp text-white font-semibold mb-[15px]">Follows us on</p>

            {/* icons */}
            <div className="max-w-[300px] grid  grid-cols-3 sm:grid-cols-5 gap-[10px]">
              <div className="w-[44px] h-[44px] bg-[#36DBB3] rounded-md text-white flex items-center justify-center hover:shadow-lg">
                <AiFillInstagram size={30} />
              </div>
              <div className="w-[44px] h-[44px] bg-[#36DBB3] rounded-md text-white flex items-center justify-center hover:shadow-lg">
                <FaTwitter size={30} />
              </div>
              <div className="w-[44px] h-[44px] bg-[#36DBB3] rounded-md text-white flex items-center justify-center hover:shadow-lg">
                <FaLinkedin size={30} />
              </div>
              <div className="w-[44px] h-[44px] bg-[#36DBB3] rounded-md text-white flex items-center justify-center hover:shadow-lg">
                <FaFacebook size={30} />
              </div>
              <div className="w-[44px] h-[44px] bg-[#36DBB3] rounded-md text-white flex items-center justify-center hover:shadow-lg">
                <FaYoutube size={30} />
              </div>
            </div>
          </div>
        </div>

      </motion.div>
      {/*  secondary footer */}
      <div className="w-full h-max px-[20px] lg:px-[150px] py-[20px] bg-[#4BA6A6]">
        <div className="flex gap-2 justify-between w-[100%]  md:grid grid-cols-1 md:grid-cols-3 md:gap-4">
          <p className="text-[10px]  md:text-[16px] font-ssp  text-white md:font-semibold text-center md:text-left">© 2024 Copyright</p>
          <p className="text-[10px] md:text-[16px] font-ssp  text-white md:font-semibold text-center">Privacy Policy</p>
          <p className="text-[10px] md:text-[16px] font-ssp  text-white md:font-semibold text-center">Terms of Use</p>
        </div>
      </div>
      
    </div>
      
    </>
  );
}



      {/* <motion.div
        ref={ref2}
        className="w-full h-max  md:px-[150px] py-[30px] bg-[#4BA6A6]"
        initial="hidden"
        animate={isInView2 ? "visible" : "hidden"}
        transition={{ duration: 1, delay: 0.5 }}
        variants={variants}
      >
        <div className="flex gap-2 justify-between px-2 w-[100%]  md:grid grid-cols-1 md:grid-cols-3 md:gap-4">
          <p className="text-[14px] md:text-[16px] font-ssp  text-white font-semibold text-center md:text-left">© 2024 Copyright</p>
          <p className="text-[14px] md:text-[16px] font-ssp  text-white font-semibold text-center">Privacy Policy</p>
          <p className="text-[14px] md:text-[16px] font-ssp  text-white font-semibold text-center">Terms of Use</p>
        </div>

      </motion.div> */}
