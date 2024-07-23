"use client";
import React, { useState, useEffect } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { gradientStyle, gradientStyle2, slides } from '../utils/heroData.js';
import blackTriangle from '../assets/black-triangle.png';
import whiteTriangle from '../assets/white-triangle.png';
import lowerTriangle from '../assets/herodownele.png';

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    let interval;

    const startInterval = () => {
      interval = setInterval(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
      }, 5000);
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        clearInterval(interval);
      } else {
        startInterval();
      }
    };

    startInterval();

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      clearInterval(interval);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    setCurrentSlide(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    setCurrentSlide(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
    setCurrentSlide(slideIndex);
  };

  return (
    <div className="h-auto lg:w-full overflow-hidden px-6 md:px-[32px] lg:px-[108px] pt-[100px] pb-[100px] m-auto relative group">
      <div className="sm:flex sm:flex-col overflow">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 1 }}
          >
            <p className="text-[24px] md:text-[36px] lg:text-[56px] min-h-[170px] text-center font-bold text-dark font-Emilio md:mb-[20px] lg:mb-[64px] ">
              {slides[currentSlide].head}
              <br />
              <span className="text-[#0086FF]">{slides[currentSlide].head1}</span>
            </p>
          </motion.div>
        </AnimatePresence>

<motion.div
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, delay: 1 }}
>
  <div className="w-full h-[180px] md:h-[280px] lg:h-[400px] pb-[100px] rounded-lg bg-center bg-cover duration-500 relative">
    <Image
      src={slides[currentIndex].url}
      layout="fill"
      objectFit="cover"
      className="rounded-lg"
      alt="Slide Image"
    />
    <div className="absolute -top-[10%] right-0 md:right-10 md:-top-10 max-w-[50px] md:max-w-none z-10"> {/* Add z-10 here */}
      <Image src={blackTriangle} alt="Black Triangle" className="black-triangle" />
    </div>
    <div className="absolute -top-[16%] right-6 md:right-20 md:-top-20 z-20 max-w-[50px] md:max-w-none">
      <Image src={whiteTriangle} alt="White Triangle" />
    </div>
    <div className="absolute left-0 -bottom-[25%] md:left-0 md:-bottom-16 z-20 max-w-[50px] md:max-w-none">
      <Image src={lowerTriangle} alt="Lower Triangle" />
    </div>
  </div>
</motion.div>


        <div className="md:absolute top-0 left-0 w-[100%] h-[80%] -z-10">
          <div className="relative w-[100%] h-[100%]">
            <div className="top-0 left-0" style={gradientStyle}></div>
          </div>
        </div>

        <div className="md:absolute top-0 left-[35%] w-[100%] h-[80%] blur-3xl -z-10">
          <div className="relative w-[100%] h-[100%]">
            <div className="top-0 left-[30%]" style={gradientStyle2}></div>
          </div>
        </div>

        <div className="md:absolute -bottom-[0%] -left-[20%] w-[30%] h-[50%] -z-10">
          <div className="relative w-[100%] h-[100%]">
            <div className="top-0 left-0" style={gradientStyle}></div>
          </div>
        </div>

        <div className="md:absolute -bottom-[60%] left-[5%] w-[30%] h-[50%] blur-3xl -z-10">
          <div className="relative w-[100%] h-[100%]">
            <div className="top-0 left-0" style={gradientStyle2}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;

// "use client";
// import React, { useState, useEffect } from 'react';
// import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
// import { RxDotFilled } from 'react-icons/rx';
// import Image from 'next/image';
// import { motion, AnimatePresence } from 'framer-motion';
// import { gradientStyle, gradientStyle2, slides } from '../utils/heroData.js';
// import blackTriangle from '../assets/black-triangle.png';
// import whiteTriangle from '../assets/white-triangle.png';
// import lowerTriangle from '../assets/herodownele.png';

// function Hero() {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   useEffect(() => {
//     let interval;

//     const startInterval = () => {
//       interval = setInterval(() => {
//         setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
//       }, 5000);
//     };

//     const handleVisibilityChange = () => {
//       if (document.hidden) {
//         clearInterval(interval);
//       } else {
//         startInterval();
//       }
//     };

//     startInterval();

//     document.addEventListener("visibilitychange", handleVisibilityChange);

//     return () => {
//       clearInterval(interval);
//       document.removeEventListener("visibilitychange", handleVisibilityChange);
//     };
//   }, []);

//   const [currentIndex, setCurrentIndex] = useState(0);

//   const prevSlide = () => {
//     const isFirstSlide = currentIndex === 0;
//     const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
//     setCurrentIndex(newIndex);
//     setCurrentSlide(newIndex);
//   };

