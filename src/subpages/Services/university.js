"use client";
import Image from "next/image";
import { useRouter } from 'next/navigation';
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar.js";
import Footer from "../../components/Footer.js";
import { service, gradientStyle } from '../../utils/serviceData.js';

export default function University() {
  const router = useRouter();
  const serviceData = service[0]; // University data

  return (
    <>
      <Navbar />
      <div className="relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full -z-10">
          <div className="relative w-full h-full">
            <div className="absolute blur-3xl opacity-30 right-0 h-full w-full" style={gradientStyle}></div>
          </div>
        </div>

        <div className="w-full px-[20px] md:px-[70px] lg:px-[150px] py-[40px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-[40px]"
          >
            <p className="text-[32px] lg:text-[50px] font-bold text-black mb-[20px]">{serviceData.head}</p>
            <p className="text-[18px] lg:text-[24px] font-semibold text-[#36DBB3] mb-[40px]">{serviceData.tagline}</p>
            <p className="text-[16px] lg:text-[20px] text-black">{serviceData.desc}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <div className="relative h-[350px] md:h-[500px]">
              <Image src={serviceData.img} layout="fill" objectFit="cover" alt="University Image" />
            </div>

            <div className="font-ssp">
              <h2 className="text-[24px] font-bold text-black mb-[20px]">Key Offerings:</h2>
              <ul className="list-disc pl-5 space-y-4 text-[16px] text-black">
                <li><strong>AI-Driven Learning Platforms:</strong> Personalized Learning Paths, Real-Time Feedback, Interactive Content</li>
                <li><strong>Research Assistance Tools:</strong> Data Analysis Support, Automated Literature Reviews, Hypothesis Generation</li>
                <li><strong>Administrative Automation:</strong> Admissions Management, Scheduling Optimization, Student Records Management</li>
                <li><strong>Virtual Labs:</strong> Remote Accessibility, Simulated Environments, Collaborative Tools</li>
              </ul>
            </div>
          </motion.div>
        </div>

        <Footer />
      </div>
    </>
  );
}
