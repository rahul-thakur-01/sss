"use client";
import Image from "next/image";
import { service, gradientStyle } from '../utils/serviceData.js';
import { MdArrowRightAlt } from "react-icons/md";
import { useRouter } from 'next/navigation';
import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import Button from "../components/Button.js";

export default function Services() {
  const router = useRouter();

  const goToSubPage = (index) => {
    router.push(`/services/${service[index].head.toLowerCase()}`);
  };

  const [active, setActive] = useState(0);

  // Intersection observer hook to detect when an element is in view
  const [ref, inView] = useInView({
    triggerOnce: true, // Only trigger once
    threshold: 0.5 // Trigger animation when the element is 50% in view
  });

  return (
    <>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8 }}
        className="w-full h-max md:px-[70px] lg:px-[150px] md:pb-[60px] relative"
      >
        <p className="text-[22px] px-[28px] mt-[42px] md:pt-0 md:px-0 text-left md:text-[36px] text-black lg:text-[50px] font-bold font-ssp md:text-center mb-[20px] z-20">Our AI Services</p>

        <div className="w-full flex flex-row p-3 gap-4 md:gap-10 justify-around flex-wrap md:grid md:grid-cols-4">
          {service.map((item, index) => (
            <motion.div
              key={index}
              onClick={() => setActive(index)}
              className={`text-[16px] min-w-[140px] h-[35px] md:max-w-[300px] z-20 md:h-[60px] border text-[#36DBB3] border-[#36DBB3] flex items-center justify-center md:text-[18px] font-ssp rounded-md shadow-lg bg-gradient-to-b ${
                active === index ? "from-[#36DBB3] to-[#2DB695] text-white" : "bg-gradient-to-b hover:from-white hover:to-[#2DB695] hover:text-black bg-white"
              } hover:shadow-lg`}
              whileHover={{ scale: 1.05 }}
            >
              <button onClick={() => setActive(index)}>{item.head}</button>
            </motion.div>
          ))}
        </div>

        <div className="hidden w-full h-max lg:flex grid-cols-2 gap-6 mt-[40px]">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-ssp"
          >
            <p className="text-black font-semibold text-[32px] font-ssp mb-[10px]">{service[active].head}</p>
            <p className="text-black font-semibold text-[24px] font-ssp mb-[20px]">{service[active].tagline}</p>
            <p className="text-black text-[18px] font-ssp text-justify mb-[40px]">{service[active].desc}</p>

            <div className="w-[171px] h-[44px] mt-[30px] rounded-lg shadow-md hover:shadow-lg">
              <Button bgColor={"bg-[#3CDCB5]"}
                href={`/services/${service[active].head.toLowerCase()}`}
                className="w-full h-full text-white font-ssp text-[18px] flex items-center justify-center rounded-lg hover:text-[#3CDCB5] hover:bg-white hover:shadow-lg hover:border-[1px] hover:border-[#3CDCB5]"
              >
                Know More
                <span className="pl-[5px]"><MdArrowRightAlt /></span>
              </Button >
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-[380px] min-w-[280px] h-[300px] relative lg:ml-[200px] z-20"
          >
            <Image src={service[active].img} layout="fill" objectFit="contain" alt="Image" />
          </motion.div>
        </div>

        <div className="absolute top-[15%] left-0 w-full h-[70%] -z-10">
          <div className="relative w-full h-full">
            <div className="absolute blur-3xl opacity-30 right-[0%] h-full w-[100%]" style={gradientStyle}></div>
          </div>
        </div>
      </motion.div>

      {/* Mobile view */}
      <div className="relative pb-[80px] md:pb-0">
        <div className="w-[100vw] p-5 flex flex-col flex-grow h-max mt-[10px] md:mt-[42px] lg:hidden">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-[380px] m-auto h-[250px] md:h-[300px] relative px-7 z-20"
          >
            <Image src={service[active].img} alt="Image" layout="fill" objectFit="contain" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-ssp w-full flex-grow-1"
          >
            <p className="text-black text-[18px] font-semibold md:text-[32px] font-ssp mb-[10px]">{service[active].head}</p>
            <p className="text-black text-[16px] font-semibold md:text-[24px] font-ssp mb-[20px]">{service[active].tagline}</p>
            <p className="text-black text-[16px] md:text-[22px] font-ssp text-justify mb-[40px]">{service[active].desc}</p>

            <div className="w-[171px] h-[44px] rounded-lg shadow-md hover:shadow-lg">
            <Button
              href={`/services/${service[active].head.toLowerCase()}`}
              className="w-full h-full bg-[#3CDCB5] text-white font-ssp text-[18px] flex items-center justify-center rounded-lg shadow-md hover:bg-white hover:text-[#3CDCB5] hover:border hover:border-[#3CDCB5]"
            >
              Know More
              <span className="pl-[5px]"><MdArrowRightAlt /></span>
            </Button>



            </div>
          </motion.div>
        </div>

        <div className="absolute top-[15%] left-0 w-full h-[70%] -z-10">
          <div className="relative w-full h-full">
            <div className="absolute blur-3xl opacity-30 right-[0%] h-full w-[100%]" style={gradientStyle}></div>
          </div>
        </div>
      </div>
    </>
  );
}