//   const nextSlide = () => {
//     const isLastSlide = currentIndex === slides.length - 1;
//     const newIndex = isLastSlide ? 0 : currentIndex + 1;
//     setCurrentIndex(newIndex);
//     setCurrentSlide(newIndex);
//   };

//   const goToSlide = (slideIndex) => {
//     setCurrentIndex(slideIndex);
//     setCurrentSlide(slideIndex);
//   };

//   return (
//     <div className="h-auto lg:w-full  overflow-hidden px-6  md:px-[32px] lg:px-[108px] pt-[100px] pb-[100px] m-auto relative group">
//       <div className="sm:flex sm:flex-col overflow">
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={currentSlide}
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -50 }}
//             transition={{ duration: 1 }}
//           >
//             <p className="text-[24px]  md:text-[36px] lg:text-[56px] min-h-[170px] text-center font-bold text-dark font-Emilio md:mb-[20px] lg:mb-[64px] ">
//               {slides[currentSlide].head}
//               <br />
//               <span className="text-[#0086FF]">{slides[currentSlide].head1}</span>
//             </p>
//           </motion.div>
//         </AnimatePresence>

//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, delay: 1 }}
//         >
//           {/* <div className="w-full h-[160px] md:h-[280px] lg:h-[480px] pb-[100px] rounded-lg bg-center bg-cover duration-500 relative">
//             <Image className="rounded-lg z-10 bg-cover bg-center" src={slides[currentIndex].url} layout="fill"  alt="Image" />
//             <div className="absolute -top-[10%] right-0 md:right-10 md:-top-10 max-w-[50px] md:max-w-none">
//               <Image src={blackTriangle} />
//             </div>
//             <div className="absolute -top-[16%] right-6 md:right-20 md:-top-20 z-20 max-w-[50px] md:max-w-none">
//               <Image src={whiteTriangle} />
//             </div>
//             <div className="absolute left-0 -bottom-[25%] md:left-0 md:-bottom-16 z-20 max-w-[50px] md:max-w-none">
//               <Image src={lowerTriangle} />
//             </div>
//           </div> */}

//           <div className="w-full h-[180px] md:h-[280px] lg:h-[400px] pb-[100px] rounded-lg bg-center bg-cover duration-500 relative">
//             <Image src={slides[currentIndex].url} layout="fill" objectFit="cover" className="rounded-lg" />
//             <div className="absolute -top-[10%] right-0 md:right-10 md:-top-10 max-w-[50px] md:max-w-none">
//               <Image src={blackTriangle} />
//             </div>
//             <div className="absolute -top-[16%] right-6 md:right-20 md:-top-20 z-20 max-w-[50px] md:max-w-none">
//               <Image src={whiteTriangle} />
//             </div>
//             <div className="absolute left-0 -bottom-[25%] md:left-0 md:-bottom-16 z-20 max-w-[50px] md:max-w-none">
//               <Image src={lowerTriangle} />
//             </div>
//           </div>


//           {/* <div className="w-full h-[180px] md:h-[280px] lg:h-[400px] relative">
//               <Image src={slides[currentIndex].url} layout="fill" objectFit="cover" className="rounded-lg" />
//           </div> */}


//         </motion.div>

          
//         <div className="md:absolute top-0 left-0 w-[100%] h-[80%] -z-10">
//           <div className="relative w-[100%] h-[100%]">
//             <div className="top-0 left-0" style={gradientStyle}></div>
//           </div>
//         </div>

//         <div className="md:absolute top-0 left-[35%] w-[100%] h-[80%] blur-3xl -z-10">
//           <div className="relative w-[100%] h-[100%]">
//             <div className="top-0 left-[30%]" style={gradientStyle2}></div>
//           </div>
//         </div>

//         <div className="md:absolute -bottom-[0%] -left-[20%] w-[30%] h-[50%] -z-10">
//           <div className="relative w-[100%] h-[100%]">
//             <div className="top-0 left-0" style={gradientStyle}></div>
//           </div>
//         </div>

//         <div className="md:absolute -bottom-[60%] left-[5%] w-[30%] h-[50%] blur-3xl -z-10">
//           <div className="relative w-[100%] h-[100%]">
//             <div className="top-0 left-0" style={gradientStyle2}></div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Hero;



// // "use client";
// // import React, { useState, useEffect } from 'react';
// // import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
// // import { RxDotFilled } from 'react-icons/rx';
// // import Image from 'next/image';
// // import { motion, AnimatePresence } from 'framer-motion';
// // import { gradientStyle, gradientStyle2, slides } from '../utils/heroData.js';
// // import blackTriangle from '../assets/black-triangle.png';
// // import whiteTriangle from '../assets/white-triangle.png';
// // import lowerTriangle from '../assets/herodownele.png';

