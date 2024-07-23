"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Logo from "../assets/logo.png";
import { MdKeyboardArrowDown, MdMenu, MdClose } from 'react-icons/md';
import logoCircle from '../assets/logo-circle.png';
import logoText from '../assets/logo-text.png';
import { Link } from "react-scroll";

export default function Navbar() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isLogoAnimated, setIsLogoAnimated] = useState(false);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    setIsLogoAnimated(true); 

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleNavigationClick = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const navbarHeight = 0;
      const offsetTop = section.offsetTop - navbarHeight;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  const scrollThreshold = isMobile ? 10 : 40;

  return (
    <div
      className="w-full h-[80px] md:h-[80px] px-[10px] md:px-[30px] lg:px-[40px] bg-white fixed top-0 z-50"
      style={{
        backgroundColor: scrollPosition > scrollThreshold ? "#fff" : "transparent",
        boxShadow: scrollPosition > scrollThreshold ? "0 2px 4px rgba(0, 0, 0, 0.1)" : "none",
      }}
    >
      <div className="flex h-[100%] md:h-auto gap-20 items-center justify-between">
        <div className="w-[130px]  h-[100%]  md:w-[180px] lg:w-[220px] md:h-[60px] lg:h-[80px] relative  md:ml-[50px] lg:ml-[100px]">
          <div className="flex items-center h-[100%] ">
            <Image 
              src={logoCircle} 
              alt="Logo" 
              className={` absolute transition-transform bg-white  duration-500 ${isLogoAnimated ? 'rotate-[360deg]' : ''}`} 
            />
            <div className="  bg-white absolute top-0 -left-[100%] w-[100%] h-[100%]"></div>
            <Image 
              src={logoText} 
              className={`absolute -z-10 max-h-[20px]  md:max-h-[30px] transition-transform duration-500 ${isLogoAnimated ? 'translate-x-[40%]' : ''}`}
              alt="Logo" 
            />
          </div>
        </div>

        <div className="hidden lg:flex gap-[15px] md:gap-[20px] lg:gap-[30px] mr-[20px] md:mr-[50px] lg:mr-[100px]">
          {[
            { label: "Product", sectionId: "product-section", dropdown: ["AI Innovation Lab", "Smart Assessment Tool", "Academic AI Assistant"] },
            { label: "Services", sectionId: "services-section", dropdown: ["University", "Schools", "Corporates", "Everyone"] },
            { label: "Solution", sectionId: "solutions-section", dropdown: ["Agriculture", "Health Care", "Finance", "Fashion"] },
            { label: "Company", sectionId: "contact-section", dropdown: [] },
          ].map((item, index) => (
            <div key={index} className="relative group">
              <Link
                to={item.sectionId}
                smooth={true}
                duration={500}
                offset={-100}
                onClick={() => handleNavigationClick(item.sectionId)}
                className="text-[14px] md:text-[18px] lg:text-[18px] px-[10px] py-[5px] rounded-lg text-dark font-bold font-ssp hover:bg-white flex items-center cursor-pointer"
              >
                {item.label}
                {item.dropdown.length > 0 && (
                  <MdKeyboardArrowDown />
                )}
              </Link>
              {item.dropdown.length > 0 && (
                <div className="absolute top-full left-0 w-[200px] bg-white shadow-lg z-50 hidden group-hover:block">
                  {item.dropdown.map((desc, i) => (
                    <a
                      key={i}
                      href={`#${item.sectionId}`}
                      onClick={() => handleNavigationClick(item.sectionId)}
                      className="block text-[12px] md:text-[14px] lg:text-[16px] px-[10px] py-[5px] text-dark font-ssp hover:bg-gray-100"
                    >
                      {desc}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className=" lg:hidden mr-[10px] md:mr-[20px]">
          <button onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <MdClose size={20} /> : <MdMenu size={20} />}
          </button>
          {isMobileMenuOpen && (
            <div className=" absolute top-[80px] right-0 w-full bg-white shadow-lg z-40">
              {[
                { label: "Product", sectionId: "product-section", dropdown: ["AI Innovation Lab", "Smart Assessment Tool", "Academic AI Assistant"] },
                { label: "Services", sectionId: "services-section", dropdown: ["University", "Schools", "Corporates", "Everyone"] },
                { label: "Solution", sectionId: "solutions-section", dropdown: ["Agriculture", "Health Care", "Finance", "Fashion"] },
                { label: "Company", sectionId: "contact-section", dropdown: [] },
              ].map((item, index) => (
                <div key={index} className="relative group">
                  <a
                    href={`#${item.sectionId}`}
                    onClick={() => handleNavigationClick(item.sectionId)}
                    className="block text-[14px] md:text-[16px] lg:text-[18px] px-[20px] py-[20px] text-dark font-bold font-ssp hover:bg-gray-100"
                  >
                    {item.label}
                    {item.dropdown.length > 0 && (
                      <MdKeyboardArrowDown />
                    )}
                  </a>
                  {item.dropdown.length > 0 && (
                    <div className="absolute top-full left-0 w-full bg-white shadow-lg z-50 hidden group-hover:block">
                      {item.dropdown.map((desc, i) => (
                        <a
                          key={i}
                          href={`#${item.sectionId}`}
                          onClick={() => handleNavigationClick(item.sectionId)}
                          className="block text-[12px] md:text-[14px] lg:text-[16px] px-[20px] py-[5px] text-dark font-ssp hover:bg-gray-100"
                        >
                          {desc}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
