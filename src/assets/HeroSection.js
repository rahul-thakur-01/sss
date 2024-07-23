"use client";
import React, { useState, useEffect } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import image2 from "../assets/pic1.png";
import image3 from "../assets/Cube2.jpg";
import blackTriangle from '../assets/black-triangle.png'
import whiteTriangle from '../assets/white-triangle.png'

const gradientStyle = {
  height: '100%',
  background: 'radial-gradient(circle, rgba(54, 219, 179, 0.20) 0%, rgba(54, 219, 179, 0.00) 70%)',
};

const gradientStyle2 = {
  height: '100%',
  background: 'radial-gradient(circle, rgba(88,132,195, 0.40) 0%, rgba(88,132,195, 0.01) 75%)',
};

const slides = [
  {
    head: "Building cutting-edge AI products ",
    head1: "for the future Innovators",
    url: image2,
  },
  {
    head: "Breaking grounds with AI power",
    head1: "AI Skill growth and Empowerment",
    url: image2,
  },
  {
    head: "Brinking Impactful and mission critical",
    head1: "AI solutions to industries",
    url: image3,
  },
];

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className='w-full h-max overflow-hidden px-6 md:h-[100vh] md:px-[108px] pt-[120px] pb-[50px] md:pb-[100px] m-auto relative group'>
      <div className='sm:flex sm:flex-col overflow-hidden'>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 1 }}
          >
            <p className='text-[24px] text-center font-bold text-dark font-Emilio mb-[64px] md:text-[64px]'>
              {slides[currentSlide].head}<br />
              <span className='text-[#0086FF]'>{slides[currentSlide].head1}</span>
            </p>
          </motion.div>
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <div className='w-full h-[160px] md:h-[380px] rounded-lg bg-center bg-cover duration-500 relative'>


            <Image className="rounded-lg z-10" src={slides[currentIndex].url} layout='fill' alt="Image"  />
            <div className='absolute right-10 -top-10 '>
                <Image src = {blackTriangle} />
            </div>
            <div className='absolute right-20 -top-20 z-20'>
                <Image src = {whiteTriangle} className=''/>
            </div>


            <div className='flex bottom-5 justify-center py-2'>
              {slides.map((slide, slideIndex) => (
                <div
                  key={slideIndex}
                  onClick={() => goToSlide(slideIndex)}
                  className='text-2xl cursor-pointer'
                >
                  <RxDotFilled />
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <div className='md:absolute top-0 left-0 w-[100%] h-[80%] -z-10'>
          <div className='relative w-[100%] h-[100%]'>
            <div className='top-0 left-0' style={gradientStyle}>
            </div>
          </div>
        </div>

        <div className='md:absolute top-0 left-[35%] w-[100%] h-[80%] blur-3xl -z-10'>
          <div className='relative w-[100%] h-[100%]'>
            <div className='top-0 left-[30%]' style={gradientStyle2}>
            </div>
          </div>
        </div>

        <div className='md:absolute -bottom-[0%] -left-[20%] w-[30%] h-[50%] -z-10'>
          <div className='relative w-[100%] h-[100%]'>
            <div className='top-0 left-0' style={gradientStyle}>
            </div>
          </div>
        </div>

        <div className='md:absolute -bottom-[60%] left-[5%] w-[30%] h-[50%] blur-3xl -z-10'>
          <div className='relative w-[100%] h-[100%]'>
            <div className='top-0 left-0' style={gradientStyle2}>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;




// "use client";
// import React, { useState , useEffect } from 'react';
// import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
// import { RxDotFilled } from 'react-icons/rx';
// import Image from 'next/image';
// import { motion, AnimatePresence } from 'framer-motion';
// import image2 from "../assets/pic1.png";
// import image3 from "../assets/Cube2.jpg";
// import back1 from '../assets/back-01.jpg'
// import back2 from '../assets/back-02.jpg'
// import back3 from '../assets/back-03.jpg'
// import back4 from '../assets/back-04.jpg'


// import bg from "../assets/herobg2.png";


// const gradientStyle = {
//   height: '100%',
//   background: 'radial-gradient(circle, rgba(54, 219, 179, 0.20) 0%, rgba(54, 219, 179, 0.00) 70%)', 
// };

// const gradientStyle2 = {
//   height: '100%',
//   background: 'radial-gradient(circle, rgba(88,132,195, 0.40) 0%, rgba(88,132,195, 0.01) 75%)', 
// };

// const slides = [
//   {
//     head: "Delivering impactful and mission-critical",
//     head1: "AI solutions to industries",
//     url: image2,
//   },
//   {
//     head: "Breaking grounds with AI empowerment",
//     head1: "AI Skill growth and development",
//     url: image2,
//   },
//   {
//     head: "Brinking Impactful and mission critical",
//     head1: "AI solutions to industries",
//     url: image3,
//   },
// ];


// function Hero() {

//   const [currentSlide, setCurrentSlide] = useState(0);
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
//     }, 5000); 

//     return () => clearInterval(interval);
//   }, []);

  

//   const [currentIndex, setCurrentIndex] = useState(0);

//   const prevSlide = () => {
//     const isFirstSlide = currentIndex === 0;
//     const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
//     setCurrentIndex(newIndex);
//   };

//   const nextSlide = () => {
//     const isLastSlide = currentIndex === slides.length - 1;
//     const newIndex = isLastSlide ? 0 : currentIndex + 1;
//     setCurrentIndex(newIndex);
//   };

//   const goToSlide = (slideIndex) => {
//     setCurrentIndex(slideIndex);
//   };

//   const [text, setText] = useState('Initial text');


//   useEffect(() => {
//     const interval = setInterval(() => {
//       setText(`New text at ${new Date().toLocaleTimeString()}`);
//     }, 5000); 

//     return () => clearInterval(interval);
//   }, []);


//   return (
//     // <div className='w-full h-max px-[108px] py-[100px] m-auto relative group' style={{ backgroundImage: `url(${bg.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>

    

//     <div className='w-full h-max overflow-hidden  px-6 md:h-[100vh]  md:px-[108px] pt-[100px] pb-[50px] md:pb-[100px]  m-auto relative group'>

      
//       <div className='sm:flex sm:flex-col overflow-hidden'>
        
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1 }}
//           >
//             <p className='text-[24px]  text-center font-bold text-dark font-Emilio mb-[64px] md:text-[64px] '>
//               {/* {slides[currentIndex].head}<br /> */}
//               {/* <span className='text-[#0086FF]'>{slides[currentIndex].head1}</span> */}
//               {slides[currentSlide].head}<br />
//               <span className='text-[#0086FF]'>{slides[currentSlide].head1}</span>
//             </p>
//           </motion.div>
    


//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1 }}
//           >
//             <div className='w-full h-[160px] md:h-[380px] rounded-lg bg-center bg-cover duration-500 relative'>
//               <Image className="rounded-lg" src={slides[currentIndex].url} layout='fill' alt="Image" />
//               <div className='flex bottom-5 justify-center py-2'>
//                 {slides.map((slide, slideIndex) => (
//                   <div
//                     key={slideIndex}
//                     onClick={() => goToSlide(slideIndex)}
//                     className='text-2xl cursor-pointer'
//                   >
//                     <RxDotFilled />
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </motion.div>

//           <div className=' md:absolute top-0 left-0 w-[100%] h-[80%] -z-10'>
//             <div className='relative w-[100%] h-[100%]'>
//               <div className=' top-0 left-0' style={gradientStyle}>
//               </div>
//             </div>

//           </div>

//           <div className=' md:absolute top-0 left-[35%] w-[100%] h-[80%] blur-3xl -z-10'>
//             <div className='relative w-[100%] h-[100%]'>
//               <div className=' top-0 left-[30%]' style={gradientStyle2}>
//               </div>
//             </div>
//           </div>


//           <div className=' md:absolute -bottom-[0%] -left-[20%] w-[30%] h-[50%] -z-10 '>
//             <div className='relative w-[100%] h-[100%]'>
//               <div className=' top-0 left-0' style={gradientStyle}>
//               </div>
//             </div>

//           </div>

//           <div className=' md:absolute  -bottom-[60%] left-[5%] w-[30%] h-[50%] blur-3xl  -z-10'>
//             <div className='relative w-[100%] h-[100%]'>
//               <div className=' top-0 left-0' style={gradientStyle2}>
//               </div>
//             </div>

//           </div>

//       </div>

//       {/* Uncomment and use the arrows if needed */}
//       {/* Left Arrow */}
//       {/* <div className='hidden group-hover:block absolute top-[65%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
//         <BsChevronCompactLeft onClick={prevSlide} size={30} />
//       </div> */}
//       {/* Right Arrow */}
//       {/* <div className='hidden group-hover:block absolute top-[65%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
//         <BsChevronCompactRight onClick={nextSlide} size={30} />
//       </div> */}
//     </div>
//   );
// }

// export default Hero;