// // function Hero() {
// //   const [currentSlide, setCurrentSlide] = useState(0);

// //   useEffect(() => {
// //     let interval;

// //     const startInterval = () => {
// //       interval = setInterval(() => {
// //         setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
// //       }, 5000);
// //     };

// //     const handleVisibilityChange = () => {
// //       if (document.hidden) {
// //         clearInterval(interval);
// //       } else {
// //         startInterval();
// //       }
// //     };

// //     startInterval();

// //     document.addEventListener("visibilitychange", handleVisibilityChange);

// //     return () => {
// //       clearInterval(interval);
// //       document.removeEventListener("visibilitychange", handleVisibilityChange);
// //     };
// //   }, []);

// //   const [currentIndex, setCurrentIndex] = useState(0);

// //   const prevSlide = () => {
// //     const isFirstSlide = currentIndex === 0;
// //     const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
// //     setCurrentIndex(newIndex);
// //     setCurrentSlide(newIndex);
// //   };

// //   const nextSlide = () => {
// //     const isLastSlide = currentIndex === slides.length - 1;
// //     const newIndex = isLastSlide ? 0 : currentIndex + 1;
// //     setCurrentIndex(newIndex);
// //     setCurrentSlide(newIndex);
// //   };

// //   const goToSlide = (slideIndex) => {
// //     setCurrentIndex(slideIndex);
// //     setCurrentSlide(slideIndex);
// //   };

// //   return (
// //     <div className="h-auto lg:w-full  overflow-hidden px-6  md:px-[32px] lg:px-[108px] pt-[100px] pb-[100px] m-auto relative group">
// //       <div className="sm:flex sm:flex-col overflow">
// //         <AnimatePresence mode="wait">
// //           <motion.div
// //             key={currentSlide}
// //             initial={{ opacity: 0, y: 50 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             exit={{ opacity: 0, y: -50 }}
// //             transition={{ duration: 1 }}
// //           >
// //             <p className="text-[24px]  md:text-[36px] lg:text-[56px] min-h-[170px] text-center font-bold text-dark font-Emilio md:mb-[20px] lg:mb-[64px] ">
// //               {slides[currentSlide].head}
// //               <br />
// //               <span className="text-[#0086FF]">{slides[currentSlide].head1}</span>
// //             </p>
// //           </motion.div>
// //         </AnimatePresence>

// //         <motion.div
// //           initial={{ opacity: 0, y: 50 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 1, delay: 1 }}
// //         >
// //           {/* <div className="w-full h-[160px] md:h-[280px] lg:h-[480px] pb-[100px] rounded-lg bg-center bg-cover duration-500 relative">
// //             <Image className="rounded-lg z-10 bg-cover bg-center" src={slides[currentIndex].url} layout="fill"  alt="Image" />
// //             <div className="absolute -top-[10%] right-0 md:right-10 md:-top-10 max-w-[50px] md:max-w-none">
// //               <Image src={blackTriangle} />
// //             </div>
// //             <div className="absolute -top-[16%] right-6 md:right-20 md:-top-20 z-20 max-w-[50px] md:max-w-none">
// //               <Image src={whiteTriangle} />
// //             </div>
// //             <div className="absolute left-0 -bottom-[25%] md:left-0 md:-bottom-16 z-20 max-w-[50px] md:max-w-none">
// //               <Image src={lowerTriangle} />
// //             </div>
// //           </div> */}



// //         </motion.div>

          
// //         <div className="md:absolute top-0 left-0 w-[100%] h-[80%] -z-10">
// //           <div className="relative w-[100%] h-[100%]">
// //             <div className="top-0 left-0" style={gradientStyle}></div>
// //           </div>
// //         </div>

// //         <div className="md:absolute top-0 left-[35%] w-[100%] h-[80%] blur-3xl -z-10">
// //           <div className="relative w-[100%] h-[100%]">
// //             <div className="top-0 left-[30%]" style={gradientStyle2}></div>
// //           </div>
// //         </div>

// //         <div className="md:absolute -bottom-[0%] -left-[20%] w-[30%] h-[50%] -z-10">
// //           <div className="relative w-[100%] h-[100%]">
// //             <div className="top-0 left-0" style={gradientStyle}></div>
// //           </div>
// //         </div>

// //         <div className="md:absolute -bottom-[60%] left-[5%] w-[30%] h-[50%] blur-3xl -z-10">
// //           <div className="relative w-[100%] h-[100%]">
// //             <div className="top-0 left-0" style={gradientStyle2}></div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default Hero;





