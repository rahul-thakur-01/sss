import Image from 'next/image'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import btnUpperTriange from '../assets/triangle-up.png'
import btnLowerTriange from '../assets/triangle-down.png'

export default function Button({bgColor,content}) {
  return (
    <div className="relative w-[171px] h-[44px] rounded-lg shadow-md hover:shadow-lg z-10 group overflow-hidden">
                
        <a
        href="#"
        // className="w-full z-10 h-full bg-[#1485EC] text-white font-ssp text-[16px] flex items-center justify-center rounded-lg   hover:shadow-lg group-hover:shadow-"
        className={`w-full z-10 h-full ${bgColor} text-white font-ssp text-[16px] flex items-center justify-center rounded-lg   hover:shadow-lg group-hover:shadow-`}
        >
        <div className="relative">
            <div className="absolute w-[100%] h-[50%] -top-[50%] group-hover:bg-white  group-hover:blur-lg"></div>
            <div>{content ? content : 'Know More'}</div>
        </div>
        <FontAwesomeIcon icon={faArrowRight} className="ml-5 group-hover:-rotate-45"/>

        </a>
        <div className="absolute -top-[100%] left-[100%] w-[100%] h-[100%]  group-hover:-translate-x-[200%] group-hover:translate-y-[200%]  transition-transform duration-500 opacity-50">
        <Image src={btnLowerTriange} layout="fill" alt="Image" />
        </div>
        <div className="absolute top-[100%] -left-[100%] w-[100%] h-[100%]  group-hover:translate-x-[200%] group-hover:-translate-y-[200%] transition-transform duration-500 opacity-50 ">
        <Image src={btnUpperTriange} layout="fill" alt="Image" />
        </div>
        <span>{bgColor}</span>

    </div>
  )
}