// // "use client";
// // import React, { useState, useEffect } from 'react';
// // import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
// // import { RxDotFilled } from 'react-icons/rx';
// // import Image from 'next/image';
// // import { motion, AnimatePresence } from 'framer-motion';
// // import {gradientStyle, gradientStyle2 , slides} from '../utils/heroData.js';
// // import blackTriangle from '../assets/black-triangle.png'
// // import whiteTriangle from '../assets/white-triangle.png'
// // import lowerTriangle from '../assets/herodownele.png'



// // function Hero() {
// //   const [currentSlide, setCurrentSlide] = useState(0);
// //   useEffect(() => {
// //     const interval = setInterval(() => {
// //       setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
// //     }, 5000);

// //     return () => clearInterval(interval);
// //   }, []);

// //   const [currentIndex, setCurrentIndex] = useState(0);

// //   const prevSlide = () => {
// //     const isFirstSlide = currentIndex === 0;
// //     const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
// //     setCurrentIndex(newIndex);
// //   };

// //   const nextSlide = () => {
// //     const isLastSlide = currentIndex === slides.length - 1;
// //     const newIndex = isLastSlide ? 0 : currentIndex + 1;
// //     setCurrentIndex(newIndex);
// //   };

// //   const goToSlide = (slideIndex) => {
// //     setCurrentIndex(slideIndex);
// //   };


// //   return (
// //     <div className='w-full h-max overflow-hidden px-6 md:min-h-[100vh] md:px-[108px] pt-[100px] pb-[100px]  m-auto relative group'>
// //       <div className='sm:flex sm:flex-col overflow'>
// //         <AnimatePresence mode="wait">
// //           <motion.div
// //             key={currentSlide}
// //             initial={{ opacity: 0, y: 50 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             exit={{ opacity: 0, y: -50 }}
// //             transition={{ duration: 1 }}
// //             className='border border-red-500 min-h-[300px]'
// //           >
// //             <p className='border border-blue-600 text-[24px] min-h-[170px]  text-center font-bold text-dark font-Emilio md:mb-[64px] md:text-[56px]'>
// //               {slides[currentSlide].head}<br />
// //               <span className='text-[#0086FF]'>{slides[currentSlide].head1}</span>
// //             </p>
// //           </motion.div>
// //         </AnimatePresence>

// //         <motion.div
// //           initial={{ opacity: 0, y: 50 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 1, delay: 1 }}
// //         >
// //           <div className='w-full h-[160px]  md:h-[280px] lg:h-[380px] pb-[100px] rounded-lg bg-center bg-cover duration-500 relative'>


// //             <Image className="rounded-lg z-10" src={slides[currentIndex].url} layout='fill' alt="Image"  />
// //             <div className='absolute  -top-[10%] right-0           md:right-10 md:-top-10 max-w-[50px] md:max-w-none'>
// //                 <Image src = {blackTriangle} l />
// //             </div>
// //             <div className='absolute -top-[16%]  right-6 md:right-20 md:-top-20 z-20 max-w-[50px] md:max-w-none'>
// //                 <Image src = {whiteTriangle} className=''/>
// //             </div>
// //             <div className='absolute left-0 -bottom-[25%] md:left-0 md:-bottom-16  z-20 max-w-[50px] md:max-w-none' >
// //                 <Image src = {lowerTriangle} className=''/>
// //             </div>


// //             {/* <div className='flex bottom-5 justify-center py-2'>
// //               {slides.map((slide, slideIndex) => (
// //                 <div
// //                   key={slideIndex}
// //                   onClick={() => goToSlide(slideIndex)}
// //                   className='text-2xl cursor-pointer'
// //                 >
// //                   <RxDotFilled />
// //                 </div>
// //               ))}
// //             </div> */}
// //           </div>
// //         </motion.div>

// //         <div className='md:absolute top-0 left-0 w-[100%] h-[80%] -z-10'>
// //           <div className='relative w-[100%] h-[100%]'>
// //             <div className='top-0 left-0' style={gradientStyle}>
// //             </div>
// //           </div>
// //         </div>

// //         <div className='md:absolute top-0 left-[35%] w-[100%] h-[80%] blur-3xl -z-10'>
// //           <div className='relative w-[100%] h-[100%]'>
// //             <div className='top-0 left-[30%]' style={gradientStyle2}>
// //             </div>
// //           </div>
// //         </div>

// //         <div className='md:absolute -bottom-[0%] -left-[20%] w-[30%] h-[50%] -z-10'>
// //           <div className='relative w-[100%] h-[100%]'>
// //             <div className='top-0 left-0' style={gradientStyle}>
// //             </div>
// //           </div>
// //         </div>

// //         <div className='md:absolute -bottom-[60%] left-[5%] w-[30%] h-[50%] blur-3xl -z-10'>
// //           <div className='relative w-[100%] h-[100%]'>
// //             <div className='top-0 left-0' style={gradientStyle2}>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default Hero;
